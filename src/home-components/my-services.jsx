import checked from "../assets/images/icons8-checked-90.png"
import servicesPic from "../assets/images/pexels-olia-danilevich-4974912.jpg"

import React from "react";

function Myservices(){
    return(
     <>
       <div className=" h-150 flex flex-col items-center gap-17">
       <h1 className="text-[50px]">My Quality Sevices</h1>

       <div className="flex w-screen ">
        <div className="w-1/2 flex justify-center " >
           <img className="w-150 rounded-4xl" src={servicesPic} alt="" /> 
        </div>
        <div className="flex flex-col gap-5 justify-center items-center">
            <section className="flex w-120 justify-between text-[25px]">
                <h1>Web Application Development</h1>
                <img className="w-15 h-15" src={checked} alt="" />
            </section>

           <hr className="h- w-full primary-color "/>

            <section className="flex w-120 justify-between text-[25px]">
                <h1>Front-End Development</h1>
                <img className="w-15 h-15" src={checked} alt="" />
            </section>

            <hr className="h- w-full primary-color "/>

            <section  className="flex w-120 justify-between text-[25px]">
                <h1>Responsive Web Design</h1>
                <img className="w-15 h-15" src={checked} alt="" />
            </section>

            <hr className="h- w-full primary-color "/>

            <section className="flex w-120 justify-between text-[25px]">
                <h1>Web Hosting</h1>
                <img className="w-15 h-15" src={checked} alt="" />
            </section>
        </div>
        </div>
       </div>
     </>
    );
}

export default Myservices