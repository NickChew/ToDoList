import { useState } from "react";
import "./App.css";

const App = () => {
  
  const [todos, setTodos] = useState([]);
  
  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div>
        <h1>My To Do List</h1>
        <FormTodo addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} markTodo={markTodo} removeTodo={removeTodo} />
          ))}
      </div>
    </div>
  );
};

// change markToDo to a toggle button
// add a clear list button like // {/* <button onClick={()=>"Clear List"[todos, setTodos] = useState[null]}></button> */}
// needs to clear submit box after pressing submit

const Todo = ( { todo, index, markTodo, removeTodo} ) => {
    // const [toggle, setToggle] = useState(false);
    // const handleToggle = () =>{
    //  setToggle(!toggle)   
    //}
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : ""}}>{todo.text}</span>
      <div>
        {/* <button classname={toggle ? "markTodo(index)" : "style"} onClick={handleToggle}>✓</button> */}
        <button onClick={() => markTodo(index)}>✓</button> 
        {/* <button onClick={() => todo.text(index)}>X</button>   */}
        <button onClick={() => removeTodo(index)}>Del</button>
      </div>     
    </div>
  )
};

const FormTodo = ({addTodo}) => {
  const [value, setValue] = useState("");
  
  const handleSubmit = () => {
    if (!value) return;
    addTodo(value);
  };

  return (
    <div className="addBtns">
      <div>
        <b>Add To the To Do List</b>
      </div>
      <input type="text" value={value} onChange={event => setValue(event.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  ) 
}

export default App;