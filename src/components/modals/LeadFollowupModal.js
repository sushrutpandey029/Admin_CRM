import React, { useEffect } from 'react'
import './LeadFollowupModal.css'
import CKEditor from '../hooks/CKEditor'
const LeadFollowupModal = ({onClose}) => {

 

  return (
    <div className="d-flex justify-content-center align-items-center bg-light popup-container">
    <div className="my-5 popup">
     

      <div className="p-2 ">
          
          <div className=" d-flex justify-content-between  ">
                <div>
                
                  <b>Add New Update -</b>   
                
                </div>
                <div className="close-button">
                 <button className="  btn-cancel  " onClick={onClose} >
                   {/* <p className="close-icon">&times;</p> */}
                   <i className="bi bi-x-lg close-icon"></i>
                  </button>
              </div>
           
          </div>

        <form className="row g-3" autoComplete="off">

          <div class=" col-md-4">
            <label for="followupdate" class="form-label">
             <b>Next Followup Date:</b>
            </label>
            <input
              type="date"
              name="followupdate"
              id="followupdate"
              class="form-control"
               
             />
          </div>
          <div class="col-4">
            <label for="followuptime" class="form-label">
              <b>Followup Time: </b>
            </label>
            <input
              type="time"
              name="followuptime"
              id="followuptime"
              class="form-control"
               
            />
          </div>
          <div class="  col-md-4">
            <label for="stage" class="form-label">
              <b>Stage:</b>
            </label>
            <input
              type="text"
              name="stage"
              id="stage"
              class="form-control"
               
            />
          </div>
          <div class="  col-md-4">
            <label for="status" class="form-label">
              <b>Status:</b>
            </label>
            <input
              type="text"
              name="status"
              id="status"
              class="form-control"
               
            />
          </div>
          <div class="  col-md-4">
            <label for="status" class="form-label">
              <b>Comments:</b>
            </label>               
          </div>
            <CKEditor/>

          <div className="d-flex justify-content-end">
            <button className="btn  btn-success"  >Update Staus</button> 
           </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default LeadFollowupModal
