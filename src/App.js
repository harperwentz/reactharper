import React, {useState} from "react";
import "./App.css";
//Importing Components
import Form from "./components/Form";
import TodoList from "./components/ToDoList";

function App(props){

  //States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Use Effect
  useEffect(() => {
    getFilterStatus();
  }, [todos, status]);

  //Functions
  const getFilterStatus = (e) =>{
    switch (status) {
      case 'complete':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'incomplete':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default: 
        setFilteredTodos(todos);
        break;
    }
  };

  return(
    <div className="todoapp">
      <header>
        <h1>Harper's Todo List</h1>
      </header>
      <Form 
        InputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
        status={status}
        />

      <TodoList filteredTodos={filteredTodos}
      setTodos={setTodos} 
      todos={todos}/>
    </div>
  );
};

export default App;