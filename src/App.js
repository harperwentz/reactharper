import React, {useState} from "react";
import "./App.css";
//Importing Components
import Form from "./components/Form";
import TodoList from "./components/ToDoList";

function App(props){

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return(
    <div className="todoapp">
      <header>
        <h1>Harper's Todo List</h1>
      </header>
      <Form InputText={inputText} todos={todos} 
        setTodos={setTodos} s
        etInputText={setInputText}
        />
      <TodoList todos={todos}/>
    </div>
  );
};

export default App;