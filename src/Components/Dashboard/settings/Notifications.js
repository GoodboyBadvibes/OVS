import React, { useState } from 'react'
import style from '../../../Style/Dashboard style/notifications.module.css'
import settingstyle from '../../../Style/Dashboard style/settings.module.css'
import Image from 'next/image'

const Notifications = () => {
   const [email, setEmail] = useState(true)
   const [push, setPush] = useState(true)
   const [sms, setSms] = useState(true)


  return (
    <>
      <div>
          <div className=' ' style={{borderBottom:' 0.5px solid rgba(0, 0, 0, 0.5)'}}>
            <h1 className={settingstyle.outputTitle}>Notifications</h1>
          </div>

          <div>

            <div className='flex justify-between items-start' style={{paddingTop:'30px'}} >
              <div>
                <h1 className={' '+style.header}>Email Notifications</h1>
                <h1 className={' '+style.sub}>Push Email Notifications</h1>
              </div>
              {/* <i className={' ri-toggle-fill '+style.toggle}></i> */}
              <Image width={35} height={20} src={email?'/toggleON.png':'/toggleOff.png'} onClick={()=>{setEmail(!email)}} style={{cursor:'pointer'}}/>
            </div>
            <div className='flex justify-between items-start' style={{paddingTop:'30px'}} >
              <div>
                <h1 className={' '+style.header}>Telegram Notifications</h1>
                <h1 className={' '+style.sub}>Push Telegram Notifications</h1>
              </div>
              {/* <i className={' ri-toggle-fill '+style.toggle}></i> */}
              <Image width={35} height={20} src={push?'/toggleON.png':'/toggleOff.png'} onClick={()=>{setPush(!push)}} style={{cursor:'pointer'}}/>
            </div>
            <div className='flex justify-between items-start' style={{paddingTop:'30px'}} >
              <div>
                <h1 className={' '+style.header}>Notification Status</h1>
                <h1 className={' '+style.sub}>Push SMS Notifications</h1>
              </div>
              {/* <i className={' ri-toggle-fill '+style.toggle}></i> */}
              <Image width={35} height={20} src={sms?'/toggleON.png':'/toggleOff.png'} onClick={()=>{setSms(!sms)}} style={{cursor:'pointer'}}/>
            </div>
          </div>
      </div>
    </>
  )
}

export default Notifications