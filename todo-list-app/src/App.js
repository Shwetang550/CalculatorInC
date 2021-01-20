import React, { useState } from 'react';

const App = () => {
  let [inputList, setInputList] = useState("");

  const inputItem = (event) => { 
    setInputList(event.target.value);
  };

  return ( 
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List App</h1>
          <br />
          <input type="text" placeholder="Add Items" onChange={inputItem} />
          <button> + </button>
          
          <ol>
            <li> {inputList} </li>
          </ol>
        </div>
      </div>
    </>
   );
}
 
export default App;