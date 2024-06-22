'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import style from '../../Style/nav.module.css'

export default function Nav() {

  const router = useRouter()
  const pathname = usePathname()

  const [navMenu,setNavMenu] = useState(false)

  


    return (
    <>
      <div className={' flex justify-between items-center text-sm '+ (navMenu?' fixed sm:relative ':' ')+style.nav} style={{backgroundColor:'rgb(36,36,36)', color:'white'}}>
        <Image src={'/logo.png'} width={150} height={150}/>

        <div className="hidden sm:block">
          <div  className=" flex gap-16 ">
            <Link className={""+pathname==="/"?"text-standard":null} href={'/'} passHref> Home </Link>
            <Link className={""+pathname==='/about'?"text-standard":null} href={'/about'}> About Us </Link>
            <Link className={""+pathname==='/features'?"text-standard":null}  href={'/features'}> Features </Link>
            <Link className={""+pathname==='/pricing'?"text-standard":null}  href={'/pricing'}> Pricing </Link>
          </div>
        </div>
        <div className="hidden sm:block"> 
          <Button text={'Sign Up'}/>
        </div>

        <div className=" sm:hidden">
         <i className={" ri-menu-fill rounded-full sm:hidden cursor-pointer "+ (navMenu?' ':' ')} style={{fontSize:'30px'}} onClick={()=>{setNavMenu(true)}}></i>
        </div>
      </div>

      <div style={{backgroundColor:'rgb(36,36,36)', color:'white'}} className= {navMenu?"fixed sm:hidden w-full h-full":'hidden'}>
        <div className=" flex justify-end">
          <i className=" ri-close-fill cursor-pointer text-end items-end border-2 " style={{margin:'35px 20px', fontSize:'20px', borderRadius:'100%', padding:'0px 4px'}} onClick={()=>{setNavMenu(false)}}></i>
        </div>

        <div>
        <div  className=" mt-16 text-center items-center" style={{fontSize:'30px'}}>
            <Link className={""+pathname==="/"?"text-standard":null} href={'/'} passHref> <h1 className="" style={{marginBottom:'30px'}}  >Home</h1>  </Link>
            <Link className={""+pathname==='/about'?"text-standard":null} href={'/about'}> <h1 className=" " style={{marginBottom:'30px'}}  >About Us</h1>  </Link>
            <Link className={""+pathname==='/features'?"text-standard":null}  href={'/features'}> <h1 className=" " style={{marginBottom:'30px'}}>Features</h1> </Link>
            <Link className={""+pathname==='/pricing'?"text-standard":null}  href={'/pricing'}> <h1 className=" " style={{marginBottom:'30px'}}> Pricing</h1> </Link>
          </div>

          <div className=" w-fit items-center m-auto" style={{fontSize:'20px'}}>
          <Button text={'Sign Up'}/>
        </div>
        </div>
 
      </div>
    </>
  );

}
