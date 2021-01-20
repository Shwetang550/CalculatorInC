import React from 'react';

const ListItems = (props) => {
    const { text } = props;
    return (<li> {text} </li> );
}
 
export default ListItems;