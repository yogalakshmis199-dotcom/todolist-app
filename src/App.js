import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todolist from './component/todolist';
import AddTodo from './component/addtodo';
import { useState } from "react";
import './App.css';

function App() {
  const [todo, setTodo] = useState([
        { id:1, todo: "Learn HTML" },
        { id:2, todo: "Learn CSS" }
    ]);

    const addTodo = (newTodo) => {
        setTodo([...todo, newTodo]);
    };
    const deleteTodo = (id) => {
  const updated = todo.filter(todo => todo.id !== id);
  setTodo(updated);
};

  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todolist todo={todo} deleteTodo={deleteTodo} />} ></Route>
        <Route path="/addtodo" element={<AddTodo addTodo={addTodo}  />}></Route>
       
        </Routes>
     </BrowserRouter>
         </div>
  );
}

export default App;