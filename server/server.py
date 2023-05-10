from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from ProcessImage import *
import threading
import base64

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

ALLOWED_EXTENSIONS = ['mp4', 'mov', 'avi', '.mkv', '.wmv', '.flv', '.webm', '.gif', '.jpg', '.jpeg', '.png', '.bmp', '.svg', '.mp3', '.wav', '.ogg', '.m4a', '.flac', '.aac', '.wma', '.zip', '.rar', '.tar', '.gz', '.7z', '.bz2', '.xz', '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.odt', '.ods', '.odp', '.txt', '.rtf', '.tex', '.wks', '.wps', '.wpd', '.key', '.odf', '.psd', '.ai', '.eps', '.ps', '.svg', '.tiff', '.tif', '.jpg', '.jpeg', '.png', '.bmp', '.gif', '.webp', '.svg', '.ico', '.heic', '.mp4', '.mov', '.avi', '.mkv', '.wmv', '.flv', '.webm', '.mp3', '.wav', '.ogg', '.m4a', '.flac', '.aac', '.wma', '.zip', '.rar', '.tar', '.gz', '.7z', '.bz2', '.xz', '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.odt', '.ods', '.odp', '.txt', '.rtf', '.tex', '.wks', '.wps', '.wpd', '.key', '.odf', '.psd', '.ai', '.eps', '.ps', '.svg', '.tiff', '.tif', '.jpg', '.jpeg', '.png', '.bmp', '.gif', '.webp', '.svg', '.ico', '.heic']
OUTPUT_DESTINATION = os.getcwd() + '/output'
INPUT_DESTINATION = os.getcwd() + '/input'

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

@app.post("/upload-video")
async def upload_video(video: UploadFile = File(...)):
    # TODO Error handling things
    if video.filename and is_valid_file(video.filename):
         data = video.file.read()
         with open(os.path.join(INPUT_DESTINATION, video.filename), 'wb') as f:
            f.write(data)
         
         output = process_video(os.path.join(INPUT_DESTINATION, video.filename), os.path.join(OUTPUT_DESTINATION, video.filename.split('.')[0]))

         with open(os.path.join(OUTPUT_DESTINATION,  video.filename), 'rb') as f:
            video_data = f.read()
            encoded_video = base64.b64encode(video_data).decode()

         response_data = {'crashed': output[0], 'frame': output[1], 'encoded_video': encoded_video}
         text = "COLLISION OCCURRED" if output[0] else "NO COLLISION OCCURRED"
         print(f"{text}")
         return response_data