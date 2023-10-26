import React, { useState } from "react";
export default function Textform(props) {
  const [Text, setText] = useState("Enter the text");
  const handleUpper = () => {
    props.showAlert("UpperCase is ", "success");
    let newText = Text.toUpperCase();
    setText(newText);
  };
  const handleLower = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("lower case is ", "warning");
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("clear is not done", "alert");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const HandleCopy = () => {
    props.showAlert("clear is not done", "alert");

    var Text = document.getElementById("myBox");
    Text.select();
    navigator.clipboard.writeText(Text.value);
  };
  const handleRemoveSpace = () => {
    props.showAlert("clear is not done", "alert");

    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>Enter the {props.title}</h1>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={Text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#212529",
              color: props.mode === "light" ? "#212529" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpper}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLower}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onclick={handleClear}>
          Clear Test
        </button>
        <button className="btn btn-primary mx-1 my-1" onclick={HandleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onclick={handleRemoveSpace}
        >
          Remove Space
        </button>
      </div>

      <div className="container my-3">
        <h2>Text Info</h2>
        <p>
          <b>{Text.split(" ").length}</b> word and <b>{Text.length}</b>{" "}
          character
        </p>
        <p>
          <b>{0.008 * Text.split(" ").length}</b> min Time takken to read by you
        </p>
        <h2>Preview</h2>
        <p>{Text.length > 0 ? Text : "Enter you Text to Preview It"}</p>
      </div>
    </>
  );
}
