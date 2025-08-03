import { getComponentTexts } from '@/utilities/CommonFunction'
import Link from 'next/link'
import React from 'react'
import { MdAddCall } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

function LandingPage() {
    const landingContent = getComponentTexts("landingpage")
  return (
    <div>
      <div className=' md:px-[120px] md:pt-10 px-4'>
        {
landingContent.map((item,index) => 
<div key={index} className='md:flex  md:justify-between'>
    <div className=' flex flex-col justify-center md:w-[50%]'>
        <h2 className='md:text-3xl text-xl font-bold text-amber-400'>{item.heading}</h2>
        <span className='md:text-2xl text-lg font-bold leading-normal'>{item.title}</span>
        <p className='md:pt-10 pt-5'>{item.para}</p>
        </div>
<div className=''>
    <img className='md:h-100 h-full w-full ' src={item.image}></img>
</div>
  
</div>
)
        }
      </div>
{/* landing page contact us */}

      <div className='flex md:pl-[120px] px-4 gap-5 '>
     <Link href="/contact">  <button className='rounded-full bg-amber-400 md:p md:py-1 md:px-4 px-3 py-1 hover:opacity-70 '>Contact</button></Link> 
      </div>
<div className='flex md:pl-[120px] px-4 gap-4 md:gap-5 py-5 md:py-8'>
<div className='flex items-center'>
        <MdAddCall className=' md:h-5 md:w-5'/>
        <p>+123-456-7890</p>
      </div>
      <div>
        <div className='flex items-center gap-1 '>
<TbWorld className='animate-pulse md:h-5 md:w-5' />
     <Link href="treasure-creative-demo.vercel.app"> <button className='animate-bounce text-blue-400 border-b cursor-pointer'>Visite Our Website</button></Link>
        </div>
      </div>
</div>
      
    
    </div>
  )
}

export default LandingPage
