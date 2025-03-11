
import React from "react";
import arrow from "../assets/images/arrow.png";
import heroPic from "../assets/my-img/20250306_150853.jpg"

function Hero(){
    return(
           <div className="flex-col lg:h-screen w-screen  flex  lg:flex-row items-center  md:mt-20  " id="home">
               <div className=" landing-page-animation pl-5 justify-center md:pl-20 flex flex-col gap-5.5 h-screen">
                <h1 className="text-4xl md:text-9xl text-ani">I'm Rex</h1>
                <p className="text-3xl md:text-4xl primary-color">Freelance Designer & Developer</p>
                <button className="w-40 h-13 rounded-4xl blue-bg flex items-center justify-center  gap-2 ">
                    HIRE ME NOW  <img className="w-6" src={arrow} alt="" />
                </button>

                <div className="socials flex gap-2.5">



                <svg className="primary-color w-10" viewBox="0 0 112 112" x="0" y="0" id="svg-1820"><circle fill="currentColor" cx="56.1" cy="56.1" r="55"></circle><path fill="#FFFFFF" d="M73.5,31.6h-9.1c-1.4,0-3.6,0.8-3.6,3.9v8.5h12.6L72,58.3H60.8v40.8H43.9V58.3h-8V43.9h8v-9.2
                 c0-6.7,3.1-17,17-17h12.5v13.9H73.5z"></path></svg>



                <svg className="primary-color w-10" viewBox="0 0 112.2 112.2" x="0px" y="0px" id="svg-9e4a"><circle fill="currentColor" cx="56" cy="56" r="55"></circle><path fill="#FFFFFF" d="M63.9,51l22.4-24h-8.6L60.3,45.9L46.9,27H24l23.3,32.8L24,85h8.2L51,64.9L65.3,85H88L63.9,51z M55.3,60.2
                l-3.7-5.1L35.7,33.1h8.1l12.3,17.2l3.7,5.1l16.6,23.4h-7.8L55.3,60.2z"></path></svg>
    


                  <svg className="primary-color w-10" viewBox="0 0 112 112" x="0" y="0" id="svg-48c2"><circle fill="currentColor" cx="56.1" cy="56.1" r="55"></circle><path fill="#FFFFFF" d="M55.9,38.2c-9.9,0-17.9,8-17.9,17.9C38,66,46,74,55.9,74c9.9,0,17.9-8,17.9-17.9C73.8,46.2,65.8,38.2,55.9,38.2
                    z M55.9,66.4c-5.7,0-10.3-4.6-10.3-10.3c-0.1-5.7,4.6-10.3,10.3-10.3c5.7,0,10.3,4.6,10.3,10.3C66.2,61.8,61.6,66.4,55.9,66.4z"></path><path fill="#FFFFFF" d="M74.3,33.5c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2S76.6,33.5,74.3,33.5z"></path><path fill="#FFFFFF" d="M73.1,21.3H38.6c-9.7,0-17.5,7.9-17.5,17.5v34.5c0,9.7,7.9,17.6,17.5,17.6h34.5c9.7,0,17.5-7.9,17.5-17.5V38.8
                    C90.6,29.1,82.7,21.3,73.1,21.3z M83,73.3c0,5.5-4.5,9.9-9.9,9.9H38.6c-5.5,0-9.9-4.5-9.9-9.9V38.8c0-5.5,4.5-9.9,9.9-9.9h34.5
                    c5.5,0,9.9,4.5,9.9,9.9V73.3z"></path></svg>
                </div>
               </div>




               <div className="w-screen md:w-1/2 landing-page-animation-img flex  justify-center">
                <img className="w-[300px] md:w-80 md;h-150 rounded-[50px]  blue-bg" src={heroPic} alt="" />
               </div>

               {/* <div className="w-50 h-60 blue-bg absolute right-90 top-110 rounded-3xl flex flex-col items-center justify-center landing-page-animation-img"> 
                <h1 className="text-[50px]">2+</h1>
                <p className="text-[20px] text-center w-30">years of experience</p>
               </div> */}
           </div>
    );

}

export default  Hero

