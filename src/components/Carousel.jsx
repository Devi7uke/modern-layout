import React from 'react'
import Title from './Title'
import Slider from './Slider'
import Image from 'next/image'
import img1 from '../../public/images/slider/1.png'
import img2 from '../../public/images/slider/2.png'
import img3 from '../../public/images/slider/3.png'
import img4 from '../../public/images/slider/4.png'

const Carousel = () => {

    const images = [
        img1,
        img2,
        img3,
        img4
    ]
    return (
        <div className='pt-20 mb-40 bg-light'>
            <Title title='Images Show-Off' />

            <div className='flex justify-between px-[20%] w-full'>
                <div className='w-[30%] mx-14'>
                    <h1 className='text-4xl mb-8 text-center'>Cositas</h1>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, accusamus voluptas qui laborum adipisci nulla dolores deleniti harum eveniet fuga aliquam repellat esse quam? Fugiat, alias! Enim quia corporis expedita neque quod similique iusto laudantium inventore voluptatum quibusdam vel explicabo iure et alias perferendis ducimus molestias dolore, sint numquam perspiciatis ab adipisci. Iste in eos sapiente aperiam praesentium maiores fugit cupiditate, officiis unde dolore temporibus rem quam, placeat quod mollitia earum, impedit iusto. Soluta, perspiciatis optio praesentium distinctio quis reiciendis voluptas asperiores aperiam dignissimos et aliquam molestiae aliquid dolorum ad blanditiis fuga accusantium id veritatis labore. Officia maxime doloremque sequi officiis, vel voluptate quisquam, neque, velit fuga alias sunt tempora asperiores dolor saepe inventore eligendi hic. Sint culpa iste earum repudiandae amet quod ex, quis dolores repellat enim optio aliquam reprehenderit iure id explicabo ut alias fugiat nesciunt. Itaque, quaerat voluptate minus reiciendis libero sunt, atque harum inventore rem animi dolor explicabo dolore quas aliquam aperiam quis eveniet iusto exercitationem vitae veritatis. Obcaecati veniam enim necessitatibus tempore iure quae iusto possimus quo officia consequuntur culpa quod maiores, similique ea explicabo corrupti eligendi sint. Labore illum quaerat explicabo assumenda, fugiat, officia, necessitatibus atque placeat numquam provident quod ipsum accusamus tempore officiis eaque? Quis?
                </div>
                <div className='max-w-3xl'>
                    <Slider>
                        {images.map((image, index) => (
                            <Image key={index} src={image} alt='' />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Carousel