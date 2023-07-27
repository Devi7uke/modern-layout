/*
<li className='mr-5 inline-block'><a href="#" className='text-light border bg-primary border-primary hover:text-inherit hover:bg-transparent hover:border-inherit duration-300 py-[8px] px-[18px] pb-[10px]'>Dictum aenean</a></li>
<li className='mr-0 inline-block'><a href="#" className='text-inherit border bg-transparent border-inherit hover:text-light hover:bg-primary hover:border-primary duration-300 py-[8px] px-[18px] pb-[10px]'>Nunc molestie</a></li>
*/

/*
<li
                            className='inline-block -left m-0 ml-[4.21052%] list-none w-[30.52631%]
                            ml-0 clear-left' >

                            <article
                                className='block p-7 text-center 
                                text-dark bg-light shadow-sm shadow-black/10 hover:text-light hover:bg-dark duration-500' >
                                <a href="#" className='after:block after:w-full after:content-none'>
                                    <i
                                        className='inline-block relative w-11 h-11 leading-10 mb-7 text-base text-center border border-solid rounded-[50%] 
                                    border-black/10
                                    hover:text-light hover:bg-primary duration-500'></i>
                                </a>
                                <h6
                                    className='uppercase m-0 mb-10
                                relative p-0 pb-4
                                after:block after:absolute after:bottom-0 after:w-1/4 after:h-[5px] after:rounded-md after:content-[""] 
                                text-xl font-bold after:left-1/2 after:ml-[-12%] after:bg-primary'>Sapien tempor placerat</h6>
                                <p>Luctus mauris lectus elementum nulla ac consectetuer sapien leo et arcu maecenas auctor viverra magna sed.</p>
                            </article>
                        </li>
                        <li
                            className='inline-block float-left m-0 ml-[4.21052%] list-none w-[30.52631%]' >
                            <article
                                className='block p-7 text-center
                                text-light bg-dark shadow-sm shadow-black/10 '>
                                <a href="#" className='after:block after:w-full after:content-none'>
                                    <i
                                        className='inline-block relative w-11 h-11 leading-10 mb-7 text-base text-center border border-solid rounded-[50%] 
                                    border-black/10
                                    text-light bg-primary duration-500'></i>
                                </a>
                                <h6
                                    className='uppercase m-0 mb-10
                                relative p-0 pb-4
                                after:block after:absolute after:bottom-0 after:w-1/4 after:h-[5px] after:rounded-md after:content-[""]
                                text-xl font-bold after:left-1/2 after:ml-[-12%] after:bg-primary'>Blandit urna fusce</h6>
                                <p>In augue blandit ligula pharetra mattis vestibulum congue enim aenean felis augue pretium semper imperdiet.</p>
                            </article>
                        </li>
                        <li
                            className='inline-block float-left m-0 ml-[4.21052%] list-none w-[30.52631%]'>
                            <article
                                className='block p-7 text-center 
                                text-dark bg-light shadow-sm shadow-black/10 hover:text-light hover:bg-dark duration-500'>
                                <a href="#">
                                    <i
                                        className='inline-block relative w-11 h-11 leading-10 mb-7 text-base text-center border border-solid rounded-[50%] 
                                    border-black/10
                                    hover:text-light hover:bg-primary duration-500'></i>
                                </a>
                                <h6 className='uppercase m-0 mb-10
                                relative p-0 pb-4
                                after:block after:absolute after:bottom-0 after:w-1/4 after:h-[5px] after:rounded-md after:content-[""] 
                                text-xl font-bold after:left-1/2 after:ml-[-12%] after:bg-primary'>Quis euismod malesuada</h6>
                                <p>Purus morbi ut risus nec orci bibendum commodo phasellus fringilla pede vitae tincidunt congue nibh lobortis.</p>
                            </article>
                        </li> */

