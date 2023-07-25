import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const Slider = ({ children: images }) => {
    const [img, setImg] = useState(0)

    const prev = () => {
        setImg(img === 0 ? images.length -1 : img - 1)
    }

    const next = () => {
        setImg(img === images.length -1 ? 0 : img + 1)
    }

  return (
    <div className='overflow-hidden relative rounded-3xl'>
        <div className='flex transition-transform ease-in duration-500' style={{ transform: `translateX(-${img * 100}%)` }}>{images}</div>
        <div className='absolute inset-0 flex items-center justify-between p-4'>
            <button onClick={prev} className='p-1 rounded-full shadow bg-white/70 text-gray-800 hover:bg-white hover:scale-110 duration-300'>
                <FaAngleLeft className='w-12 lg:w-6 h-12 lg:h-6' />
            </button>
            <button onClick={next} className='p-1 rounded-full shadow bg-white/70 text-gray-800 hover:bg-white hover:scale-110 duration-300'>
                <FaAngleRight className='w-12 lg:w-6 h-12 lg:h-6'/>
            </button>
        </div>
        <div className='absolute bottom-4 right-0 left-0'>
            <div className='flex items-center justify-center gap-2'>
                {
                    images.map((_, index) =>{
                        return <div key={index} className={`transition-all w-3 lg:w-1 h-3 lg:h-1 bg-white rounded-full ${img === index ? 'p-2 lg:p-1' : 'bg-opacity-50'}`}/>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Slider