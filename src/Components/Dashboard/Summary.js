import React from 'react'
import style from '../../Style/Dashboard style/summary.module.css'
import navStyle from '../../Style/Dashboard style/dashbar.module.css'
import Image from 'next/image'
import Table from './Table'
import Card from './Card'

const Summary = ({expand}) => {

  const data = [

    {
      ID:1,
      post: 'Risk Management',
      category:'Psychiatry',
      customer:{
        name:'John Doe', 
        pic: '/dp.jpg'
      },
      date:'12 Nov 2023',      
      status:'successful',
    },
    {
      ID:2,
      post: 'Risk Management',
      category:'Psychiatry',
      customer:{
        name:'John Doe', 
        pic: '/dp.jpg'
      },
      date:'12 Nov 2023',      
      status:'successful',
    },
    {
      ID:3,
      post: 'Risk Management',
      category:'Psychiatry',
      customer:{
        name:'John Doe', 
        pic: '/dp.jpg'
      },
      date:'12 Nov 2023',      
      status:'successful',
    },
    {
      ID:4,
      post: 'Risk Management',
      category:'Psychiatry',
      customer:{
        name:'John Doe', 
        pic: '/dp.jpg'
      },
      date:'12 Nov 2023',      
      status:'failed',
    },
    {
      ID:5,
      post: 'Risk Management',
      category:'Psychiatry',
      customer:{
        name:'John Doe', 
        pic: '/dp.jpg'
      },
      date:'12 Nov 2023',      
      status:'successful',
    },
    {
      ID:6,
      post: 'Risk Management',
      category:'Psychiatry',
      customer:{
        name:'John Doe', 
        pic: '/dp.jpg'
      },
      date:'12 Nov 2023',      
      status:'successful',
    },
    {
      ID:7,
      post: 'Risk Management',
      category: 'Psychiatry',
      customer: {
        name:'John Doe', 
        pic: '/dp.jpg'
      },
      date: '12 Nov 2023',
      status: 'successful',
    },
    {
      ID:8,
      post: 'Risk Management',
      category: 'Psychiatry',
      customer: {
        name:'John Doe', 
        pic: '/dp.jpg'
      },
      date: '12 Nov 2023',
      status: 'successful',
    },
   ]


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

          <Table data={data} title={['ID', 'Post Title','Category','Customer','Date','Status']} />
     

        
      </div>
    
      
    </>
    
  )
}

export default Summary