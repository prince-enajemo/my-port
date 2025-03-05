import logo from "../assets/images/Screenshot_2025-03-03_141059-removebg-preview.png";


function Header(){


   return(
     <header className=" nav-anim flex justify-between items-center h-3.5 pt-10 pr-20 w-screen ">
    <div>
        <img src={logo} alt="" className="w-70.5  " />
    </div>

    <nav className="flex gap-10 text-xl ">
        <a href="" className=" primary-color">Home</a>
        <a href="">About me</a>
        <a href="">My works</a>
        <a href="">Contact</a>
    </nav>
   </header>
   )
  
}

export default Header