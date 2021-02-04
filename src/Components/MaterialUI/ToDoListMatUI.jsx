import React,{ useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import db from '../../firebase';

const ItemList = (props) => {

    const handleDelete = (event) => {
        db.collection('itemList').doc(props.value.id).delete()
    }

    return (
        <div className="todo_style">
            <span onClick={handleDelete}>
                <DeleteIcon className="deleteIcon"/>
            </span>
            <li>{props.value.todo}</li>
        </div>
    );
}

export default ItemList;