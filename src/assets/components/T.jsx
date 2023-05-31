import React, { useRef, useState } from "react";

const T = () => {
  const textareaRef = useRef(null);
  const [rowsCount, setRowscount] = useState(0);

  const handleInputChange = () => {
    const textarea = textareaRef.current;
    const lineHeight = parseInt(getComputedStyle(textarea).lineHeight);
    const scrollHeight = textarea.scrollHeight;
    console.log("Line height:", lineHeight);
    console.log("Scroll height:", scrollHeight);
    const lineUsed = scrollHeight / lineHeight;
    setRowscount(lineUsed);

    const content = textareaRef.current.innerHTML;
    console.log("Content:", content);
  };

  return (
    <>
      {" "}
      <div className="m-4 p-2 bg-orange-300  h-36" style={{  width: "400px", boxSizing: "content-box" }}>
        <div className=" bg-orange-300 focus:outline-none" 
          contenteditable="true"
          ref={textareaRef}
          // onChange={handleInputChange}
          onInput={handleInputChange}
          style={{ resize: "none", width: "400px" }}
        />
       
      </div>
      rows{rowsCount}
    </>
  );
};

export default T;
