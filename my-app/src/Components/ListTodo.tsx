import React from "react";
import EditTodo from "./EditTodo";
import axios from "axios";
import "../styles/ListTodo.css"; 
type todo = {
    id : number  ; 
    description : string ; 
}
const ListTodo= ()=>{
    const [todos, setTodos] = React.useState<todo[]>([]);
    const user=JSON.parse(localStorage.getItem('userData')|| 'null');
//delete todo

const deleteTodo = async (id: number) => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/deleteTodo/${id}`);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('There was an error!', error);
    }
  };
//get todo
    React.useEffect(() => {
        axios.get(`http://localhost:4000/api/v1/getAllTodos/${user.firstname}`)
        .then((response)=>{setTodos(response.data.data);
            console.log("Fetched Todos:", response.data.data);})
        .catch((error)=>{{console.log("error")}})
    }, [todos]);
    
    
    return (
        <React.Fragment>
            <h1 className="text-center mt-5">waiting to be done!</h1>
            <table className="table mt-5 table-hover text-center">
                <thead>
                <tr>
                    <th>Description</th>
                    <th>edit</th>
                    <th>delete</th>
                </tr>
                </thead>
                <tbody>
                {todos.map((todo) => (
                        <tr key={todo.id}>
                            <td>{todo.description}</td>
                            <td><EditTodo todo={todo} /></td>
                            <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
                                delete</button></td>
                        </tr>
                        ))}
                   
                </tbody>
            </table>
        </React.Fragment>
    )
};
export default ListTodo;