'use client'

import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import style from '../../Style/Dashboard style/dashboard.module.css'

const Dashboard = () => {

  const [expand, setExpand] = useState(false);
  const [component, setComponent] = useState('summary')


  return (
    <>

    {/* <style jsx>
      {
        `
        .clip{
          clip-path: inset(0 65px 0 0 )

        }
        `
      }
    </style> */}
       
       <div className={' h-screen bg-backdark float-start relative transition-all shadow-2xl '+(expand? style.dashboardNotExpanded : style.dashboardExpanded)} style={{color:'white'}} >

          <div className={' w-fit m-auto'} style={{paddingBottom:'70px'}}>
            
           { !expand &&<Image src={'/logo.png'} width={100} height={100} />}
           { expand &&<Image src={'/logocropped.png'} className=' sm:w-auto' width={35} height={35} />}
          </div>

          <div className='w-fit  m-auto '>
            <div className=' flex w-fit cursor-pointer hover:text-standard ' style={{ gap:'15px', fontSize:'14px',marginBottom:'16px'}} onClick={()=>{setComponent('summary')}}>
              <i className='ri-line-chart-fill'></i>
              {!expand &&<h1>Summary</h1>}
            </div>

            <div className='flex w-fit cursor-pointer hover:text-standard' style={{ gap:'15px', fontSize:'14px',marginBottom:'16px'}}  onClick={()=>{setComponent('website')}}>
              <i className='ri-flashlight-fill'></i>
              {!expand &&<h1>Website</h1>}
            </div>

            <div className='flex w-fit cursor-pointer hover:text-standard' style={{ gap:'15px', fontSize:'14px',marginBottom:'16px'}}  onClick={()=>{setComponent('messages')}}>
              <i className='ri-discuss-fill'></i>
              {!expand &&<h1>Messages</h1>}
            </div>

            <div className='flex w-fit cursor-pointer hover:text-standard' style={{ gap:'15px', fontSize:'14px',marginBottom:'16px'}}  onClick={()=>{setComponent('products')}}>
              <i className='ri-line-chart-fill'></i>
              {!expand &&<h1>Products</h1>}
            </div>

            <div className='flex w-fit cursor-pointer hover:text-standard' style={{ gap:'15px', fontSize:'14px',marginBottom:'16px'}}  onClick={()=>{setComponent('settings')}}>
              <i className='ri-settings-2-fill'></i>
              {!expand &&<h1>Settings</h1>}
            </div>
          </div>

          <div className='absolute border-backdark border-r-2 border-b-2 font-extrabold cursor-pointer' style={{backgroundColor:'white', color:'rgb(36,36,36)', right:'-4px',top:'75px', borderTopRightRadius:'3px', borderBottomRightRadius:'3px'}}>
            <i className={ expand? 'ri-arrow-right-wide-fill':'ri-arrow-left-wide-fill'} onClick={()=>{setExpand(!expand), console.log(expand)}}></i>
          </div>

       </div>
    </>

    
  )
}

export default Dashboard