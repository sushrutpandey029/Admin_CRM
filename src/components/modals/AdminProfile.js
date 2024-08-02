import React, { useState } from 'react'
import axios from 'axios'
import profile from '../images/agent profile.jpg'
import GetCookie from '../hooks/GetCookie';
import './AdminProfile.css'
import SetCookie from '../hooks/SetCookie';


function AdminProfile({onClose}) {

     const name = GetCookie('adminName');
     const admin_id = GetCookie('admin_id');
     const email = GetCookie('email');
     const acceessToken = GetCookie('accessToken');
    //  axios.defaults.withCredentials = true;

     const [updateValue, setUpdateValue] = useState({
      name : '',
      email : ''
     })

     const handleAdminUpdate = async (e) => {
        e.preventDefault();
        try {
          console.log('name',updateValue.name);
          console.log('email',updateValue.email);
          const resp = await axios.post('https://milleniance-lms.onrender.com/api/v1/admin/updateProfile',updateValue,
            {  headers : {
              'Authorization' : `Bearer ${acceessToken}`
            } }
          );
          console.log('resp',resp);
          alert(resp.data.message);
          SetCookie('adminName',updateValue.name);
          SetCookie('email',updateValue.email);
          window.location.reload();
        
        }catch (err) {
          console.log('err', err);
        }
     }

  return (
    <div className="d-flex justify-content-center align-items-center bg-light popup-container">
      
    <div className="d-flex flex-direction-column my-5 popup">
   
      <div className='data-container'>
        <div className=''>
                 <h3><strong>Profile</strong></h3>
        </div>
      
           <div className='profile'>
              <img src={profile} width={120} height={120} alt='agent_image'></img>
                 
           </div>
                <strong><p id='admin-id'>{admin_id}</p></strong>  
                <strong><p>{name}</p></strong>
                <strong><p>{email}</p></strong> 
                   
                  
           
      </div>
      <div>
      <div className='verticle-line'> </div>
        
      </div>
     

      <div className="p-2 form-container">
          
          <div className=" d-flex justify-content-between  ">
                <div>
                <h3>
                 <strong>Update </strong> 
                </h3>
                </div>
                <div className="close-button">
                 <button className="  btn-cancel  " onClick={onClose} >
                   {/* <p className="close-icon">&times;</p> */}
                   <i className="bi bi-x-lg close-icon"></i>
                  </button>

              </div>

           
          </div>


        <form className="row g-3" autoComplete="off">
          <div class=" col-md-6">
            <label for="name" class="form-label">
              <b>Full Name</b> 
            </label>
            <input
              type="text"
              defaultValue={name}
              name="name"
              class="form-control"
               autoFocus
              autoComplete="off"
              onChange={(e) => setUpdateValue({
                ...updateValue, name : e.target.value
              })}
            />
          </div>
          <div class=" col-md-6">
            <label for="email" class="form-label">
             <b>Email</b>  
            </label>
            <input
              type="email"
              defaultValue={email}
              name="email"
              class="form-control"
              onChange={(e) => setUpdateValue({
                ...updateValue, email : e.target.value
              })}
             />
          </div>
          <div class="  col-md-6">
            <label for="admin_id" class="form-label">
              <b>Admin Id</b>
            </label>
            <input
              type="text"
              defaultValue={admin_id}
              name="admin_id"
              class="form-control"
              disabled
             />
          </div>             
           
          <div className="d-flex justify-content-end">
            <button className="btn  btn-success" onClick={handleAdminUpdate}>Update</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default AdminProfile