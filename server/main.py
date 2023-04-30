from ProcessImage import ProcessImage
import os

if __name__ == "__main__":
    execution_path = os.getcwd()
    image = ProcessImage(os.path.join(execution_path, "crash.mp4"), "cars_out.mp4")
    image.detect()