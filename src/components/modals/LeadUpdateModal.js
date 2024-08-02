import React from 'react'
import call from '../images/icons/call1.png'
import message from '../images/icons/message.png'
import gmail from '../images/icons/gmail.png'
import whatsapp from '../images/icons/whatsapp.png'
import profile from '../images/agent profile.jpg'

function LeadUpdateModal({onClose}) {
  return (
    <div className="d-flex justify-content-center 
    align-items-center bg-light popup-container ">
      
      <div className="d-flex flex-direction-column my-5 popup">

        <div className='data-container'>
             <div className='profile'>
                <img src={profile} width={120} height={120} alt='agent_image'></img>
             </div>
             <div className='profile-icon'>
                <img src={call} alt='icon'></img>
                <img src={message} alt='icon'></img>
                <img src={gmail} alt='icon'></img>
                <img src={whatsapp} alt='icon'></img>
              </div>
             <div className='user-info'>
                    <p>Name : Author</p>
                    <p>Email : test@gmail.com</p>
                    <p>Contact : 0000000000</p>
                    <p>Company Name : test</p>
                    <p>Address : address</p>
             </div>
        </div>
       

        <div className="p-2 form-container">
            
            <div className=" d-flex justify-content-between  ">
                  <div>
                  <h2>
                     <strong>Update</strong>  
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
              <label for="full_name" class="form-label">
                Full Name
              </label>
              <input
                type="text"
                name="full_name"
                class="form-control"
                placeholder="full name  "
                autoFocus
                autoComplete="off"
              />
            </div>
            <div class=" col-md-6">
              <label for="email" class="form-label">
                Email 
              </label>
              <input
                type="email"
                name="email"
                class="form-control"
                placeholder="email"
              />
            </div>
            <div class="  col-md-6">
              <label for="phone_number" class="form-label">
                Phone Number
              </label>
              <input
                type="text"
                name="phone_number"
                class="form-control"
                placeholder="phone number"
              />
            </div>
            <div class="  col-md-6">
              <label for="company_name" class="form-label">
                Company Name
              </label>
              <input
                type="text"
                name="company_name"
                class="form-control"
                placeholder="company name"
              />
            </div>

            <div class="col-12">
              <label for="address" class="form-label">
                Address{" "}
              </label>
              <input
                type="text"
                name="address"
                class="form-control"
                placeholder="address"
              />
            </div>
            <div class="  col-md-6">
              <label for="password" class="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                class="form-control"
                placeholder="password"
              />
            </div>
            <div class="  col-md-6">
              <label for="confirmpassword" class="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirm_password"
                class="form-control"
                placeholder="confirm password"
              />
            </div>

            <div className="d-flex justify-content-end">
              <button className="btn  btn-primary">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LeadUpdateModal