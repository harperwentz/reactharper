import React from 'react';

function Todo({text, todo, todos, setTodos}) {
    const removeHandler = () => {
        setTodos(todos.filter((element) => element.id !== todo.id));
    };
    const checkHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {...item, completed: !item.completed}
            };
            return item;
            })
        );
    }
    return( 
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : " "}`}>{text}</li>
            <button onClick={checkHandler} className="completeButton">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={removeHandler} className="trashButton">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;