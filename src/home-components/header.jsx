import logo from "../assets/images/Screenshot_2025-03-03_141059-removebg-preview.png";
import { RiMenu5Line } from "react-icons/ri";


function Header(){


   return(
     <header className="pr-7 nav-anim flex justify-between items-center h-15.5  md:pr-20 w-screen  fixed bg-black z-50">
    <div>
        <img src={logo} alt="" className="w-50 md:w-70.5  " />
    </div>
    <nav className=" hidden  md:flex gap-10 text-xl ">
        <a className="focus"  href="index.html">Home</a>
        <a className="focus" href="#about">About me</a>
        <a className="focus"  href="#skills">Skills</a>
        <a className="focus" href="#works">My works</a>
        <a className="focus" href="#contact">Contact</a>
    </nav>

    <RiMenu5Line className="text-3xl md:hidden"/>
   </header>
   )
  
}

export default Header