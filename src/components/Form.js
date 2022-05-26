import React from "react";
import TodoList from "./TodoList";


function Form(setInputText, todos, setTodos, inputText){

    const inputTextHandler = (event) => {
        console.log(event.target.value);
        setInputText(event.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, 
            {text: inputTextHandler, completed: false, id: Math.random()}
        ]);
        setInputText(" ");
    };
  return(
    <form>
        <input value={inputText} onClick={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select name="todos" class="filter-todo">
                <option value="all">All</option>
                <option value="complete">Completed</option>
                <option value="incomplete">Uncompleted</option>
            </select>
        </div>
    </form>
    //<div class="todo-container">
       // <ul class="todo-list"></ul>
    //</div>

   // <script src="./app.js"></script>
  );  
};

export default Form;