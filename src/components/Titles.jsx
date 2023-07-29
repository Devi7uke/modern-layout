import React from 'react'

export const Title = ({ title }) => {
    
    return (
        <div className='text-center left-1/2 mb-20'>
            <h6 className='m-0 mb-5 text-4xl md:text-2xl leading-normal font-normal uppercase inline-block relative p-0 pb-4 after:block after:absolute after:bottom-0 after:w-1/4 after:h-[5px] after:rounded-lg after:content-[""] after:left-1/2 after:ml-[-12%] after:bg-primary '>
                {title}
            </h6>
        </div>
    )
}