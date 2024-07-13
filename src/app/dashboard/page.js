import React from 'react'
import Dashboard from "@/Components/Dashboard/Dashboard"

const DashboardPage = () => {



  return (
    <div className='m-auto bg-dashboardgrey overflow-x-hidden' style={{maxWidth:"1440px", overflowX:'hidden'}}>
      
        <Dashboard/>
    {/* </div> */}
    </div>
    
  )
}

DashboardPage.layout = false

export default DashboardPage