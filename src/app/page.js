import About from '@/components/About/About'
import Blog from '@/components/Blog/Blog'
import { Contact } from '@/components/Contact/Contact'
import Hero from '@/components/Hero/Hero'
import LandingPage from '@/components/LandingPage/LandingPage'
import Services from '@/components/Services/Services'
import React from 'react'

function page() {
  return (
    <div className=''>
      <LandingPage/>
    <Hero/>
    <Services/>
    <Blog/>
    <About/> 
    <Contact/>

    </div>
  )
}

export default page
