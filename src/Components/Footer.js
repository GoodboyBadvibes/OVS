import React from 'react'
import Button from './Button'
import Image from 'next/image'
import Link from 'next/link'
import style from '../../Style/footer.module.css'

const Footer = () => {
  return (
    <div className='' style={{backgroundColor:'rgb(36,36,36)', color:'white', padding:'0 50px'}}>
     <div className='hidden md:block'>
      <div className=' flex justify-between align-middle items-center gap-9' style={{paddingTop:'70px', paddingBottom:'25px'}}>
        
        <div className='' style={{width:'50%', lineHeight:'5'}}>
          <h1 className={' leading-relaxed '+style.header}>
            Boost your Business & go digital with our online vendor Stall
          </h1>
            
        </div>

        <div style={{width:"30%"}} className={' '+style.flexHeader}>
          <h1 className='leading-relaxed ' style={{paddingBottom:' 20px'}}>
            Boost your Business & go digital with our online vendor Stall
          </h1>
          <Button text={'Learn More'} />
        </div>

      </div>
     </div>
      <hr className='hidden md:block' />

      <div className=' md:flex justify-between  m-auto text-center md:text-start' style={{paddingTop:' 30px'}}>
        <div style={{width:'180px'}} className={'m-auto md:pb-0 md:m-0 '+style.footerIconDiv}>
          <Image src={'/logo.png'} width={180} height={200} className=' items-center md:items-start'/>
          <h2 className=' hidden md:block' style={{fontSize:'20px', paddingTop:' 20px'}}>Create your Own website and collaborate with the team</h2>

        </div>
          
 
        <div className=''>
          <Link href={'/'} className=' ' style={{fontSize:'25px', paddingBottom:'5px'}} ><h2>Home</h2></Link> <br />

          <Link href={'/'} className=' ' style={{fontSize:'25px', paddingBottom:'5px'}} ><h2>About Us</h2></Link> <br />

          <Link href={'/'} className=' ' style={{fontSize:'25px', paddingBottom:'5px'}} ><h2>Features</h2></Link> <br />

          <Link href={'/'} className=' ' style={{fontSize:'25px', paddingBottom:'5px'}} ><h2>Pricing</h2></Link> <br />

        </div>

        <div>
          <Link href={'/'} ><h2 className=' ' style={{fontSize:'25px', paddingBottom:'5px'}}>Get Started</h2></Link> <br />

          <Link href={'/'} ><h2 className=' ' style={{fontSize:'25px', paddingBottom:'5px'}}>F.A.Q s</h2></Link> <br />

        </div>

        <div>
          <h3 className=' ' style={{fontSize:'25px', paddingBottom:'15px'}}>Socials</h3>

         <div className= ' flex gap-3 justify-center items-center '>
         <Link href={'/'} ><i className='ri-facebook-fill  rounded-full ' style={{backgroundColor:'#393939', fontSize:'20px', padding:'7px'}}></i></Link> 

         <Link href={'/'} ><i className='ri-twitter-x-fill rounded-full ' style={{backgroundColor:'#393939', fontSize:'20px', padding:'7px'}}> </i></Link> 

         <Link href={'/'} ><i className='ri-youtube-fill rounded-full ' style={{backgroundColor:'#393939', fontSize:'20px', padding:'7px'}}> </i></Link> 

         <Link href={'/'} ><i className='ri-linkedin-fill rounded-full ' style={{backgroundColor:'#393939', fontSize:'20px', padding:'7px'}}> </i></Link> 

         </div>

        </div>

      </div>

      <div className=' sm:flex justify-start items-center m-auto text-center ' style={{gap:'100px',fontSize:'13px', paddingTop:'30px', paddingBottom:'30px'}}>
        <p className={' '+style.copy} style={{fontSize:'20px'}}>
           @ 2023 UGC. All rights reserved. 
        </p>
        
        <div className='sm:flex justify-start items-center ' style={{gap:'70px'}}>
        <p>
          Privacy Policy 
        </p>
        <p>
         Terms of Service
        </p>
        <p>
          Cookies Settings
        </p>
        </div>
        
      </div>
      </div>


  )
}

export default Footer