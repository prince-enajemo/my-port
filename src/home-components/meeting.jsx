import React from "react";
import phoneImg from "../assets/images/skills-icon/download.png";
import emailImg from "../assets/images/skills-icon/download (1).png"
import meetingPhoto from "../assets/images/pexels-photo-3194519.jpeg"

function Meeting(){
 return(
    <>
    <div className="flex flex-col  md:flex-row w-screen mt-30 pb-30 justify-center bg-neutral-950 p-5" >
        <section className="w-[95%] md:w-[40%] flex flex-col justify-between rounded-4xl bg-black p-10     "> 
            <div className="flex flex-col gap-5">
                <p className="text-2xl primary-color">Need a Project?</p>
                <h1 className="text-5xl">
                Let's Work Together. Fixed A Meeting
                </h1>
            </div>

            <hr className="primary-color"/>

            <div className="flex w-100 gap-3">
            <span className="w-12 h-12 blue-bg flex justify-center items-center rounded-full"><img className="w-8 h-8    " src={phoneImg} alt="" /></span>
                  <span className=" flex flex-col gap-2">  <p className="text-2xl">Phone Number </p>
                  <h3 className="text-2xl primary-color">+2348066498004</h3>
                  </span>
            </div>

           <hr className="primary-color"/>   

            <div className="flex w-100 gap-3">
            <span className="w-12 h-12 blue-bg flex justify-center items-center rounded-full"><img className="w-8 h-8    " src={emailImg} alt="" /></span>
                  <span className=" flex flex-col gap-2"> <p className="text-2xl"> Email </p>
                  <h3  className="text-2xl primary-color">princeenajemo@gmail.com</h3>
                  </span>
            </div>
        </section>
        <section className="w-[45%] flex justify-center">
            <img className="h-150 rounded-4xl" src={meetingPhoto} alt="" />
        </section>
    </div>
    </>
 );
}

export default Meeting