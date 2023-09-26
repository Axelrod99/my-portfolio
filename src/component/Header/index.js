import React, { useEffect, useState } from 'react'
import grid from '../../assets/icons/grid.png'

export default function Header({onSignin, onClick, onAbout}) {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          const scrollPosition = window.pageYOffset;

          if (scrollPosition > 0) {
              setIsSticky(true);
          } else {
              setIsSticky(false);
          }
      };

      window.addEventListener('scroll', handleScroll);


  }, []);

  return (
    <div className={`header-content ${isSticky ? 'sticky bg-[#0f0e0eed] pb-3 z-30 shadow shadow-b-[a29f9f51]' : ''}`}>
    <div className='justify-between p-5 items-center flex header'>
      <p className='font-bold text-[#8758FF] text-xl'>Jibola.</p>

      <div className='gap-5 font-semibold text-xs hidden sm:flex'>
        <button onClick={onClick} className='underline z-[999] hover:text-[#8758FF]'>Works</button>
        <button onClick={onAbout} className='underline z-[999] hover:text-[#8758FF]'>About</button>
      </div>

      {/* <button 
        className='hidden sm:flex items-center text-xs text-[#8758ff] bg-[#8758ff3d] p-1 rounded-md border-2 border-[#8758FF] z-[999]'>Resume
      </button> */}


      

      <button onClick={onSignin} className='sm:hidden z-[999]'>
        <img className='' src={grid}/> 
      </button>


    </div>
    </div>
  )
}

