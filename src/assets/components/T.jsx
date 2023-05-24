import React, { useState } from "react";

function T() {
  const [text, setText] = useState("");
  const [lineCount, setLineCount] = useState(1);

  const handleTextChange = (event) => {
    const value = event.target.value;
    const lineBreaks = (value.match(/\n/g) || []).length;
    const lines = value.split("\n").length;
    if(lineBreaks) {
      setLineCount(prev => prev + lineBreaks)
    }
    setLineCount(lines);
    setText(value);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleTextChange}
        rows={lineCount}
        cols={30}
        style={{ resize: "none" , height: "400px"}}
      />
      <p>Line count: {lineCount}</p>
    </div>
  );
}

export default T;
