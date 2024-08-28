'use client'

import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import style from '../../Style/Dashboard style/dashboard.module.css'
import navStyle from '../../Style/Dashboard style/dashbar.module.css'
import Summary from './Summary'
import Website from './Website'
import Transactions from './Transactions'
import Products from './Products'
import Settings from './Settings'
import Dashbar from './Dashbar'
import Content from './Content'

const Dashboard = () => {

  const [expand, setExpand] = useState(false);
  const [component, setComponent] = useState('Summary')

  const navExpand = ()=>{
    if(expand){
      document.querySelector('#dashbar').classList.remove('contentNotExpanded')
      document.querySelector('#dashbar').classList.add('contentExpanded')
    }else{
      document.querySelector('#dashbar').classList.remove('contentExpanded')
      document.querySelector('#dashbar').classList.add('contentNotExpanded')
    }
    
  }

  return (
    <>

    <div className= '  left-0 justify-between items-start m-auto ' style={{zIndex:'99'}}>
    <Dashbar title={component}/>

    <aside className=' relative' id='menu'>
      
       <div className={' h-screen bg-backdark fixed transition-all shadow-2xl z-10  '+(expand? style.dashboardNotExpanded : style.dashboardExpanded)} style={{color:'white'}} >

          <div className={' w-fit m-auto '+style.dashboardImage} >
            
           { !expand &&<Image src={'/logo.png'} width={100} height={100} priority={true} />}
           { expand &&<Image src={'/logocropped.png'} className=' sm:w-auto' width={35} height={35} priority={true}/>}
          </div>

          <div className='w-fit  m-auto '>
            <div className={' flex w-fit cursor-pointer hover:text-standard '+(component==='Summary'?" text-standard":" ")} style={{ gap:'15px', fontSize:'14px',marginBottom:'16px'}} onClick={()=>{setComponent('Summary')}}>
              <i className='ri-line-chart-fill'></i>
              {!expand &&<h1>Summary</h1>}
            </div>

            <div className={'flex w-fit cursor-pointer hover:text-standard '+(component==='Website'?" text-standard":" ")} style={{ gap:'15px', fontSize:'14px',marginBottom:'16px'}}  onClick={()=>{setComponent('Website')}}>
              <i className='ri-flashlight-fill'></i>
              {!expand &&<h1>Website</h1>}
            </div>

            <div className={'flex w-fit cursor-pointer hover:text-standard '+(component==='Transactions'?" text-standard":" ")} style={{ gap:'15px', fontSize:'14px',marginBottom:'16px'}}  onClick={()=>{setComponent('Transactions')}}>
              <i className='ri-discuss-fill'></i>
              {!expand &&<h1>Transactions</h1>}
            </div>

            <div className={'flex w-fit cursor-pointer hover:text-standard '+(component==='Products'?" text-standard":" ")} style={{ gap:'15px', fontSize:'14px',marginBottom:'16px'}}  onClick={()=>{setComponent('Products')}}>
              <i className='ri-line-chart-fill'></i>
              {!expand &&<h1>Products</h1>}
            </div>

            <div className={'flex w-fit cursor-pointer hover:text-standard '+(component==='Settings'?" text-standard":" ")} style={{ gap:'15px', fontSize:'14px',marginBottom:'16px'}}  onClick={()=>{setComponent('Settings')}}>
              <i className='ri-settings-2-fill'></i>
              {!expand &&<h1>Settings</h1>}
            </div>
          </div>

          <div className='absolute border-backdark border-r-2 border-b-2 font-extrabold cursor-pointer' style={{backgroundColor:'white', color:'rgb(36,36,36)', right:'-7px',top:'45px', borderTopRightRadius:'3px', borderBottomRightRadius:'3px'}}>
            <i className={ expand? 'ri-arrow-right-wide-fill':'ri-arrow-left-wide-fill'} onClick={()=>{setExpand(!expand), console.log(expand), navExpand()}}></i>
          </div>

       </div>
    </aside>
    </div>
       



     <Content component={component} expand={expand} />
     
      {/* This section is for dashboard mobile menu which is hidden for larger screens */}
      <div style={{backgroundColor:'rgb(36,36,36)', zIndex:'99999', color:'white'}} id='navMenu' className=' fixed top-0 sm:hidden w-full h-full hidden' >
        <div className=" flex justify-end">
          <i className=" ri-close-fill cursor-pointer text-end items-end border-2 " style={{margin:'20px 25px', fontSize:'15px', borderRadius:'100%', padding:'0px 4px'}} onClick={()=>{document.querySelector('#navMenu').classList.add('hidden')}}></i>
        </div>

        <Image className=' m-auto' src={'/logo.png'} width={150} height={150} priority={true}/>

        <div>
        <div  className=" text-center items-center w-fit  m-auto " style={{fontSize:'30px', marginTop:'50px'}}>
        
            <div className={' flex w-fit cursor-pointer hover:text-standard '+(component==='Summary'?" text-standard":" ")} style={{ gap:'15px', fontSize:'20px',marginBottom:'20px'}} onClick={()=>{setComponent('Summary'), document.querySelector('#navMenu').classList.add('hidden')}}>
              <i className='ri-line-chart-fill'></i>
              {<h1>Summary</h1>}
            </div>

            <div className={' flex w-fit cursor-pointer hover:text-standard '+(component==='Website'?" text-standard":" ")} style={{ gap:'15px', fontSize:'20px',marginBottom:'20px'}}  onClick={()=>{setComponent('Website'), document.querySelector('#navMenu').classList.add('hidden')}}>
              <i className='ri-flashlight-fill'></i>
              {<h1>Website</h1>}
            </div>

            <div className={' flex w-fit cursor-pointer hover:text-standard '+(component==='Transactions'?" text-standard":" ")} style={{ gap:'15px', fontSize:'20px',marginBottom:'20px'}}  onClick={()=>{setComponent('Transactions'), document.querySelector('#navMenu').classList.add('hidden')}}>
              <i className='ri-discuss-fill'></i>
              {<h1>Transactions</h1>}
            </div>

            <div className={' flex w-fit cursor-pointer hover:text-standard '+(component==='Products'?" text-standard":" ")} style={{ gap:'15px', fontSize:'20px',marginBottom:'20px'}}  onClick={()=>{setComponent('Products'), document.querySelector('#navMenu').classList.add('hidden')}}>
              <i className='ri-line-chart-fill'></i>
              {<h1>Products</h1>}
            </div>

            <div className={' flex w-fit cursor-pointer hover:text-standard '+(component==='Settings'?" text-standard":" ")} style={{ gap:'15px', fontSize:'20px',marginBottom:'20px'}}  onClick={()=>{setComponent('Settings'), document.querySelector('#navMenu').classList.add('hidden')}}>
              <i className='ri-settings-2-fill'></i>
              {<h1>Settings</h1>}
            </div>
          </div>

          <div className=' flex justify-center items-center ' style={{gap:'10px', marginTop:'50px'}}>

                <div className={' rounded-full  bg-standard '+navStyle.dp} style={{ padding:'25px'}} >
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

export default Dashboard