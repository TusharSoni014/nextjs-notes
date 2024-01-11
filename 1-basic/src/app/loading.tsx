import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function loading() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <AiOutlineLoading3Quarters className=' animate-spin text-white'/>
    </div>
  )
}
