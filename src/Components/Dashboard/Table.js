import React, { useState } from 'react'
import style from "../../Style/Dashboard style/table.module.css"
import Image from 'next/image'
import view from '../../../public/view.png'
import close from '../../../public/close-circle.png'
import check from '../../../public/check_circle.png'
import Action from '../Dashboard/Action'

const Table = ({ data, title }) => {


  return (
    <div className={style.table} style={{overflowX: 'scroll', borderRadius: '15px', marginTop: '50px', scrollbarWidth: '0' }}>

      <table className={style.tableMedia} style={{ overflowX: 'scroll', backgroundColor: 'white', borderRadius: '10px'}}>

        <tbody className={style.body}>



          <tr className={style.head}>
            {title.map((title) => (
              <th style={{ borderLeft: '1px solid white' }}>
                <div className={' flex items-center '+style.norm+' '+style.genStyle}>
                  <h1 className={' '}>{title}</h1>
                  <i className="ri-arrow-down-wide-fill"></i>
                </div>
              </th>
            ))}
            <th className={' '+style.norm}>
                <h1 className={' '+style.genStyle}>Action</h1>
            </th>
            
          </tr>

          {data.map(
            (data, index) => (
              <tr className={style.row}>
                {/* {Object.entries(data).map(([key, value]) => (
            key.trim().toLowerCase()==='status'? (<td className={' '+(value==='successful')?(style.success):(style.failed)}>{value}</td>) : (<td>{value}</td>)

            // if (key.trim().toLowerCase()==='status') {
            //   console.log('hello')
            // }
             

            ))} */}

                {/* {Object.entries(data).forEach(([key, value]) => {
                  if (key.trim().toLowerCase() === 'status') {
                     return (<td className={' '+(value==='successful')?(style.success):(style.failed)}>{value}</td>)
                  }
                  else{
                     return  <td>{value}</td>
                  }
                })} */}

                      {/* {Object.entries(data).map(([key, value]) => (
                         key.trim().toLowerCase() !== 'status'&& <td>{value}</td>
                      ))} */}
                      {Object.entries(data).map(([key, value]) => {
                         if(key.trim().toLowerCase() === 'status'){
                              return (<td className={style.status+' td'}> <div className={' '+style.genStyle}> <h1 className={' '+((value.trim().toLowerCase()==='successful')?style.success:style.failed)}>{value}</h1></div></td>)
                         }else if(key.trim().toLowerCase() === 'customer'){
                          return <td className=' td'>
                            <div className={' flex gap-5 items-center '+style.genStyle} >
                              {/* <Image src={value.pic} width={26} height={26} style={{borderRadius:'99999px'}}/> */}
                              <div className={' '+style.dp} style={{backgroundImage:`url(${value.pic})`}}></div>
                              <h1 className={' '+style.norm}>{value.name}</h1>

                            </div>
                          </td>
                         }else{
                          return <td className={' td '+((key.trim().toLowerCase() === 'id')?style.id:style.norm)}> <div className={' '+style.genStyle}>{value}</div></td>
                         }
})}
                <td key={index} className={' '+style.action}>
                <Action />
                </td>
              </tr>
            )
          )}


        </tbody>

      </table>
    </div>
  )
}

export default Table