import React, { useState } from "react";
export default function Textform(props) {
  const handleOnClick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
  };
  const handleOnClickL = () => {
    let newText = Text.toLowerCase();
    setText(newText);
  };
  const handleOnChangeC = () => {
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleOnChangeCo = () => {
    var textcopy = document.getElementById("boxcopy");
    textcopy.select();
    navigator.clipboard.writeText(textcopy.value);
  };
  const handleOnChangeRS = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const [Text, setText] = useState("Enter the text");
  return (
    <>
      <div className="conotainer">
        <div className="mb-3">
          <h1>Enter the name {props.title}</h1>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={Text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleOnClick}
        >
          Convert to uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleOnClickL}
        >
          Convert to Lowercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onclick={handleOnChangeC}
        >
          Clear Test
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onclick={handleOnChangeCo}
          id="boxcopy"
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onclick={handleOnChangeRS}
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
        <p>{Text}</p>
      </div>
    </>
  );
}
