import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import leadicon from '../images/icons/leadusericon.png'
import './Leadlist.css'
import LeadFollowupModal from '../modals/LeadFollowupModal'
import { baseurl } from '../hooks/Base';
import GetCookie from '../hooks/GetCookie'

function Leadlist() {
 
  const [showLeadFollowup, setShowLeadFollowup] = useState(false);
  const [leads, setLeads] = useState([]);
  var serialN = 1;
  const url = baseurl;

  const handleshowLeadFollowup = () => {
    setShowLeadFollowup(!showLeadFollowup);
   }

  const fetchLeadData = async () => {
    const accessToken = GetCookie('accessToken');
     
      try {
          const response = await axios.get(url+'/getLeads',{
            headers : {
              'Authorization' : `Bearer ${accessToken}`
            }
          });
          setLeads(response.data.data)
          console.log('response',  response);
       }catch(err){
        console.log('err',err);
      }
     
  }

   useEffect(() => {
    fetchLeadData();
   },[])
 
  return (
    <div>
       <h3><strong>Leadlist</strong></h3>
      <div>
        <table class="table table-bordered"    >
          <thead>
            <tr>
              <th>
                <input type='checkbox'/> 
              </th>
              <th>SL No.</th>
              <th>Agent Name</th>
              <th>Agent Id</th>
              <th>Action</th>
              <th>ID</th>
              <th>Name</th>
              <th>Company Name</th>
              <th>Executives</th>
              <th>Source</th>
               <th>Status</th>
              <th>Follow up Date</th>
              <th>Email Id</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
          {
             
            leads.map((lead) => (
              <tr>
              <td>
                <input type='checkbox'/>
              </td>
              <td>{serialN++}</td>
              <td>
                   {lead.agent_name} 
              </td>
              <td>{lead.agent_id}</td>
              <td > 
                <i class="bi bi-arrows-fullscreen"/>
                <i class="bi bi-stopwatch" 
                style={{marginLeft:'10px'}}
                onClick={handleshowLeadFollowup}/>
                <i class="bi bi-three-dots-vertical" style={{marginLeft:'8px'}}/>
              </td>             
              <td>{lead.lead_id}</td>
              <td>{lead.name}</td>
              <td>{lead.companyName}</td>
              <td> 
                <img src={leadicon} alt='lead_icon' height={30} width={35}/>
              </td>             
              <td>source</td>
              <td>{lead.status}</td>
              <td>{lead.followUpDate}</td>
              <td>{lead.email}</td>
            </tr>
            ))
          }
          </tbody>
        </table>
        {
        showLeadFollowup && <LeadFollowupModal onClose={handleshowLeadFollowup}/>
      }
      </div>
    </div>
  )
}

export default Leadlist