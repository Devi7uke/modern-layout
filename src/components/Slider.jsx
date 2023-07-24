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
    <div className='overflow-hidden relative'>
        <div className='flex transition-transform ease-in duration-500' style={{ transform: `translateX(-${img * 100}%)` }}>{images}</div>
        <div className='absolute inset-0 flex items-center justify-between p-4'>
            <button onClick={prev} className='p-1 rounded-full shadow bg-white/70 text-gray-800 hover:bg-white duration-300'>
                <FaAngleLeft size={40} />
            </button>
            <button onClick={next} className='p-1 rounded-full shadow bg-white/70 text-gray-800 hover:bg-white duration-300'>
                <FaAngleRight size={40} />
            </button>
        </div>
        <div className='absolute bottom-4 right-0 left-0'>
            <div className='flex items-center justify-center gap-2'>
                {
                    images.map((_, index) =>{
                        return <div key={index} className={`transition-all w-3 h-3 bg-white rounded-full ${img === index ? 'p-2' : 'bg-opacity-50'}`}/>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Slider