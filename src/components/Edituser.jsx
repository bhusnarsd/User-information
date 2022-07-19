import { useState, useEffect } from "react";
import React  from "react";
import Home from "./Home";

import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";


const Edituser = () => {

    const navigate = useNavigate();
    const{userID} = useParams();
    console.log(userID);

    const [firstName,setFirstName]=useState();
     const [lastName,setLastName]=useState();
     const [mobNumber,setMobNumber]=useState();
      const [password,setPassword]=useState();

      const [data, setData] = useState([]);
      console.log(data);


    useEffect(() => {
        axios.get(`http://localhost:5000/user/${userID}`)
          .then(async(res) => {
            const rawdata = await res.data[0];
            console.log(rawdata);
            setFirstName(rawdata.firstName);
            setLastName(rawdata.lastName);
            setMobNumber(rawdata.mobNumber);
            setPassword(rawdata.password);




            setData(rawdata);
          }).catch(err => console.log(err));
      }, [])
     

      

   

     
 
 
      
 
 // submitfunction start
   const  editHandler = (e) => { 
       e.preventDefault();
       const data={
           firstName,lastName,mobNumber,password
       }
       console.log(data);
       axios.put(`http://localhost:5000/user/${userID}`,data)
       .then((res)=> {
           navigate('/home');
       })
       .catch(err => {
           alert(err);
       })
   }
 //    submitfunction end
    
    return(
        <>
        <div className="abc mt-2" >
        <h1>Edits In Details:-</h1>
        </div>
        <div className="formcontainer">
        <form className="mt-2" onSubmit={editHandler}>
        <div class="mb-3 container-sm ">
  <label for="exampleFormControlInput1" class="form-label">First Name</label>
  <input type="text" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter changes in First Name" onChange={e => setFirstName(e.target.value)} value={firstName}/>
  <label for="exampleFormControlInput1" class="form-label">Last Name</label>
  <input type="text" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter changes in Last Name" onChange={e => setLastName(e.target.value)} value={lastName}/>
  <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
  <input type="number" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter changes in Mobile Number" onChange={e => setMobNumber(e.target.value)} value={mobNumber}/>
  <label for="exampleFormControlInput1" class="form-label">Password</label>
  <input type="password" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter changes in Password" onChange={e => setPassword(e.target.value)} value={password}/>
  <div className='container'>
          <div className='row'>
            <div className='col d-flex justify-content-center'>
            <button type="submit" class="btn btn-success mt-2">Save Edit</button> 
            </div>
          </div>
        </div>    
</div>
</form>
</div>
</>
    );

}


export default Edituser;