import React from 'react'
import { FaPhone, FaGithub, FaHome, FaLifeRing, FaSignInAlt, FaEdit, FaSearch } from 'react-icons/fa'

const Ribbon = () => {
  return (
    <div className='block relative w-full m-0 p-0 text-left whitespace-normal break-words text-dark bg-light'> {/*equivalent to wrapper row0*/}
      <div className='py-5 block mx-28 before:table after:table clear-both before:clear-both after:clear-both text-lg items-center justify-center'> {/*equivalent to topbar clear hoc*/}
        <div className='inline-block w-1/2 text-center'>
          <ul>
            <li className='inline-block mr-4'><FaPhone className='inline-block'/> +52 (444) 467 4849</li>
            <li className='inline-block mr-0 pr-0 border-r-0'><FaGithub className='inline-block' /> @Devi7uke</li>
          </ul>
        </div>
        <div className='inline-block w-1/2 text-center self-center'>
          <ul>
            <li className='inline-block mr-4'><a href="" className='leading-normal text-primary'><FaHome/></a></li>
            <li className='inline-block mr-4'><a href="" className='leading-normal text-primary'><FaLifeRing/></a></li>
            <li className='inline-block mr-4'><a href="" className='leading-normal text-primary'><FaSignInAlt/></a></li>
            <li className='inline-block mr-4'><a href="" className='leading-normal text-primary'><FaEdit/></a></li>
            <li className='inline-block mr-0 pr-0 border-r-0'><a href="" className='leading-normal text-primary'><FaSearch/></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Ribbon