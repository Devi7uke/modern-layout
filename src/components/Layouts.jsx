import React from 'react'

export const OneWhole = ({ className = '', children: childs }) => {
    return (
        <li className={`flex self-stretch m-0 list-none w-[97%] mb-14 ${className}`}>
            {childs}
        </li>
    )
}

export const OneHalfLayout = ({ className = '', children: childs }) => {
    return (
        <li className={`flex self-stretch m-0 list-none w-[47%] md:w-[97%] mb-14 ${className}`}>
            {childs}
        </li>
    )
}

export const OneThirdLayout = ({ className = '', children: childs }) => {
    return (
        <li className={`flex self-stretch m-0 mb-12 w-[30%] lg:w-[47%] md:w-[97%] ${className}`}>
            {childs}
        </li>
    )
}

export const OneQuarterLayout = ({ className = '', children: childs }) => {
    return (
        <li className={`flex self-stretch m-0 mb-12 w-[22%] xl:w-[30%] lg:w-[47%] md:w-[97%] ${className}`}>
            {childs}
        </li>
    )
}

export const ListLayout = ({ className = '', children: childs }) => {
    return (
        <ul className={`flex flex-wrap justify-between m-0 p-0 px-[20%] xl:px-[15%] lg:px-[10%] md:px-[5%] mb-20 ${className}`}>
            {childs}
        </ul>
    )
}

export const MainLayout = ({ className = '', children: childs }) => {
    return (
        <div className={`block relative w-full m-0 p-0 text-left whitespace-normal break-words ${className}`}>
            <section className='block m-0 py-20 px-0 '>
                {childs}
            </section>
        </div>
    )
}

export const BadDialogue = ({ text, className = '' }) => {
    return (
        <div className={`${className}`}>
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

export const GoodDialogue = ({ text, className = '' }) => {
    return (
        <div className={`${className}`}>
            <blockquote className='block relative w-full m-0 py-[5%] md:py-[10%] px-[10%] mb-7 leading-[1.4] z-10 rounded-xl text-base sm:text-sm
            before:block before:absolute before:top-[10px] before:left-[10px] before:font-[900] before:text-3xl icons before:text-alt_light/50 before:hover:text-emerald-800/50 before:content-["\f058"] before:-z-10
            after:block after:absolute after:-bottom-4 after:left-7 after:w-0 after:h-0 after:content-[""] after:border-[15px] after:border-solid after:border-transparent after:border-b-0
            text-dark bg-light 
            hover:text-mid_light hover:bg-emerald-500 duration-500
            after:border-t-light
            hover:after:border-t-emerald-500 after:duration-500 text-center'>
                {text}
            </blockquote>
        </div>
    )
}