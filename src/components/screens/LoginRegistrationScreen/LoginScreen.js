import React,{useState, useEffect} from "react";
import axios from "axios";
 import { useNavigate } from "react-router-dom";
import SetCookie from "../../hooks/SetCookie";
import RemoveCookie from "../../hooks/RemoveCookie";
import './LoginScreen.css'
import GetCookie from "../../hooks/GetCookie";


function LoginScreen() {

  // const [adminName, setAdminName] = useState('');
  const [loginValue, setLoginValue] = useState({
    id : '',
    password : ''
  });
  const [errorMessage, setErrorMessage] = useState(false);

  const navigate = useNavigate();

  const handleLogin =  (e) => {
    e.preventDefault();
     axios.post('https://milleniance-lms.onrender.com/api/v1/admin/login',loginValue)
    .then(res =>  {
        // if(res.data.success === "true"){
          console.log("output : ",res);
          RemoveCookie('accessToken');
          RemoveCookie('refreshToken');
          RemoveCookie('adminName');
          SetCookie('accessToken', res.data.data.accessToken);
          SetCookie('refreshToken', res.data.data.refreshToken );
          SetCookie('adminName',res.data.data.admin.name);
          SetCookie('admin_id',res.data.data.admin.admin_id);
          SetCookie('email',res.data.data.admin.email);
          console.log('name',res.data.data.admin.name);
          // setErrorMessage(false);
          navigate('/');
        // }       
           
    })
    .catch(err => {
      setErrorMessage(true);
    })
  }

  useEffect(() => {
    const accessToken = GetCookie('accessToken');
    if(accessToken && accessToken !== 'undefined') {
      navigate('/');
    }
  },[])

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 outer-container">
      <div className="input-container   mb-2 border rounded-4  ">
       

        {/* <div className="p-4 mb-2 bg-white "> */}
        <div className=" d-flex justify-content-center ">
          <h2> <strong>Admin</strong>  </h2>
        </div>

          <form onSubmit={ handleLogin}>
            <div class="mb-4">
              {
                errorMessage &&  <p style={{color:'red'}}>Email or password is incorrect. Please try again</p>                    
              }
              <label for="id" class="form-label">                
               <b className="label">Login Id</b> 
              </label>
              <input
                type="text"
                name="id"
                class="form-control form-rounded"
                placeholder="email or agent id"
                onChange={(e) => setLoginValue({...loginValue,id :  e.target.value})}
              />
            </div>

            <div class="mb-4">
              <label for="password" class="form-label">
               <b className="label">Password</b> 
              </label>
              <input
                type="password"
                name="password"
                class="form-control form-rounded"
                placeholder="password"
                onChange={(e) => setLoginValue({...loginValue,password: e.target.value})}
              />
            </div>

            <div className="d-flex justify-content-center mt-5 ">
              <button className="login-button" >Login</button>
            </div>
          </form>

        {/* </div> */}
      </div>
    </div>
  );
}

export default LoginScreen;
