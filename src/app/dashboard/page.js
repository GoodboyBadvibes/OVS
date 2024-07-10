import React from 'react'
import Dashboard from "@/Components/Dashboard"
import Dashbar from "@/Components/Dashbar";

const DashboardPage = () => {



  return (
    <div className='m-auto bg-dashboardgrey' style={{maxWidth:"1440px", overflowX:'auto'}}>
      <div className= '  left-0 justify-between items-start m-auto'  >
        <Dashbar/>
        <Dashboard/>
    </div>
    </div>
    
  )
}

DashboardPage.layout = false

export default DashboardPage