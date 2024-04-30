'use client'

import { useTheme } from 'next-themes'
import React from 'react'
import { Button } from './ui/button'
import { LucideMoon, LucideSun } from 'lucide-react'

const ThemeToggle = () => {
  const { setTheme, theme, resolvedTheme } = useTheme()

  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <Button 
      variant={'secondary'} 
      onClick={toggleTheme}
      className='fixed z-10 right-10 bottom-10 h-12 w-12 rounded-full dark:bg-secondary bg-primary drop-shadow-md shadow-md'>
      {resolvedTheme === 'dark' ? (
        <LucideSun className='w-6 h-6 dark:text-lime-500 mx-auto text-white' />
      ) : (
        <LucideMoon className='w-6 h-6 dark:text-lime-500 mx-auto text-white' />
      )}
    </Button>
  )
}

export default ThemeToggle