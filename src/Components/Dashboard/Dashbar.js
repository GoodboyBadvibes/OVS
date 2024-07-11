'use client'

import React from 'react'
import style from '../../Style/Dashboard style/dashbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Dashbar = () => {

  

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
         
            <i className=" ri-menu-fill float-end  sm:hidden cursor-pointer " style={{fontSize:'25px', float:'inline-end'}} onClick={()=>{document.querySelector('#navMenu').classList.remove('hidden')}}></i>
        </div >
        
      </div>












      
    </>
    
  )
}

export default Dashbar