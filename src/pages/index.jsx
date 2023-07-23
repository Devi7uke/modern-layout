import Hints from '@/components/Skills'
import IntroSection from '@/components/IntroSection'
import Posts from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import React from 'react'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Devi7uke | Home </title>
      </Head>
      <IntroSection />
      <Hints />
      <Testimonials />
      <Posts />
    </>
  )
}