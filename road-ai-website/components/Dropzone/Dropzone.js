import React, {useRef} from "react";
import styles from "./Dropzone.module.css"

export default function Dropzone() {
    const selectedFile = useRef();
    const onChangeHandler = event => {
        selectedFile.current = event.target.files[0];
    }

    const handleSubmit = event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('inputFile', selectedFile);
        // MAKE AN API CALL HERE
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label>
                Upload your own video!<br/><br/>
                <input type="file" name="file" accept="video/*" onChange={onChangeHandler} />
            </label>
            <br/><br/>
            <button className={styles.button} type="submit" >Upload</button>
        </form>
    )
}