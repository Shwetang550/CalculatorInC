import React,{ useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const ItemList = (props) => {
    let [line, setLine] = useState(false);

    const handleDelete = () => {
        setLine(!line);
    }

    return (
        <div className="todo_style">
            <span onClick={handleDelete}>
                <DeleteIcon className="deleteIcon"/>
            </span>
            <li style={{textDecoration: line ? "line-through": "none"}}>{props.value}</li>
        </div>
    );
}

export default ItemList;