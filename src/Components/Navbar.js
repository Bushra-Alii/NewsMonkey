import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import {modeContext} from '../App'


const Navbar = () => {
  const toggleMode2= useContext(modeContext)
  const {mode,toggleMode} = toggleMode2

  
  const [nav, setNav] = useState(false)
  const onClick =()=>{
    setNav (!nav)
  }

  
  return (
    <div >
      <nav className={`fixed top-0 z-20 ${mode ? "bg-gray-100" : "bg-black"} ${mode ? "text-black" : "text-white"} h-16 w-screen flex justify-between flex-row`}>
        <div className= "mx-4 py-3 font-bold text-3xl">
          TOP HEADLINES
        </div>
        <ul className='hidden lg:flex flex-row text-xl text-gray-700 font-semibold '>
          <button onClick={toggleMode} >MODE CONTROLLER</button>
          <Link className='px-2 py-4' to="/"> General</Link>
          <Link className='px-2 py-4' to="/business"> Business</Link>
          <Link className='px-2 py-4' to="/entertainment">Entertainment</Link>
          <Link className='px-2 py-4' to="/health">Health</Link>
          <Link className='px-2 py-4' to="/science">Science</Link>
          <Link className='px-2 py-4' to="/sports">Sports</Link>
          <Link className='px-2 py-4' to="/technology">Technology</Link>
        </ul>
        <div className='lg:hidden'>
          <div onClick={onClick}>
            {nav? <AiOutlineClose size={20} className='m-4'/> :<AiOutlineMenu size={20} className='m-4'/>
}
          </div>
          <ul className={nav? 'fixed left-0 top-0 flex flex-col text-xl text-gray-700 font-semibold h-screen w-[60%] bg-gray-100 border-r border-gray-300 lg:hidden ease-in-out duration-500' : 'fixed left-[-120%]'}>
            <div className='px-2 py-4 font-bold text-3xl'>TOP HEADLINES</div>
            <Link className='px-2 py-4 hover:text-gray-300 border-b border-gray-300' to="/"> General</Link>
            <Link className='px-2 py-4 hover:text-gray-300 border-b border-gray-300' to="/business"> Business</Link>
            <Link className='px-2 py-4 hover:text-gray-300 border-b border-gray-300' to="/entertainment">Entertainment</Link>
            <Link className='px-2 py-4 hover:text-gray-300 border-b border-gray-300' to="/health">Health</Link>
            <Link className='px-2 py-4 hover:text-gray-300 border-b border-gray-300' to="/science">Science</Link>
            <Link className='px-2 py-4 hover:text-gray-300 border-b border-gray-300' to="/sports">Sports</Link>
            <Link className='px-2 py-4 hover:text-gray-300 border-b border-gray-300' to="/technology">Technology</Link>

          </ul>
        </div>

      </nav>

    </div>
  )
}

export default Navbar
