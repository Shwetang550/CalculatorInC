import React,{ useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const ToDoMaterialUI = () => {
    let [item, setItem] = useState("");
    let [itemList, setItemList] = useState([]);

    const handleInput = (event) => {
        setItem(event.target.value);
    }

    const handleButton = () => {
        setItemList((prev) => {
            return [...prev, item];
        });
        setItem(" ");
    }

    return ( 
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />

                    <input type="text" value={item} placeholder="Add items" onChange={handleInput} />
                    <Button className="materialBtn" onClick={handleButton}> 
                        <AddIcon fontSize="large"/>
                    </Button>

                    <br />
                    <ol>
                        {
                            itemList.map((i) => {
                            return <li>{i}</li>;
                            })
                        }
                    </ol>
                    <br />
                </div>
            </div>
        </>
     );
}
 
export default ToDoMaterialUI;