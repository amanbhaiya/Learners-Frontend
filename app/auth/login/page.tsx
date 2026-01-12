"use client"

import { useState } from "react";
import Logo from "@/components/Logo";
import { FaGithub } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import { HiOutlineEye, HiOutlineEyeOff, HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi";
import InputGroup from "@/components/form/InputGroup";
import Button from "@/components/form/Button";
import { Routes } from "@/lib/routes";
import BaseLayout from "@/layouts/BaseLayout";
import InlineLink from "@/components/InlineLink";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login:', { email, password, rememberMe });
    };

    const handleSocialLogin = (provider: string) => {
        console.log(`Login with ${provider}`);
    };

    return (
        <BaseLayout>
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl sm:shadow-xl p-8 border border-gray-100">
                    <Logo className="flex justify-center" />

                    <div className="text-center my-4">
                        <h1 className="text-2xl font-bold text-gray-900">Welcome Back!</h1>
                        <p className="text-gray-600">Sign in to continue your learning journey</p>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="space-y-3 mb-6">
                        <Button variant="outline" className="font-medium" onClick={() => handleSocialLogin('Google')} leadingIcon={FcGoogle} fullWidth>Continue with Google</Button>
                        <Button variant="outline" className="font-medium" onClick={() => handleSocialLogin('GitHub')} leadingIcon={FaGithub} fullWidth>Continue with GitHub</Button>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-4 mb-4">
                        <div className="flex-1 border-t border-gray-300"></div>
                        <span className="text-sm text-gray-500 font-medium">OR</span>
                        <div className="flex-1 border-t border-gray-300"></div>
                    </div>

                    {/* Email Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <InputGroup
                            type="email"
                            label="Email Address"
                            placeholder="your@email.com"
                            leadingIcon={HiOutlineMail}
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <InputGroup
                            type={showPassword ? 'text' : 'password'}
                            label="Password"
                            placeholder="••••••••"
                            leadingIcon={HiOutlineLockClosed}
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            trailingIcon={showPassword ? HiOutlineEyeOff : HiOutlineEye}
                            onTrailingIconClick={() => setShowPassword(!showPassword)}
                        />
                        <div className="flex items-center justify-between">
                            <InputGroup
                                type="checkbox"
                                label="Remember me"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <Button variant="link" className="text-sm" href={Routes.FORGOT_PASSWORD}>Forgot password?</Button>
                        </div>
                        <Button variant="primary" fullWidth>Sign In</Button>
                    </form>
                    <InlineLink label="Already have an account?" linkText="Sign Up" href={Routes.REGISTER} textSize="sm" className="flex items-center justify-center gap-1 mt-6 text-gray-600" />
                </div>
            </div>
        </BaseLayout>
    );
};

export default Login