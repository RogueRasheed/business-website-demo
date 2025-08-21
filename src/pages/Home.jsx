import React from 'react'
import Hero from '../components/Hero'
import ServicesPreview from './ServicesPreview'
import Newsletter from '../components/NewsLetter'
import AboutPreview from '../components/AboutPreview'
import Partners from '../components/Partners'
import BlogPreview from '../components/BlogPreview'

export default function Home() {
  return (
   <>
   <Hero />
   <ServicesPreview />
   <AboutPreview />
   <BlogPreview />
   <Partners />
   <Newsletter />
   </>
  )
}

