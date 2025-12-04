
import './App.css'
import FastGame from './FastGame';
import { useState } from 'react';

function App() {
  const [showGame, setShowGame] = useState(false);

  return (
    <>
      {!showGame ? (<>
        <div className="bg-[url(bg3.jfif)] bg-cover bg-center w-screen h-screen top-0 left-0 fixed z-0 blur-3xl" ></div>
        <div className="fixed top-0 left-0    w-full px-3 flex justify-between items-center z-20 " >
          <h2 className="text-3xl font-semibold  text-white">
            EL <samp className='text-sky-500'>9</samp>imma
          </h2>
          <div className=" flex gap-24 ">
            <button className=" font-semibold px-4 py-2 rounded-full hover:bg-sky-300 hover:text-white border hover:border-0 border-white transition-colors duration-300">
              Frontend
            </button>
            <button className="  font-semibold px-4 py-2 rounded-full hover:bg-sky-300 hover:text-white border hover:border-0 border-white transition-colors duration-300">
              Backend
            </button>
            <button className="  font-semibold px-4 py-2 rounded-full hover:bg-sky-300 hover:text-white border hover:border-0 border-sky-200 transition-colors duration-300">
              UI/UX
            </button>
            <button className="  font-semibold px-4 py-2 rounded-full hover:bg-sky-300 hover:text-white border hover:border-0 border-sky-200 transition-colors duration-300">
              IA
            </button>
          </div>
          <img src="/logo1.svg" alt="Logo" width={90} />
        </div>
        <div className=" flex flex-col justify-center items-center h-screen text-center px-3 z-10 relative ">
          <h1 className=" text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-lg ">
            Welcome to EL <samp className='text-sky-400'>9</samp>imma
          </h1>
          <p className=" text-sky-400 text-lg md:text-2xl mb-8 drop-shadow-lg ">
            Your gateway to innovative solutions and cutting-edge technology
          </p>
          <button className=" bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-300 drop-shadow-lg " onClick={() => setShowGame(true)}>
            Get Started
          </button>
        </div>

      </>) : (<FastGame onExit={() => setShowGame(false)} />)
      }</>
  )
}

export default App
