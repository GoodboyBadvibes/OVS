import React from 'react'
import Image from 'next/image'
import homestyle from '../Style/home.module.css'
import style from '../Style/test.module.css'

const Testimonials = () => {


  const Testimonials = [
    {"testimonial": 'With OVS, i can make a website for my Store. i highly recommend this',
    "name": 'Moshood',
    "occupation": 'Cloth Vendor',
    "pic":'/testpic.png'},
    {"testimonial": 'With OVS, i can make a website for my Store. i highly recommend this',
    "name": 'Moshood',
    "occupation": 'Cloth Vendor',
    "pic":'/testpic.png'},
    {"testimonial": 'With OVS, i can make a website for my Store. i highly recommend this',
    "name": 'Moshood',
    "occupation": 'Cloth Vendor',
    "pic":'/testpic.png'},
    {"testimonial": 'With OVS, i can make a website for my Store. i highly recommend this',
    "name": 'Moshood',
    "occupation": 'Cloth Vendor',
    "pic":'/testpic.png'},
    {"testimonial": 'With OVS, i can make a website for my Store. i highly recommend this',
    "name": 'Moshood',
    "occupation": 'Cloth Vendor',
    "pic":'/testpic.png'},
    {"testimonial": 'With OVS, i can make a website for my Store. i highly recommend this',
    "name": 'Moshood',
    "occupation": 'Cloth Vendor',
    "pic":'/testpic.png'},
  ]

  return (

  <>
  
   <div className={'grid sm:grid-cols-2 xl:grid-cols-3 gap-11 '+homestyle.section}>
    {Testimonials.map((customer,index)=>(
      <div  className={' rounded-6xl rounded-3xl '+style.testBox} key={index} style={{backgroundColor:'#F4F4F4'}}>
        <h3 className={' '} style={{color:'#3E3E3E', fontSize:'20px', paddingBottom:'80px'}}>{customer.testimonial}</h3>
        <div className='flex gap-9 items-center'>
          <Image src={customer.pic} width={50} height={50} />
          <div>
            <h3 className={' '} style={{fontSize:'16px'}}>{customer.name}</h3>
            <h4 className=' font-extralight'  style={{color:'#717171', fontSize:'16px'}}>{customer.occupation}</h4>
          </div>

        </div>
      </div>
    ))}
   </div>

  </>

    
  )
}

export default Testimonials