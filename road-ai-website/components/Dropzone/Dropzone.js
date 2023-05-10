import React, {useRef} from "react";
import styles from "./Dropzone.module.css"

export default function Dropzone() {
    const videoElementRef = useRef();

    const selectedFile = useRef();
    const fileContent = useRef();

    const handleFileRead = (event) => {
        fileContent.current = btoa(event.target.result);
    };

    const handleSubmit = event => {
        event.preventDefault();
        const file = selectedFile.current.files[0];
        const reader = new FileReader();
        reader.onloadend = handleFileRead;
        reader.readAsBinaryString(file);
        
        const formData = new FormData();
        formData.append('video', file);
        //formData.append('name', file.name);
        // send the JSON data in the request body
        fetch('http://127.0.0.1:8000/upload-video', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // access the response data and do something with it
            const crashed = data.crashed;
            const frame = data.frame;
            const videoData = atob(data.encoded_video); // decode the base64-encoded video data
            console.log(crashed)
            console.log(frame)
            console.log(videoData)

            videoElementRef.current.src = 'data:video/mp4;base64,' + videoData;

            videoElementRef.current.play();
        })
        .catch(error => {
            console.log(error)
            // Handle errors
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label>
                    Upload your own video!<br/><br/>
                    <input type="file" name="file" ref={selectedFile} accept="video/*" />
                </label>
                <br/><br/>
                <button className={styles.button} type="submit" >Upload</button>
            </form>
            <video width={200} height={200}>
                <source ref={videoElementRef} type="video/*"></source>
            </video>
        </>
        
    )
}