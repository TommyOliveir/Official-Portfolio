import React, { useState } from "react";

function T() {
  const [text, setText] = useState("");
  const [lineCount, setLineCount] = useState(0);

  const handleTextChange = (event) => {
    const value = event.target.value;
    const lines = value.split("\n").length;
    const lastLineLength = value.split("\n").pop().length;
    const maxCharsPerLine = 20; // Adjust this value as needed

    if (lastLineLength > maxCharsPerLine) {
      setText(value + "\n");
    } else {
      setText(value);
    }

    setLineCount(lines)
  };

  return (
    <>
      <textarea
        value={text}
        onChange={handleTextChange}
        rows={5}
        cols={30}
        style={{ resize: "none" }}
      />{" "}
      <p>{lineCount}</p>
    </>
  );
}

export default T;
