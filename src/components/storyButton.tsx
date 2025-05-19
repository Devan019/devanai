"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const StoryButton = () => {
  const router = useRouter();
  return (
    <div className='fixed z-[99]  bottom-4 right-4'>
      <button
      onClick={()=>router.push("/portfolio/story")}
      className="p-[3px] hover:cursor-pointer relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          My Story
        </div>
      </button>
    </div>
  )
}

export default StoryButton
