import React, { useState } from 'react';

const T = () => {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const countNewLines = () => {
    let newLineCount = 0;
    if (text) {
      const lines = text.split('\n');
      lines.forEach((line) => {
        newLineCount += Math.floor((line.length / event.target.cols) + 1);
      });
    }
    return newLineCount;
  };

  return (
    <div>
      <textarea
      style={{height: "300px"}}
        value={text}
        onChange={handleTextChange}
      />
      <p>New line count: {countNewLines()}</p>
    </div>
  );
};

export default T;
