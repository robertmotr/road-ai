import React, {useRef} from "react";

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
        <form onSubmit={handleSubmit}>
            <label>
                Upload a video: <br/><br/>
                <input type="file" name="file" accept="video/*" onChange={onChangeHandler} />
            </label>
            <br/><br/>
            <button type="submit">Upload</button>
        </form>
    )
}