import React from 'react'
import spinner from '../Images/Spinner.gif'


const Spinner = () => {
  return (
    <div  className="w-full flex justify-center">
      <img className='w-20' src={spinner} alt="loading"></img>
    </div>
  )
}

export default Spinner
