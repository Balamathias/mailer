import WidthWrapper from '@/components/WidthWrapper'
import SignUpComponent from '@/components/auth/SignUpComponent'
import React from 'react'

const SignUpPage = () => {
  return (
    <WidthWrapper className="min-h-screen">
        <div className='flex flex-col items-center justify-center gap-4 w-full mx-auto'>
            <SignUpComponent />
        </div>
    </WidthWrapper>
  )
}

export default SignUpPage