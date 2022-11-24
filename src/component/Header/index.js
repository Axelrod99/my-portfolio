import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between p-5 items-center'>
      <p className='font-bold text-[#8758FF]'>Jibola.</p>

      <div className='flex gap-5 font-semibold text-xs'>
        <a className='underline' href='#'>Works</a>
        <a className='underline' href='#'>About</a>
      </div>

      <button className='bg-purple-300 p-1 font-semibold text-xs z-[999]'>Resume</button>
    </div>
  )
}

export default Header
