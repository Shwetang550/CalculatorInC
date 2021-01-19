import React from 'react';

const App = () => {
  return ( 
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List App</h1>
          <br />
          <input type="text" placeholder="Add Items" />
          <button> + </button>
          
          <ol>
            <li>apple</li>
          </ol>
        </div>
      </div>
    </>
   );
}
 
export default App;