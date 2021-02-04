import React,{ useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ItemList from './ToDoListMatUI';
import db from '../../firebase';
import firebase from 'firebase';

const ToDoMaterialUI = () => {
    let [item, setItem] = useState("");
    let [itemList, setItemList] = useState([]);

    const handleInput = (event) => {
        setItem(event.target.value);
    }

    const handleButton = (event) => {
        event.preventDefault();

        db.collection('itemList').add({
            todo: item,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setItemList((prev) => [...prev, item]);
        setItem("");
    }

    useEffect(() => {
        db.collection('itemList').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setItemList(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})));
        })
    }, []);

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