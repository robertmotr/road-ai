from flask import Flask, request, flash, redirect, url_for, jsonify, send_file
from typing import *
import threading
import time
import uuid
import os
import ProcessImage

app = Flask(__name__)

ALLOWED_EXTENSIONS = ['.mp4', '.mov', '.avi', '.mkv', '.wmv', '.flv', '.webm', '.gif', '.jpg', '.jpeg', '.png', '.bmp', '.svg', '.mp3', '.wav', '.ogg', '.m4a', '.flac', '.aac', '.wma', '.zip', '.rar', '.tar', '.gz', '.7z', '.bz2', '.xz', '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.odt', '.ods', '.odp', '.txt', '.rtf', '.tex', '.wks', '.wps', '.wpd', '.key', '.odf', '.psd', '.ai', '.eps', '.ps', '.svg', '.tiff', '.tif', '.jpg', '.jpeg', '.png', '.bmp', '.gif', '.webp', '.svg', '.ico', '.heic', '.mp4', '.mov', '.avi', '.mkv', '.wmv', '.flv', '.webm', '.mp3', '.wav', '.ogg', '.m4a', '.flac', '.aac', '.wma', '.zip', '.rar', '.tar', '.gz', '.7z', '.bz2', '.xz', '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.odt', '.ods', '.odp', '.txt', '.rtf', '.tex', '.wks', '.wps', '.wpd', '.key', '.odf', '.psd', '.ai', '.eps', '.ps', '.svg', '.tiff', '.tif', '.jpg', '.jpeg', '.png', '.bmp', '.gif', '.webp', '.svg', '.ico', '.heic']
UPLOAD_DESTINATION = os.getcwd() + 'uploads/'

def process_video(absolute_path: str) -> None:
   event = threading.Event()
   def progress_thread():
      # run algorithm on file path
      image_processor = ProcessImage(absolute_path, UPLOAD_DESTINATION)
      output = image_processor.detect()
      event.set()
      return output

   thread = threading.Thread(target=progress_thread)
   thread.start()

   event.wait()
   return thread.result()

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
         file.save(UPLOAD_DESTINATION + file.filename)

         # run algorithm on the file path
         output = process_video()

         # when process_video returns, we can finally send back the data to the client
         return jsonify({'bool': output[0],
                        'int': output[1],
                        'video': send_file(UPLOAD_DESTINATION + file.filename, mimetype='video/' + file.filename.split(1)[-1].lower(),
                        as_attachment=True, attachment_filename='processed.mp4')})

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