from flask import Flask, request, flash, redirect, url_for
from typing import *
import 
app = Flask(__name__)

ALLOWED_EXTENSIONS = ['.mp4', '.mov', '.avi', '.mkv', '.wmv', '.flv', '.webm', '.gif', '.jpg', '.jpeg', '.png', '.bmp', '.svg', '.mp3', '.wav', '.ogg', '.m4a', '.flac', '.aac', '.wma', '.zip', '.rar', '.tar', '.gz', '.7z', '.bz2', '.xz', '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.odt', '.ods', '.odp', '.txt', '.rtf', '.tex', '.wks', '.wps', '.wpd', '.key', '.odf', '.psd', '.ai', '.eps', '.ps', '.svg', '.tiff', '.tif', '.jpg', '.jpeg', '.png', '.bmp', '.gif', '.webp', '.svg', '.ico', '.heic', '.mp4', '.mov', '.avi', '.mkv', '.wmv', '.flv', '.webm', '.mp3', '.wav', '.ogg', '.m4a', '.flac', '.aac', '.wma', '.zip', '.rar', '.tar', '.gz', '.7z', '.bz2', '.xz', '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.odt', '.ods', '.odp', '.txt', '.rtf', '.tex', '.wks', '.wps', '.wpd', '.key', '.odf', '.psd', '.ai', '.eps', '.ps', '.svg', '.tiff', '.tif', '.jpg', '.jpeg', '.png', '.bmp', '.gif', '.webp', '.svg', '.ico', '.heic']
UPLOAD_DESTINATION = 'uploads/'


def is_valid_file(filename: str) -> bool:
   return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/upload-video', methods=['POST'])
def upload_handler():
   if request.method == 'POST':
      if 'file' not in request.files:
         flash("No file part")
         return redirect(request.url)
      file = request.files['file']

      if file.filename == '':
         flash("No selected file")
         return redirect(request.url)
      if file and is_valid_file(file.filename):
         file.save(UPLOAD_DESTINATION + file.filename)
         

   else:
      return "you shouldn't be sending a get request to this link :)"
   

@app.route('/use-link', methods=['POST'])
def link_handler():
   if request.method == 'POST':
      return "POST success on link"
   else:
      return "you shouldn't be sending a get request to this link :)"


if __name__ == '__main__':
   app.run()