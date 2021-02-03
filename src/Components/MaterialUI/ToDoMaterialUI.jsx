import React,{ useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ItemList from './ToDoListMatUI';

const ToDoMaterialUI = () => {
    let [item, setItem] = useState("");
    let [itemList, setItemList] = useState([]);

    const handleInput = (event) => {
        setItem(event.target.value);
    }

    const handleButton = (event) => {
        event.preventDefault();

        setItemList((prev) => [...prev, item]);
        setItem("");
    }

    return ( 
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />

                    <form onSubmit={handleButton}>
                        <input type="text" value={item} placeholder="Add items" onChange={handleInput} />
                        
                        <Button className="materialBtn" type="submit" disabled={!item}> 
                            <AddIcon fontSize="large" />
                        </Button>
                    </form>

                    <br />
                    <ol>
                        {
                            itemList.map((i,index) => {
                            return <ItemList value={i} key={index} />;
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