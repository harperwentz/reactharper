import React, {useState} from "react";
import Tweet from "./Tweet";
import "./App.css";

function App(props){




return(
  <div className="todoapp">
    <h1>To Do List</h1>
    <div className=""
    {users.map(user =>(
      <Tweet name={user.name} message ={user.message}  />
    ))}
    <h1 className={isRed ? "red" : ""}>Change my color!</h1>
    <button onClick={increment}>Increment</button>
    <h1>{count}</h1>
    
  </div>
);
}
const [users, setUser] = useState([
{name: "Harper", message: 'Hello there'},
{name: 'Jacob', message: 'i am yaycob'},
{name: 'maddy', message: 'i am moozer'}
]);
const [isRed, setRed] = useState(false);
const [count, setCount] = useState(0);



const increment = () => {
setCount(count + 1)
setRed(!isRed);
};
export default App;
