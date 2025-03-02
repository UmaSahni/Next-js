import Link from 'next/link'
import React from 'react'
import ".././globals.css";

export const metadata = {
  title: "My Next App",
  description: "Generated by create next app",
};

const Navbar = () => {
  return (
    <nav className='flex justify-between w-1/4 m-auto' >
          <Link href={"/"} >Home</Link>
          <Link href={"/about"} >About</Link>
          <Link href={"/contact"} >Contact</Link>
          <Link href={"/blog"} >Blog</Link>
    </nav>
  )
}

export default Navbar