import './App.css';
import Header from './component/Header';
import circle from '../src/assets/icons/circle.png'
import onework from './assets/images/onework.png'
import Landing from './assets/images/Landing.png'
import kwikmed from './assets/images/kwikmed.png'
import Desktop from './assets/images/Desktop.png'
import image from './assets/images/image.png'
import button2 from './assets/icons/button2.png'
import netlify from './assets/icons/netlify.png'
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Header/>

      {/* <div className="bg-[url('circle.png')] flex w-60 h-60"> */}
      <div className='w-full flex' id='aaa'>
        <div className='w-full flex flex-col items-start justify-center p-10'>
          <p className='flex text-xs text-[#8758FF]'>Hello! my name is..../ </p>
          <p className='flex so:text-2xl md:text-4xl font-bold my-3 '>Ajibola Ajiboye</p>
          <p className='text-xl md:text-4xl flex mb-3'>Building the future, one line of code at a time</p>
          <div>
            <button className='bg-purple-300 p-1'>Get in touch</button>
          </div>
        </div>


        <img className='hidden bx:flex h-96 xl:h-[570px] lg:h-[540px] md:h-[450px] sm:h-[350px] bx:[300px] xo:h-[250px] so:h-[250px] justify-end relative left-40 bottom-20' src={circle}/>
      </div>

      <p className='xo:text-5xl so:text-5xl sm:text-8xl md:text-9xl font-black text-[#8758FF70] opacity-25 flex justify-center mb-10'>Projects</p>

      <div className='mx-10 border-t-2 border-[#bfa6ff2a]'>
        <div className='flex w-full my-20 flex-col md:flex-row'> 
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
              <button className='flex items-center text-xs text-[#8758ff] bg-[#8758ff3d] px-3 py-1 rounded-md border-2 border-[#8758FF]'>Github <img className='h-4' src={button2}/></button>
              <button className='flex items-center text-xs text-[#8758ff] bg-[#8758ff3d] px-3 py-1 rounded-md border-2 border-[#8758FF]'>Netlify <img className='h-4' src={netlify}/></button>
            </div>
          </div>

          <div className='w-full'>
            <img className='' src={onework}/> 
          </div>
        </div>
      </div>

      
      <div className=' mx-10'>
        <div className='flex w-full my-20 flex-col-reverse md:flex-row'>
          <div className='w-full bg-[#070215] rounded-xl px-5'>
            <div className='flex justify-center relative top-4'>
              <p className='text-md lg:text-2xl xl:text-3xl font-semibold text-[#8758ff3d]'>Health-First</p>
            </div>
            <img className='pt-10' src={Landing}/>
          </div> 


          <div className='w-full flex flex-col items-center md:items-start justify-center p-5'>
            <p className='text-[#8758ff3d] text-xl font-bold'>Health-First</p>
            <p className='text-sm my-1'>Health-First is an online platform that provides excellent health-care services for patient, it consist of varieties of doctors from different fields.</p>
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

        </div>
      </div>


      <div className=' mx-10'>
        <div className='flex w-full my-10 flex-col md:flex-row'>

          <div className='w-full flex flex-col items-center md:items-start justify-center p-5 '>
            <p className='text-[#8758ff3d] text-xl font-bold'>Kwikmed</p>
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
              <button className='flex items-center text-xs text-[#8758ff] bg-[#8758ff3d] px-3 py-1 rounded-md border-2 border-[#8758FF]'>Github <img className='h-4' src={button2}/></button>
              <button className='flex items-center text-xs text-[#8758ff] bg-[#8758ff3d] px-3 py-1 rounded-md border-2 border-[#8758FF]'>Netlify <img className='h-4' src={netlify}/></button>
            </div>
          </div>

        </div>
      </div>

      <p className='xo:text-5xl so:text-5xl sm:text-8xl md:text-9xl font-black text-[#8758FF70] opacity-25 flex justify-center mb-10'>About me </p>

      <div className='px-10 text-xs flex items-center w-full gap-10 md:gap-0 py-14 flex-col-reverse md:flex-row'>
        <div className='w-full flex flex-col gap-5'>
          <p>Lorem ipsum dolor sit amet consectetur. Eget viverra mattis tincidunt tristique elit etiam lobortis enim. Nulla id lectus viverra imperdiet. Augue pharetra mauris odio condimentum blandit. Interdum vitae tellus diam malesuada aliquet a. Urna hac at vulputate pellentesque enim mi semper vitae magna. A volutpat tincidunt ornare tristique. Nisl ut pretium vel vitae semper feugiat urna egestas amet. Interdum a nascetur sed urna aenean lacus id. Neque pretium fringilla integer pellentesque ut venenatis. Facilisis et facilisis malesuada ultrices. Euismod nulla magna elit volutpat. Tristique scelerisque egestas quam magna. Malesuada vivamus posuere sed pellentesque nec leo. Tellus turpis aliquet dignissim ante dolor. </p>

          <div className='text-sm'>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascrilit</li>
            <li>React</li>
            <li>Github</li>

          </div>
        </div>

        <div className='w-full flex justify-center'>
          <img className='' src={image}/> 
        </div>
      </div>

      <Footer/>

    </div>
  );
}

export default App;
