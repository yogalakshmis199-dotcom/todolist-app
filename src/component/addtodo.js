import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
    function AddTodo({addTodo}){
    const [todo, setTodo] = useState("");

    const navigate = useNavigate();

        const handleSubmit = (event) => {
        event.preventDefault();

        const newTodo = {
            id: Math.random(),
            todo: todo,
        };

        addTodo(newTodo);

        navigate("/");
    };

        return(
            <div>
                <center>
                <h1>To DO List App</h1>
                <h2> Add To Do</h2>
                <form class="basic-form" onSubmit={handleSubmit}>
                    <label> To Do List </label>
                    <input type="text" value={todo} onChange={(event) => setTodo(event.target.value)}/>
                    <br/>
                    <button >Add To Do </button>

                </form>
                </center>
        </div>
        )

    }
    export default AddTodo;