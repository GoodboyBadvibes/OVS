import React from 'react'
import Button from '../../Components/Button'
import Testimonials from '@/Components/Testimonials'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/Components/Footer'
import style from '../../Style/home.module.css'

const home = () => {
  return (
    <>
      <div className={''} style={{backgroundColor:'rgb(36,36,36)', color:'white'}}>
        <div className={'md:flex justify-between align-middle items-center gap-9 overflow-hidden '+style.section} >
        
          <div className='md:w-1/2' style={{ lineHeight:'5'}}>
            <h1 className= {' leading-relaxed '+style.header} >
              Boost your Business & go digital with our online vendor Stall
            </h1>
              
          </div>

          <div style={{}} className={'w-full sm:w-1/2 md:w-1/3 '+style.flexSection}>
            <h1 className={'leading-relaxed pb-8 pt-24  md:pt-0 '+style.flexHeader}>
              Boost your Business & go digital with our online vendor Stall
            </h1>
            <Button text={'Learn More'} />
          </div>

        </div>
        <div style={{padding:'0 20px'}}>
          <Image className=' m-auto' src={'/contentImage1.png'} width={1232} height={419}/>
        </div>
      </div>

      <div className=' flex justify-around items-center py-6 overflow-hidden flex-shrink' style={{backgroundColor:'#D9D9D9'}}>
        <Image src={'/sponsor(1).png'} width={100} height={100} />
        <Image src={'/sponsor(2).png'} width={100} height={100}/>
        <Image src={'/sponsor(1).png'} width={100} height={100}/>
        <Image src={'/sponsor(2).png'} width={100} height={100}/>
      </div>

      <div style={{ paddingBottom:''}}>
      <div className={' md:flex justify-between align-middle items-center '+style.section+' '+style.sectionGap} style={{ gap:'70px'}}>
      
        <div className='md:w-1/2' style={{lineHeight:'2.5'}}>
          <h1 className={' leading-relaxed '+style.header}>
          No coding, Makes it easier for you to create a website for your business
          </h1>

          <p className='font-thin leading-relaxed' style={{fontSize:'25px',marginTop:'50px'}}>
          Not only that, you can also create a website without coding using only the templates provided or you can buy templates by creative creators 
          </p>

          <div className='flex flex-shrink justify-between mt-24 leading-relaxed'>
            <div>
              <h1 className={' pb-5 '+style.headerSub}>
                1k+
              </h1>
              <p className=''  style={{fontSize:'20px'}}>
                Templates
              </p>
            </div>
            <div>
              <h1 className={' pb-5 '+style.headerSub}>
                2k+
              </h1>
              <p className='' style={{fontSize:'20px'}}>
                Creators
              </p>
            </div>
            <div> 
              <h1 className={' pb-5 '+style.headerSub}>
                100k+
              </h1>
              <p className='' style={{fontSize:'20px'}}>
                Users
              </p>
            </div>
          </div>
             
        </div>

        <Image className=' pt-20 md:pt-0 m-auto' src={'/contentImage2.png'} width={483} height={511}/>

      </div>
      </div>

      <div style={{ paddingBottom:'150px', gap:'100px'}}>
      <div className={'md:flex flex-row-reverse justify-between align-middle items-center '+style.section+' '+style.sectionGap} style={{ gap:'70px'}}>
      
        <div className='md:w-1/2' style={{ lineHeight:'2.5'}}>
          <h1 className={' leading-relaxed '+style.header}>
          Create and collaborate with your team
          </h1>

          <p className='font-thin leading-relaxed' style={{fontSize:'25px',margin:'50px 0'}}>
          You can collaborate with up to 5 people and create your own website to have the best experience.
          
          </p>

          <div className='text-2xl' style={{color:'white'}} >
          <Button text={'Learn More'} />
          </div>
          
             
        </div>
        <Image className='mt-20 md:pt-0 shadow-2xl m-auto' src={'/contentImage3.png'} width={483} height={511}/>

      </div>
      </div>

      <div>
        <h1 className={' text-center leading-relaxed '+style.header}>
          What they say after using OVS   
        </h1>

        <div className=''>
           <Testimonials />

        </div>
      </div>

      </>
    
  )
}

export default home