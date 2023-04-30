import React, {useRef} from "react";
import styles from "./Dropzone.module.css"

export default function Dropzone() {
    const videoElementRef = useRef();

    const selectedFile = useRef();
    const onChangeHandler = event => {
        selectedFile.current = event.target.files[0];
    }

    const handleSubmit = event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('video', selectedFile);
        
        fetch('http://localhost:5000/upload-video', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // access the response data and do something with it
            const boolValue = data.bool;
            const intValue = data.int;
            const videoData = atob(data.encoded_video); // decode the base64-encoded video data

            videoElementRef.current.src = 'data:video/mp4;base64,' + videoData;

            videoElementRef.current.play();
        })
        .catch(error => {
            // Handle errors
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label>
                    Upload your own video!<br/><br/>
                    <input type="file" name="file" accept="video/*" onChange={onChangeHandler} />
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