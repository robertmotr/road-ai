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
OUTPUT_DESTINATION = os.getcwd() + '/output/'
INPUT_DESTINATION = os.getcwd() + '/input/'

def process_video(absolute_path: str) -> None:
   event = threading.Event()
   result = None
   def progress_thread():
      # run algorithm on file path
      image_processor = ProcessImage(absolute_path, OUTPUT_DESTINATION)
      print("***\n\nOUR PATH: " + absolute_path + " \n\n\n***")
      
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
      if 'file' not in request.files:
         return 'No file part', 400
      file = request.files['file']

      if file.filename == '':
         return 'No selected file', 400
      if file and is_valid_file(file.filename):
         file.save(OUTPUT_DESTINATION + file.filename)

         # run algorithm on the file path
         output = process_video(OUTPUT_DESTINATION + file.filename)

         with open(OUTPUT_DESTINATION + file.filename, 'rb') as f:
            video_data = f.read()
            encoded_video = base64.b64encode(video_data).decode('utf-8')

         # delete the file after we're done with it
         os.remove(OUTPUT_DESTINATION + file.filename)

         # when process_video returns, we can finally send back the data to the client
         response_data = {'bool': output[0], 'int': output[1], 'encoded_video': encoded_video}
         return jsonify(response_data), 200

      else:
         return 'Invalid file type', 400
   else:
      return "you shouldn't be sending a get request to this link :)"
   

@app.route('/use-link', methods=['POST'])
def link_handler():
   if request.method == 'POST':
      return "todo later xd"
   else:
      return "you shouldn't be sending a get request to this link :)"


if __name__ == '__main__':
   app.run()