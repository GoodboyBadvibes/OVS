import React from 'react'
import Image from 'next/image'
import style from '../../Style/Dashboard style/summary.module.css'
import navStyle from '../../Style/Dashboard style/dashbar.module.css'
import Summary from './Summary'
import Website from './Website'
import Transactions from './Transactions'
import Products from './Products'
import Settings from './Settings'

const Content = ({expand, component}) => {
  return (
    <>
      <div id=' summary' className={' bg-dashboardgrey  transition-all ' + (expand ? ' contentNotExpanded ' : ' contentExpanded ') + style.content} style={{ paddingTop: '100px', paddingBottom: '100px', maxWidth: '1440px' }}>
        <div className={' '+navStyle.relative} style={{zIndex:''}}>


          <div className=' flex justify-between sm:hidden'>

            <div>
              <h1 className={navStyle.header}>Dashboard</h1>
              <h3 className={navStyle.title}>{component}</h3>
            </div>

            <div className='flex items-start gap-3'>
              <div className=' rounded-full ' style={{ padding: '7px', backgroundColor: '#bebebe' }}>
                <Image src={'/search-normal.png'} width={20} height={20} />
              </div>
              <div className='  rounded-full ' style={{ padding: '7px', backgroundColor: '#bebebe' }}>
                <Image src={'/noNotificationIcon.png'} width={20} height={20} />
              </div>

            </div>

          </div>

          {component === 'Summary' && <Summary expand={expand} />}
          {component === 'Website' && <Website expand={expand} />}
          {component === 'Transactions' && <Transactions expand={expand} />}
          {component === 'Products' && <Products expand={expand} />}
          {component === 'Settings' && <Settings expand={expand} />}
        </div>

      </div>
    </>


  )
}

export default Content