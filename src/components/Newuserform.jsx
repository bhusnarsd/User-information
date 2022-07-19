import axios from "axios";
import React, { useState} from "react";
import "./Newuserform.css";
import { useNavigate } from "react-router-dom";
import Home from "./Home";




const Newuserform = () => {
  
    // const variables start
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [mobNumber,setMobNumber]=useState();
     const [password,setPassword]=useState("");

     const Navigate = useNavigate();

     
    console.log(firstName);
    console.log(lastName);
    console.log(mobNumber);
    console.log(password);

     // const variables end

// submitfunction start
  const  submitHandler = (e) => { 
      e.preventDefault();
      const formdata ={
      firstName,
      lastName,
      mobNumber,
      password

    }
    console.log(formdata);
    axios.post("http://localhost:5000/user",formdata);
   

   

    setFirstName("");
    setLastName("");
    setMobNumber();
    setPassword("");
    alert(`Welcome User :- ${firstName} ${lastName}`)
    Navigate("/");





  }
//    submitfunction end

    return(
        <>
        <div className="abc mt-2" >
        <h1>New User Form:-</h1>
        </div>
        
        <div className="formcontainer">
        <form className="mt-2" onSubmit={submitHandler}>
        <div class="mb-3 container-sm ">
  <label for="exampleFormControlInput1" class="form-label">First Name</label>
  <input type="text" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter First Name" onChange={e => setFirstName(e.target.value)} value={firstName}/>
  <label for="exampleFormControlInput1" class="form-label">Last Name</label>
  <input type="text" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Last Name" onChange={e => setLastName(e.target.value)} value={lastName}/>
  <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
  <input type="number" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Mobile Number" onChange={e => setMobNumber(e.target.value)} value={mobNumber}/>
  <label for="exampleFormControlInput1" class="form-label">Password</label>
  <input type="password" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Password" onChange={e => setPassword(e.target.value)} value={password}/>
 
  <div className='container'>
          <div className='row'>
            <div className='col d-flex justify-content-center'>
            <button type="submit" class="btn btn-success mt-2">Add User</button> 
            </div>
          </div>
        </div>
     
</div>
</form>
</div>
</>
    );
}

export default Newuserform;