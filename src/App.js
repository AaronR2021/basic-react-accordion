import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return(
    <div className='body'>
      <h1 className='title'>Questions And Answers about Login</h1>
      <div className="questions-content">
        {
          data.map(question=>{
           return <SingleQuestion {...question} key={question.id}/>;
          })
        }
      </div>
    </div>
  )
}

export default App;
