import React from 'react'
import Dashboard from "@/Components/Dashboard"
import Dashbar from "@/Components/Dashbar";
import Summary from '../../Components/Summary';

const DashboardPage = () => {



  return (
    <div className='m-auto' style={{maxWidth:"1440px"}}>
      <div className= ' fixed left-0 justify-between items-start m-auto'  >
        <Dashbar/>
        <Dashboard/>
        
        {/* <Summary /> */}
    </div>
    </div>
    
  )
}

DashboardPage.layout = false

export default DashboardPage