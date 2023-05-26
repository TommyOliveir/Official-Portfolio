import React, { useState, useRef, useEffect} from 'react';

const T = () => {
  const [text, setText] = useState('');
  const newlineCount = (text.match(/\n/g) || []).length;
  const textareaRef = useRef(null);
  const [isWidthFilled, setIsWidthFilled] = useState(true);

  const handleChange = (event) => {
    setText(event.target.value);

   
  };





  return (
    <div>
      <textarea wrap="hard" ref={textareaRef} className='textareacount' value={text} onChange={handleChange} style={{width: "200px", height: "100px"}}/>
      <p>Newline count: {newlineCount}</p>
      <p>{isWidthFilled ? 'Text width is filled' : 'Text width is not filled'}</p>
    </div>
  );
};

export default T;
