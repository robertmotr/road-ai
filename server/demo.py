import requests
import base64
import webbrowser

url = 'http://127.0.0.1:5000/upload-video'
file = {'file': open('input/crash.mp4', 'rb')}
response = requests.post(url, files=file)

if response.status_code == 200:
    # parse the response and extract the encoded video string
    response_data = response.json()
    encoded_video = response_data['encoded_video']
    
    # decode the video string from base64
    video_data = base64.b64decode(encoded_video.encode('utf-8'))
    
    # save the decoded video data to a file
    with open('output/processed.mp4', 'wb') as f:
        f.write(video_data)
    
    # open the processed video in the default web browser
    webbrowser.open('output/processed.mp4')
else:
    print(f'Error: {response.status_code} - {response.content}')
