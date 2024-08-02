//Agent Registration Form

import React,{useState, useEffect} from "react";
import './RegistrationScreen.css'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import GetCookie from "../../hooks/GetCookie";
 
function RegistrationScreen({onClose}) {

  const [registerValue, setRegisterValue] = useState({  
     
    fullName:"",
    address:"",
    company_name:"",
    phone_number:"",
    email:"",
    password:""

  })

  const navigate = useNavigate();

  const handleRegister =async (e) => {
    e.preventDefault();
    try {
        let resp = await axios.post('https://milleniance-lms.onrender.com/api/v1/agent/register',registerValue);
        console.log('data : ', resp);
          if(resp.data.status === "true") {
            alert(resp.data.message);
           }
     }catch (err) {
       console.log('err ',err)
    }  
  }

  useEffect(() => {
    const accessToken = GetCookie('accessToken');
    if(accessToken && accessToken !== 'undefined') {
      navigate('/');
    }
  },[])

  return (
    <div className="d-flex justify-content-center align-items-center bg-light popup-container">
      <div className=" my-5 popup">
       

        <div className="p-2 ">
            
            <div className=" d-flex justify-content-between  ">
                  <div>
                  <h2>
                    <strong></strong>Agent Registration Form
                  </h2>
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
              <label for="fullName" class="form-label">
               <b> Full Name</b>
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                class="form-control"
                placeholder="full name  "
                autoFocus
                onChange={(e) => setRegisterValue({
                  ...registerValue, fullName : e.target.value
                })}
               />
            </div>
            <div class="col-6">
              <label for="address" class="form-label">
                <b>Address </b>
              </label>
              <input
                type="text"
                name="address"
                id="address"
                class="form-control"
                placeholder="address"
                onChange={(e) => setRegisterValue({
                  ...registerValue, address : e.target.value
                })}
              />
            </div>
            <div class="  col-md-6">
              <label for="company_name" class="form-label">
                <b>Company Name</b>
              </label>
              <input
                type="text"
                name="company_name"
                id="company_name"
                class="form-control"
                placeholder="company name"
                onChange={(e) => setRegisterValue({
                  ...registerValue, company_name : e.target.value
                })}
              />
            </div>
            <div class="  col-md-6">
              <label for="phone_number" class="form-label">
                <b>Phone Number</b>
              </label>
              <input
                type="text"
                name="phone_number"
                id="phone_number"
                class="form-control"
                placeholder="phone number"
                onChange={(e) => setRegisterValue({
                  ...registerValue, phone_number : e.target.value
                })}
              />
            </div>
            {/* <div class="  col-md-6">
              <label for="agent_id" class="form-label">
                <b>Agent Id</b>
              </label>
              <input
                type="text"
                name="agent_id"
                id="agent_id"
                class="form-control"
                placeholder="agent id"
                onChange={(e) => setRegisterValue({
                  ...registerValue, agent_id : e.target.value
                })}
              />
            </div> */}
            <div class=" col-md-6">
              <label for="email" class="form-label">
                <b>Email</b> 
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="form-control"
                placeholder="email"
                onChange={(e) => setRegisterValue({
                  ...registerValue, email : e.target.value
                })}
              />
            </div>
           
            <div class="  col-md-6">
              <label for="password" class="form-label">
                <b>Password</b>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                class="form-control"
                placeholder="password"
                onChange={(e) => setRegisterValue({
                  ...registerValue, password : e.target.value
                })}
              />
            </div>
            

          
           
            

            <div className="d-flex justify-content-end">
              <button className="btn  btn-success" onClick={handleRegister}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationScreen;
