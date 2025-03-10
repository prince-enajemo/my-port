// import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";

function Skills(){
    return(
        <>
          <div className="flex gap-30 flex-col items-center " id="skills">
            <h1 className="text-[50px]">My Work Skills </h1>
        
        <div className="flex gap-10 .5">
            <div className="w-[250px] h-[250px] rounded-3xl text-center flex flex-col items-center  gap-10 p-5 blue-bg">
            {/* <IoLogoJavascript className="text-7xl"/> */}
            <IoLogoJavascript className="text-6xl"/>
            <p>Proficient in JavaScript for front-end development, with strong DOM manipulation and event handling skills.</p>
            </div>
            <div className="w-[250px] h-[250px] rounded-3xl text-center flex flex-col items-center  gap-10 p-5 blue-bg">
            <FaReact className="text-6xl"/>
            <p>Adept at building reusable and composable React components using functional and class-based components.</p>
            </div>
            <div  className="w-[250px] h-[250px] rounded-3xl text-center flex flex-col items-center  gap-10 p-5 blue-bg">
               
            <RiTailwindCssFill className="text-6xl"/>
            <p>Proficient in using Tailwind CSS utility classes to build custom and responsive user interfaces.</p>
            </div>
            <div  className="w-[250px] h-[250px] rounded-3xl text-center flex flex-col items-center  gap-10 p-5 blue-bg">
            <RiNextjsFill className="text-6xl"/>
             <p>I build fast, SEO-friendly, and scalable web apps with Next.js, using SSR, SSG, and API routes for optimal performance.</p>
             </div>
           
        </div>
          </div>
        
        </>
    );

}

export default Skills