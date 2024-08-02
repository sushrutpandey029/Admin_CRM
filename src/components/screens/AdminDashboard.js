import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './AdminDashboard.css'
import Leadlist from '../lists/Leadlist';
import AgentList from '../lists/AgentList';
import RegistrationScreen from './LoginRegistrationScreen/RegistrationScreen';
import LeadRegistration from './LoginRegistrationScreen/LeadRegistration';

    
function AdminDashboard() {
 
    const [showAgents, setShowAgents] = useState(true);
    const [showAddAgents, setShowAddAgents] = useState(false);
    const [showAddLeads, setShowAddLeads] = useState(false)

    const navigate = useNavigate();     

   const handleAgents = () => {
        setShowAgents(true);
    }

   const handleLeads = () => {
         setShowAgents(false);
   }

   const handleAddAgents = () => {
         setShowAddAgents(!showAddAgents);
   }

   const handleLeadAgents = () => {
         setShowAddLeads(!showAddLeads);
   }

  
  return (
    <div className='main-container' >
                    
                    {/* button for components */}
            <div className='d-flex flex-direction-row mb-4 justify-content-between '>
                  <div className=' d-flex flex-direction-row'>
                        <div className='me-2'>
                              <button onClick={handleAgents} className='btn btn-primary'> Agents </button>
                        </div>
                        <div>
                              <button onClick={handleLeads} className='btn btn-primary'> Leads </button>
                        </div>
                  </div>
                  <div  className=' d-flex flex-direction-row'>
                        <div className='me-2'>
                              <button onClick={handleAddAgents} className='btn btn-primary'> Add Agents</button>
                        </div>
                        <div>
                              <button onClick={handleLeadAgents} className='btn btn-primary'> Add Leads</button>
                        </div>
                        
                  </div>
              
            </div>

            {/* div for rendering sales and leads components */}
            <div>
              {
                 showAgents ?
                  <><AgentList/></> 
                  :
                   <><Leadlist/></>
              }
            </div>
            <div>
                  {
                        showAddAgents && <RegistrationScreen onClose={handleAddAgents}/>
                  }
            </div>
            <div>
                  {
                        showAddLeads && <LeadRegistration onClose={handleLeadAgents}/>
                  }
            </div>
           
    </div>
  )
}

export default AdminDashboard