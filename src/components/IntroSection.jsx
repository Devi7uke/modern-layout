import { motion } from 'framer-motion'
import React from 'react'
import { FaMoon, FaHandScissors, FaEye } from 'react-icons/fa'

const InLineButton = ({ text, type, link = null, last = false }) => {
  return (
    <li className={`inline-block ${last ? 'mr-0' : 'mr-5'}`}>
      <a
        href={link}
        className={`border rounded-xl ${type === 'inverse'
          ? 'text-inherit bg-transparent border-inherit hover:text-light hover:bg-primary hover:border-primary'
          :
          'text-light bg-primary border-primary hover:text-inherit hover:bg-transparent hover:border-inherit'} 
                py-[8px] px-[18px] pb-[10px] duration-300`}>
        {text}
      </a>
    </li>
  )
}

const IntroBlock = ({ title, text, icon, active = false }) => {
  return (
    <>
      <li className={`group block m-0 list-none w-[30%]`} >
        <article className={`block p-7 text-center rounded-xl ${active ? 'text-light bg-dark' : 'text-dark bg-light group-hover:text-light group-hover:bg-dark duration-500'} shadow-sm shadow-black/10`} >
          <a href="#" className='after:block after:w-full after:content-none'>
            <div className={`inline-block relative w-11 h-11 leading-10 mb-7 text-base text-center border border-solid rounded-full border-black/10 ${active ? 'text-light bg-primary' : 'text-primary group-hover:text-light group-hover:bg-primary duration-500'} `}>
              {icon}
            </div>
          </a>
          <h6 className='uppercase m-0 mb-10 relative p-0 pb-4 after:absolute after:bottom-0 after:w-1/4 after:h-[5px] after:rounded-md after:content-[""] text-xl font-bold after:left-1/2 after:ml-[-12%] after:bg-primary'>
            {title}
          </h6>
          <p>{text}</p>
        </article>
      </li>
    </>
  )

}

const IntroSection = () => {
  return (
    <>
      <div
        className="block relative w-full m-0 p-0 text-left whitespace-normal break-words bg-center bg-no-repeat bg-cover bg-[url('../../public/images/paisaje.png')] z-10 after:block after:absolute after:top-0 after:left-0 after:w-full after:h-full content-[''] after:-z-10 after:bg-black/50">
        <div id="pageintro"
          className='pt-[200px] px-0 pb-[300px] mx-auto flex items-center justify-center text-light text-center'>
          <article className='block max-w-[75%] text-center'>
            <h3 className='uppercase text-7xl '>Pellentesque risus nulla</h3>
            <p className='block max-w-[65%] mx-auto text-center text-xl leading-8'>Fringilla sed posuere et dignissim non ipsum cras euismod urna non neque auctor dignissim nulla mattis purus donec sed lorem eget nibh sagittis</p>
            <footer className='mt-14 text-lg'>
              <ul className='m-0 p-0 list-none inline-block'>
                <InLineButton text='About Us' />
                <InLineButton text='Hinstory' type='inverse' last={true} />
              </ul>
            </footer>
          </article>
        </div>
      </div>

      <div className='block relative w-full m-0 p-0 text-left whitespace-normal break-words text-dark bg-mid_light px-[20%]'>
        <section className='relative z-10 block mx-auto py-20'>
          <motion.ul className='flex flex-wrap justify-between m-0 p-0 list-none text-center' initial={{translateY: 0}} animate={{translateY: '-176px'}} transition={{ duration: 2, type: "spring" }}>
            <IntroBlock title='Summary' icon={<FaHandScissors className='inline-block' />} initial={true} text='Purus morbi ut risus nec orci bibendum commodo phasellus fringilla pede vitae tincidunt congue nibh lobortis.' />
            <IntroBlock title='Vision' icon={<FaEye className='inline-block' />} active={true} text='Purus morbi ut risus nec orci bibendum commodo phasellus fringilla pede vitae tincidunt congue nibh lobortis.' />
            <IntroBlock title='Objetive' icon={<FaMoon className='inline-block' />} text='Purus morbi ut risus nec orci bibendum commodo phasellus fringilla pede vitae tincidunt congue nibh lobortis.' />
          </motion.ul>
        </section>
      </div>
    </>
  )
}

export default IntroSection