import React from 'react'
import Dashboard from "@/Components/Dashboard/Dashboard"
import Dashbar from "@/Components/Dashboard/Dashbar";

const DashboardPage = () => {



  return (
    <div className='m-auto bg-dashboardgrey' style={{maxWidth:"1440px"}}>
      <div className= '  left-0 justify-between items-start m-auto'  >
        <Dashbar/>
        <Dashboard/>
    </div>
    </div>
    
  )
}

DashboardPage.layout = false

export default DashboardPage