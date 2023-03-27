import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here ");
 
  const handletext = () => {
    let newText = text.toUpperCase();
    console.log("Button clicked");
    setText(newText);
    props.setalert("Converted to uppercase");
  };

  const handlelotext = () => {
    let newText = text.toLowerCase();
    console.log("Button clicked");
    setText(newText);
    props.setalert("Converted to lowercase");
  };

  const handleclear = () => {
    let newText = " ";
    console.log("Button clicked");
    setText(newText);
    props.setalert("Text cleared");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handlecopy = ()=>{
    let newtext = document.getElementById("mybox");
    newtext.select();
    navigator.clipboard.writeText(newtext.value);
    document.getSelection().removeAllRanges(  );
    props.setalert("Copied to clipboard");
  }

  const handlespace = ()=>{
    let newtext = text.split(/[ ] + /);
    setText(newtext.join(" "));
    props.setalert("Extra spaces cleared");
  }

  return (
    <div className="container">
      <h1 className={`text-${props.mode === "light"?"dark":props.mode}`}>{props.heading}</h1>
      
      <textarea
        className={`form-control my-2 text-${props.mode === "light"?"dark":"light"} bg-${props.mode === "light"?"light":props.mode}`} 
        rows="8"
        value={text}
        id="mybox"
        onChange={handleChange}></textarea>
      <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handletext}>
        Convert to uppercase
      </button>
      <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handlelotext}>
        Convert to lowercase
      </button>
      <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleclear}>
        Clear text
      </button>
      <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handlecopy}>
        Copy text
      </button>
      <button className="btn btn-primary m-1" onClick={handlespace}>
        Remove extra spaces
      </button>
      <p className={`text-${props.mode === "light"?"dark":props.mode}`}>
        {text.split(/\s+/).filter((e)=>{return e.length !== 0}).length} words and {text.length} characters
      </p>
      <p className={`text-${props.mode === "light"?"dark":props.mode}`}>{0.008 * text.split(" ").length} minutes to read the above text</p>
      <h2 className={`text-${props.mode === "light"?"dark":props.mode}`}>Preview</h2>
      <p className={`text-${props.mode === "light"?"dark":props.mode}`}>{text.length === 0?"Nothing to preview":text}</p>
    </div>
  );
}
