import React from "react";
import './LeadRegistration.css'
  
function LeadRegistration({onClose}) {
  return (
    <div className="d-flex justify-content-center align-items-center bg-light popup-container   ">
      <div className="   popup">
       

        <div className="p-2 ">
            
            <div className=" d-flex justify-content-between  ">
                  <div>
                  <h2>
                     Add New Lead 
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
            <div class=" col-md-4">
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
            <div class="  col-md-4">
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
            <div class="  col-md-4">
              <label for=" executive" class="form-label">
                Executive
              </label>
              <input
                type="text"
                name="executive"
                class="form-control"
                placeholder="executive "
              />
            </div>
            <div class=" col-md-4">
              <label for="source" class="form-label">
                Source 
              </label>
              <input
                type="email"
                name="source"
                class="form-control"
                placeholder="source"
              />
            </div>
            <div class="  col-md-4">
              <label for="products" class="form-label">
                Products
              </label>
              <input
                type="text"
                name=" products"
                class="form-control"
                placeholder="products"
              />
            </div>
            <div class="  col-md-4">
              <label for="stage" class="form-label">
                Stage
              </label>
              <input
                type="text"
                name="stage"
                class="form-control"
                placeholder="stage"
              />
            </div>
            <div class="  col-md-4">
              <label for="status" class="form-label">
                Status  
              </label>
              <input
                type="text"
                name="status"
                class="form-control"
                placeholder=" status"
              />
            </div>
            <div class="  col-md-4">
              <label for="zipcode" class="form-label">
                Zipcode
              </label>
              <input
                type="text"
                name="zipcode"
                class="form-control"
                placeholder="  zipcode"
              />
            </div>
            <div class="  col-md-4">
              <label for="follow_up_date" class="form-label">
                Follow up Date    
              </label>
              <input
                type="date"
                name=" follow_up_date"
                class="form-control"
                placeholder="  follow up date"
              />
            </div>
            <div class="  col-md-4">
              <label for=" state" class="form-label">
                State  
              </label>
              <input
                type="text"
                name="state"
                class="form-control"
                placeholder="  state"
              />
            </div>
            <div class="  col-md-4">
              <label for="address" class="form-label">
                Address  
              </label>
              <input
                type="text"
                name="address"
                class="form-control"
                placeholder="  address"
              />
            </div>
            <div class="  col-md-4">
              <label for="email" class="form-label">
                Email Id  
              </label>
              <input
                type="text"
                name="email"
                class="form-control"
                placeholder="email  "
              />
            </div>
            <div class="  col-md-4">
              <label for="contact" class="form-label">
                Contact  
              </label>
              <input
                type="text"
                name="contact"
                class="form-control"
                placeholder="contact  "
              />
            </div>
           

            <div class="col-md-4 ">
              <label for="city" class="form-label">
                City
              </label>
              <input
                type="text"
                name="city"
                class="form-control"
                placeholder="city"
              />
            </div>
            
            

            <div className="d-flex justify-content-end">
              <button className="btn  btn-success">Save Leads</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LeadRegistration;
