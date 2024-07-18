import React, { useEffect, useRef, useState } from 'react'
import style from '../../../Style/Dashboard style/settings.module.css'
import Image from 'next/image'
import editIcon from '../../../../public/edit.png'
import Button from '@/Components/Button'
import measureText from '../../../utils/measureText'

const UserProfile = () => {
  const [edit, setEdit] = useState(true)
  const [profile, setProfile] = useState({
    name:'Mightyness',
    email:'batboy27@gmail.com',
    phone:'07000054781',
    role:'vendor',
    date:'Aug 21st, 2034',

  })


  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const phoneRef = useRef(null)
  const roleRef = useRef(null)
  const dateRef = useRef(null)

  let nameWidth= ' '
  let emailWidth= ' '
  let phoneWidth= ' '
  let roleWidth= ' '
  let dateWidth= ' '

  // useEffect(() => {
  //   // width={(nameRef.current !==null)?measureText(profile.name,nameRef):1}

  //   nameWidth = nameRef.current?measureText(profile.name, nameRef).toString()+'px':''
  //   console.log(nameWidth)
  // })
  
  return (
    <>
       <div className={' '+style.profileOutput} style={{ backgroundColor:'white', overflowX:'hidden'}}>
        <div className=' flex justify-between items-center' style={{borderBottom:' 0.5px solid rgba(0, 0, 0, 0.5)'}}>
          <h1 className={style.outputTitle}>User Profile</h1>
          <Image src={editIcon} className={' cursor-pointer'} onClick={()=>{setEdit(!edit)}} />
        </div>

        <div className={style.dp} style={{ backgroundImage:`url(${'/dp.jpg'})`}}> </div>

        <div>


          <div className={' flex justify-between items-start '+style.fProfile}>
            <p>Full name</p>
            {edit? <p>{profile.name}</p> : <input type="text" ref={nameRef}  placeholder='full name' value={profile.name} onChange={(e)=>{setProfile(profile=>({...profile,name:e.target.value}))}} style={{width: nameWidth}} /> }
          </div>

          <div className={' flex justify-between items-start '+style.fProfile}>
            <p>Email</p>
            {edit? <p>{profile.email}</p> : <input type="email" ref={emailRef}  placeholder='email' value={profile.email} onChange={(e)=>{setProfile(profile=>({...profile,email:e.target.value}))}} /> }
          </div>

          <div className={' flex justify-between items-start '+style.fProfile}>
            <p>Phone Number</p>
            {edit? <p>{profile.phone}</p> : <input type="text"  placeholder='Phone number' value={profile.phone} onChange={(e)=>{setProfile(profile=>({...profile,phone:e.target.value}))}} /> }
          </div>

          <div className={' flex justify-between items-start '+style.fProfile}>
            <p>Role</p>
            {edit? <p>{profile.role}</p> : <input type="text"  placeholder='role' value={profile.role} onChange={(e)=>{setProfile(profile=>({...profile,role:e.target.value}))}} /> }
          </div>

          <div className={' flex justify-between items-start '+style.fProfile}>
            <p>Date joined</p>
            {edit? <p>{profile.date}</p> : <input type="text"  placeholder='date' value={profile.date} onChange={(e)=>{setProfile(profile=>({...profile,date:e.target.value}))}} /> }
          </div>


        </div>
        {!edit&&<Button text={'save'} style={{color:'white', float:'right', marginTop:'10px', padding:'10px 25px'}} lass={style.buttonText}/>}

      </div>
    </>
  )
}

export default UserProfile