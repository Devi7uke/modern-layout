import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { FaAngleDoubleRight, FaUnlockAlt, FaHome, FaDatabase, FaUserAstronaut, FaChartBar, FaTasks, FaCog, FaQuestion, FaSignOutAlt } from 'react-icons/fa'

const Hierarchy = ({ title, link = '', icon: Icon, state, last = false, children: subBanners }) => {
    const router = useRouter()
    const [unfold, setUnfold] = useState(false)
    const handleClick = () => {
        setUnfold(!unfold)
    }
    return (
        <>
            <li className={`flex w-full rounded-md ${last ? 'mt-auto' : null} ${router.asPath === link ? 'bg-alt_light/50 text-primary' : null}`}>
                <Link href={link} className='group flex items-center h-16 grayscale-[70%] hover:grayscale-0 opacity-70 hover:opacity-100 duration-500'>
                    <Icon className='group-hover:scale-125 my-0 mx-7 duration-500 min-w-[2rem] text-xl text-primary' />
                    <span className={`${state ? 'block' : 'hidden'} ml-4 whitespace-nowrap`}>{title}</span>
                </Link>
                <button className={`felx inline-block align-middle ml-auto mr-4 my-auto text-lg ${subBanners && state ? 'block' : 'hidden'} ${unfold ? 'rotate-90 text-primary' : 'rotate-0'} hover:text-primary duration-300`} onClick={handleClick}>
                    <FaAngleDoubleRight />
                </button>
            </li>
            <ul className={`${unfold && state ? 'flex flex-col self-start' : 'hidden'} underline`}>
                {subBanners}
            </ul>
        </>
    )
}
const SubBanner = ({ title, link = '', last = false }) => {
    return (
        <li className={`m-0 ${last ? 'mb-8' : 'mb-0'}`}>
            <Link href={link} className='h-20 grayscale-[70%] hover:grayscale-0 opacity-70 hover:opacity-100 duration-500'>
                {title}
            </Link>
        </li>
    )
}
const SectionBreak = ({ title, state }) => {
    return (
        <h1 className={`text-left w-full pl-7 mt-14 mb-4 text-primary ${state ? 'block' : 'hidden'}`}>{title}</h1>
    )
}

const Banner = ({ title, link = '', icon: Icon, state, last = false }) => {
    const router = useRouter()
    const [unfold, setUnfold] = useState(false)
    const handleClick = () => {
        setUnfold(!unfold)
    }
    return (
        <li className={`flex w-full rounded-md ${last ? 'mt-auto' : null} ${router.asPath === link ? 'bg-dark text-light' : null} duration-500`}>
            <Link href={link} className='group flex items-center h-16 lg:h-14 grayscale-[50%] hover:grayscale-0 opacity-70 hover:opacity-100'>
                <Icon className='group-hover:scale-125 my-0 mx-7 lg:mx-4 md:mx-1 duration-500 min-w-[2rem] text-xl md:text-lg text-primary' />
                <span className={`${state ? 'block' : 'hidden'} ml-4 whitespace-nowrap lg:text-base`}>{title}</span>
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
        <nav className={`${isOpen ? 'w-64 lg:w-48 md:w-10' : 'w-24 lg:w-16 md:w-10'} h-screen fixed bg-white z-50 transition-[width] duration-200 ease-out overflow-y-auto overflow-x-hidden`}>
            <ul className='p-0 m-0 flex flex-col items-center text-center h-full md:pt-14'>
                <li className='w-full md:hidden'>
                    <button className='flex-col justify-center items-center p-2 mx-auto my-6 grayscale-[70%] hover:grayscale-0 opacity-70 hover:opacity-100' onClick={handleClick}>
                        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                    </button>
                </li>
                <Banner title='Home' link='/' icon={FaHome} state={isOpen} />
                <Banner title='Users' link='/users' icon={FaUserAstronaut} state={isOpen} />
                <Banner title='Permissions' link='/permissions' icon={FaUnlockAlt} state={isOpen} />
                <Banner title='Reports' link='/reports' icon={FaChartBar} state={isOpen} />
                <Banner title='Data' link='/data' icon={FaDatabase} state={isOpen} />
                <Banner title='Settings' link='/settings' icon={FaCog} state={isOpen} />
                <Banner title='Help' link='/help' icon={FaQuestion} state={isOpen} />
                <Banner title='Log Out' icon={FaSignOutAlt} last={true} state={isOpen} />
            </ul>
        </nav>
    )
}

export default SideBar