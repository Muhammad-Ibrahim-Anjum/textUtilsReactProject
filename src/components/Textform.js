import React, {useState} from 'react'

export default function Textform(props) {
    const actionUpOnClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Text Converted to Upper Case', 'success');
    }
    const actionLowOnClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Text Converted to Lower Case', 'success');
    }
    const actionClearOnClick = () =>{
        let newText ="";
        setText(newText);
        props.showAlert('Text Area Cleaned', 'success');
    }
    const getUserText = (event) =>{
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter Text Here");

    const actionCopyText = () => {
        var text = document.querySelector('textarea');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text Copied', 'success');
    }
    const actionRemoveSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Text Spaces Removed', 'success');
    }
    const actionRemoveNextLine = () => {
        let someText = text.replace(/(\r\n|\n|\r)/gm, "");
        setText(someText);
        props.showAlert('Text Next Lines Removed', 'success');
    }
    function countWords(str) {
        str = str.replace(/(^\s*)|(\s*$)/gi,"");
        str = str.replace(/[ ]{2,}/gi," ");
        str = str.replace(/\n /,"\n");
        if(str.length>0){
            return str.split(' ').length;
        }else{
            return str.length;
        }
    }

    function countCharacters(str) {
        str = str.replace(/ /g, "");
        return str.length;
    }
    return (
        <>
        <div className="container" style={props.mode}>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3" style={props.mode}>
                    <textarea style={props.mode} className="form-control" value={text} onChange={getUserText} id="textForm" rows="3"></textarea>
                </div>
                <button className = "btn btn-primary mx-1" onClick={actionUpOnClick}>Convert to UpperCase</button>
                <button className = "btn btn-primary mx-1" onClick={actionLowOnClick}>Convert to LowerCase</button>
                <button className = "btn btn-danger mx-1" onClick={actionClearOnClick}>Clear Text Area</button>
                <button className = "btn btn-primary mx-1" onClick={actionCopyText}>Copy Text</button>
                <button className = "btn btn-primary mx-1" onClick={actionRemoveSpace}>Remove Spaces</button>
                <button className = "btn btn-primary mx-1" onClick={actionRemoveNextLine}>Remove Next Line Space</button>
            </div>
            <div className="container my3">
                <h2>Text Summary</h2>
                <p>{countWords(text)} Words and {countCharacters(text)} Characters</p>
                <p>{text.length >0 ? 0.018 * countWords(text): 0} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length >0 ? text:'Enter Text to preview here'}</p>
            </div>
        </div>
        </>
    )
}
