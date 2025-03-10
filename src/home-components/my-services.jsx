import checked from "../assets/images/icons8-checked-90.png"
import servicesPic from "../assets/images/pexels-olia-danilevich-4974912.jpg"

import React from "react";

function Myservices(){
    return(
     <>
       <div className=" h-150 flex flex-col items-center justify-center gap-17 ">
       <h1 className="text-[30px]">My Quality Sevices</h1>

       <div className="flex flex-col md:flex-row w-screen gap-20.5 md:gap-0">
        <div className="w-screen p-1.5 md:p-0 md:w-1/2 flex justify-center " >
           <img className="w-150 rounded-4xl" src={servicesPic} alt="" /> 
        </div>

        <div className="flex w-screen md:w-1/2 flex-col gap-5 justify-center items-center">
            <section className="flex w-[90vw] md:w-120 justify-between text-[20px] md:text-[25px]">
                <h1>Web Application Development</h1>
                <img className="w-10 h-10 md:w-15 md:h-15" src={checked} alt="" />
            </section>

           <hr className=" w-[90vw] md:w-full primary-color "/>

            <section className="flex w-[90vw] md:w-120 justify-between text-[20px] md:text-[25px]">
                <h1>Front-End Development</h1>
                <img className="w-10 h-10 md:w-15 md:h-15" src={checked} alt="" />
            </section>

            <hr className=" w-[90vw] md:w-full primary-color "/>

            <section  className="flex w-[90vw] md:w-120 justify-between text-[20px] md:text-[25px]">
                <h1>Responsive Web Design</h1>
                <img className="w-10 h-10 md:w-15 md:h-15" src={checked} alt="" />
            </section>

            <hr className=" w-[90vw] md:w-full primary-color "/>

            <section className="flex w-[90vw] md:w-120 justify-between text-[20px] md:text-[25px]">
                <h1>Web Hosting</h1>
                <img className="w-10 h-10 md:w-15 md:h-15" src={checked} alt="" />
            </section>
        </div>
        </div>
       </div>
     </>
    );
}

export default Myservices