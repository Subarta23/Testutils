import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState("enter the text here");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);

  const handleUpperCase = () => {
    setText(text.toUpperCase());
    props.showAllert("upper case activated", "success")
  };

  const handleLowerCase = () => {
    setText(text.toLowerCase());
    props.showAllert("lower case activated", "success")
  };

  const clearSpace = () => {
    let cleaned = text.split(/[ ]+/).join(" ");
    setText(cleaned);
    props.showAllert("space managed ", "success")
  };

  const clearText = () => {
    setText("");
    props.showAllert("text cleared", "danger")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const toggleBold = () => {
    setIsBold(!isBold);
    props.showAllert("texts are in bold", "success")
  };

  const toggleItalic = () => {
    setIsItalic(!isItalic);
    props.showAllert("texts are in italic", "success")
  };

  const bgColor = props.mode === 'dark' ? '#0a0b1f' : '#f9f9f9';
  const textColor = props.mode === 'dark' ? '#ffffff' : '#042743';
  const btnColor = props.mode === 'dark' ? '#0d6efd' : '#0d6efd';

  const textStyle = {
    fontWeight: isBold ? 'bold' : 'normal',
    fontStyle: isItalic ? 'italic' : 'normal',
    backgroundColor: props.mode === 'dark' ? '#1c1c2b' : 'white',
    color: textColor,
    border: '1px solid #ccc',
    padding: '10px'
  };

  return (
    <>
      <div className='container my-3' style={{ backgroundColor: bgColor, color: textColor, padding: "20px", borderRadius: "10px" }}>
        <h2>{props.heading}</h2>
        <label htmlFor="mybox" className="form-label">Your Text Area</label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={textStyle}
          id="mybox"
          rows="8"
        ></textarea>

        <div className="my-3">
          <button className="btn btn-primary mx-1 my-1" onClick={handleUpperCase}>UPPERCASE</button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleLowerCase}>lowercase</button>
          <button className="btn btn-primary mx-1 my-1" onClick={toggleBold}>{isBold ? "Unbold" : "Bold"}</button>
          <button className="btn btn-primary mx-1 my-1" onClick={toggleItalic}>{isItalic ? "Unitalic" : "Italic"}</button>
          <button className="btn btn-primary mx-1 my-1" onClick={clearSpace}>Clear Spaces</button>
          <button className="btn btn-danger mx-1 my-1" onClick={clearText}>Clear All</button>
        </div>
      </div>

      <div className="container my-3" style={{ backgroundColor: bgColor, color: textColor, padding: "20px", borderRadius: "10px" }}>
        <h3>Your Text Summary</h3>
        <p><b>{text.trim().split(/\s+/).filter(el => el.length !== 0).length}</b> words and <b>{text.length}</b> characters</p>
        <p>Estimated read time: <b>{0.008 * text.trim().split(/\s+/).filter(el => el.length !== 0).length}</b> minutes</p>
        <h4>Preview</h4>
        <p style={{ fontWeight: isBold ? 'bold' : 'normal', fontStyle: isItalic ? 'italic' : 'normal' }}>
          {text.length > 0 ? text : "Enter something above to preview."}
        </p>
      </div>
    </>
  );
}
