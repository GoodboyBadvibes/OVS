import React from 'react'
import style from '../../../Style/Dashboard style/notifications.module.css'
import settingstyle from '../../../Style/Dashboard style/settings.module.css'

const Notifications = () => {
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
              <i className={' ri-toggle-fill '+style.toggle}></i>
            </div>
            <div className='flex justify-between items-start' style={{paddingTop:'30px'}} >
              <div>
                <h1 className={' '+style.header}>Telegram Notifications</h1>
                <h1 className={' '+style.sub}>Push Telegram Notifications</h1>
              </div>
              <i className={' ri-toggle-fill '+style.toggle}></i>
            </div>
            <div className='flex justify-between items-start' style={{paddingTop:'30px'}} >
              <div>
                <h1 className={' '+style.header}>Notification Status</h1>
                <h1 className={' '+style.sub}>Push SMS Notifications</h1>
              </div>
              <i className={' ri-toggle-fill '+style.toggle}></i>
            </div>
          </div>
      </div>
    </>
  )
}

export default Notifications