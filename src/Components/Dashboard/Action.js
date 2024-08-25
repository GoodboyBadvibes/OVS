import React, { useEffect, useRef, useState } from 'react'
import style from "../../Style/Dashboard style/table.module.css"
import Image from 'next/image'
import view from '../../../public/view.png'
import close from '../../../public/close-circle.png'
import check from '../../../public/check_circle.png'

const Action = ({}) => {

  const [action, setAction] = useState(false)
  const actionRef = useRef(null)

  const toggle = () => {
    setAction(!action)
  }

  const handleClickOutside = e => {
    if(actionRef.current && !actionRef.current.contains(e.target)){
      setAction(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  },[])


  return (
    <>
    <div style={{position:' relative '}} >
    <p style={{cursor:'pointer', position:' relative '}} onClick={toggle}>...</p>
    {action&&<div ref={actionRef} className={' z-20 '+style.actionMenu}>
    <div className={' flex justify-start  items-start ' +style.actionItem}>
      <Image src={view} />
      <h1>View</h1>
    </div>
    <div className={' flex justify-start  items-start ' +style.actionItem}>
      <Image src={check} />
      <h1>Copy</h1>
    </div>
    <div className={' flex justify-normal  items-start ' +style.actionItem}>
      <Image src={close} />
      <h1>Report</h1>
    </div>

  </div>}
    </div>
  </>
  )
}

export default Action