'use client'

import { useTheme } from 'next-themes'
import React from 'react'
import { Button } from './ui/button'

const ThemeToggle = () => {
    const { setTheme, theme, resolvedTheme } = useTheme()
  return (
    <Button 
        variant={'ghost'} 
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        className='fixed z-10 right-10 bottom-10 h-12 w-12 rounded-full'>
        {resolvedTheme === 'dark' ? '🌞' : '🌙'}
    </Button>
  )
}

export default ThemeToggle