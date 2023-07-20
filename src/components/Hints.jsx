import React from 'react'
import { FaReact, FaDocker, FaCodeBranch, FaNodeJs, FaCode, FaGlasses } from 'react-icons/fa'

const Block = ({ title, text, icon, link = '#', first = false, last = false }) => {
  return (
    <li className={`inline-block m-0 list-none w-[30.52631%] ${first ? 'ml-0 clear-left' : 'ml-[4.21052%]'} ${last ? 'mb-0' : 'mb-12'} `}>
      <article>
        <div className='m-0 p-0 block relative min-h-[36px] mb-5 pt-2 pl-14' > {/*Here should be the clear class*/}
          <a href={link} className='m-0 p-0 leading-[1] text-inherit hover:text-primary delay-300 duration-1000' >{icon}</a>
          <h6 className='m-0 p-0 leading-[1] mb-5 text-2xl font-normal uppercase' >{title}</h6>
        </div>
        <p className='m-0 p-0' >{text}</p>
      </article>
    </li>
  )
}

const Hints = () => {
  const iconStyle = 'block absolute top-0 left-0 text-[36px] leading-[1]'
  return (
    <div className='block relative w-full m-0 p-0 text-left whitespace-normal break-words text-mid_dark bg-light'>
      <main className='block my-0 mx-auto py-20 px-0 clear-left'> {/*Here should be the clear class*/}
        <div className='text-center left-1/2 mb-20'>
          <h6 className='m-0 mb-5 text-4xl leading-normal font-normal uppercase inline-block relative p-0 pb-4 after:block after:absolute after:bottom-0 after:w-1/4 after:h-[5px] after:rounded-lg after:content-[""] after:left-1/2 after:ml-[-12%] after:bg-primary '>Professional Skills</h6>
        </div>
          <ul className='m-0 p-0 px-[20%] list-none block mb-20'> {/*Here should be the group class*/}
            <Block title='Web Development' first={true} icon={<FaCode className={iconStyle} />} text='Sit amet turpis nulla congue augue lectus quis est ante non mi fusce euismod etiam augue aenean ullamcorper.' />
            <Block title='Back-End' icon={<FaNodeJs className={iconStyle} />} text='Sit amet turpis nulla congue augue lectus quis est ante non mi fusce euismod etiam augue aenean ullamcorper.' />
            <Block title='Front-End' icon={<FaReact className={iconStyle} />} text='Sit amet turpis nulla congue augue lectus quis est ante non mi fusce euismod etiam augue aenean ullamcorper.' />
            <Block title='Deployment' first={true} last={true} icon={<FaDocker className={iconStyle} />} text='Sit amet turpis nulla congue augue lectus quis est ante non mi fusce euismod etiam augue aenean ullamcorper.' />
            <Block title='Software Managment' last={true} icon={<FaCodeBranch className={iconStyle} />} text='Sit amet turpis nulla congue augue lectus quis est ante non mi fusce euismod etiam augue aenean ullamcorper.' />
            <Block title='Leadership' last={true} icon={<FaGlasses className={iconStyle} />} text='Sit amet turpis nulla congue augue lectus quis est ante non mi fusce euismod etiam augue aenean ullamcorper.' />
          </ul>
          <div className='text-center left-1/2'>
            <a className='inline-block py-2 px-20 pb-2 uppercase border border-solid text-light bg-primary border-primary hover:text-inherit hover:bg-transparent hover:border-inherit rounded-xl duration-500' href="">
              See More...
            </a>
          </div>
      </main>
    </div>
  )
}

export default Hints