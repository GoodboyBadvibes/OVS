import React from 'react'
import style from '../../Style/Dashboard style/dashbar.module.css'
import Image from 'next/image'

const Dashbar = () => {
  return (
    <>
      <div >
        <div className={style.nav} >
          <div>
            <h1 className={ style.header}>Dashboard</h1>
            <h3 className={ style.title}>Summary</h3>
          </div>

          <div>
            <div className=' flex' style={{gap:'20px'}}>

              <div className=' bg-dashboardgrey rounded-full ' style={{padding:'10px'}}>
                <Image  src={'/noNotificationIcon.png'} width={20} height={24} />
              </div>

              <div className=' flex justify-center items-center' style={{gap:'10px'}}>

                <div className={' rounded-full w-fit bg-standard '+style.dp}  >
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
      </div>
    </>
    
  )
}

export default Dashbar