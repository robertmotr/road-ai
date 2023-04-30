from imageai.Detection import VideoObjectDetection
from CentroidTracker import CentroidTracker
from Messenger import Messenger
import os
import serial

execution_path = os.getcwd()


class ProcessImage:
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
        return ((pt1[0] - pt2[0]) ** 2 + (pt1[1] - pt2[1]) ** 2) ** 0.5

    def get_center(self, bbox):
        return (bbox[0] + bbox[2]) / 2, (bbox[1] + bbox[3]) / 2

    def add_LED_Port(self, port):
        self.port = port

    def configure_messenger(self, account_sid, auth_token, contact):
        self.messenger = Messenger(account_sid, auth_token, contact)

    def forFrame(self, frame_number, output_array, output_count, frame):
        rects = []
        for detected in output_array:
            if detected['name'] == 'car' or detected['name'] == 'truck':
                rects.append(detected["box_points"])

        objects = self.tracker.update(rects)
        for key in objects:
            if self.prev_objects.get(key) is not None:
                velocity = self.euclidean_distance(self.prev_objects[key], objects[key])
                if self.velocities.get(key) is None:
                    self.velocities[key] = velocity
                    continue

                if velocity != 0.0 and self.velocities[key] != 0.0 and abs(
                        self.velocities[key] - velocity) > 20 and not self.crashed:

                    if self.port:
                        self.ser = serial.Serial(port=self.port, baudrate=115200, timeout=.1)

                    if self.messenger:
                        self.messenger.send_message("EMERGENCY, COLLISION DETECTED")

                    print("CRASH")
                    self.crashed = True
                    self.frameCrashed = frame_number

                self.velocities[key] = velocity

        self.prev_objects = objects.copy()

    def detect(self):
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
