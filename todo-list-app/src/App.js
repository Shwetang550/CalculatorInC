import React, { useState } from 'react';

const App = () => {
  let [inputList, setInputList] = useState("");
  let [items, setItems] = useState([]);

  const inputItem = (event) => { 
    setInputList(event.target.value);
  };

  const addItem = () => { 
    setItems((prevItems) => {
      return [...prevItems, inputList];
    })
  };

  return ( 
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List App</h1>
          <br />
          <input type="text" placeholder="Add Items" onChange={inputItem} />
          <button onClick={addItem}> + </button>
          
          <ol>
            {
              items.map((item) => {
                return <li> {item} </li>;
              })
            }
          </ol>
        </div>
      </div>
    </>
   );
}
 
export default App;