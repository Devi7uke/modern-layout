import Image from 'next/image'
import React from 'react'
import TestImage from '../../public/images/348x261.png'
import { FaUser, FaClock } from 'react-icons/fa'
import Title from './Title'

const Card = ({ title, summary, postOwner, date, link, image }) => {
    const truncatedSummary = summary.length <= 140 ? summary : summary.slice(0, summary.lastIndexOf(' ', 140)) + '.'
    return(
        <li className='flex self-stretch m-0 mb-14 list-none w-[30%] lg:w-[47%] md:w-[97%]'>
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
                        <li className={`inline-block m-0 p-0 text-sm`}>
                            <FaUser className='mr-1 inline-block'/> <a className='text-primary'>{postOwner}</a>
                        </li>
                        <li className={`inline-block mx-1 p-0 text-sm`}>
                            <p className='inline-block mr-2 ml-1 before:content-["|"]'></p>
                        </li>
                        <li className={`inline-block m-0 p-0 text-sm`}>
                            <FaClock className='mr-1 inline-block'/>
                            <time>{date}</time>
                        </li>
                    </ul>
                    <p className='text-justify'>{truncatedSummary} [<a href={link} className='text-primary font-semibold'>&hellip;</a>]</p>
                    <div className='mt-4'>
                        <a href={link} className='flex items-center justify-center w-fit text-sm py-2 px-2 pb-2 uppercase border border-solid text-light bg-primary border-primary hover:text-inherit hover:bg-transparent hover:border-inherit rounded-xl duration-500'>
                            Read More
                        </a>
                    </div>
                </div>
            </article>
        </li>
    )
}

const Projects = () => {
  return (
    <div className='block relative w-full m-0 p-0 text-left whitespace-normal break-words text-dark bg-light'>
        <section className='block my-0 mx-auto
        py-20 px-0 '> {/*This component should have the clear class*/}
            <Title title='Projects' />
            <ul className='flex flex-wrap justify-between m-0 p-0 list-none clear-both px-[15%] '>
                <Card title='Caritas clubhose, a VR-Golf VideoGame with 4 scenarios' postOwner='Devi7uke' date='30 May 2023' image={TestImage} summary="Caritas ClubHouse was an exciting project led by our VR teacher, focusing on game development using Unity for the Meta Quest 2 VR headset. We gained valuable hands-on experience, learning Unity's VR package and creating captivating virtual reality games."/>
                <Card title='Upslp graduates follow-up web app powered by azure and Power Apps' postOwner='UPSLP DevOps Team' date='15 Sep 2023' image={TestImage} summary='Web Application that Polytechnic University of San Luis Potosí requested to facilitate data collection of graduates and enable informed decision-making through data mining and AI models. This project was powered by PowerApps and Azure Services.'/>
                <Card title='A vr-golf named caritas clubhose with 4 scenarios' postOwner='Admin' date='06 Apr 2045' image={TestImage} summary='Caritas ClubHouse: Ac nibh blandit eleifend nullam sed nisi in justo hendrerit egestas proin consectetuer turpis quis malesuada'/>
            </ul>
        </section>
    </div>
  )
}

export default Projects