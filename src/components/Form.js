import React from "react";


function Form(){
  return(
    <form>
        <input type="text" className="todo-input" />
        <button className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select name="todos" class="filter-todo">
                <option value="all">All</option>
                <option value="done">Completed</option>
                <option value="not done">Uncompleted</option>
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