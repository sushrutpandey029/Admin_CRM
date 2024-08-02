import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminDesk.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import userprofile from "../images/profile4.png";
import AdminDashboard from "./AdminDashboard";
import RemoveCookie from "../hooks/RemoveCookie";
import GetCookie from "../hooks/GetCookie";
import AdminProfile from "../modals/AdminProfile";

function AdminDesk() {
  const [showNav, setShowNav] = useState(true);
  const [showAdminProfile, setShowAdminProfile] = useState(false);
  const navigate = useNavigate();

   const name =  GetCookie('adminName');

  // const handleLogout =async (e) => {
  //   e.preventDefault();
  //   await  axios.post('https://milleniance-lms.onrender.com/api/v1/admin/logout')
  //   .then(res => {
  //     console.log('result : ', res)
  //     RemoveCookie('accessToken');
  //     //  cookies.remove('accessToken',{path:'/',domain: ".localhost.com" })
  //     //  cookies.remove('refreshToken',{path:'/' ,domain: ".localhost.com"});
  //     navigate('/login');
  //     alert('successfully logged out');
  //   })
  //   .catch(err => {
  //     RemoveCookie('accessToken');
  //     console.log("error : ",err);
  //   })
  // }

  const handleLogout = () => {
    RemoveCookie("accessToken");
    RemoveCookie("refreshToken");
    RemoveCookie('adminName');
    RemoveCookie('admin_id');
    RemoveCookie('email');
    navigate("/login");
  };

  const handleShowAdminProfile = () => {
    setShowAdminProfile(!showAdminProfile);
  }

  return (
    <div className={`body-area${showNav ? " body-pd" : ""}`}>
      <header className={`header${showNav ? " body-pd" : ""}`}>
        {/* toggle and heading */}
        <div className="d-flex flex-direction-row">
          <div className="header_toggle">
            <i
              className={`bi ${showNav ? "bi-x" : "bi-list"}`}
              onClick={() => setShowNav(!showNav)}
            />
          </div>

          <div className="ms-4">
            <h2>
              <strong style={{ color: "white" }}>Admin</strong>
             
            </h2>
            
          </div>
          
        </div>
       
       
        <div class="btn-group">

        
          <div className="">
             <p style={{color  :'white',marginTop:'10px'}}>Welcome, {name}</p>
          </div>
             
           
          <img
            src={userprofile}
            alt=""
            style={{ height: "43px", width: "63px", maxWidth: "80px" }}
            class="    dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          />

          {/* </button> */}

          

          <ul class="dropdown-menu">
            <div className=" d-flex flex-column justify-content-center align-items-center">
              <li onClick={handleShowAdminProfile}>
                <Link class="dropdown-item">
                  Profile
                </Link>
              </li>
              <li>
                <Link class="dropdown-item">
                  Settings
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="/demoprofile">
                  demo
                </Link>
              </li>

              <li onClick={handleLogout}>
                 <Link class="dropdown-item" >
                    Logout
                  </Link>
              </li>
            </div>
          </ul>
        </div>

      </header>
      <div className={`l-navbar${showNav ? " show" : ""}`}>
        <nav className="nav">
          <div>
            <div className="mb-3">
              <Link className="nav_logo" rel="noopener">
                <i className="bi bi-alexa nav_logo-icon" />{" "}
                <span className="nav_logo-name">Dashboard</span>
              </Link>
            </div>

            <div className="nav_list">
              <div>
                <Link className="nav_link" rel="noopener">
                  <i className="bi bi-check-circle nav_icon" />
                  <span className="nav_name">Leads</span>
                </Link>
              </div>
              
              
              
              <div>
                <Link className="nav_link" rel="noopener">
                  <i className="bi bi-person-check nav_icon" />
                  <span className="nav_name">Timesheet</span>
                </Link>
              </div>
 
              <div>
                <Link className="nav_link" rel="noopener">
                  <i className="bi bi-person-check nav_icon" />
                  <span className="nav_name">User</span>
                </Link>
              </div>
              
              <div>
                <Link className="nav_link" rel="noopener">
                  <i className="bi bi-person-check nav_icon" />
                  <span className="nav_name">Role</span>
                </Link>
              </div>             
              
            </div>
          </div>
          
        </nav>
      </div>
      <div className="pt-4 pb-4 main-container">
        {/* <h4>Main Component</h4> */}
        <AdminDashboard />
        {
          showAdminProfile && <AdminProfile onClose={handleShowAdminProfile}/>
        }
      </div>
    </div>
  );
}

export default AdminDesk;
