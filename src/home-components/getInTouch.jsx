import React from 'react'
import getInTouchImg from "../assets/images/24770152_101.png"

const GetInTouch = () => {
  return (
    <div>
        <div className='flex flex-col md:flex-row justify-center gap-20' id='contact'>
            <section className='w-[450px] flex flex-col gap-15'>
                <h1 className='text-5xl'>Get in Touch</h1>

                <form action="" className='flex flex-col items-center gap-13'> 
                    <div className='flex flex-col gap-4 '>
                        <label For="name"> Name</label>
                        <input type="text" name='name' placeholder='Enter Your Name' required className='focus:outline-none border-none w-[80%] md:w-100' />
                        <hr className='primary-color w-[80%] md:w-100' />
                    </div>
                    
                    <div className='flex flex-col gap-4   '>
                        <label For="email"> Email</label>
                        <input type="email" name='email' placeholder='Enter a valid email address' required  className='focus:outline-none border-none w-[80%] md:w-100'/>
                        <hr className='primary-color w-[80%] md:w-100  ' />

                    </div>
                    
                    <button className='w-100 h-13 blue-bg rounded-4xl'>SUBMIT</button>
                </form>
            </section>
            <section>
                <img className='w-90' src={getInTouchImg} alt="" />
            </section>
        </div>
    </div>
  );
}

export default GetInTouch