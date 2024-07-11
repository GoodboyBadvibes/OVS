import React from 'react'
import style from "../../Style/Dashboard style/table.module.css"

const Table = () => {


   const data = [

    {
      key:1,
      post: 'Risk Management',
      category:'Psychiatry',
      customer:'John Doe',
      date:'12 Nov 2023',
      status:'successful',
    },
    {
      key:2,
      post: 'Risk Management',
      category:'Psychiatry',
      customer:'John Doe',
      date:'12 Nov 2023',
      status:'successful',
    },
    {
      key:3,
      post: 'Risk Management',
      category:'Psychiatry',
      customer:'John Doe',
      date:'12 Nov 2023',
      status:'successful',
    },
    {
      key:4,
      post: 'Risk Management',
      category:'Psychiatry',
      customer:'John Doe',
      date:'12 Nov 2023',
      status:'successful',
    },
    {
      key:5,
      post: 'Risk Management',
      category:'Psychiatry',
      customer:'John Doe',
      date:'12 Nov 2023',
      status:'successful',
    },
    {
      key:6,
      post: 'Risk Management',
      category:'Psychiatry',
      customer:'John Doe',
      date:'12 Nov 2023',
      status:'successful',
    },
    {
      key:7,
      post: 'Risk Management',
      category: 'Psychiatry',
      customer: 'John Doe',
      date: '12 Nov 2023',
      status: 'successful',
    },
   ]



  return (
    <div style={{overflowX:'scroll', borderRadius:'15px', marginTop:'50px'}}>
      
      <table style={{width:' 100%', backgroundColor:'white', borderRadius:'10px', minWidth:'1160px'}}>

        <tbody className={style.body}>

        <tr className={style.head}>
          <th style={{borderBottom:'1px solid white'}}>ID</th>
          <th style={{borderLeft:'1px solid white'}}>Post Tite</th>
          <th>Category</th>
          <th>Customer</th>
          <th>Date</th>
          <th>Status</th>
          <th>Action</th>
        </tr>

        {data.map(
          (data)=>(
        <tr className={style.row}>
          <td style={{margin:'10px 0'}}>{data.key}</td>
          <td>{data.post}</td>
          <td>{data.category}</td>
          <td>{data.customer}</td>
          <td>{data.date}</td>
          <td>{data.status}</td>
          <td>...</td>
        </tr>
          )
        )}


        </tbody>

      </table>
    </div>
  )
}

export default Table