import htmlPic from "../assets/images/skills-icon/icons8-html-100.png"
import cssPic from "../assets/images/skills-icon/icons8-css-100.png"
import javaScriptPic from "../assets/images/skills-icon/icons8-javascript-100.png"
import reactPic from "../assets/images/skills-icon/icons8-react-80 (1).png"
import tailwindPic from "../assets/images/skills-icon/icons8-tailwind-css-100 (1).png"

function Skills(){
    return(
        <>
          <div className="flex gap-30 flex-col items-center">
            <h1 className="text-[50px]">My Work Skills </h1>
        
        <div className="flex gap-10 .5">
            <div className="w-50 h-55 rounded-3xl text-center flex flex-col items-center gap-3.5 justify-center blue-bg">
                <img className="w-20" src={htmlPic} alt="" />
                <h1>HTML</h1>
            </div>
            <div className="w-50 h-55 rounded-3xl text-center flex flex-col items-center gap-3.5 justify-center blue-bg">
                <img className="w-20" src={cssPic} alt="" />
                <h1>CSS</h1>
            </div>
            <div  className="w-50 h-55 rounded-3xl text-center flex flex-col items-center gap-3.5 justify-center blue-bg">
                <img className="w-20" src={javaScriptPic} alt="" />
                javaScript
            </div>
            <div  className="w-50 h-55 rounded-3xl text-center flex flex-col items-center gap-3.5 justify-center blue-bg">
                <img className="w-20" src={reactPic} alt="" />
                <h1>REACT</h1>
            </div>
            <div  className="w-50 h-55 rounded-3xl text-center flex flex-col items-center gap-3.5 justify-center blue-bg">
                <img className="w-20" src={tailwindPic} alt="" />
                <h1>TAILWIND</h1>
            </div>
        </div>
          </div>
        
        </>
    );

}

export default Skills