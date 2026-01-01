"use client"
import Button from '@/components/form/Button'
import InputGroup from '@/components/form/InputGroup'
import InlineLink from '@/components/InlineLink'
import Logo from '@/components/Logo'
import BaseLayout from '@/layouts/BaseLayout'
import { FaGithub, FaSquareFacebook } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'

const Login = () => {
    return (
        <BaseLayout>
            <div className="w-full max-w-md bg-white rounded-lg sm:shadow-md p-6">
                <div className="space-y-4">
                    <Logo fullWidth />
                    <form className="space-y-4">
                        <InputGroup type="email" label="Email Address" placeholder="abc@example.com" required/>
                        <div>
                            <InputGroup type="password" label="Password" placeholder="••••••••••••••••" required/>
                            <div className="flex justify-between items-center mt-1">
                                <InputGroup type="checkbox" label="Remember me" />
                                <InlineLink label="Forgot your password?" linkText="Reset" href="/auth/forget-password" textSize="sm" className="flex justify-end gap-0.5 pt-1" />
                            </div>
                        </div>
                        <Button type="submit" variant="primary" fullWidth>Sign In</Button>
                    </form>
                    <div className="relative flex items-center py-2">
                        <div className="grow border-t border-gray-300"></div>
                        <span className="shrink mx-4 text-gray-400 text-xs uppercase">Or continue with email</span>
                        <div className="grow border-t border-gray-300"></div>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                        <Button variant="outline" icon={<FcGoogle size={24} />} fullWidth>Continue with Google</Button>
                        <Button variant="outline" icon={<FaGithub size={24} />} fullWidth>Continue with GitHub</Button>
                        <Button variant="outline" icon={<FaSquareFacebook className="text-blue-500" size={24} />} fullWidth>Continue with Facebook</Button>
                        <InlineLink label="Don't have an account?" linkText="Sign Up" href="/auth/register" textSize="md" className="flex items-center justify-center gap-1 pt-2" />
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}

export default Login
