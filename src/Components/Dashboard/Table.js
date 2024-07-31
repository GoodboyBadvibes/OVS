import React from 'react'
import style from "../../Style/Dashboard style/table.module.css"

const Table = ({data}) => {


  return (
    <div className={style.table} style={{overflowX:'scroll', borderRadius:'15px', marginTop:'50px',scrollbarWidth:'0'}}>
      
      <table style={{width:' 100%', backgroundColor:'white', borderRadius:'10px', minWidth:'1160px'}}>

        <tbody className={style.body}>

          

        <tr className={style.head}>
            {Object.keys(data[0]).map((key) => (
          <th style={{borderLeft:'1px solid white'}}>{key}</th>
            ))}
          <th>Action</th>
        </tr>

        {data.map(
          (data)=>(
        <tr className={style.row}>
          <td style={{margin:'10px 0'}}>{data.ID}</td>
          <td>{data.post}</td>
          <td>{data.category}</td>
          <td>{data.customer}</td>
          <td>{data.status}</td>
          <td>{data.date}</td>
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