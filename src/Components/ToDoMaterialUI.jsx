import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const ToDoMaterialUI = () => {
    return ( 
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />

                    <input type="text" placeholder="Add items" />
                    <Button>
                        <AddIcon fontSize="large"/>
                    </Button>
                </div>
            </div>
        </>
     );
}
 
export default ToDoMaterialUI;