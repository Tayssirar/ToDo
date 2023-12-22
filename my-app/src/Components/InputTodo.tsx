import React from "react";
import "../styles/InputTodo.css"
import axios from "axios"

export default function InputTodo(){

    const [description, setDescription]= React.useState("")
    const user=JSON.parse(localStorage.getItem('userData')|| 'null');
    
    const onSubmitForm = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(`http://localhost:4000/api/v1/addTodo/${user.firstname}`, { description: description });
            console.log(response.data);
          } catch (error) {
            console.log(error);
          }
          setDescription("")
        };

    return (
    <React.Fragment>
        <div className="container" >
            <div>
            <h1 className="text-center mt-5">what do you want to do today?</h1>
            <form className="d-flex mt-5" >
                <input type="text" className="form-control" value={description}
                onChange={e => setDescription(e.target.value)}/>
                <button className="btn btn-success" onClick={(e:any)=>{onSubmitForm(e)}}>add</button>
            </form>
            </div>
            <img className="image-input rounded mt-md-3" src="https://media.giphy.com/media/dSNtAtfl6CrYLxoTUA/giphy.gif"></img>
        
        </div>
    </React.Fragment>
);};