import React from 'react'
import { FaReact, FaDocker, FaCodeBranch, FaNodeJs, FaCode, FaGlasses } from 'react-icons/fa'
import { Title } from './Titles'
import { ListLayout, MainLayout, OneThirdLayout } from './Layouts'

const SkillBlock = ({ title, text, icon, link = null }) => {
  return (
    <OneThirdLayout className='!block'>
      <article>
        <div className='m-0 p-0 block relative min-h-[36px] mb-5 pt-2 pl-14' > {/*Here should be the clear class*/}
          <a href={link} className='m-0 p-0 leading-[1] text-inherit hover:text-primary delay-300 duration-1000' >{icon}</a>
          <h6 className='m-0 p-0 leading-[1] mb-5 text-2xl lg:text-lg font-normal uppercase' >{title}</h6>
        </div>
        <p className='m-0 p-0 text-base sm:text-sm' >{text}</p>
      </article>
    </OneThirdLayout>
  )
}

const Skills = () => {
  const iconStyle = 'block absolute top-0 left-0 text-[36px] leading-[1]'
  return (
    <MainLayout className='text-mid_dark bg-mid_light'>
      <Title title='Professional Skills' />
      <ListLayout>
        <SkillBlock title='Web Development' icon={<FaCode className={iconStyle} />} text='Sit amet turpis nulla congue augue lectus quis est ante non mi fusce euismod etiam augue aenean ullamcorper.' />
        <SkillBlock title='Back-End' icon={<FaNodeJs className={iconStyle} />} text='Sit amet turpis nulla congue augue lectus quis est ante non mi fusce euismod etiam augue aenean ullamcorper.' />
        <SkillBlock title='Front-End' icon={<FaReact className={iconStyle} />} text='Sit amet turpis nulla congue augue lectus quis est ante non mi fusce euismod etiam augue aenean ullamcorper.' />
        <SkillBlock title='Deployment' icon={<FaDocker className={iconStyle} />} text='Sit amet turpis nulla congue augue lectus quis est ante non mi fusce euismod etiam augue aenean ullamcorper.' />
        <SkillBlock title='Software Managment' icon={<FaCodeBranch className={iconStyle} />} text='Sit amet turpis nulla congue augue lectus quis est ante non mi fusce euismod etiam augue aenean ullamcorper.' />
        <SkillBlock title='Leadership' icon={<FaGlasses className={iconStyle} />} text='Sit amet turpis nulla congue augue lectus quis est ante non mi fusce euismod etiam augue aenean ullamcorper.' />
      </ListLayout>
      <div className='text-center left-1/2'>
        <a className='inline-block py-2 px-20 pb-2 uppercase border border-solid text-light bg-primary border-primary hover:text-inherit hover:bg-transparent hover:border-inherit rounded-xl duration-500' href="">
          See More...
        </a>
      </div>
    </MainLayout>
  )
}

export default Skills