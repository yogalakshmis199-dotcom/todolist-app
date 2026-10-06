import { useNavigate } from 'react-router-dom';

function Todolist({todo,deleteTodo})
{
    const navigate = useNavigate();

    const showAddTodolist = () =>{navigate("/addtodo");

    }
    return(

        <div>
            <center>
            <h1>To Do List</h1>
            <h2>To Do List Dashboard</h2>
            <table>
                <thead>
                    <th>ToDo</th>
                    <th>Action</th>
                </thead>
            <tbody>
                {todo.map((todo,index)=>(
                    <tr key={index}>
                        <td>{todo.todo}</td>
                        <td><button onClick={()=>deleteTodo(todo.id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
            </table>
            <button class="my-button" onClick={showAddTodolist}>Add Todolist</button>
            </center>
        </div>
    );
}
export default Todolist;