import React, { useState } from 'react'
import style from "../../Style/Dashboard style/table.module.css"

const Stock = ({initial}) => {

  let [value, setValue] = useState(initial)


  return (
    <>
      <div className={' flex gap-5 items-center   ' + style.norm} >
        <h1 className={' flex justify-center items-center cursor-pointer '+style.stckBtn} style={{ border: 'solid 1px', borderRadius: '100%'}} onClick={()=>{value>0?setValue(--value):null}}>-</h1>
        <h1>{value}</h1>
        <h1 className={' flex justify-center items-center cursor-pointer '+style.stckBtn} style={{ border: 'solid 1px', borderRadius: '100%'}} onClick={()=>{setValue(++value)}}>+</h1>
      </div>
    </>
  )
}

export default Stock