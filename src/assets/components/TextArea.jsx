import React, { useState } from 'react';

function TextArea() {
  const [text, setText] = useState('');
  


  const handleChange = (event) => {
    const inputValue = event.target.value;
    const lines = inputValue.split('\n');

   
      setText(inputValue);
    
  };


  return (
    <div>
      <textarea className='bg-orange-500 w-15 m-5'
        value={text}
        onChange={handleChange}
        maxLength={30}
      />
      <div>
       dd
       
      </div>
    </div>
  );
}

export default TextArea;
