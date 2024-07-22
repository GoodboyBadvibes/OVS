import React, { useState } from 'react'
import style from '../../../Style/Dashboard style/changepassword.module.css'
import settingstyle from '../../../Style/Dashboard style/settings.module.css'
import Button from '@/Components/Button'

const ChangePassword = () => {

  const [oldShow, setOldShow] = useState(false)
  const [newShow, setNewShow] = useState(false)
  const [confirmShow, setConfirmShow] = useState(false)

  return (
    <>
    <div>
        <div className=' ' style={{borderBottom:' 0.5px solid rgba(0, 0, 0, 0.5)'}}>
          <h1 className={settingstyle.outputTitle}>Change Password</h1>
        </div>

        <form style={{}} className= {style.form} action="">

          <div className=' flex justify-start items-stretch gap-0'>
            <input type={oldShow?'text':'password'} placeholder='Old password' /> 
            <input type= "email" placeholder={oldShow?'Hide':'Show'} value={''} onClick={()=>{setOldShow(!oldShow)}} />
          </div> 

          <div className=' flex justify-start items-center gap-0'>
            <input type={newShow?'text':'password'} placeholder='New Password' /> 
            <input type="email" inputMode='alphanumeric' placeholder={newShow?'Hide':'Show'} value={''} onClick={()=>{setNewShow(!newShow)}} />
          </div> 

          <div className=' flex justify-start items-center gap-0'>
            <input type={confirmShow?'text':'password'} placeholder='Confirm Password' /> 
            <input type="email" placeholder={confirmShow?'Hide':'Show'} value={''} onClick={()=>{setConfirmShow(!confirmShow)}}/>
          </div> 

          <Button text={'Update Password'} style={{color:'white', fontSize:'8px'}}/>
   
        </form>

    </div>
    
    </>
  )
}

export default ChangePassword