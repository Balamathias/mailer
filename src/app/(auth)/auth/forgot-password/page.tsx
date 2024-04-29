'use client'

import WidthWrapper from '@/components/WidthWrapper'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

const ForgotPassword = () => { 
    const [email, setEmail] = useState('')
    const [isPending, setIsPending] = useState(false)
    const handle = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsPending(true)
        const response = await fetch(process.env.NEXT_PUBLIC_URL + '/api/auth/forgot-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email})
        })

        if (response.ok) {
            alert('Success! Check your email for a password reset link.')
            setIsPending(false)
            return
        }

        setIsPending(false)

        alert('An error occurred, please try again')
    }
  return (
    <WidthWrapper className="min-h-screen items-center justify-center">
        <div className="flex flex-col">
            <h1 className="text-3xl font-semibold text-primary py-2.5">Forgot password</h1>
            <p className="text-center text-sm py-2">Enter your email address to reset your password.</p>
            <form className="flex flex-col gap-3" onSubmit={handle}>
                <Input type="email" onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Email address" className="input" required/>
                <Button type="submit" className="" disabled={isPending}>{isPending? 'Processing...' : 'Send reset link'}</Button>
            </form>
        </div>
    </WidthWrapper>
  )
}

export default ForgotPassword