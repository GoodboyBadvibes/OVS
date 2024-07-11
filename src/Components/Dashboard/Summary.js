import React from 'react'
import style from '../../Style/Dashboard style/summary.module.css'
import navStyle from '../../Style/Dashboard style/dashbar.module.css'
import Image from 'next/image'
import Table from './Table'

const Summary = ({expand}) => {
  return (
    <>
    <div >
      <div id=' summary' className={' bg-dashboardgrey  transition-all '+(expand?' contentNotExpanded ':' contentExpanded ')+style.summary} style={{  paddingTop:'100px',paddingBottom:'100px', maxWidth:'1440px'}}>

        <div className=' flex justify-between sm:hidden'>

          <div>
            <h1 className={ navStyle.header}>Dashboard</h1>
            <h3 className={ navStyle.title}>Summary</h3>
          </div>
          
          <div className='flex items-start gap-3'>
            <div className=' rounded-full ' style={{padding:'7px', backgroundColor:'#bebebe'}}>
              <Image  src={'/search-normal.png'} width={20} height={20} />
            </div>
            <div className='  rounded-full ' style={{padding:'7px', backgroundColor:'#bebebe'}}>
              <Image  src={'/noNotificationIcon.png'} width={20} height={20} />
            </div>
            
          </div>

        </div>
        <h1 className={style.greeting}> Welcome, Mighty Ness</h1>
        <h4 style={{fontSize:'16px', fontWeight:'500', lineHeight:'18.93px '}}> Here's an overview of your activities</h4>

        <div className={' sm:grid grid-flow-col grid-cols-3 '+style.figuresGrid}>
          <div className={' flex justify-start items-center '+style.figuresCard } style={{ backgroundColor:'#859f2793', borderRadius:'20px'}}>
            <div className={style.figuresImage} style={{ backgroundColor:'#859f27', padding:'10px', borderRadius:'17.67px'}}>
              <Image className=''  src={'/profile-2user 2.png'} width={25} height={25} />
            </div>
          
            <div>
              <h1 className={style.figures}>1,200</h1>
              <p className={style.figuresTitle}>Customers</p>
            </div>
         </div>
          <div className={' flex justify-start items-center '+style.figuresCard } style={{ backgroundColor:'#859f2793', borderRadius:'20px'}}>
            <div style={{ backgroundColor:'#859f27', padding:'10px', borderRadius:'17.67px'}}>
              <Image className=''  src={'/clipboard-tick.png'} width={25} height={25} />
            </div>
          
            <div>
              <h1 className={style.figures}>1,200</h1>
              <p className={style.figuresTitle}>Transactions</p>
            </div>
         </div>
          <div className={' flex justify-start items-center '+style.figuresCard } style={{ backgroundColor:'#859f2793', borderRadius:'20px'}}>
            <div style={{ backgroundColor:'#859f27', padding:'10px', borderRadius:'17.67px'}}>
              <Image className=''  src={'/task-square.png'} width={25} height={25} />
            </div>
          
            <div>
              <h1 className={style.figures}>1,200</h1>
              <p className={style.figuresTitle}>Earnings</p>
            </div>
         </div>
        </div>

        <div>
          <Table />
        </div>

        
      </div>
    </div>
      
    </>
    
  )
}

export default Summary