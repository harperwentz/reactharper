import React, {useState} from "react";
import "./App.css";
//Importing Components
import Form from "./components/Form";

function App(props){

  return(
    <div className="todoapp">
      <header>
        <h1>Harper's Todo List</h1>
      </header>
      <Form/>
    </div>
  );
};

export default App;