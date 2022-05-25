import React from 'react';

function TodoList(){
    return(
        <div className="todo-container">
        <ul className="todo-list">
            <li> 
            <button>delete</button>
            <button>Checked</button>*  
            </li>
        </ul>
       </div>  
    );
};

export default TodoList;