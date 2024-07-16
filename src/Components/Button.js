import React from 'react'

const Button = ({text, style, lass}) => {
  return (
    <div className={'bg-green-700 bg-standard hover:bg-standarddark cursor-pointer shadow-lg w-fit '+ lass} style={{borderRadius:'20px', padding:'15px 20px',...style}} >
      <h1>
      {text}
      </h1>
    </div>
  )
}

export default Button