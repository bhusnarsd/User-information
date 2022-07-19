import React from 'react';
import axios from 'axios';
import {useNavigate,useParams} from "react-router-dom";
import "./Delete.css";

const Delete = () => {

    const navigate = useNavigate();
    const {userID} = useParams();

    const deleteHandler = () => {
        axios.delete(`http://localhost:5000/user/${userID}`)
        .then( res =>{
            alert("User deleted..!!");
            navigate("/home");

        })
        .catch(err => {
            alert(err);
        })

        
    }

  return (
      <>
    <div className='delete'>
        <h1>Are You sure ?</h1>
        <button onClick={deleteHandler} type="button" class="btn btn-danger">Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={() => navigate("/home")} type="button" class="btn btn-success">Cancel</button>
    </div>
    </>

  );
}

export default Delete;