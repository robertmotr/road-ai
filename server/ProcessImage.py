from imageai.Detection import VideoObjectDetection
from CentroidTracker import CentroidTracker
from Messenger import Messenger
import os
import serial

execution_path = os.getcwd()


class ProcessImage:
    """Processes videos and analyzes frames for collisions

   Maintains reference to an external LED system and messenger so that
   in the event of a collision it starts flashing the LEDs and sends
   a message to emergency services

   === Attributes ===
   messenger:
       Messenger object enabling the class to send text messages to a number
   port:
       The port where the LED system will be connected
   ser:
       The serial object that enables the LEDs to start flashing.
   tracker:
       Dictionary the maintains a reference to each unique car in the frame
       where each key is the ID and the value are the coordinates of the car
   prev_objects:
       Reference to the positions of the objects in the previous frame
   velocities:
       Maps each car id to its current velocity in pixels/frame
   infile:
       The path to the video that will be analyzed for collisions
   outfile:
       The path to where the analyzed video will saved
   crashed:
       True if a crash is detected and false otherwise
   frameCrashed:
       The frame in which the collision was detected
   """
    def __init__(self, infile, outfile):
        self.messenger = None
        self.port = None
        self.ser = None

        self.tracker = CentroidTracker()
        self.prev_objects = {}
        self.velocities = {}
        self.infile = infile
        self.outfile = outfile
        self.crashed = False
        self.frameCrashed = None

    def euclidean_distance(self, pt1, pt2):
        """Computes the distance between the points pt1 and pt2
        pt1 and pt2 store 2 points representing the x and y coordinates
        """
        return ((pt1[0] - pt2[0]) ** 2 + (pt1[1] - pt2[1]) ** 2) ** 0.5

    def get_center(self, bbox):
        """Returns the center point of bbox
        """
        return (bbox[0] + bbox[2]) / 2, (bbox[1] + bbox[3]) / 2

    def add_LED_Port(self, port):
        """Adds the port that will be used to connect the arduino
        """
        self.port = port

    def configure_messenger(self, account_sid, auth_token, contact):
        """Configures the account and token for a client that will send
        text messages. Also sets the contact to which these messages will be sent to
        """
        self.messenger = Messenger(account_sid, auth_token, contact)

    def forFrame(self, frame_number, output_array, output_count, frame):
        """ Receives all the bounding boxes of each of the objects that the
        AI model has detected. Filters through these objects and determines the
        velocity of each vehicle. Then determines if theres a crash from the changes
        in velocity.
        """
        rects = []
        # Filters all the relevant objects in the frame
        for detected in output_array:
            if detected['name'] == 'car' or detected['name'] == 'truck':
                rects.append(detected["box_points"])
        
        # Assigns unique id to each object
        objects = self.tracker.update(rects)
        for key in objects:
            if self.prev_objects.get(key) is not None:
                # Computes the velocity between the previous frame and the current
                velocity = self.euclidean_distance(self.prev_objects[key], objects[key])
                if self.velocities.get(key) is None:
                    self.velocities[key] = velocity
                    continue
                
                # Detects if there are sudden changes in velocity
                if velocity != 0.0 and self.velocities[key] != 0.0 and abs(
                        self.velocities[key] - velocity) > 20 and not self.crashed:
                    
                    # Sends signal to arduino to begin flashing
                    if self.port:
                        self.ser = serial.Serial(port=self.port, baudrate=115200, timeout=.1)
                    
                    # Sends text message to emergency services
                    if self.messenger:
                        self.messenger.send_message("EMERGENCY, COLLISION DETECTED")
        
                    print("CRASH")
                    self.crashed = True
                    self.frameCrashed = frame_number

                self.velocities[key] = velocity
        
        # Maintains reference to previous frame for future velocity calculations
        self.prev_objects = objects.copy()

    def detect(self):
        """Uses the yolov3.pt model to detect all of the objects in a given frame
        Sends these objects to the ForFrames method
        Returns if there was a collision and what frame the collision occured
        """
        video_detector = VideoObjectDetection()
        video_detector.setModelTypeAsYOLOv3()
        video_detector.setModelPath(os.path.join(execution_path, "yolov3.pt"))
        video_detector.loadModel()

        video_detector.detectObjectsFromVideo(input_file_path=self.infile,
                                              output_file_path=self.outfile,
                                              frames_per_second=20,
                                              minimum_percentage_probability=30,
                                              return_detected_frame=True,
                                              per_frame_function=self.forFrame,
                                              log_progress=True,
                                              frame_detection_interval=5)

        return self.crashed, self.frameCrashed
