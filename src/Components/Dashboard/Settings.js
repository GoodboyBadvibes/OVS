import React, { useState } from 'react'
import style from '../../Style/Dashboard style/settings.module.css'
import Image from 'next/image'
import edit from '../../../public/edit.png'

const Settings = () => {

  const [setting, setSetting] = useState('profile')



  return (
    <>
     <div className={style.component+ ' flex justify-between gap-5 items-start'}>
      {/* settings board section */}
      <div className={style.menu}  style={{backgroundColor:'white', borderRadius:'20px', maxWidth:'364px'}}>

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
      <div className={style.output+' '+style.profileOutput} style={{ backgroundColor:'white', overflowX:'hidden'}}>
        <div className=' flex justify-between items-center' style={{borderBottom:' 0.5px solid rgba(0, 0, 0, 0.5)'}}>
          <h1 className={style.outputTitle}>User Profile</h1>
          <Image src={edit} className={' cursor-pointer'} />
        </div>

        <div className={style.dp} style={{ backgroundImage:`url(${'/dp.jpg'})`}}> </div>

        <div>


          <div className={' flex justify-between items-start '+style.fProfile}>
            <p>Full name</p>
            <p>Mightyness</p>
          </div>

          <div className={' flex justify-between items-start '+style.fProfile}>
            <p>Email</p>
            <p>batboy27@gmail.com</p>
          </div>

          <div className={' flex justify-between items-start '+style.fProfile}>
            <p>Phone Number</p>
            <p>07000054781</p>
          </div>

          <div className={' flex justify-between items-start '+style.fProfile}>
            <p>Role</p>
            <p>Vendor</p>
          </div>

          <div className={' flex justify-between items-start '+style.fProfile}>
            <p>Date joined</p>
            <p>Aug 21st, 2034</p>
          </div>


        </div>

      </div>

     </div>
    </>
  )
}

export default Settings