import React, {useRef} from "react";
import styles from "./Dropzone.module.css"

export default function Dropzone() {
    const selectedFile = useRef();

    const handleSubmit = event => {
        event.preventDefault();
        const file = selectedFile.current.files[0];
        const formData = new FormData();
        formData.append('video', file);

        // send the JSON data in the request body
        fetch('http://127.0.0.1:5000/upload-video', {
            mode: 'no-cors',
            method: 'POST',
            body: formData
        }).catch(console.error);
    }

    return (
        <form enctype="multipart/form-data" onSubmit={handleSubmit} className={styles.form}>
            <label>
                Upload your own video!<br/><br/>
                <input type="file" name="file" ref={selectedFile} accept="video/*" />
            </label>
            <br/><br/>
            <button className={styles.button} type="submit" >Upload</button>
        </form>
    )
}