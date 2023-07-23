import Image from 'next/image'
import React from 'react'
import testImage from '../../public/images/100x100.png'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookSquare, FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaLaptopHouse } from 'react-icons/fa'

const Contact = ({ className = null }) => {

    const IconBlock = ({ icon, className = null, link = null, last = false }) => {
        return(
            <li className={`inline-block m-0 mt-2 ${last ? null : 'mr-1'} p-0 leading-normal`}>
                <a href={link} className={`inline-block w-10 leading-[36px] text-2xl text-center text-inherit bg-dark ${className} duration-500`}>
                    {icon}
                </a>
            </li>
        )
    }

    return (
        <div className={`block m-0 list-none w-[20%] ${className}`}>
            <h6 className='mb-12 text-lg text-light uppercase'>Contact data</h6>
            <ul className='p-0 m-0 list-none mb-7'>
                <li className='block mb-4 p-0 pb-4 border-b-2 border-solid before:table before:content-[""] after:table after:content-[""] after:clear-both clear-both
                relative pl-10 border-mid_dark'>
                    <FaMapMarkerAlt className='m-0 p-0 leading-[1.6]
                    inline-block absolute top-0 left-0 w-8 text-2xl text-center' />
                    <address className=' -0 p-0 leading-[1.6]'>Street Name &amp; Number, Town, Postcode/Zip</address>
                </li>
                <li className='block mb-4 p-0 pb-4 border-b-2 border-solid before:table before:content-[""] after:table after:content-[""] after:clear-both clear-both
                relative pl-10 border-mid_dark'>
                    <FaPhone className='m-0 p-0 leading-[1.6]
                    block absolute top-0 left-0 w-8 text-2xl text-center' />
                    +52 (444) 467 4849
                </li>
                <li className='block m-0 p-0 border-none before:table before:content-[""] after:table after:content-[""] after:clear-both clear-both
                relative pl-10 border-mid_dark'>
                    <FaEnvelope className='m-0 p-0 leading-[1.6]
                    block absolute top-0 left-0 w-8 text-2xl text-center' />
                    dvlk8003@gmail.com
                </li>
            </ul>
            <ul className='m-0 p-0 list-none flex flex-wrap items-center justify-between'>
                <IconBlock icon={<FaFacebookSquare className='inline-block' />} className='hover:bg-[#3B5998]' />
                <IconBlock icon={<FaGithub className='inline-block' />} className='hover:bg-[#5f3b98]' />
                <IconBlock icon={<FaLinkedin className='inline-block' />} className='hover:bg-[#0E76A8]' />
                <IconBlock icon={<FaTwitter className='inline-block' />} className='hover:bg-[#00ACEE]' />
                <IconBlock icon={<FaYoutube className='inline-block' />} className='hover:bg-[#ca2715]' last={true} />
            </ul>
        </div>
    )
}

const Articles = ({ className = null }) => {
    return (
        <div className={`block m-0 list-none w-[20%] ${className}`}>
            <h6 className='mb-12 text-lg text-light uppercase'>Posted Articles</h6>
            <ul>
                <li className='block mb-4 p-0 pb-4 border-b-2 border-solid before:table before:content-[""] after:table after:content-[""] after:clear-both clear-both border-mid_dark'>
                    <article>
                        <p>
                            <a className='text-primary'>Porta tellus massa consectetuer sem eget pharetra ligula purus sit amet dui.</a>
                        </p>
                        <br />
                        <time dateTime="2045-04-06">Friday, 6<sup>th</sup> April 2045</time>
                    </article>
                </li>
                <li className='block m-0 p-0 border-none before:table before:content-[""] after:table after:content-[""] after:clear-both clear-both'>
                    <article>
                        <p>
                            <a className='text-primary'>Commodo ornare maximus donec consectetuer adipiscing elit pellentesque habitant.</a>
                        </p>
                        <br />
                        <time dateTime="2045-04-06" >Thursday, 5<sup>th</sup> April 2045</time>
                    </article>
                </li>
            </ul>
        </div>
    )
}

const Projects = ({ className = null }) => {
    const LiItem = ({ text, link = null, last = false }) => {
        return (
            <li className={`block p-0 ${last ? 'm-0' : ' mb-4 pb-4 border-b-2 border-solid border-mid_dark'} before:table before:content-[""] after:table after:content-[""] after:clear-both clear-both`}>
                <a href={link} className='text-primary'>{text}</a>
            </li>
        )
    }
    return (
        <div className={`block m-0 list-none w-[20%] ${className}`}>
            <h6 className='mb-12 text-lg text-light uppercase'>Posted Projects</h6>
            <ul>
                <LiItem text='Morbi tristique senectus' />
                <LiItem text='Habitasse platea dictumst' />
                <LiItem text='Egestas in hac habitasse' />
                <LiItem text='Tellus ac convallis pellentesque' />
                <LiItem text='Lacus tortor varius erat' last={true} />
            </ul>
        </div>
    )
}

const Images = ({ className = null }) => {

    const LiImage = ({ image, first = false, last = false, link = null }) => {
        return (
            <li className={`inline-block w-[30%] m-0 ${first ? 'clear-left' : 'ml-[5%]'} ${last ? null : 'mb-[5%]'}`}>
                <a href={link} className='block'>
                    <Image src={image} alt="" className='w-full rounded-md' />
                </a>
            </li>
        )
    }

    return (
        <div className={`block m-0 list-none w-[20%] ${className}`}>
            <h6 className='mb-12 text-lg text-light uppercase'>IMG-HOVER</h6>
            <ul>
                <LiImage image={testImage} first={true} />
                <LiImage image={testImage} />
                <LiImage image={testImage} />

                <LiImage image={testImage} first={true} />
                <LiImage image={testImage} />
                <LiImage image={testImage} />

                <LiImage image={testImage} first={true} last={true} />
                <LiImage image={testImage} last={true} />
                <LiImage image={testImage} last={true} />
            </ul>
        </div>
    )
}

const Footer = () => {
    return (
        <>
            <div className='block relative w-full m-0 p-0 text-left whitespace-normal break-words
            text-alt_light bg-alt_dark '>
                <footer className='py-20
                my-0 mx-auto px-[20%] lg:px-[15%] md:px-[10%]
                flex flex-wrap justify-between'> {/*This component should have the clear class */}
                    <Contact className='lg:w-[40%] md:w-[90%]' />
                    <Articles className='lg:w-[40%] lg:mt-14 md:w-[90%]' />
                    <Projects className='lg:w-[40%] lg:mt-14 md:w-[90%]' />
                    <Images className='lg:w-[40%] lg:mt-14 md:w-[90%]' />
                </footer>
            </div>
            <div className='block relative w-full m-0 p-0 text-left whitespace-normal break-words
            text-alt_light bg-dark'>
                <div className='py-5 px-0 flex flex-wrap justify-between  my-0 mx-[20%]'>
                    <p className='m-0 p-0'>
                        Copyright &copy; 2023 - All Rights Reserved - <a href=''>@Devi7uke</a>
                    </p>
                    <p className='m-0 p-0'>
                        Portfolio by <a target="_blank" href="https://www.github.com/Devi7uke" title="Projects" className='hover:text-primary duration-500'>Devi7uke</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer