import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from "axios";


const Home = () => {
    
  useEffect(() => {
    axios.get("http://localhost:5000/user")
      .then(async(res) => {
        const rawdata = await res.data;
        console.log(rawdata);
        setData(rawdata);
      }).catch(err => console.log(err));
  }, [])
  const [data, setData] = useState([]);
  console.log(data);



  
    return(
        <div >
      
        <div className='container'>
          <div className='row'>
            <div className='col d-flex justify-content-end'>
          <NavLink exact to="/newuserform"><button type="button" class=" mt-3 btn btn-success" >Add New User</button></NavLink>
  
            </div>
  
          </div>
        </div>
        
        
  
       
  
  
  
  
        
        
  
            <table class="table">
  
              <thead>
                <tr>
                  <th scope="col">Sr.No.</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Mobile Number</th>
                  <th scope='col'>Edit user</th>
                  <th scope='col'>Delete user</th>
                </tr>
              </thead>
              <tbody>
              {data.map((row, index) =>  {
                return(
                
                <tr >
                  <td scope="row">{index+1}</td>
                  <td>{row.firstName}</td>
                  <td>{row.lastName}</td>
                  <td>{row.mobNumber}</td>
                  <td >
                    <NavLink exact to={`/edituser/${row._id}`}><button type="button" class="btn btn-success  btn-sm" >Edit User</button></NavLink>
                  </td>
                  <td >
                    <NavLink exact to={`/delete/${row._id}`}><button type="button" class="btn btn-danger btn-sm">Delete User</button></NavLink>
                 
 
 
                    
                  </td>
                </tr>
               
            
                );
              })}
                </tbody>
              
            </table>
  
  
          
  
        
  
      </div>

    );
}

export default Home;