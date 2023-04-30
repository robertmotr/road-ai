# **RoadAI**
RoadAI is a Python application that detects cars driving through intersections in video files. When a car crash occurs at some frame from the algorithm, it sends a signal saying that a crash has occurred. In addition to the Python application, this repository also contains the contents for a website related to the application.

# Website

The RoadAI repository also contains the contents for a website related to the application. To view the website, simply open the index.html file in your web browser.

# Installation
To run the RoadAI application, you will need Python 3.7 or higher installed on your computer. You can download the latest version of Python from the official Python website (https://www.python.org/downloads/).

1. Clone the RoadAI repository to your local machine by running the following command:
    ```
    git clone https://github.com/robertmotr/roadai.git
    ```

2. Follow the installation guide on the ImageAI GitHub repository (https://github.com/OlafenwaMoses/ImageAI#installation) for the initial setup of the application.

3. Install the additional dependencies via:
    ```
    pip install -r requirements.txt
    ```

4. If you are looking to host the website locally, you will also need to install Node.js (https://nodejs.org/en/download) with npm dependency included within the installation wizard.

# Usage

After installing the application and dependencies, video files can be analyzed following the sample usage within `main.py`.

To run the website locally, using terminal `cd` into the `road-ai-website` directory then run
```
npm run dev
```
This will launch a local development server for the website.
