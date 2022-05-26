import React from 'react';

function TodoList({todos, setTodos}){

    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (<Todo setTodos={setTodos} 
                todos={todos} 
                id={todo.id} 
                text={todo.text} />
                ))}
            </ul>
       </div>  
    );
};

export default TodoList;