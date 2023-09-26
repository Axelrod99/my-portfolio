import React from 'react'
import mail from '../../assets/icons/mail.png'
import twitter from '../../assets/icons/twitter.png'
import linkedin from '../../assets/icons/linkedin.png'
import github from '../../assets/icons/github.png'



const Footer = () => {
  return (
    <div className=' border-t-2 border-[#bfa6ff2a] mx-10 py-10 flex flex-col items-center'>
        <p className='text-2xl sm:text-3xl lg:text-4xl font-semibold'>Get in touch</p>
        <p className='text-xs my-4'>Hey, why don't you hit me up and let’s talk about your next project</p>
        <div className='flex gap-4'>
            <a href='http://ajibolaajiboye99@gmail.com'><img className='h-14' src={mail}/> </a>
            <a href='https://twitter.com/_fineneighbour?t=cz7avwlYJOpbR6KCPsW0Qw&s=09'><img className='h-14' src={twitter}/> </a>
            <a href='https://www.linkedin.com/in/ajiboye-ajibola-2b095722a'><img className='h-14' src={linkedin}/> </a>
            <a href='https://github.com/Axelrod99'><img className='h-14' src={github}/> </a>
        </div>
    </div>
  )
}

export default Footer
