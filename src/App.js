import { useState } from 'react'
import { useRef } from 'react';
import './App.css';
import Header from './component/Header';
import circle from '../src/assets/icons/circle.png'
import onework from './assets/images/onework.png'
import Landing from './assets/images/Landing.png'
import kwikmed from './assets/images/kwikmed.png'
import Desktop from './assets/images/Desktop.png'
import image from './assets/images/image.png'
import you from './assets/images/you.png'
import button2 from './assets/icons/button2.png'
import netlify from './assets/icons/netlify.png'
import Arrow from './assets/icons/Arrow.png'
import x from './assets/icons/x.png'
import Footer from './component/Footer'


function App() { 

  const [showSigninModal, setShowSigninModal] = useState(false);
  const ref = useRef(false);
  const about = useRef(false);
  
  const handleclick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'})
  }

  const onTouch = (e) => {
    e.preventDefault();
    ref.current?.scrollIntoView({behavior: 'smooth'})
    setShowSigninModal(false)
  }

  const aboutclick = () => {
    about.current?.scrollIntoView({behavior: 'smooth'})
  }

  const onHoard = (e) => {
    e.preventDefault();
    about.current?.scrollIntoView({behavior: 'smooth'})
    setShowSigninModal(false)
  }

  return (
    <div className="App">
      <Header 
        onSignin={()=>setShowSigninModal(true)}
        onClick={()=>handleclick(true)}
        onAbout={()=>aboutclick(true)}
      />

      {/* <div className="bg-[url('circle.png')] flex w-60 h-60"> */}
      <div className='w-full flex h-fit '>
        <div className='w-full flex flex-col items-start justify-center p-5 z-[999]'>
          <p className='flex text-xs text-[#8758FF]'>(Hello! my name is..../) </p>
          <p className='flex so:text-4xl md:text-4xl font-bold my-3 '>Ajibola Ajiboye</p>
          <p className='text-2xl font-thin md:text-4xl flex mb-3'>I build the future, one line of code at a time</p>

          <div>
            <a href='http://ajibolaajiboye99@gmail.com' className='flex gap-1 items-center text-sm text-[#8758ff] bg-[#8758ff3d] px-3 py-2 rounded-md border-2 border-[#8758FF]'>Get in touch<img className='h-2' src={Arrow}/></a>
          </div>
        </div>


        <img className='hidden bx:flex h-96 xl:h-[570px] lg:h-[540px] md:h-[450px] sm:h-[350px] bx:[300px] xo:h-[250px] so:h-[250px] justify-end relative left-40 bottom-24' src={circle}/>

      </div>

      <p ref={ref} className='xo:text-5xl so:text-5xl sm:text-8xl md:text-9xl font-black text-[#8758FF70] opacity-25 flex justify-center mb-10'>Projects</p>

      <div className='mx-10 border-t-2 border-[#bfa6ff2a]'>
        <div className='flex w-full my-10 flex-col md:flex-row'> 
          <div className='w-full flex flex-col items-center md:items-start justify-center pb-5'>
            <p className='text-[#8758FF70] text-xl font-bold my-2'>One-work Landing Page</p>
            <p className='text-sm my-1'>One-work is an online platform for freelancers to find crypto jobs.</p>
            <div className='flex text-[10px] gap-3'>
              <p>#VS Code</p>
              <p>#React</p>
              <p>#Javascript</p>
              <p>#Tailwind css</p>
            </div>
            <div className='my-2 flex gap-3'>
              <a href='https://github.com/Axelrod99/one-work-Landing-page.git' className='flex items-center text-xs text-[#8758ff] bg-[#8758ff3d] px-3 py-1 rounded-md border-2 border-[#8758FF]'>Github <img className='h-4' src={button2}/></a>
              <a href='https://one-page1.netlify.app' className='flex items-center text-xs text-[#8758ff] bg-[#8758ff3d] px-3 py-1 rounded-md border-2 border-[#8758FF]'>Netlify <img className='h-4' src={netlify}/></a>
            </div>
          </div>

          <div className='w-full'>
            <img className='' src={onework}/> 
          </div>
        </div>
      </div>

      
      <div className=' mx-10'>
        <div className='flex w-full my-10 flex-col-reverse md:flex-row'>
          <div className='w-full bg-[#070215] rounded-xl px-5'>
            <div className='flex justify-center relative top-4'>
              <p className='text-md lg:text-2xl xl:text-3xl font-semibold text-[#8758ff3d]'>Health-First</p>
            </div>
            <img className='pt-10' src={Landing}/>
          </div> 


          <div className='w-full flex flex-col items-center md:items-start justify-center p-5'>
            <p className='text-[#8758FF70] text-xl font-bold'>Health-First</p>
            <p className='text-sm my-1'>Health-First is an online platform that provides excellent health-care services for patient, it comprises of doctors from all field.</p>
            <div className='flex text-[10px] gap-3'>
              <p>#VS Code</p>
              <p>#React</p>
              <p>#Javascript</p>
              <p>#Tailwind css</p>
            </div>

            <div className='my-2 flex gap-3'>
              <a href='https://github.com/Axelrod99/hospital-Landing-page.git' className='flex items-center text-xs text-[#8758ff] bg-[#8758ff3d] px-3 py-1 rounded-md border-2 border-[#8758FF]'>Github <img className='h-4' src={button2}/></a>
              <a href='https://hospitallanding.netlify.app' className='flex items-center text-xs text-[#8758ff] bg-[#8758ff3d] px-3 py-1 rounded-md border-2 border-[#8758FF]'>Netlify <img className='h-4' src={netlify}/></a>
            </div>
          </div>

        </div>
      </div>


      <div className=' mx-10'>
        <div className='flex w-full my-10 flex-col md:flex-row'>

          <div className='w-full flex flex-col items-center md:items-start justify-center p-5 '>
            <p className='text-[#8758FF70] text-xl font-bold'>Kwikmed</p>
            <p className='text-sm my-1'>Kwikmed is a platform used to book medical tests online and have results delivered.</p>
            <div className='flex text-[10px] gap-3'>
              <p>#VS Code</p>
              <p>#React</p>
              <p>#Javascript</p>
              <p>#Tailwind css</p>
            </div>
            
            <div className='my-2 flex gap-3'>
              <button className='flex items-center text-xs text-[#8758ff] bg-[#8758ff3d] px-3 py-1 rounded-md border-2 border-[#8758FF]'>Github <img className='h-4' src={button2}/></button>
              <button className='flex items-center text-xs text-[#8758ff] bg-[#8758ff3d] px-3 py-1 rounded-md border-2 border-[#8758FF]'>Netlify <img className='h-4' src={netlify}/></button>
            </div>
          </div>

          <div className='w-full bg-[#070215] rounded-xl px-5'>
            <div className='flex justify-center relative top-4'>
              <p className='text-md lg:text-2xl xl:text-3xl font-semibold text-[#8758FF]'>Kwikmed</p>
            </div>
            <img className='pt-10' src={kwikmed}/>
          </div> 

        </div>
      </div>


      <div className=' mx-10'>
        <div className='flex w-full my-10 flex-col-reverse md:flex-row'>

          <div className='w-full bg-[#070215] rounded-xl px-5'>
            <div className='flex justify-center relative top-4'>
              <p className='text-md lg:text-2xl xl:text-3xl font-semibold text-[#8758FF]'>Steven's Project</p>
            </div>
            <img className='pt-10' src={Desktop}/>
          </div> 

          <div className='w-full flex flex-col items-center md:items-start justify-center p-5'>
            <p className='text-[#8758FF] text-xl font-bold'>Steven's Project</p>
            <p className='text-sm my-1'>A UI/UX portfolio .</p>
            <div className='flex text-[10px] gap-3'>
              <p>#VS Code</p>
              <p>#React</p>
              <p>#Javascript</p>
              <p>#Tailwind css</p>
            </div>
            
            <div className='my-2 flex gap-3'>
              <a href='https://github.com/Axelrod99/steven-Landing-page.git' className='flex items-center text-xs text-[#8758ff] bg-[#8758ff3d] px-3 py-1 rounded-md border-2 border-[#8758FF]'>Github <img className='h-4' src={button2}/></a>
              <a href='https://glistening-figolla-abc70d.netlify.app' className='flex items-center text-xs text-[#8758ff] bg-[#8758ff3d] px-3 py-1 rounded-md border-2 border-[#8758FF]'>Netlify <img className='h-4' src={netlify}/></a>
            </div>
          </div>

        </div>
      </div>

      <p ref={about} className='xo:text-5xl so:text-5xl sm:text-8xl md:text-9xl font-black text-[#8758FF70] opacity-25 flex justify-center mb-10'>About me </p>

      <div className='px-10 text-xs flex items-center w-full gap-10 md:gap-0 py-14 flex-col-reverse md:flex-row'>
        <div className='w-full flex flex-col gap-3'>
          <p className='text-[#8758FF] font-black'>Hi there. </p>
          <p>My name is Ajiboye Ajibola, i am a frontend developer based in Lagos, Nigeria. I enjoy the thrills of writing code, building things and seeing my codes deployed into functional and responsive web applications. I started off as a designer in the early days and learnt my way up from html to react.</p>

          <div className='text-sm'>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Github</li>
            <li>Figma</li>

          </div>
        </div>

        <div className='w-full flex justify-center'>
          <div className='border-purple-400 border-2 h-96 w-80 rounded-lg'>
            <img className='h-96 w-80 ml-5 mt-5 rounded-lg' src={you}/>
          </div>
          {/* <img className='' src={image}/>  */}
        </div>
      </div>

      {showSigninModal &&  <>
        <form className='w-60 h-48 rounded-lg bg-[#181818] text-black font-semibold fixed m-auto top-5 right-5 z-[999]'>

          <div className='flex justify-between p-5 '>
            <p className='text-sm text-[#8758FF]'>Jibola.</p>
            <button>
              <img className='h-5 bg-white' src={x}/>
              {/* onClick={()=>setShowSigninModal(false)} */}
            </button>
          </div>

          <div className='flex flex-col gap-7 px-5 text-white items-start'>
            <button onClick={onTouch} className='underline'>Works</button>
            <button onClick={onHoard} className='underline'>About</button>
            {/* <div>
              <button className='flex items-center text-xs text-[#8758ff] px-3 py-1 rounded-md border-2 border-[#8758FF]'>Resume</button>
            </div> */}
          </div>

        </form>

        <div className='fixed w-screen h-screen bg-[#00000055] top-0 left-0' />
      </>}


      <Footer/>

    </div>
  );
}

export default App;
