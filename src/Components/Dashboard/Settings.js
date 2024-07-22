import React, { useState } from 'react'
import style from '../../Style/Dashboard style/settings.module.css'
import UserProfile from './settings/UserProfile'
import ChangePassword from './settings/ChangePassword'
import Notifications from './settings/Notifications'

const Settings = () => {

  const [setting, setSetting] = useState('profile')
  
  const scrollSettings =(id,num) =>{
  //  document.querySelector(id).scrollIntoView({behavior:'smooth', inline:'end',block:'start'})
   document.querySelector(id).scrollTo({left:num, behavior:'smooth'})
   window.scrollTo({top:0, behavior:'instant'})
  //  document.querySelector(id).scrollTo(num, 1000)
  //  document.querySelector("#settings").scrollTo({top:1000})
  }


  return (
    <>
     <div id='settings' className={style.component+ ' flex justify-between gap-5 items-start'}>
      {/* settings board section */}
      <div className={style.menu}  style={{backgroundColor:'white', borderRadius:'20px'}} onClick={()=>{scrollSettings("#settings",1000)}}>

        <div className={style.settingItem} onClick={()=>{setSetting('profile')}}>
          <div className={' flex justify-between items-center cursor-pointer '} style={{borderBottom:' 0.5px solid rgba(0, 0, 0, 0.5)', paddingBottom:'19px'}}>
            <div>
              <h1 className={style.title +' '+(setting==='profile'?' ':style.notActive)} style={{}}>User Profile</h1>
              <p className={style.info}>View Profile</p>
            </div>
            <i className= 'ri-arrow-right-wide-fill' ></i>
          </div>
        </div>

        <div className={style.settingItem} onClick={()=>{setSetting('password')}}>
          <div className={' flex justify-between items-center cursor-pointer '} style={{borderBottom:' 0.5px solid rgba(0, 0, 0, 0.5)', paddingBottom:'19px'}}>
            <div>
              <h1 className={style.title +' '+(setting==='password'?' ':style.notActive)} style={{}}>Change Password</h1>
              <p className={style.info}>Change account password</p>
            </div>
            <i className= 'ri-arrow-right-wide-fill' ></i>
          </div>
        </div>

        <div className={style.settingItem} onClick={()=>{setSetting('notifications')}}>
          <div className={' flex justify-between items-center cursor-pointer '} style={{borderBottom:' 0.5px solid rgba(0, 0, 0, 0.5)', paddingBottom:'19px'}}>
            <div>
              <h1 className={style.title +' '+(setting==='notifications'?' ':style.notActive)} style={{}}>Notifications</h1>
              <p className={style.info}>Notification options</p>
            </div>
            <i className= 'ri-arrow-right-wide-fill' ></i>
          </div>
        </div>

        <div className={style.settingItem} onClick={()=>{setSetting('2FA')}}>
          <div className={' flex justify-between items-center cursor-pointer '} style={{borderBottom:' 0.5px solid rgba(0, 0, 0, 0.5)', paddingBottom:'19px'}}>
            <div>
              <h1 className={style.title +' '+(setting==='2FA'?' ':style.notActive)} style={{}}>Enable 2FA</h1>
              <p className={style.info}>Secure account with Two-Factor Authentication</p>
            </div>
            <i className= 'ri-arrow-right-wide-fill' ></i>
          </div>
        </div>

        <div className={style.settingItem} onClick={()=>{setSetting('languages')}}>
          <div className={' flex justify-between items-center cursor-pointer '} style={{borderBottom:' 0.5px solid rgba(0, 0, 0, 0.5)', paddingBottom:'19px'}}>
            <div>
              <h1 className={style.title +' '+(setting==='languages'?' ':style.notActive)} style={{}}>Language</h1>
              <p className={style.info}>Set and add languages</p>
            </div>
            <i className= 'ri-arrow-right-wide-fill' ></i>
          </div>
        </div>

        <div className={style.settingItem} onClick={()=>{setSetting('subscription')}}>
          <div className={' flex justify-between items-center cursor-pointer '} style={{borderBottom:' 0.5px solid rgba(0, 0, 0, 0.5)', paddingBottom:'19px'}}>
            <div>
              <h1 className={style.title +' '+(setting==='subscription'?' ':style.notActive)} style={{}}>Subscription</h1>
              <p className={style.info}>Manage subscription</p>
            </div>
            <i className= 'ri-arrow-right-wide-fill' ></i>
          </div>
        </div>

        <div className={style.settingItem} onClick={()=>{setSetting('payments')}}>
          <div className={' flex justify-between items-center cursor-pointer '} style={{borderBottom:' 0.5px solid rgba(0, 0, 0, 0.5)', paddingBottom:'19px'}}>
            <div>
              <h1 className={style.title +' '+(setting==='payments'?' ':style.notActive)} style={{}}>Payment</h1>
              <p className={style.info}>Manage Payments</p>
            </div>
            <i className= 'ri-arrow-right-wide-fill' ></i>
          </div>
        </div>

        <div className={style.settingItem} onClick={()=>{setSetting('logout')}}>
          <div className={' flex justify-between items-center cursor-pointer '} style={{ paddingBottom:'19px'}}>
            <div>
              <h1 className={style.title +' '+(setting==='logout'?' ':style.notActive)} style={{}}>Sign out</h1>
              <p className={style.info}>Logout of user's account</p>
            </div>
            <i className= 'ri-arrow-right-wide-fill' ></i>
          </div>
        </div>
        

      </div>

      
      {/* settings output section  */}
      <div className={style.outerOutput}>
        <div className={' flex gap-1 w-fit '+style.d500} style={{ backgroundColor:'#bebebe', padding:'5px', borderRadius:'10px', marginBottom:'10px', marginLeft:"5px", fontSize:'13px'}} onClick={()=>{scrollSettings("#settings",-1000)}} >
        <i className= 'ri-arrow-left-wide-fill' ></i>
        <h1>Back</h1>

        </div>
      {/* <div> */}
      <div id='output'  className={style.innerOutput} style={{ backgroundColor:'white', overflowX:'hidden'}}>
        { setting==='profile'&&<UserProfile /> }
        { setting==='password'&&<ChangePassword /> }
        { setting==='notifications'&&<Notifications /> }
      </div>

      </div>
       

     </div>
    </>
  )
}

export default Settings