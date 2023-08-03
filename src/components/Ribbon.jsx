import Link from 'next/link'
import React from 'react'
import { FaMapMarkerAlt, FaPager, FaHome, FaSignInAlt } from 'react-icons/fa'

const Ribbon = () => {
  return (
    <div className='block relative w-full m-0 p-0 text-left whitespace-normal break-words text-dark'> {/*equivalent to wrapper row0*/}
      <div className='flex my-4 h-full flex-wrap mx-28 before:table after:table clear-both before:clear-both after:clear-both text-lg items-center justify-center'> {/*equivalent to topbar clear hoc*/}
        <div className='flex justify-center items-center w-1/2 md:w-full text-center md:hidden'>
          <ul>
            <li className='inline-block mr-4 text-base lg:text-sm md:text-xs'><FaMapMarkerAlt className='inline-block'/> Urbano Villalón 500, La Ladrillera, S.L.P.</li>
            <li className='inline-block mr-0 text-base lg:text-sm md:text-xs pr-0 border-r-0'><FaPager className='inline-block' /> UPSLP</li>
          </ul>
        </div>
        <div className='flex justify-center items-center w-1/2 md:w-full'>
          <ul className=''>
            <li className='inline-block mr-4 text-base lg:text-sm md:text-xs'><Link href='/' className='leading-normal text-primary'><FaHome/></Link></li>
            <li className='inline-block text-base lg:text-sm md:text-xs'><Link href='/login' className='leading-normal text-primary'><FaSignInAlt/></Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Ribbon