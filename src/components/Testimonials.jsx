import Image from 'next/image'
import React, { useMemo } from 'react'
import Pedro from '../../public/images/developer1.jpg'

import { FaQuoteLeft } from 'react-icons/fa'

const BlockQuote = ({ name, testimonial, img, postition, first = false }) => {
    return (
        <li className={`inline-block m-0 ${first ? 'ml-0' : 'ml-[4.21052%'}] list-none w-[47.89473%]`}>
            <blockquote className='block relative w-full m-0 p-[5%] mb-7 leading-[1.4] z-10 rounded-xl
            before:block before:absolute before:top-[10px] before:left-[10px] before:font-[900] before:text-3xl icons before:text-alt_light/50 before:hover:text-primaryDark/50 before:content-["\f10d"] before:-z-10
            after:block after:absolute after:-bottom-4 after:left-7 after:w-0 after:h-0 after:content-[""] after:border-[15px] after:border-solid after:border-transparent after:border-b-0
            text-dark bg-mid_light 
            hover:text-mid_light hover:bg-primary_alt duration-500
            after:border-t-white
            hover:after:border-t-primary_alt after:duration-500'>
                {testimonial}
            </blockquote>
            <figure>
                <Image src={img} alt={name} className='m-0 leading-[1] float-left my-0 mx-4 rounded-full bg-clip-padding h-[60px] w-[60px]' />
                <figcaption className='m-0 leading-[1] float-left mt-3'>
                    <h6 className='m-0 leading-[1] text-xl font-semibold'>{name}</h6>
                    <em className='m-0 text-sm leading-[1] '>{postition}</em>
                </figcaption>
            </figure>
        </li>
    )
}

const Testimonials = () => {
    return (
        <div className="block relative w-full m-0 p-0 text-left whitespace-normal break-words
    bg-center bg-no-repeat bg-cover
    z-10 after:block after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-[''] after:-z-10 text-light bg-inherit after:text-inherit after:bg-dark/70 bg-[url('../../public/images/landscape.jpg')]">
            <section className='block my-0 mx-auto py-20 px-0 clear-both'>
                <div className='text-center left-1/2 mb-20'>
                    <h6 className='m-0 mb-5 text-4xl leading-normal font-normal uppercase inline-block relative p-0 pb-4 after:block after:absolute after:bottom-0 after:w-1/4 after:h-[5px] after:rounded-lg after:content-[""] after:left-1/2 after:ml-[-12%] after:bg-primary '>Employment References</h6>
                </div>
                <ul className='m-0 p-0 list-none mb-20 px-[20%]'>
                    <BlockQuote name='Dr. Pedro' postition='CEO / Cabaña Devs' img={Pedro} first={true} testimonial='Feugiat ligula augue tempor orci ullamcorper mattis erat pede at magna praesent non justo praesent vitae magna at metus pulvinar aliquam nulla dictum vestibulum lorem nam at elit vel erat eleifend.' />
                    <BlockQuote name='Dr. Pedro' postition='CEO / Cabaña Devs' img={Pedro} testimonial='Feugiat ligula augue tempor orci ullamcorper mattis erat pede at magna praesent non justo praesent vitae magna at metus pulvinar aliquam nulla dictum vestibulum lorem nam at elit vel erat eleifend.' />
                </ul>
                <div className='text-center left-1/2'>
                    <a className='inline-block py-2 px-20 pb-2 uppercase border border-solid text-light bg-primary border-primary hover:text-inherit hover:bg-transparent hover:border-inherit rounded-xl duration-500' href="">
                        Contact
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Testimonials