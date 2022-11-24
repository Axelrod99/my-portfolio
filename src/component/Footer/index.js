import React from 'react'
import mail from '../../assets/icons/mail.png'
import twitter from '../../assets/icons/twitter.png'
import linkedin from '../../assets/icons/linkedin.png'
import github from '../../assets/icons/github.png'



const Footer = () => {
  return (
    <div className=' border-t-2 border-[#bfa6ff2a] mx-10 py-10 flex flex-col items-center'>
        <p className='text-4xl font-semibold'>Get in touch</p>
        <p className='text-xs my-4'>Hey, why dont you hit me up and let’s talk about your next project</p>
        <div className='flex gap-4'>
            <img className='h-14' src={mail}/> 
            <img className='h-14' src={twitter}/> 
            <img className='h-14' src={linkedin}/> 
            <img className='h-14' src={github}/> 
        </div>
    </div>
  )
}

export default Footer
