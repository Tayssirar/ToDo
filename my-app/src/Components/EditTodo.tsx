import React from "react";
import axios from "axios";
type Todo = {
  id : number  ; 
  description : string ; 
}
type TodoProps = {
  todo: Todo;
};

export default function EditTodo({todo}:TodoProps) {
  const [description, setDescription] = React.useState(todo.description);

  // Edit description function
  const updateDescription = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/api/v1/updateTodo/${todo.id}`,
        { description }, // Send description directly in the request body
      );
    
      window.location.href = "/todoPage";
    } catch (err) {
      console.log(err);
    }
  };

    return (
    <React.Fragment>
    
        <button type="button" className="btn btn-primary" 
        data-toggle="modal" data-target="#myModal">
        edit
        </button>


        <div className="modal" id="myModal">
        <div className="modal-dialog">
            <div className="modal-content">

            <div className="modal-header">
                <h4 className="modal-title">edit todo</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>

            
            <div className="modal-body">
                <input type="text" className="form-control" value={description}
                onChange={(e) => setDescription(e.target.value)}/>
            </div>

            
            <div className="modal-footer">
                <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={updateDescription}>edit</button>
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
            </div>

            </div>
        </div>
        </div>
    </React.Fragment>
    );
};
