import Hints from '@/components/Skills'
import IntroSection from '@/components/IntroSection'
import Posts from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import React, { useEffect } from 'react'
import Head from 'next/head'
import Carousel from '@/components/Carousel'
import { useCookies } from 'react-cookie'
import axios from 'axios'

export default function Home() {
  const [cookies] = useCookies(['session_cookie'])
  const Response = async () => {
    try {
      const token = cookies.session_cookie
      const result = await axios.post('/api/auth', {token})
      console.log(result.data)
    } catch (error) {
      console.error('Error occurred during the verification request:', error);
    }
  }
  React.useEffect(() => {
    Response()
  }, [])

  return (
    <>
      <Head>
        <title>Devi7uke | Home </title>
      </Head>
      <IntroSection />
      <Carousel />
      <Hints />
      <Testimonials />
      <Posts />
    </>
  )
}