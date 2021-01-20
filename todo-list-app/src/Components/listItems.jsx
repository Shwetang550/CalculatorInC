import React from 'react';

const ListItems = (props) => {
    const { text,id,onDelete } = props;
    
    return (
        <>
            <div className="todo_style">
                <i className="fa fa-times" aria-hidden="true" onClick={() => onDelete(id)} />
                <li> {text} </li>
            </div>
        </>
    );
}
 
export default ListItems;