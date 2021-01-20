import React from 'react';

const ListItems = (props) => {
    const { text } = props;
    
    return (
        <>
            <div className="todo_style">
                <i className="fa fa-times" aria-hidden="true" />
                <li> {text} </li>
            </div>
        </>
    );
}
 
export default ListItems;