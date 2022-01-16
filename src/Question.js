import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({id,title,info}) => {
  const [clicked, setclicked] = useState(false)
  console.log(id, title, info);
  return (
    <div className="card">
      <div className="flex-row">
        <h3>{title}</h3>
        <button onClick={() => setclicked(!clicked)}>
          {clicked ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {clicked && <p>{info}</p>}
    </div>
  );
};

export default Question;
