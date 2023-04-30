from flask import Flask, request, flash, redirect, url_for, jsonify, send_file
from typing import *
import threading
import time
import uuid
import os
from ProcessImage import *
import base64

app = Flask(__name__)

ALLOWED_EXTENSIONS = ['mp4', 'mov', 'avi', '.mkv', '.wmv', '.flv', '.webm', '.gif', '.jpg', '.jpeg', '.png', '.bmp', '.svg', '.mp3', '.wav', '.ogg', '.m4a', '.flac', '.aac', '.wma', '.zip', '.rar', '.tar', '.gz', '.7z', '.bz2', '.xz', '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.odt', '.ods', '.odp', '.txt', '.rtf', '.tex', '.wks', '.wps', '.wpd', '.key', '.odf', '.psd', '.ai', '.eps', '.ps', '.svg', '.tiff', '.tif', '.jpg', '.jpeg', '.png', '.bmp', '.gif', '.webp', '.svg', '.ico', '.heic', '.mp4', '.mov', '.avi', '.mkv', '.wmv', '.flv', '.webm', '.mp3', '.wav', '.ogg', '.m4a', '.flac', '.aac', '.wma', '.zip', '.rar', '.tar', '.gz', '.7z', '.bz2', '.xz', '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.odt', '.ods', '.odp', '.txt', '.rtf', '.tex', '.wks', '.wps', '.wpd', '.key', '.odf', '.psd', '.ai', '.eps', '.ps', '.svg', '.tiff', '.tif', '.jpg', '.jpeg', '.png', '.bmp', '.gif', '.webp', '.svg', '.ico', '.heic']
OUTPUT_DESTINATION = os.getcwd() + '\server\output'
INPUT_DESTINATION = os.getcwd() + '\server\input'

def process_video(inpath: str, outpath:str) -> None:
   event = threading.Event()
   result = None
   def progress_thread():
      # run algorithm on file path
      image_processor = ProcessImage(inpath, outpath)
      
      nonlocal result
      result = image_processor.detect()
      event.set()

   thread = threading.Thread(target=progress_thread)
   thread.start()

   event.wait()
   return result

def is_valid_file(filename: str) -> bool:
   return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/upload-video', methods=['POST'])
def upload_handler():
   if request.method == 'POST':
      if 'video' not in request.files:
         return 'No file part', 400
      file = request.files['video']
      if file.filename == '':
         return 'No selected file', 400
      if file.filename and is_valid_file(file.filename):
         data = file.stream.read()

         with open(os.path.join(INPUT_DESTINATION, file.filename), 'wb') as f:
            f.write(data)

         # run algorithm on the file path
         output = process_video(os.path.join(INPUT_DESTINATION, file.filename), os.path.join(OUTPUT_DESTINATION, file.filename.split('.')[0]))

         with open(os.path.join(OUTPUT_DESTINATION, file.filename), 'rb') as f:
            video_data = f.read()
            encoded_video = base64.urlsafe_b64encode(video_data).decode()

         # when process_video returns, we can finally send back the data to the client
         response_data = {'crashed': output[0], 'frame': output[1], 'encoded_video': encoded_video}
         text = "COLLISION OCCURRED" if output[0] else "NO COLLISION OCCURRED"
         print(f"{text}")
         return jsonify(response_data), 200

      else:
         return 'Invalid file type', 400
   else:
      return "you shouldn't be sending a get request to this link :)", 400

if __name__ == '__main__':
   app.run(debug=False)