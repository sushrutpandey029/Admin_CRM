import React,{useState,useEffect} from "react";
 import axios from 'axios'
import AgentUpdateModal from "../modals/AgentUpdateModal";
import GetCookie from "../hooks/GetCookie";
 
function AgentList() {
  const [showAgentUpdate, setShowAgentUpdate] = useState(false);
  const [agentData, setAgentData] = useState([]);  
 
  const handleNameModal = () => {
      setShowAgentUpdate(!showAgentUpdate);
  }

  const fetchAgents = async () => {      
    try {
      const acceessToken = GetCookie('accessToken')
      // const matchtoken = Cookies.get('accessToken');        
        // const response = await axios.get('https://milleniance-lms.onrender.com/api/v1/admin/getAllAgents', {
        //     headers: {
        //         'Authorization': `Bearer ${matchtoken}`
        //     }
        // });
        const response = await axios.get('https://milleniance-lms.onrender.com/api/v1/admin/getAllAgents',{
          headers : {
            'Authorization' : `Bearer ${acceessToken}`
          }
        })
        setAgentData(response.data.data)
     } catch (error) {
        console.log(error.message);       
    }
};

useEffect(() => {
  fetchAgents();
}, []);

  return (
    <div>
      <h3><strong>AgentList</strong></h3>
      <div>
        <table class="table table-bordered" >
          <thead>
            <tr >
               <th scope="col">agent_id</th>
              <th scope="col">full name</th>
              <th scope="col">address</th>
              <th scope="col">company_name</th>
              <th scope="col">phone_number</th>
              <th scope="col">email</th>
              <th scope="col">edit</th>
              <th scope="col">delete</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
               {
                agentData.map((agent) => (
                  <tr>
                       <td>{agent.agent_id}</td>
                       <td onClick={handleNameModal}>{agent.fullName}</td>                        
                        <td>{agent.address}</td>
                        <td>{agent.company_name}</td>
                        <td>{agent.phone_number}</td>
                        <td>{agent.email}</td>
                        <td>edit</td>
                        <td>delete</td>
                  </tr>
                ))
              }
           
           </tbody>
        </table>
        {
          showAgentUpdate && <AgentUpdateModal onClose={handleNameModal}/>
        }
      </div>
    </div>
  );
}

export default AgentList;
