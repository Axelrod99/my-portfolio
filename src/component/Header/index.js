import React from 'react'
import grid from '../../assets/icons/grid.png'

export default function Header({onSignin, onClick, onAbout}) {
  return (
    <div className='justify-between p-5 items-center flex'>
      <p className='font-bold text-[#8758FF] text-xl'>Jibola.</p>

      <div className='gap-5 font-semibold text-xs hidden sm:flex'>
        <button onClick={onClick} className='underline'>Works</button>
        <button onClick={onAbout} className='underline'>About</button>
      </div>

      {/* <button 
        className='hidden sm:flex items-center text-xs text-[#8758ff] bg-[#8758ff3d] p-1 rounded-md border-2 border-[#8758FF] z-[999]'>Resume
      </button> */}


      

      <button onClick={onSignin} className='sm:hidden z-[999]'>
        <img className='' src={grid}/> 
      </button>


    </div>
  )
}

