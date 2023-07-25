import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { FaWallet, FaHome, FaUser, FaChartBar, FaTasks, FaCog, FaQuestion, FaSignOutAlt } from 'react-icons/fa'

const Banner = ({ title, link = '', icon: Icon, state, last = false }) => {
    const router = useRouter()
    return (
        <li className={`flex w-full rounded-md ${last ? 'mt-auto' : null} ${router.asPath === link ? 'bg-alt_light/50 text-primary' : null}`}>
            <Link href={link} className='flex items-center h-20 grayscale-[70%] hover:grayscale-0 opacity-70 hover:opacity-100 transition-all'>
                <Icon className='my-0 mx-7 transition-[margin] delay-1000 duration-500 min-w-[2rem] text-2xl text-primary' />
                <span className={`${state ? 'block' : 'hidden'} ml-4 whitespace-nowrap`}>{title}</span>
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
        <nav className={`group ${isOpen ? 'w-64' : 'w-24'} h-screen fixed bg-white z-50 transition-[width] duration-200 ease-out overflow-y-auto overflow-x-hidden`}>
            <ul className='p-0 m-0 flex flex-col items-center text-center h-full'>
                <li className='w-full'>
                    <button className='flex-col justify-center items-center p-7 grayscale-[70%] hover:grayscale-0 opacity-70 hover:opacity-100' onClick={handleClick}>
                        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                    </button>
                </li>
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

export default SideBar */