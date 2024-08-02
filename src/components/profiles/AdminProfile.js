import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './AdminProfile.css'
import userprofile from '../images/profile4.png'
import GetCookie from '../hooks/GetCookie';
import RemoveCookie from '../hooks/RemoveCookie';
import agentprofile from '../images/agent profile.jpg';

function AdminProfile() {
  return(
    <div>
        AdminProfile
    </div>
  )
}
 
export default AdminProfile;


// function AdminProfile() {

//   const [showNav, setShowNav] = useState(true);
//   const name = GetCookie('adminName');
//   const navigate = useNavigate();
//   const adminName = GetCookie('adminName');

//   const handleLogout = () => {
//     RemoveCookie("accessToken");
//     RemoveCookie("refreshToken");
//     RemoveCookie('adminName');
//     navigate('/login');
//   };

//   return (
//     <div className={`body-area${showNav ? " body-pd" : ""}`}>
//       <header className={`header${showNav ? " body-pd" : ""}`}>
//         {/* toggle and heading */}
//         <div className="d-flex flex-direction-row">
//           <div className="header_toggle">
//             <i
//               className={`bi ${showNav ? "bi-x" : "bi-list"}`}
//               onClick={() => setShowNav(!showNav)}
//             />
//           </div>

//           <div className="ms-4">
//             <h2>
//               <strong style={{ color: "white" }}>Admin</strong>
             
//             </h2>
            
//           </div>
          
//         </div>
       
       
//         <div class="btn-group">
          
//         <div className="admin-Name">
//               <p style={{color  :'white'}}>Welcome, {name}</p>
//           </div>
          
//           <img
//             src={userprofile}
//             alt=""
//             style={{ height: "43px", width: "63px", maxWidth: "80px" }}
//             class="    dropdown-toggle dropdown-toggle-split"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//           />

//           {/* </button> */}

          

//           <ul class="dropdown-menu">
//             <div className=" d-flex flex-column justify-content-center align-items-center">
//               <li>
//                 <Link class="dropdown-item">
//                   Profile
//                 </Link>
//               </li>
//               <li>
//                 <Link class="dropdown-item">
//                   Settings
//                 </Link>
//               </li>

//               <li onClick={handleLogout}>
//                  <Link class="dropdown-item"  >
//                     Logout
//                   </Link>
//               </li>
//             </div>
//           </ul>
//         </div>
//       </header>
//       <div className={`l-navbar${showNav ? " show" : ""}`}>
//         <nav className="nav">
//           <div>
//             <div className="mb-3">
//               <Link className="nav_logo" rel="noopener">
//                 <i className="bi bi-alexa nav_logo-icon" />{" "}
//                 <span className="nav_logo-name">Dashboard</span>
//               </Link>
//             </div>

//             <div className="nav_list">
//               <div>
//                 <Link className="nav_link" rel="noopener">
//                   <i className="bi bi-check-circle nav_icon" />
//                   <span className="nav_name">Leads</span>
//                 </Link>
//               </div>
//               <div>
//                 <Link className="nav_link" rel="noopener">
//                   <i className="bi bi-person-check nav_icon" />
//                   <span className="nav_name">Opportunity</span>
//                 </Link>
//               </div>
//               <div>
//                 <Link className="nav_link" rel="noopener">
//                   <i className="bi bi-people nav_icon" />
//                   <span className="nav_name">Proposal</span>
//                 </Link>
//               </div>
//               <div>
//                 <Link className="nav_link" rel="noopener">
//                   <i className="bi bi-person-check nav_icon" />
//                   <span className="nav_name">Products</span>
//                 </Link>
//               </div>
//               <div>
//                 <Link className="nav_link" rel="noopener">
//                   <i className="bi bi-people nav_icon" />
//                   <span className="nav_name">Finance</span>
//                 </Link>
//               </div>
//               <div>
//                 <Link className="nav_link" rel="noopener">
//                   <i className="bi bi-person-check nav_icon" />
//                   <span className="nav_name">Timesheet</span>
//                 </Link>
//               </div>
//               <div>
//                 <Link className="nav_link" rel="noopener">
//                   <i className="bi bi-people nav_icon" />
//                   <span className="nav_name">Report</span>
//                 </Link>
//               </div>
//               <div>
//                 <Link className="nav_link" rel="noopener">
//                   <i className="bi bi-person-check nav_icon" />
//                   <span className="nav_name">User</span>
//                 </Link>
//               </div>
//               <div>
//                 <Link className="nav_link" rel="noopener">
//                   <i className="bi bi-people nav_icon" />
//                   <span className="nav_name">Trash</span>
//                 </Link>
//               </div>
//               <div>
//                 <Link className="nav_link" rel="noopener">
//                   <i className="bi bi-person-check nav_icon" />
//                   <span className="nav_name">Role</span>
//                 </Link>
//               </div>
//               <div>
//                 <Link className="nav_link" rel="noopener">
//                   <i className="bi bi-people nav_icon" />
//                   <span className="nav_name">Users</span>
//                 </Link>
//               </div>

              
//             </div>
//           </div>
          
//         </nav>
//       </div>


//            {/* <h4>Main Component</h4> */}
//       <div className="pt-4 pb-4 container-out">    
       
         
//          <div>

//             {/* profile image */}
//             <div className='profile-pic'>
//               <img src={agentprofile} height={150} width={150} alt='profile_pic'/>
//             </div>

//             {/* admin name */}
//             <div className='admin-name'>
//               <p>{adminName}</p>
//             </div>

//          </div>

//               {/*admin information */}
//          <div>

//          </div>
        
        
//       </div>
//     </div>
//   )
// }

// export default AdminProfile