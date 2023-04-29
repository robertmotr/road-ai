from ProcessImage import ProcessImage


if __name__ == "__main__":
    image = ProcessImage("crash.mp4", "cars_out.mp4")
    image.detect()