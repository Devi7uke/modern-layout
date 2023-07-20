import Hints from '@/components/Hints'
import IntroSection from '@/components/IntroSection'
import Posts from '@/components/Posts'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const index = () => {
  return (
    <>
      <IntroSection />
      <Hints />
      <Testimonials />
      <Posts />
    </>
  )
}

export default index