/*
import React from 'react'
import BackGorund from '../../public/images/paisaje.png'
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

const IntroBlock = ({ title, text, icon, initial = false, active = false }) => {
  return (
    <>
      <li className={`group inline-block float-left m-0  list-none w-[30.52631%] ${initial ? 'clear-left' : 'ml-[4.21052%]'}`} >
        <article className={`block p-7 text-center rounded-xl ${active ? 'text-light bg-dark' : 'text-dark bg-light group-hover:text-light group-hover:bg-dark duration-500'} shadow-sm shadow-black/10`} >
          <a href="#" className='after:block after:w-full after:content-none'>
            <div className={`inline-block relative w-11 h-11 leading-10 mb-7 text-base text-center border border-solid rounded-[50%] border-black/10 ${active ? 'text-light bg-primary' : 'text-primary group-hover:text-light group-hover:bg-primary duration-500'} `}>
              {icon}
            </div>
          </a>
          <h6 className='uppercase m-0 mb-10 relative p-0 pb-4 after:block after:absolute after:bottom-0 after:w-1/4 after:h-[5px] after:rounded-md after:content-[""] text-xl font-bold after:left-1/2 after:ml-[-12%] after:bg-primary'>
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
        className="block relative w-full m-0 p-0 text-left whitespace-normal break-words
            bg-center bg-no-repeat bg-cover bg-[url('../../public/images/paisaje.png')] 
            z-10 after:block after:absolute after:top-0 after:left-0 after:w-full after:h-full content-[''] after:-z-10 after:bg-black/50">
        <div id="pageintro"
          className='pt-[200px] px-0 pb-[300px] mx-auto flex items-center justify-center clear-both
                before:table before:content-[""] before:clear-both after:table 
                after:content-none after:clear-both text-light text-center'>
          <article className='block max-w-[75%] text-center'>
            <h3 className='font-lora text-7xl '>Pellentesque risus nulla</h3>
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

      <div className='block relative w-full m-0 p-0 text-left whitespace-normal break-words text-dark bg-light px-[20%]'>
        <section className='relative z-10 block mx-auto py-20 clear-both before:table before:content-none after:table after:content-none after:clear-both'>
          <ul className='m-0 p-0 list-none before:table after:table before:content-none after:content-[""] clear-both after:clear-both block -mt-44 mx-0 text-center'>
            <IntroBlock title='Summary' icon={<FaHandScissors className='inline-block' />} initial={true} text='Purus morbi ut risus nec orci bibendum commodo phasellus fringilla pede vitae tincidunt congue nibh lobortis.' />
            <IntroBlock title='Vision' icon={<FaEye className='inline-block' />} active={true} text='Purus morbi ut risus nec orci bibendum commodo phasellus fringilla pede vitae tincidunt congue nibh lobortis.' />
            <IntroBlock title='Objetive' icon={<FaMoon className='inline-block' />} text='Purus morbi ut risus nec orci bibendum commodo phasellus fringilla pede vitae tincidunt congue nibh lobortis.' />
          </ul>
        </section>
      </div>
    </>
  )
}

export default IntroSection

*/
/*

/*
<Banner title='Home' link='/' icon={FaHome} state={isOpen} />
<h1 className='block text-left w-full pl-7 mt-14 mb-4 text-primary'>Navigation</h1>
<Banner title='Profile' link='/about' icon={FaUser} state={isOpen} />
<Banner title='Wallet' icon={FaWallet} state={isOpen} />
<Banner title='Analytics' icon={FaChartBar} state={isOpen} />
<h1 className='block text-left w-full pl-7 mt-14 mb-4 text-primary'>User Configuration</h1>
<Banner title='Tasks' icon={FaTasks} state={isOpen} />
<Banner title='Settings' icon={FaCog} state={isOpen} />
<Banner title='Help' icon={FaQuestion} state={isOpen} />
<Banner title='Log Out' icon={FaSignOutAlt} last={true} state={isOpen} />
*/


/*
<button className='flex-col justify-center items-center p-6' onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { FaWallet, FaHome, FaUser, FaChartBar, FaTasks, FaCog, FaQuestion, FaSignOutAlt } from 'react-icons/fa'

const Banner = ({ title, link = '', icon: Icon, state, last = false }) => {
    const router = useRouter()
    return (
        <li style={{marginTop: `${last ? 'auto' : '8px'}`}} className={`w-full group pl-3 mb-8 hover:bg-primaryDark hover:text-light duration-300 ${router.asPath === link ? 'bg-primaryDark text-light' : ''}`}>
            <Link href={link} className='relative text-base table w-fit p-3'>
                <Icon className='relaive inline-block mr-3 text-xl text-center top-3' />
                <span className={`${!state ? 'opacity-0' : 'opacity-100'}`}>{title}</span>
            </Link>
        </li>
    )
}

const SideBar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className={`fixed transition-all ease-in duration-300 bg-light  ${!isOpen ? 'w-[5rem]' : 'w-[10rem]'} overflow-x-hidden overflow-y-auto h-screen z-50`}>
            <button className='flex-col justify-center items-center p-6' onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>
            <ul className='p-0 m-0 flex flex-col items-center'>
                <Banner title='Home' link='/' icon={FaHome} state={isOpen} />
                <Banner title='Profile' link='/about' icon={FaUser} state={isOpen} />
                <Banner title='Wallet' icon={FaWallet} state={isOpen} />
                <Banner title='Analytics' icon={FaChartBar} state={isOpen} />
                <Banner title='Tasks' icon={FaTasks} state={isOpen} />
                <Banner title='Settings' icon={FaCog} state={isOpen} />
                <Banner title='Help' icon={FaQuestion} state={isOpen} />
                <Banner title='Log Out' icon={FaSignOutAlt} last={true} state={isOpen} />
            </ul>
        </nav>
    )
}

export default SideBar
*/