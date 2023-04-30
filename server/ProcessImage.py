from imageai.Detection import VideoObjectDetection
import os
import cv2
from CentroidTracker import CentroidTracker
import serial

execution_path = os.getcwd()

class ProcessImage:
    def __init__(self, infile, outfile):
        self.tracker = CentroidTracker()
        self.prev_objects = {}
        self.velocities = {}
        self.infile = infile
        self.outfile = outfile
        self.crashed = False
        self.frameCrashed = None



    def euclidean_distance(self, pt1, pt2):
        return ((pt1[0]-pt2[0])**2 + (pt1[1]-pt2[1])**2)**0.5


    def get_center(self, bbox):
        return (bbox[0] + bbox[2]) / 2, (bbox[1] + bbox[3]) / 2


    def get_next_frame(self, center):
        min_distance = float("inf")
        next_carBox = None
        for prev_detected in self.prev:
            box = prev_detected["box_points"]
            prev_center = self.get_center(box)
            if min_distance > self.euclidean_distance(prev_center, center):
                min_distance = self.euclidean_distance(prev_center, center)
                next_carBox = box

        return next_carBox

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
                if velocity != 0.0 and self.velocities[key] != 0.0 and abs(self.velocities[key] - velocity) > 20:
                    self.ser = serial.Serial(port='COM3', baudrate=115200, timeout=.1)
                    self.crashed = True
                    self.frameCrashed = frame_number
                self.velocities[key] = velocity
        self.prev_objects = objects.copy()
        self.prev = output_array



    def detect(self):
        video_detector = VideoObjectDetection()
        video_detector.setModelTypeAsYOLOv3()
        video_detector.setModelPath(os.path.join(execution_path, "yolov3.pt"))
        video_detector.loadModel()


        detections = video_detector.detectObjectsFromVideo(input_file_path=self.infile,
                                                           output_file_path=self.outfile,
                                                           frames_per_second=20,
                                                           minimum_percentage_probability=30,
                                                           return_detected_frame=True,
                                                           per_frame_function=self.forFrame,
                                                           log_progress=True,
                                                           frame_detection_interval=5)

        return self.crashed, self.frameCrashed