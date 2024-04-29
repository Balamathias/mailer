'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChangeEvent, useState } from "react"

export default function SignUpComponent() {
    const router = useRouter()
    const [isPending, setIsPending] = useState(false)
    const [fields, setFields] = useState({
        username: '',
        email: '',
        password: '',
    })

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        setIsPending(true)
        e.preventDefault()
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_URL + '/api/auth/sign-up', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(fields),
            })

            if (response.ok) 
                    {
                        if (response?.status === 201)
                        return router.replace('/auth/verification-email-sent')
                alert('An error occurred. Please try again.')
            } else {
                alert('An error occurred. Please try again')
            }
        } catch (error) {
            console.error(error)
            setIsPending(false)
            alert('An error occurred. Please try again')
        } finally {
            setIsPending(false)
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <Card className="w-full max-w-sm shadow-lg rounded-lg py-5 drop-shadow-lg">
            <CardHeader>
                <CardTitle className="text-2xl py-1">Login</CardTitle>
                <CardDescription>
                Enter your email below to login to your account.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid gap-2">
                <Label htmlFor="email">Username</Label>
                <Input 
                    id="username" 
                    type="text"
                    placeholder="matiecodes"
                    onChange={(e) => setFields({ ...fields, username: e.target.value }) }
                    required 
                />
                </div>
                <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                    id="email" 
                    type="email" 
                    placeholder="m@example.com" 
                    onChange={(e) => setFields({ ...fields, email: e.target.value }) }
                    required 
                />
                </div>
                <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                    id="password" 
                    type="password" 
                    onChange={(e) => setFields({ ...fields, password: e.target.value }) }
                    required 
                />
                </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2 w-full">
                <Button className="w-full" disabled={isPending}>{isPending ? 'Processing...': 'Sign up'}</Button>

                <p className="text-sm text-muted-foreground py-2">Already have an account?{' '} <Link href="/sign-in" className="underline text-primary ">Sign in</Link>
                </p>
            </CardFooter>
        </Card>
    </form>
  )
}
