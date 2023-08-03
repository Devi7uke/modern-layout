import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaBook, FaFacebookSquare, FaCloud, FaYoutube, FaInstagram, FaEnvelope, FaLock, FaUser } from 'react-icons/fa'

const Dialogue = ({ text, className = '' }) => {
  return (
      <div className={`block ${className}`}>
          <blockquote className='block relative w-full m-0 py-[5%] md:py-[10%] px-[10%] mb-7 leading-[1.4] z-10 rounded-xl text-base sm:text-sm
          before:block before:absolute before:top-[10px] before:left-[10px] before:font-[900] before:text-3xl icons before:text-alt_light/50 before:hover:text-primaryDark/50 before:content-["\f06a"] before:-z-10
          after:block after:absolute after:-bottom-4 after:left-7 after:w-0 after:h-0 after:content-[""] after:border-[15px] after:border-solid after:border-transparent after:border-b-0
          text-dark bg-light 
          hover:text-mid_light hover:bg-primary_alt duration-500
          after:border-t-light
          hover:after:border-t-primary_alt after:duration-500 text-center'>
              {text}
          </blockquote>
      </div>
  )
}

const SocialIcon = ({ link = '', icon: Icon }) => {
  return (
    <Link href={link} className='inline-block mr-3 hover:text-primary hover:scale-125 duration-300'>
      <Icon />
    </Link>
  )
}

const InputBox = ({ icon: Icon, value, name = '', event, label = '', type = '' }) => {
  return (
    <div className='relative h-12 border-b-2 border-b-light my-7 m-0'>
      <span className='inline-block absolute right-0 top-3 text-lg'><Icon /></span>
      <input type={type} value={value} name={name} onChange={(e) => event(e.target.name, e.target.value)} required autoComplete='no' className='group w-full h-full bg-transparent border-none outline-none formElement pr-7' placeholder='' />
      <label className='absolute top-1/2 left-0 -translate-y-1/2 duration-500 ease-out group-focus:-top-1 pointer-events-none textLabel'>{label}</label>
    </div>
  )
}

const Login = () => {
  const [cookie, setCookie] = useCookies(['session_cookie'])
  const router = useRouter()

  /*
  const [isLogin, setIsLogin] = useState(true)
  const handleState = () => {
    setIsLogin(!isLogin)
  }
  */

  const [loginError, setLoginError] = useState(false)

  const [data, setData] = useState({ user: '', password: '' })
  const handleDataChange = (name, value) => {
    if (loginError){
      setLoginError(false)
    }
    setData((prevData) => ({ ...prevData, [name]: value }))
  }
  const handleLogin = (event) => {
    event.preventDefault()
    const getUser = async () => {
      try {
        const response = await axios.post('/api/login', {data})
        const expiration = new Date()
        expiration.setDate(expiration.getDate() + 1)
        setCookie('session_cookie', '', { path: '/', expires: new Date(0) })
        setCookie('session_cookie', response.data.token, {path: '/', expires: expiration})
        router.push('/')
      } catch (error) {
        setLoginError(true)
        console.error('Error login:', error)
      }
    }
    getUser()
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center m-0 bg-cover bg-center bg-no-repeat bg-[url('../../public/images/sunset.jpg')] after:absolute after:bg-dark/50 after:top-0 after:left-0 after:w-full after:h-full z-10 after:-z-10 after:rounded-xl after:content-['']">
      <div className='flex relative transition-[height] min-h-[50vh] flex-row flex-wrap w-3/4 bg-dark/50 rounded-xl my-20'>

        <div className='block my-10 w-1/2 lg:w-full bg-transparent p-20 text-light md:hidden'>
          <h2 className='text-3xl font-bold'><FaBook className='inline-block' /> Polytechnic University of San Luis Potosi</h2>
          <div>
            <h2 className='text-5xl font-bold leading-none'>Welcome!<br /><span className='text-2xl'>to the UPSLP website.</span></h2>
            <p className='text-base m-0 my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, non.</p>
          </div>
          <div className='text-3xl mt-[15%]'>
            <SocialIcon link='https://www.facebook.com/upslp' icon={FaFacebookSquare} />
            <SocialIcon link='https://www.youtube.com/@UPSLPoficial' icon={FaYoutube} />
            <SocialIcon link='https://www.instagram.com/upslp_oficial/' icon={FaInstagram} />
            <SocialIcon link='https://www.upslp.edu.mx/' icon={FaCloud} />
          </div>
        </div>

        <div className='block w-1/2 whitespace-normal break-words lg:w-full text-light py-14 bg-transparent backdrop-blur-lg rounded-t-xl rounded-b-xl'>
          <div className={`right-0 flex self-stretch justify-center items-center my-14 w-full ${ /* isLogin ? 'opacity-100 delay-300' : 'absolute top-0 right-0 opacity-0 pointer-events-none' */ ''} duration-300`}>
            <form onSubmit={handleLogin}>
              <Dialogue text='Invalid Credentials !!!' className={`${loginError ? 'opacity-100 scale-100' : 'opacity-0 scale-0'} duration-500`} />
              <h2 className='text-3xl text-center font-bold'>Sign In</h2>
              <InputBox value={data.user} name='user' event={(name, value) => handleDataChange(name, value)} icon={FaEnvelope} label='Email' type='email' />
              <InputBox value={data.password} name='password' icon={FaLock} event={(name, value) => handleDataChange(name, value)} label='Password' type='password' />

              <div className='w-full text-sm font-[500] m-0 -mt-4 mb-4 flex justify-between'>
                <label><input type="checkbox" className='accent-primary mr-1' /> Remember me</label>
                <a href="" className='hover:underline duration-300 ml-14 lg:ml-4'>Forgot password?</a>
              </div>
              <button type="submit" className='w-full h-11 bg-light rounded-sm text-dark hover:scale-105 hover:bg-primary duration-300'>Sign In</button>
              <div className='text-sm font-[500] text-center mt-6'>
                <p>Don&apos;t have an account? <button type="button" /*onClick={handleState}*/ className='text-light font-semibold hover:underline'>Sign up</button></p>
              </div>
            </form>
          </div>
          {/*
          <div className={`right-0 flex self-stretch justify-center items-center my-14 w-full ${isLogin ? 'absolute top-0 right-0 opacity-0 pointer-events-none' : 'opacity-100 delay-300'} duration-300`}>
            <form action="">
              <h2 className='text-3xl text-center font-bold'>Sign Up</h2>
              <InputBox icon={FaUser} label='Name' type='text' />
              <InputBox icon={FaEnvelope} label='Email' type='email' />
              <InputBox icon={FaLock} label='Password' type='password' />
              <InputBox icon={FaLock} label='Repeat Password' type='password' />

              <div className='w-full text-sm font-[500] m-0 -mt-4 mb-4 flex justify-between'>
                <label><input type="checkbox" className='accent-primary mr-1' /> I agree to the terms and conditions</label>
              </div>
              <button type="submit" className='w-full h-11 bg-light rounded-sm text-dark hover:scale-105 hover:bg-primary duration-300'>Sign Up</button>
              <div className='text-sm font-[500] text-center mt-6'>
                <p>Already have an account? <button type="button" onClick={handleState} className='text-light font-semibold hover:underline'>Sign In</button></p>
              </div>
            </form>
          </div>
          */
          }
        </div>
      </div>
    </div>
  )
}

