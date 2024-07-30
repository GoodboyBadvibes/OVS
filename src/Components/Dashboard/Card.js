import React from 'react'
import style from '../../Style/Dashboard style/card.module.css'
import Image from 'next/image'

const Card = ({src, figure, title, width=25, height=25}) => {
  return (
    
    <>
      <div className={' flex justify-start items-center ' + style.figuresCard} style={{ backgroundColor: '#859f2793', borderRadius: '20px' }}>
        <div style={{ backgroundColor: '#859f27', padding: '10px', borderRadius: '17.67px' }}>
          <Image className='' src={src} width={width} height={height} />
        </div>

        <div>
          <h1 className={style.figures}>{figure}</h1>
          <p className={style.figuresTitle}>{title}</p>
        </div>
      </div>
    </>
  )
}

export default Card