import React, {useState} from 'react'

export default function Textform(props) {
    const actionUpOnClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const actionLowOnClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const getUserText = (event) =>{
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter Text Here");
    return ( 
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={getUserText} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button className = "btn btn-primary mx-1" onClick={actionUpOnClick}>Convert to UpperCase</button>
                <button className = "btn btn-primary mx-1" onClick={actionLowOnClick}>Convert to LowerCase</button>
            </div>
            <div className="container my3">
                <h2>Text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.018 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
