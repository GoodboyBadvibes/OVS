import React, { useState } from 'react'
import Card from './Card'
import style from '../../Style/Dashboard style/product.module.css'
import Table from './Table'
import Image from 'next/image'
import close from '../../../public/close-circle.png'
import Button from '../Button'

const Products = ({}) => {

  const [addPro, setAddPro] = useState(false)
  const [addCat, setAddCat] = useState(false)
  const [newCat, setNewCat] = useState('')

  const [catExists, setCatExists] = useState(false)

  const [category, setCategory] = useState(['Psychiatry','Heartattack','Cancer','Pharmacy','X-ray','General Check Up','AntiMalarial','Counselling'])


  const catDelete = (id)=>{
      setCategory(category.filter((cat, index)=>{return cat != id}))
  }

  const catRegEx = /^\S(.*\S)?$/

  const addNewCat = ()=>{
    if(!category.includes(newCat.trim())){
      if(catRegEx.test(newCat.trim())){
        setCategory([newCat.trim(),...category])
      }
    }else(
      setCatExists(true),
      setTimeout(()=>{setCatExists(false)},5000)
    )
      
    setNewCat('')
  }

  const data = [

    {
      ID:1,
      post: 'Risk Management',
      category:'Psychiatry',
      customer:'John Doe',
      status:'successful',
      date:'12 Nov 2023',
    },
    {
      ID:2,
      post: 'Risk Management',
      category:'Psychiatry',
      customer:'John Doe',
      status:'successful',
      date:'12 Nov 2023',
    },
    {
      ID:3,
      post: 'Risk Management',
      category:'Psychiatry',
      customer:'John Doe',
      status:'successful',
      date:'12 Nov 2023',
    },
    {
      ID:4,
      post: 'Risk Management',
      category:'Psychiatry',
      customer:'John Doe',
      status:'successful',
      date:'12 Nov 2023',
    },
    {
      ID:5,
      post: 'Risk Management',
      category:'Psychiatry',
      customer:'John Doe',
      status:'successful',
      date:'12 Nov 2023',
    },
    {
      ID:6,
      post: 'Risk Management',
      category:'Psychiatry',
      customer:'John Doe',
      status:'successful',
      date:'12 Nov 2023',
    },
    {
      ID:7,
      post: 'Risk Management',
      category: 'Psychiatry',
      customer: 'John Doe',
      date: '12 Nov 2023',
      status: 'successful',
    },
   ]


  return (
    <>
      <div className={style.products}>

        <div className={' sm:flex justify-between items-center '}>
          <Card src={'/bag.png'} title={'Total Products'} figure={'10'} style={{}} />

          <div className=' sm:flex lg:gap-16 sm:gap-4'>
            <div className={' '+ style.addBtn} onClick={()=>{setAddCat(true)}}>
              <h1>Add a Category</h1>
            </div>
            <div className={' '+ style.addBtn}  onClick={()=>{setAddPro(true)}}>
              <h1>Add a Product</h1>
            </div>
          </div>
        </div>

        <Table data={data} />
      </div>

      {addPro&&(<div className={' ' + style.modalDiv}>
        <div className=' w-full h-full' style={{ display: 'flex', alignItems: ' center', justifyContent: 'center' }} >
          <div className={' ' + style.modal}>
            <div className=' flex justify-between items-center pb-4 md:pb-10 lg:pb-12 xl:pb-14'>
              <h1 className={' '+style.modalTitle}>Add new Product</h1>
              <Image src={close} style={{cursor:'pointer'}} onClick={()=>{setAddPro(false)}}/>
            </div>
            <form>
              <h1 className={' text-standard ' + style.sub} style={{cursor:'pointer'}}>+ Upload product image</h1>
              <div>
                <h1 className={' py-7 ' + style.sub}>Product name</h1>
                <input className={' '+style.input} type="text" name="" id="" placeholder='enter product name' />
              </div>
              <div className=' flex justify-between items-center gap-5'>
                <div>
                <h1 className={' py-7 ' + style.sub}>Units(available)</h1>
                <input className={' '+style.input} type="text" />
                </div>
                <div>
                <h1 className={' py-7 ' + style.sub}>SKU(optional)</h1>
                <input className={' '+style.input} type="select" />
                </div>
                <div>
                <h1 className={' py-7 ' + style.sub}>Category</h1>
                <input className={' '+style.input} type="select" />
                </div>
              </div>
              <div>
              <h1 className={' py-7 ' + style.sub}>Product Description</h1>
              <textarea className={' '+style.input} placeholder='write description' name="" id=""></textarea>
              </div>
              <Button text={'Add Product'} lass={style.btn}  style={{color:'white', width:'100%',textAlign:'center',fontSize:"16px", margin:"10px auto"}} />
            </form>
          </div>

        </div>

      </div>)}




      
      {addCat&&(<div className={' ' + style.modalDiv}>
        <div className=' w-full h-full' style={{ display: 'flex', alignItems: ' center', justifyContent: 'center' }} >
          <div className={' ' + style.modal+" "+ style.cat}>
            <div className=' flex justify-between items-center pb-4 md:pb-10 lg:pb-12 xl:pb-14'>
              <h1 className={' '+style.modalTitle}>Add Category</h1>
              <Image src={close} style={{cursor:'pointer'}} onClick={()=>{setAddCat(false)}}/>
            </div>
            <form>
              <div>
                <h1 className={' py-7 ' + style.sub} style={catExists?{color:'red'}:null}>{catExists?'Category already exists':'Category Name'}</h1>
                <input className={' '+style.input} type="text" name="" id="" placeholder='enter category name' value={newCat} onChange={(e)=>{setNewCat(e.target.value)}}/>
              </div>
              
              <div onClick={()=>{addNewCat()}}>
                <Button text={'Add Category'} lass={style.btn} style={{ color: 'white', width: '100%', textAlign: 'center', fontSize: "16px", margin: "10px auto" }} />
              </div>
              <div>
                <ul className={' '+ style.list}>
                  {category.map((data,index)=>(
                    <li key={index}>
                    <div className={' flex justify-between items-center '+style.listTxt}>
                      <h1>{data}</h1>
                      <Image src={close} style={{cursor:'pointer'}} onClick={()=>{ catDelete(data)}}/>
                    </div>
                  </li>
                  ))}
                </ul>
              </div>
            </form>
          </div>

        </div>

      </div>)}
    </>
  )
}

export default Products