export default Login

/*
import Link from 'next/link'
import React from 'react'
import { FaBook, FaFacebookSquare, FaCloud, FaYoutube, FaInstagram, FaEnvelope, FaLock } from 'react-icons/fa'

const SocialIcon = ({ link = '', icon: Icon }) => {
  return (
    <Link href={link} className='inline-block mr-3 hover:text-primary hover:scale-125 duration-300'>
      <Icon />
    </Link>
  )
}

const InputBox = ({ icon: Icon, label = '', type = '' }) => {
  return (
    <div className='relative w-80 h-12 border-b-2 border-b-light m-0 my-7'>
      <span className='inline-block absolute right-0 top-3 text-lg'><Icon /></span>
      <input type={type} required autoComplete='no' className='group w-full h-full bg-transparent border-none outline-none formElement pr-7' placeholder='' />
      <label className='absolute top-1/2 left-0 -translate-y-1/2 duration-500 ease-out group-focus:-top-1 pointer-events-none textLabel'>{label}</label>
    </div>
  )
}

const login = () => {
  return (
      <div className="absolute flex flex-wrap w-3/4 min-h-[550px] top-1/2 left-1/2 bg-cover bg-center bg-no-repeat bg-[url('../../public/images/sunset.jpg')] -translate-y-1/2 -translate-x-1/2 rounded-xl after:absolute after:bg-dark/50 after:w-full after:h-full after:-z-10 after:rounded-xl after:content-['']">
        <div className='absolute top-0 left-0 w-1/2 md:w-full h-full bg-transparent p-20 text-light flex justify-between flex-col'>
          <h2 className='text-3xl font-bold'><FaBook className='inline-block' /> Polytechnic University of San Luis Potosi</h2>
          <div>
            <h2 className='text-5xl font-bold leading-none'>Welcome!<br /><span className='text-2xl'>to the UPSLP website.</span></h2>
            <p className='text-base m-0 my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, non.</p>
          </div>
          <div className='text-3xl'>
            <SocialIcon link='https://www.facebook.com/upslp' icon={FaFacebookSquare} />
            <SocialIcon link='https://www.youtube.com/@UPSLPoficial' icon={FaYoutube} />
            <SocialIcon link='https://www.instagram.com/upslp_oficial/' icon={FaInstagram} />
            <SocialIcon link='https://www.upslp.edu.mx/' icon={FaCloud} />
          </div>
        </div>
        <div className='absolute top-0 right-0 w-1/2 md:w-full h-full text-light'>
          <div className='flex justify-center items-center w-full h-full bg-transparent backdrop-blur-lg rounded-t-xl rounded-b-xl'>
            <form action="">
              <h2 className='text-3xl text-center font-bold'>Sign In</h2>
              <InputBox icon={FaEnvelope} label='Email' type='email' />
              <InputBox icon={FaLock} label='Password' type='password' />

              <div className='w-full text-sm font-[500] m-0 -mt-4 mb-4 flex justify-between'>
                <label><input type="checkbox" className='accent-primary mr-1' /> Remember me</label>
                <a href="#" className='hover:underline duration-300'>Forgot password?</a>
              </div>
              <button type="submit" className='w-full h-11 bg-light rounded-sm text-dark hover:scale-105 hover:bg-primary duration-300'>Sign In</button>
              <div className='text-sm font-[500] text-center mt-6'>
                <p>Don&apos;t have an account? <a href="#" className='text-light font-semibold hover:underline'>Sign up</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}

export default login
*/