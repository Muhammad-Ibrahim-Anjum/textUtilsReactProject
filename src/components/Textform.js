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
    const actionClearOnClick = () =>{
        let newText ="";
        setText(newText);
    }
    const getUserText = (event) =>{
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter Text Here");

    const [btnText, setBtnText] = useState("Enable Dark Mode")

    const [myStyle, setMyStyle] = useState({
        color : 'black',
        backgroundColor : 'white'
    })
    const toggleStyle = () => {
        if(myStyle.color === 'white'){
            setMyStyle({
                color : 'black',
                backgroundColor : 'white' 
            })
            setBtnText("Enable Light Mode");
        }else{
            setMyStyle({
                color : 'white',
                backgroundColor : 'black'
            })
            setBtnText("Enable Dark Mode");
        }
    }

    const actionCopyText = () => {
        var text = document.querySelector('textarea');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const actionRemoveSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const actionRemoveNextLine = () => {
        let someText = text.replace(/(\r\n|\n|\r)/gm, "")
        setText(someText);
    }
    return ( 
        <>
        <div className="container" style={myStyle}>
                <h1>{props.heading}</h1>
                <div className="mb-3" style={myStyle}>
                    <textarea className="form-control" value={text} onChange={getUserText} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button className = "btn btn-primary mx-1" onClick={actionUpOnClick}>Convert to UpperCase</button>
                <button className = "btn btn-primary mx-1" onClick={actionLowOnClick}>Convert to LowerCase</button>
                <button className = "btn btn-danger mx-1" onClick={actionClearOnClick}>Clear Text Area</button>
                <button className = "btn btn-primary mx-1" onClick={actionCopyText}>Copy Text</button>
                <button className = "btn btn-primary mx-1" onClick={actionRemoveSpace}>Remove Spaces</button>
                <button className = "btn btn-primary mx-1" onClick={actionRemoveNextLine}>Remove Next Line Space</button>
            </div>
            <div style={myStyle} className="container my3">
                <h2>Text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.018 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
            <button onClick={toggleStyle} className="btn btn-outline-success" type="submit">{btnText}</button>   
        </>
    )
}
