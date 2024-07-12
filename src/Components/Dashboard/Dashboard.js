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

const Dashboard = () => {

  const [expand, setExpand] = useState(false);
  const [component, setComponent] = useState('summary')

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

    <div className= '  left-0 justify-between items-start m-auto'  >
    <Dashbar title={component}/>

    <aside className=' relative'>
      
       <div className={' h-screen bg-backdark fixed transition-all shadow-2xl z-10  '+(expand? style.dashboardNotExpanded : style.dashboardExpanded)} style={{color:'white'}} >

          <div className={' w-fit m-auto '+style.dashboardImage} >
            
           { !expand &&<Image src={'/logo.png'} width={100} height={100} priority={true} />}
           { expand &&<Image src={'/logocropped.png'} className=' sm:w-auto' width={35} height={35} priority={true}/>}
          </div>

          <div className='w-fit  m-auto '>
            <div id='Summary' className={' flex w-fit cursor-pointer hover:text-standard '+(component==="summary"?" text-standard":" ")} style={{ gap:'15px', fontSize:'14px',marginBottom:'16px'}} onClick={()=>{setComponent('summary')}}>
              <i className='ri-line-chart-fill'></i>
              {!expand &&<h1>Summary</h1>}
            </div>

            <div id='Website' className={'flex w-fit cursor-pointer hover:text-standard '+(component==="website"?" text-standard":" ")} style={{ gap:'15px', fontSize:'14px',marginBottom:'16px'}}  onClick={()=>{setComponent('website')}}>
              <i className='ri-flashlight-fill'></i>
              {!expand &&<h1>Website</h1>}
            </div>

            <div id='Transactions' className={'flex w-fit cursor-pointer hover:text-standard '+(component==="transactions"?" text-standard":" ")} style={{ gap:'15px', fontSize:'14px',marginBottom:'16px'}}  onClick={()=>{setComponent('transactions')}}>
              <i className='ri-discuss-fill'></i>
              {!expand &&<h1>Transactions</h1>}
            </div>

            <div id='Products' className={'flex w-fit cursor-pointer hover:text-standard '+(component==="products"?" text-standard":" ")} style={{ gap:'15px', fontSize:'14px',marginBottom:'16px'}}  onClick={()=>{setComponent('products')}}>
              <i className='ri-line-chart-fill'></i>
              {!expand &&<h1>Products</h1>}
            </div>

            <div id='Settings' className={'flex w-fit cursor-pointer hover:text-standard '+(component==="settings"?" text-standard":" ")} style={{ gap:'15px', fontSize:'14px',marginBottom:'16px'}}  onClick={()=>{setComponent('settings')}}>
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
       

      { component==='summary'&& <Summary  expand={expand} />}
      { component==='website'&& <Website  expand={expand} />}
      { component==='transactions'&& <Transactions  expand={expand} />}
      { component==='products'&& <Products  expand={expand} />}
      { component==='settings'&& <Settings  expand={expand} />}


     

      <div style={{backgroundColor:'rgb(36,36,36)', color:'white'}} id='navMenu' className=' fixed top-0 sm:hidden w-full h-full hidden' >
        <div className=" flex justify-end">
          <i className=" ri-close-fill cursor-pointer text-end items-end border-2 " style={{margin:'20px 25px', fontSize:'15px', borderRadius:'100%', padding:'0px 4px'}} onClick={()=>{document.querySelector('#navMenu').classList.add('hidden')}}></i>
        </div>

        <Image className=' m-auto' src={'/logo.png'} width={150} height={150} priority={true}/>

        <div>
        <div  className=" text-center items-center w-fit  m-auto " style={{fontSize:'30px', marginTop:'50px'}}>
        
            <div className={' flex w-fit cursor-pointer hover:text-standard '+(component==="summary"?" text-standard":" ")} style={{ gap:'15px', fontSize:'20px',marginBottom:'20px'}} onClick={()=>{setComponent('summary'), document.querySelector('#navMenu').classList.add('hidden')}}>
              <i className='ri-line-chart-fill'></i>
              {<h1>Summary</h1>}
            </div>

            <div className={' flex w-fit cursor-pointer hover:text-standard '+(component==="website"?" text-standard":" ")} style={{ gap:'15px', fontSize:'20px',marginBottom:'20px'}}  onClick={()=>{setComponent('website'), document.querySelector('#navMenu').classList.add('hidden')}}>
              <i className='ri-flashlight-fill'></i>
              {<h1>Website</h1>}
            </div>

            <div className={' flex w-fit cursor-pointer hover:text-standard '+(component==="transactions"?" text-standard":" ")} style={{ gap:'15px', fontSize:'20px',marginBottom:'20px'}}  onClick={()=>{setComponent('transactions'), document.querySelector('#navMenu').classList.add('hidden')}}>
              <i className='ri-discuss-fill'></i>
              {<h1>Transactions</h1>}
            </div>

            <div className={' flex w-fit cursor-pointer hover:text-standard '+(component==="products"?" text-standard":" ")} style={{ gap:'15px', fontSize:'20px',marginBottom:'20px'}}  onClick={()=>{setComponent('products'), document.querySelector('#navMenu').classList.add('hidden')}}>
              <i className='ri-line-chart-fill'></i>
              {<h1>Products</h1>}
            </div>

            <div className={' flex w-fit cursor-pointer hover:text-standard '+(component==="settings"?" text-standard":" ")} style={{ gap:'15px', fontSize:'20px',marginBottom:'20px'}}  onClick={()=>{setComponent('settings'), document.querySelector('#navMenu').classList.add('hidden')}}>
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