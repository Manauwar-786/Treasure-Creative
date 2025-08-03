import { getComponentTexts } from '@/utilities/CommonFunction'
import React from 'react'

function Digital() {
  const content = getComponentTexts("servicesDigital")
  return (
    <div className='md:py-10 py-5 md:px-[120px] px-4'>

      <div>
        {
          content.map((item,index) => 
          <div key={index}>
            <h2 className='text-lg md:text-3xl text-amber-400  font-bold'>{item.heading}</h2>
            <div className=' md:flex md:pt-10 gap-[120px]'>
             <img  className='md:h-[350px]rounded-lg shadow-2xl md:w-[400px] transition-transform duration-300 hover:scale-105 hover:-translate-y-1 ' src={item.image}></img>
            <p className='font-mono text-lg'>{item.para}</p></div>
           
          </div>
          )
        }
      </div>
       <div className='py-5'>
      <button className='bg-amber-400 md:px-1 px-2 py-1 md:py-1 rounded hover:opacity-70 transition-transform duration-300 hover:scale-105 hover:-translate-y-1 '>Get in Touch</button>

      </div>
    </div>
  )
}

export default Digital
