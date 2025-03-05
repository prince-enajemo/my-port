import React from "react";
import aboutImg from "../assets/images/new1.jpg";
import arrow from "../assets/images/arrow.png";


function AboutMe(){
    return(
     <>
      <div className="flex justify-center bg-neutral-950 gap-5">
        <section className="w-[450px] h-[580px] bg-black flex justify-center items-center rounded-4xl">
            <img className="h-[530px] w-[400px] rounded-4xl" src={aboutImg} alt="" />
        </section>
        <section className="w-[450px] h-[580px] bg-black flex justify-center items-center rounded-4xl ">
           <div className="w-[400px] h-[530px] flex flex-col justify-center  gap-10  pr-5 ">
           <h3 className="font-bold primary-color">About Me</h3>
            <h1 className="text-3xl">My Special Skills</h1>
            <hr className="primary-color"/>
            <p >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <button className="flex w-50 h-13 rounded-4xl blue-bg  items-center justify-center  gap-2 sec2-text-p">
                    VIEW MY WORKS <img className="w-6" src={arrow} alt="" />
            </button>
           </div>
        </section>
      </div>
     </>
    );
}

export default AboutMe
