'use client'

import React, { useState } from 'react'
import style from '../../Style/Dashboard style/dashbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Dashbar = () => {


  const [navMenu,setNavMenu] = useState(false)

  return (
    <>
      <div className=' shadow-2xl'  style={{}}>
       <div id='dashbar' className={style.nav+ ' contentExpanded '} >
        <div className=' hidden  sm:flex justify-between items-center'> 
           <div>
            <h1 className={ style.header}>Dashboard</h1>
            <h3 className={ style.title}>Summary</h3>
          </div>

          <div>
            <div className=' flex items-center justify-between' style={{gap:'20px'}}>

              <div className=' rounded-full ' style={{padding:'7px', backgroundColor:'#bebebe'}}>
                <Image  src={'/noNotificationIcon.png'} width={20} height={20} />
              </div>

              <div className=' flex justify-between items-center' style={{gap:'10px'}}>

                <div className={' rounded-full  bg-standard '+style.dp}  >
                  {/* <Image src={'/dp.png'} className=' ' style={{backgroundImage:' ', borderRadius:'100%',objectFit:'cover',objectPosition:'cover'}}  width={50} height={50} /> */}
                </div>

                <div>
                  <h1 className='' style={{fontSize:'14px', fontWeight:'700',}}>Mighty Ness</h1>
                  <p style={{fontSize:'10px', fontWeight:'400',}}>Mightyness@gmail.com</p>
                </div>

                <i className=' ri-arrow-down-wide-fill ' style={{color:'#1e1432', fontWeight:'700', cursor:'pointer'}}></i>

              </div>
            </div>
          </div>
         </div>
         
            <i className={" ri-menu-fill float-end  sm:hidden cursor-pointer "+ (navMenu?' ':' ')} style={{fontSize:'25px'}} onClick={()=>{setNavMenu(true)}}></i>
        </div >
        
      </div>












      <div style={{backgroundColor:'rgb(36,36,36)', color:'white'}} className= {navMenu?"fixed sm:hidden w-full h-full":'hidden'}>
        <div className=" flex justify-end">
          <i className=" ri-close-fill cursor-pointer text-end items-end border-2 " style={{margin:'20px 25px', fontSize:'15px', borderRadius:'100%', padding:'0px 4px'}} onClick={()=>{setNavMenu(false)}}></i>
        </div>

        <Image className=' m-auto' src={'/logo.png'} width={150} height={150} priority={true}/>

        <div>
        <div  className=" text-center items-center w-fit  m-auto " style={{fontSize:'30px', marginTop:'50px'}}>
        
            <div className=' flex w-fit cursor-pointer hover:text-standard ' style={{ gap:'15px', fontSize:'20px',marginBottom:'20px'}} onClick={()=>{setComponent('summary')}}>
              <i className='ri-line-chart-fill'></i>
              {<h1>Summary</h1>}
            </div>

            <div className='flex w-fit cursor-pointer hover:text-standard' style={{ gap:'15px', fontSize:'20px',marginBottom:'20px'}}  onClick={()=>{setComponent('website')}}>
              <i className='ri-flashlight-fill'></i>
              {<h1>Website</h1>}
            </div>

            <div className='flex w-fit cursor-pointer hover:text-standard' style={{ gap:'15px', fontSize:'20px',marginBottom:'20px'}}  onClick={()=>{setComponent('messages')}}>
              <i className='ri-discuss-fill'></i>
              {<h1>Messages</h1>}
            </div>

            <div className='flex w-fit cursor-pointer hover:text-standard' style={{ gap:'15px', fontSize:'20px',marginBottom:'20px'}}  onClick={()=>{setComponent('products')}}>
              <i className='ri-line-chart-fill'></i>
              {<h1>Products</h1>}
            </div>

            <div className='flex w-fit cursor-pointer hover:text-standard' style={{ gap:'15px', fontSize:'20px',marginBottom:'20px'}}  onClick={()=>{setComponent('settings')}}>
              <i className='ri-settings-2-fill'></i>
              {<h1>Settings</h1>}
            </div>
          </div>

          <div className=' flex justify-center items-center ' style={{gap:'10px', marginTop:'50px'}}>

                <div className={' rounded-full  bg-standard '+style.dp} style={{ padding:'25px'}} >
                  {/* <Image src={'/dp.png'} className=' ' style={{backgroundImage:' ', borderRadius:'100%',objectFit:'cover',objectPosition:'cover'}}  width={50} height={50} /> */}
                </div>

                <div>
                  <h1 className='' style={{fontSize:'14px', fontWeight:'700',}}>Mighty Ness</h1>
                  <p style={{fontSize:'10px', fontWeight:'400',}}>Mightyness@gmail.com</p>
                </div>

                <i className=' ri-arrow-down-wide-fill ' style={{color:'white', fontWeight:'700', cursor:'pointer'}}></i>

              </div>
        </div>
 
      </div>
    </>
    
  )
}

export default Dashbar