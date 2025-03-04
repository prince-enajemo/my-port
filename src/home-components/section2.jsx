
function Section2(){
  return(
    <>
     <div className="section2-bg h-120 w-screen flex flex-col items-center justify-center gap-5.5 text-white mb-70">
       <img className="h-15 w-15" src="src/assets/sec2-img.png" alt=""/>
       <h1 className="text-[50px] sec2-text-h1 ">Hi, I’m Rex. Nice to meet you.</h1>
       <p className="w-250 text-[20px] text-center sec2-text-p">Since starting my freelance Developer career 2 years ago, I've worked remotely with agencies, consulted for startups, and collaborated with talented teams to create digital products for both businesses and consumers. I'm confident yet humble, naturally curious, and always striving to sharpen my skills.</p>
       <button className="flex w-50 h-13 rounded-4xl blue-bg  items-center justify-center  gap-2 sec2-text-p">
        VIEW MY WORKS <img className="w-6" src="src/assets/arrow.png" alt="" />
        </button>
     </div>
    </>
  )
}

export default Section2