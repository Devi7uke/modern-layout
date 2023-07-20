import Image from 'next/image'
import React from 'react'
import TestImage from '../../public/images/348x261.png'
import { FaUser, FaClock } from 'react-icons/fa'

const Card = ({ title, summary, postOwner, date, link, image, first = false, last = false }) => {
    return(
        <li className={`inline-block m-0 list-none w-[30.52631%] ${first ? 'ml-0 clear-left' : 'ml-[4.21052%]'}`}>
            <article className='block'>
                <figure className='mb-7'>
                    <a href={link} className='inline-block relative min-w-full
                    before:block before:absolute before:content-[""] before:text-center before:opacity-0
                    after:block after:absolute after:text-center after:opacity-0
                    before:top-0 before:right-0 before:bottom-0 before:left-0
                    after:top-1/2 after:left-1/2 after:w-12 after:leading-[50px] after:m-0 after:-mt-6 after:-ml-6 after:content-["\f067"] after:text-4xl
                    hover:before:opacity-100 hover:after:opacity-100 duration-1000 after:duration-500 before:duration-500 before:bg-dark/50 after:text-light icons'>
                        <Image src={image} alt={title} className='w-auto max-w-full h-auto m-0 p-0 border-none leading-normal align-middle' style={{ width: '100%' }}/>
                    </a>
                </figure>
                <div>
                    <h6 className='m-0 mb-4 text-xl leading-normal uppercase font-normal'>{title}</h6>
                    <ul className='m-0 p-0 list-none'>
                        <li className={`inline-block m-0 p-0 text-sm ${last ? 'after:ml-2' : 'mr-1 after:m-0 content-[""]'}`}>
                            <FaUser className='mr-1 inline-block'/> <a className='text-primary'>{postOwner}</a>
                        </li>
                        <li className={`inline-block m-0 p-0 text-sm ${last ? 'after:ml-2' : 'mr-1 after:m-0 content-[""]'}`}>
                            <p className='inline-block mr-2 ml-1 before:content-["|"]'></p>
                        </li>
                        <li className={`inline-block m-0 p-0 text-sm ${last ? 'after:ml-2' : 'mr-1 after:m-0 content-[""]'}`}>
                            <FaClock className='mr-1 inline-block'/>
                            <time>{date}</time>
                        </li>
                    </ul>
                    <p>{summary} [<a href={link} className='text-primary font-semibold'>&hellip;</a>]</p>
                    <div className='mt-7'>
                        <a href={link} className='inline-block text-sm py-2 px-2 pb-2 uppercase border border-solid text-light bg-primary border-primary hover:text-inherit hover:bg-transparent hover:border-inherit rounded-xl duration-500'>
                            Read More...
                        </a>
                    </div>
                </div>
            </article>
        </li>
    )
}

const Posts = () => {
  return (
    <div className='block relative w-full m-0 p-0 text-left whitespace-normal break-words text-dark bg-light'>
        <section className='block my-0 mx-auto
        py-20 px-0 '> {/*This component should have the clear class*/}
            <div className='text-center left-1/2 mb-20' >
                <h6 className='m-0 mb-5 text-4xl leading-normal font-normal uppercase inline-block relative p-0 pb-4 after:block after:absolute after:bottom-0 after:w-1/4 after:h-[5px] after:rounded-lg after:content-[""] after:left-1/2 after:ml-[-12%] after:bg-primary '>
                    Posts
                </h6>
            </div>
            <ul className='m-0 p-0 list-none block clear-both px-[15%] '>
                <Card title='A vr-golf named caritas clubhose with 4 scenarios' postOwner='Admin' date='06 Apr 2045' first={true}  image={TestImage} summary='Caritas ClubHouse: Ac nibh blandit eleifend nullam sed nisi in justo hendrerit egestas proin consectetuer turpis quis malesuada'/>
                <Card title='A vr-golf named caritas clubhose with 4 scenarios' postOwner='Admin' date='06 Apr 2045'  image={TestImage} summary='Caritas ClubHouse: Ac nibh blandit eleifend nullam sed nisi in justo hendrerit egestas proin consectetuer turpis quis malesuada'/>
                <Card title='A vr-golf named caritas clubhose with 4 scenarios' postOwner='Admin' date='06 Apr 2045' last={true}  image={TestImage} summary='Caritas ClubHouse: Ac nibh blandit eleifend nullam sed nisi in justo hendrerit egestas proin consectetuer turpis quis malesuada'/>
            </ul>
        </section>
    </div>
  )
}

export default Posts