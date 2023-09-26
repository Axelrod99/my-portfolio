import { useState } from "react";
import { useRef } from "react";
import "./App.css";
import Header from "./component/Header";
import circle from "../src/assets/icons/circle.png";
import onework from "./assets/images/onework.png";
import Landing from "./assets/images/Landing.png";
import whitelist from "./assets/images/whitelist.png";
import Desktop from "./assets/images/Desktop.png";
import image from "./assets/images/image.png";
// import you from "./assets/images/you.png";
import button2 from "./assets/icons/button2.png";
import netlify from "./assets/icons/netlify.png";
import Arrow from "./assets/icons/Arrow.png";
import x from "./assets/icons/x.png";
import Footer from "./component/Footer";
import housepadi from "./assets/images/Housepadi - Google Chrome 9_26_2023 11_06_46 AM.png";
import lamore from "./assets/images/lamore.b695576b18c22700a54e.png";
import comptware from "./assets/images/Bani - Google Chrome 9_26_2023 12_00_43 PM.png";
import moviebox from "./assets/images/React App - Google Chrome 9_26_2023 1_03_53 PM.png";
import you from './assets/images/WhatsApp Image 2023-09-11 at 11.39.33.jpeg'

function App() {
  const [showSigninModal, setShowSigninModal] = useState(false);
  const ref = useRef(false);
  const about = useRef(false);

  const handleclick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onTouch = (e) => {
    e.preventDefault();
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setShowSigninModal(false);
  };

  const aboutclick = () => {
    about.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onHoard = (e) => {
    e.preventDefault();
    about.current?.scrollIntoView({ behavior: "smooth" });
    setShowSigninModal(false);
  };

  return (
    <div className="App">
      <Header
        onSignin={() => setShowSigninModal(true)}
        onClick={() => handleclick(true)}
        onAbout={() => aboutclick(true)}
      />

      {/* <div className="bg-[url('circle.png')] flex w-60 h-60"> */}
      <div className="w-full flex h-fit my-7 bx:my-0">
        <div className="w-full flex flex-col items-start justify-center p-5 z-[999]">
          <p className="flex text-xs text-[#8758FF]">
            (Hello! my name is..../){" "}
          </p>
          <p className="flex so:text-4xl md:text-4xl font-bold my-3 ">
            Ajibola Ajiboye
          </p>
          <p className="text-xl md:text-4xl flex mb-3">
            I build the future, one line of code at a time
          </p>

          <div>
            <a
              href="http://ajibolaajiboye99@gmail.com"
              className="flex gap-1 items-center text-sm text-[#8758ff] bg-[#8758ff3d] px-3 py-2 rounded-md shadow shadow-[#8758FF]"
            >
              Get in touch
              <img className="h-2" src={Arrow} />
            </a>
          </div>
        </div>

        <img
          className="hidden bx:flex h-96 xl:h-[570px] lg:h-[540px] md:h-[450px] sm:h-[350px] bx:[300px] xo:h-[250px] so:h-[250px] justify-end relative left-40 bottom-24"
          src={circle}
        />
      </div>

      <p
        ref={ref}
        className="xo:text-5xl so:text-5xl sm:text-8xl md:text-9xl font-black text-[#8758FF70] opacity-25 flex justify-center mb-10"
      >
        Projects
      </p>

      <div className="mx-10 border-t-2 border-[#bfa6ff2a]">
        <div className="flex w-full my-10 flex-col md:flex-row gap-5">
          <div className="w-full flex flex-col items-center md:items-start justify-center gap-2 pb-5">
            <p className="text-[#8758FF70] text-xl font-bold my-2">HousePadi</p>
            <p className="text-sm my-1 leading-7">
              At HousePadi, we are redefining the meaning of home convinence. As
              a dynamic startup, we currently offer expertly crafted meals from
              professional chef and top-tier laundry services that bring
              freshness right to your door. Soon, we will be expanding our
              repertoire to imclude hassle-free grocery shopping and meticulous
              residential cleaning services. With HousePadi, you can relax
              knowing we have got home needs covered.
            </p>
            <div className="flex text-[10px] gap-3 text-[#8758ff]">
              <p>#React</p>
              <p>#Javascript</p>
              <p>#Tailwind css</p>
            </div>
            <div className="my-2 flex gap-3">
              <a
                href="https://www.housepadi.ng/"
                className="flex items-center text-xs text-[#8758ff] bg-[#8758ff3d] px-3 py-1 rounded-md shadow shadow-[#8758FF]"
              >
                Housepadi
              </a>
            </div>
          </div>

          <div className="w-full bg-[#070215] rounded-xl px-5">
            <div className="flex justify-center relative top-4">
              <p className="text-md lg:text-2xl xl:text-3xl font-semibold text-[#8758FF]">
                Housepadi
              </p>
            </div>
            <img className="pt-10" src={housepadi} />
          </div>
        </div>
      </div>

      <div className=" mx-10">
        <div className="flex w-full my-10 flex-col-reverse md:flex-row">
          <div className="w-full bg-[#070215] rounded-xl px-5">
            <div className="flex justify-center relative top-4">
              <p className="text-md lg:text-2xl xl:text-3xl font-semibold text-[#8758ff3d]">
                Lamore
              </p>
            </div>
            <img className="pt-10" src={lamore} />
          </div>

          <div className="w-full flex flex-col items-center gap-2 md:items-start justify-center p-5">
            <p className="text-[#8758FF70] text-xl font-bold">Lamore</p>
            <p className="text-sm my-1 leading-7">
              This is an event management web Platform. You can organize a wide
              range of events and collaborate with various vendors who provide
              services tailored to your various event requirements
            </p>
            <div className="flex text-[10px] gap-3 text-[#8758ff]">
              <p>#React</p>
              <p>#Javascript</p>
              <p>#Tailwind css</p>
            </div>

            <div className="my-2 flex gap-3">
              <a
                href="https://lamore-build.netlify.app/"
                className="flex items-center text-xs text-[#8758ff] bg-[#8758ff3d] px-3 py-1 rounded-md shadow shadow-[#8758FF]"
              >
                Lamore
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className=" mx-10">
        <div className="flex w-full my-10 flex-col md:flex-row">
          <div className="w-full flex flex-col gap-2 items-center md:items-start justify-center p-5 ">
            <p className="text-[#8758FF70] text-xl font-bold">Comptware</p>
            <p className="text-sm my-1 leading-7">
              Empowering your business with cutting-edge technology
            </p>
            <div className="flex text-[10px] gap-3">
              <p>#VS Code</p>
              <p>#React</p>
              <p>#Javascript</p>
              <p>#Tailwind css</p>
            </div>

            <div className="my-2 flex gap-3">
              <a
                href="#"
                className="flex items-center text-xs text-[#8758ff] bg-[#8758ff3d] px-3 py-1 rounded-md shadow shadow-[#8758FF]"
              >
                Comptware
              </a>
            </div>
          </div>

          <div className="w-full bg-[#070215] rounded-xl px-5">
            <div className="flex justify-center relative top-4">
              <p className="text-md lg:text-2xl xl:text-3xl font-semibold text-[#8758FF]">
                Comptware
              </p>
            </div>
            <img className="pt-10" src={comptware} />
          </div>
        </div>
      </div>

      <div className=" mx-10">
        <div className="flex w-full my-10 flex-col-reverse md:flex-row">
          <div className="w-full bg-[#070215] rounded-xl px-5">
            <div className="flex justify-center relative top-4">
              <p className="text-md lg:text-2xl xl:text-3xl font-semibold text-[#8758FF]">
                MovieBox
              </p>
            </div>
            <img className="pt-10" src={moviebox} />
          </div>

          <div className="w-full flex flex-col items-center md:items-start justify-center p-5">
            <p className="text-[#8758FF] text-xl font-bold">Moviebox</p>
            <p className="text-sm my-1">
              A project that displays a different movies based on genre.
            </p>
            <div className="flex text-[10px] gap-3">
              <p>#React</p>
              <p>#Javascript</p>
              <p>#Tailwind css</p>
            </div>

            <div className="my-2 flex gap-3">
              <a
                href="https://hng-stage-two.vercel.app/"
                className="flex items-center text-xs text-[#8758ff] bg-[#8758ff3d] px-3 py-1 rounded-md border-2 border-[#8758FF]"
              >
                MovieBox
              </a>
            </div>
          </div>
        </div>
      </div>

      <p
        ref={about}
        className="xo:text-5xl so:text-5xl sm:text-8xl md:text-9xl font-black text-[#8758FF70] opacity-25 flex justify-center mb-10"
      >
        About me{" "}
      </p>

      <div className="px-10 text-xs flex items-center w-full gap-10 md:gap-0 py-14 flex-col-reverse md:flex-row">
        <div className="w-full flex flex-col gap-3">
          <p className="text-[#8758FF] font-black">Hi there. </p>
          <p>
            My name is Ajiboye Ajibola, i am a frontend developer who has
            acquired the working knowledge of HTML, CSS, Javascript, React, Typescript and Node
            over the year through self-learning, to build fully responsive,
            secure and functional web pages.
          </p>

          <div className="text-sm">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Typescript</li>
            <li>NextJs</li>
            <li>Github</li>
            <li>Figma</li>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="border-purple-400 border-2 h-96 w-[320px] sm:w-[340px] rounded-lg">
            <img className="h-96 w-[330px] sm:w-[350px] ml-5 mt-5 rounded-lg" src={you} />
          </div>
          {/* <img className='' src={image}/>  */}
        </div>
      </div>

      {showSigninModal && (
        <>
          <form className="w-60 h-48 rounded-lg bg-[#181818] text-black font-semibold fixed m-auto top-5 right-5 z-[999]">
            <div className="flex justify-between p-5 ">
              <p className="text-sm text-[#8758FF]">Jibola.</p>
              <button>
                <img className="h-5 bg-white" src={x} />
                {/* onClick={()=>setShowSigninModal(false)} */}
              </button>
            </div>

            <div className="flex flex-col gap-7 px-5 text-white items-start">
              <button onClick={onTouch} className="underline">
                Works
              </button>
              <button onClick={onHoard} className="underline">
                About
              </button>
              {/* <div>
              <button className='flex items-center text-xs text-[#8758ff] px-3 py-1 rounded-md border-2 border-[#8758FF]'>Resume</button>
            </div> */}
            </div>
          </form>

          <div className="fixed w-screen h-screen bg-[#00000055] top-0 left-0" />
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;
