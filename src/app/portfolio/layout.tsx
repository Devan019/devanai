"use client"
import Navbar from '@/components/NavBar'
import MouseScrollIndicator from '@/components/scrollicon'

import StoryButton from '@/components/storyButton'
import { useLenis } from '@/providers/lennisprovider'

import React from 'react'

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {scrollY} = useLenis();
  return (
    <div className='relative'>
      <Navbar/>
      {children}
      {/* <ThemeToggle /> */}
      <MouseScrollIndicator scrollY={scrollY}  threshold={2450}/>
      <StoryButton />
    </div>
  )
}

export default layout
