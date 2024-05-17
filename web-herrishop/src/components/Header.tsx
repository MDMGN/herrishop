import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Logo from "./Logo";
import HeaderOptions from "./HeaderOptions";
import { useState } from "react";

export  function Header() {
  const [open, setOpen] = useState(false)
  return (
    <>
    {open && <Logo />}
      <div className="fixed  z-[99999]">
        
                  {open ? (<i className={`text-center absolute  right-[calc(-80vw-5px)] md:hidden fa-solid fa-bars fa-2x cursor-pointer`} onClick={()=> setOpen(false)}></i>) :
                          (<i className="text-center absolute right-[calc(-80vw-5px)] md:hidden fa fa-close fa-2x cursor-pointer" onClick={()=> setOpen(true)}></i>)
                  }
      </div>
    <header className={`w-full p-5 md:p-16 top-0  fixed md:static bg-slate-50 h-screen z-[999]${ open ? ' hidden' : ''}`}>
        <Logo />
        <Navbar />
        <div className="flex flex-row flex-wrap gap-5 my-7">
            <Link to={'#'} className="p-5 bg-yellow-500 text-white font-bold">%Discount%</Link>
            <Link to={"#"} className="p-5 bg-black text-white font-bold">New this week</Link>
        </div>
        <HeaderOptions />
    </header>
    </> 
  )
}