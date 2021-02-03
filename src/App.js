import React, { useState } from 'react';
import ListItems from './Components/listItems';

const App = () => {
  let [inputList, setInputList] = useState("");
  let [items, setItems] = useState([]);

  const inputItem = (event) => { 
    setInputList(event.target.value);
  };

  const addItem = () => { 
    setItems((prevItems) => {
      return [...prevItems, inputList];
    });
    setInputList("");
  };

  const deleteItem = (i) => { 
    const freshItems = items.filter((item,index) => index !== i);
    setItems(freshItems);
   };

  return ( 
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List App</h1>
          <br />
          
          <input type="text" placeholder="Add Items" value={inputList} onChange={inputItem} />
          <button onClick={addItem}> + </button>
          
          <ol>
            {
              items.map((item,index) => {
                return <ListItems key={index} id={index} text={item} onDelete={deleteItem}/>;
              })
            }
          </ol>
        </div>
      </div>
    </>
   );
}
 
export default App;