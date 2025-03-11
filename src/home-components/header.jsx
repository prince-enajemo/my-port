import logo from "../assets/images/Screenshot_2025-03-03_141059-removebg-preview.png";
// import { RiMenu5Line } from "react-icons/ri";


// function Header(){
  

//     function dropdown(){
//     //   const nav = document.getElementById('nav')
//     //   nav.className.add('w-[60vw]');
//     //   nav.className.remove('w-[0vw]')

//     }

//    return(
//     <div>
//      <header className="pr-7 nav-anim flex justify-between items-center h-15.5  md:pr-20 w-screen  fixed bg-black z-50">
  
//     <div>
//         <img src={logo} alt="" className="w-50 md:w-70.5  " />
//     </div>
//     <nav className=" hidden  md:flex gap-10 text-xl ">
//         <a className="focus"  href="index.html">Home</a>
//         <a className="focus" href="#about">About me</a>
//         <a className="focus"  href="#skills">Skills</a>
//         <a className="focus" href="#works">My works</a>
//         <a className="focus" href="#contact">Contact</a>
//     </nav>

//     <RiMenu5Line onClick={dropdown()} className="text-3xl md:hidden"/>

   
//    </header>

//     <nav  className="fixed md:hidden flex flex-col gap-20 text-xl pt-20.5 blue-bg h-screen justify-center">
//         <a id="nav" className="focus w-[0vw] flex justify-center"  href="index.html">Home</a>
//         <a id="nav" className="focus w-[0vw] flex justify-center" href="#about">About me</a>
//         <a id="nav" className="focus w-[0vw] flex justify-center"  href="#skills">Skills</a> 
//         <a id="nav" className="focus w-[0vw] flex justify-center" href="#works">My works</a>
//         <a id="nav" className="focus w-[0vw] flex justify-center" href="#contact">Contact</a>
//     </nav> 

//    </div>
//    )
  
// }

// export default Header




'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'



export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed bg-black h-12 flex">
      <nav aria-label="Global" className="mx-auto w-screen flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>

            <img src={logo} alt="" className="w-50 md:w-50.5  " />

          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
         
         
        <a href="index.html" className="text-sm/6 font-semibold text-white">
            Home
          </a>
          <a href="#about" className="text-sm/6 font-semibold text-white">
            About
          </a>
          <a href="#skills" className="text-sm/6 font-semibold text-white">
            Skills
          </a>
          <a href="#" className="text-sm/6 font-semibold text-white">
            My works
          </a>
          <a href="#contact" className="text-sm/6 font-semibold text-white">
            Contact
          </a>
        </PopoverGroup>
       

      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10  " />
        <DialogPanel className="fixed transition duration-500 inset-y-0 right-0 z-10 w-[60vw] overflow-y-auto blue-bg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {/* <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              /> */}

           {/* <img src={logo} alt="" className="w-50 md:w-50.5  " /> */}
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                
              <a href="index.html" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white nav-hover-bg">
            Home
          </a>
          <a href="#about" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white nav-hover-bg">
            About
          </a>
          <a href="#skills" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white nav-hover-bg hover:">
            Skills
          </a>
          <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white nav-hover-bg">
            My works
          </a>
          <a href="#contact" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white nav-hover-bg">
            Contact
          </a>

              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
