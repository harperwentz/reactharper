import React from "react";
import "./App.css";
//Importing Components
import Form from "./components/Form";
import TodoList from "./components/ToDoList";

function App(props){

  return(
    <div className="todoapp">
      <header>
        <h1>Harper's Todo List</h1>
      </header>
      <Form/>
      <TodoList />
    </div>
  );
};

export default App;