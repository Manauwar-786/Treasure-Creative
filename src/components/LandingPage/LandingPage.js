"use client"
import { getComponentTexts } from '@/utilities/CommonFunction'
import { CountUp } from 'countup.js';
import Link from 'next/link'
import React, { useEffect } from 'react'
import { MdAddCall } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay,Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
function LandingPage() {
    const landingContent = getComponentTexts("landingpage")
    const heroSliderContent = getComponentTexts("heroSlider")
  
    
    useEffect(() => {
const count = new CountUp("theTargetId", 400)
if(count.error){
  console.log(error)
}else{
  count.start()
}

    },[])
    useEffect(() => {
const countProject = new CountUp("theTargetIdProject", 200)
if(countProject.error){
  console.log(error)
}else{
  countProject.start()
}

    },[])
     useEffect(() => {
const countExperience = new CountUp("theTargetIdExperience", 7)
if(countExperience.error){
  console.log(error)
}else{
  countExperience.start()
}

    },[])
  return (
    <div>
      {/* Hero Slider Started here */}
      <div className='md:px-4'>
<Swiper
  modules={[Navigation, Pagination, Autoplay, Grid]} // 👈 Grid add kiya
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000 }}
  loop={true}
  spaceBetween={40}
  grid={{ rows: 4, fill: "row" }} 
  breakpoints={{
    320: { slidesPerView: 2, grid: { rows: 4, fill: "row" } },
    640: { slidesPerView: 2, grid: { rows: 4, fill: "row" } },
    768: { slidesPerView: 3, grid: { rows: 4, fill: "row" } },
    1024: { slidesPerView: 5, grid: { rows: 4, fill: "row" } },
  }}
>
  {heroSliderContent.map((item) => (
    <SwiperSlide key={item.id}>
      <div className=" shadow-lg overflow-hidden">
        <img
          src={item.img}
          alt={item.title || "slide image"}
          className="w-full py-4  h-15 md:h-25 object-cover"
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>


      </div>
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
     <Link href="https://treasure-creative-demo.vercel.app"> <button className='animate-bounce text-blue-400 border-b cursor-pointer'>Visite Our Website</button></Link>
        </div>
      </div>
</div>

{/* counterUp section started here!       */}
   <div className='md:px-[120px] px-4 md:py-5 py-3 flex justify-center md:gap-15 gap-5'>
        {/* <h2 className='md:text-3xl text-xl  font-semibold items-center flex'>Our Achievement</h2> */}
  <div className='flex flex-col items-center justify-center text-center'>
    <div id='theTargetId' className='md:text-8xl text-4xl font-bold text-yellow-500 text-shadow-2xs '>
      {/* <CountUp end={400} duration={3} suffix="+" /> */}
    </div>
    <h4 className='md:text-2xl text-lg font-semibold'>Happy</h4>
    <p className='text-base'>Customers</p>
  </div>
  {/* project countUp section */}
  <div className='flex flex-col items-center justify-center text-center'>
    <div id='theTargetIdProject' className='md:text-8xl text-4xl font-bold text-yellow-500 text-shadow-2xs '>
      {/* <CountUp end={400} duration={3} suffix="+" /> */}
    </div>
    <h4 className='md:text-2xl text-lg font-semibold'>Project</h4>
    <p className='text-base'>Completed</p>
  </div>
  {/* Experience CountUP section */}
    <div className='flex flex-col items-center justify-center text-center'>
    <div id='theTargetIdExperience' className='md:text-8xl text-4xl font-bold text-yellow-500 text-shadow-2xs '>
      {/* <CountUp end={400} duration={3} suffix="+" /> */}
    </div>
    <h4 className='md:text-2xl text-lg font-semibold'>Experience</h4>
    <p className='text-base'>Years</p>
  </div>
</div>

    </div>
  )
}

export default LandingPage
