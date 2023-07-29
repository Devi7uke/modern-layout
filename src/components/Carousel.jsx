import React from 'react'
import { Title } from './Titles'
import Slider from './Slider'
import Image from 'next/image'
import img1 from '../../public/images/slider/1.jpg'
import img2 from '../../public/images/slider/2.jpg'
import img3 from '../../public/images/slider/3.jpg'
import img4 from '../../public/images/slider/4.jpg'

const Carousel = () => {

    const images = [
        img1,
        img2,
        img3,
        img4
    ]
    return (
        <div className='pt-20 mb-40 bg-light'>
            <Title title='Images Exhibition' />
            <div className='flex justify-center px-[20%] lg:p-[10%] w-full'>
                    <Slider>
                        {images.map((image, index) => (
                            <Image key={index} src={image} alt=''/>
                        ))}
                    </Slider>
            </div>
        </div>
    )
}

export default Carousel