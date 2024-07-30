import React from 'react'
import style from '../../Style/Dashboard style/summary.module.css'
import navStyle from '../../Style/Dashboard style/dashbar.module.css'
import Image from 'next/image'
import Table from './Table'
import Card from './Card'

const Summary = ({expand}) => {
  return (
    <>
    <div >
      
        <h1 className={style.greeting}> Welcome, Mighty Ness</h1>
        <h4 style={{fontSize:'16px', fontWeight:'500', lineHeight:'18.93px '}}> Here's an overview of your activities</h4>

        <div className={' sm:grid grid-flow-col grid-cols-3 '+style.figuresGrid}>
          
          <Card src={'/profile-2user 2.png'} title={'Customers'} figure={'1,200'} />
          <Card src={'/clipboard-tick.png'} title={'Transactions'} figure={'1,200'} />
          <Card src={'/task-square.png'} title={'Earnings'} figure={'1,200'} />
          
        </div>

        <div>
          <Table />
        </div>

        
      </div>
    
      
    </>
    
  )
}

export default Summary