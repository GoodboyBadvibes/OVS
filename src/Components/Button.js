import React from 'react'

const Button = ({text}) => {
  return (
    <div className='bg-green-700 bg-standard hover:bg-standarddark cursor-pointer shadow-lg w-fit ' style={{borderRadius:'20px', padding:'15px 20px'}}>
      <h1>
      {text}
      </h1>
    </div>
  )
}

export default Button