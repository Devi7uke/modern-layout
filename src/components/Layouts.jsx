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

