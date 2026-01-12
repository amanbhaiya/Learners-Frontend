"use client"
import Button from '@/components/form/Button'
import InputGroup from '@/components/form/InputGroup'
import InlineLink from '@/components/InlineLink'
import Logo from '@/components/Logo'
import BaseLayout from '@/layouts/BaseLayout'
import { Routes } from '@/lib/routes'
import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { HiOutlineEye, HiOutlineEyeOff, HiOutlineLockClosed, HiOutlineMail, HiOutlineUser } from 'react-icons/hi'

// const Register = () => {
//   return (
//     <BaseLayout>
//       <div className="w-full max-w-md bg-white rounded-lg sm:shadow-md p-6">
//         <div className="space-y-4">
//           <Logo fullWidth />
//           <form className="space-y-4">
//             <InputGroup type="text" label="First Name" placeholder="John" required />
//             <InputGroup type="text" label="Middle Name" placeholder="Smith" />
//             <InputGroup type="text" label="Last Name" placeholder="Doe" required />
//             <InputGroup type="email" label="Email" placeholder="abc@example.com" required />
//             <InputGroup type="password" label="Password" placeholder="••••••••••••••••" required />
//             <InputGroup type="password" label="Confirm Password" placeholder="••••••••••••••••" required />
//             <InputGroup type="checkbox" label="Remember me" />
//             <Button type="submit" variant="primary" fullWidth>Sign In</Button>
//           </form>
//           <div className="grid grid-cols-1 gap-3">
//             <InlineLink label="Already have an account?" linkText="Sign In" href="/auth/login" textSize="md" className="flex items-center justify-center gap-1 pt-2" />
//           </div>
//         </div>
//       </div>
//     </BaseLayout>
//   )
// }

// export default Register

const Register = ({ onSwitchToLogin, onSignupSuccess }: {
  onSwitchToLogin: () => void;
  onSignupSuccess: () => void;
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (!agreedToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }
    console.log('Signup:', formData);
    onSignupSuccess();
  };

  const handleSocialSignup = (provider: string) => {
    console.log(`Sign up with ${provider}`);
    onSignupSuccess();
  };

  return (
    <BaseLayout>
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl sm:shadow-xl p-8 border border-gray-100">
          <Logo className="flex justify-center" />

          <div className="text-center my-4">
            <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
            <p className="text-gray-600">Start your learning journey today</p>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3 mb-6">
            <Button variant="outline" className="font-medium" onClick={() => handleSocialSignup('Google')} leadingIcon={FcGoogle} fullWidth>Continue with Google</Button>
            <Button variant="outline" className="font-medium" onClick={() => handleSocialSignup('GitHub')} leadingIcon={FaGithub} fullWidth>Continue with GitHub</Button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="text-sm text-gray-500 font-medium">OR</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Email Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <InputGroup
              type="text"
              label="Full Name"
              placeholder="John Doe"
              leadingIcon={HiOutlineUser}
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
            <InputGroup
              type="email"
              label="Email Address"
              placeholder="your@email.com"
              leadingIcon={HiOutlineMail}
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <InputGroup
              type={showPassword ? 'text' : 'password'}
              label="Password"
              placeholder="••••••••"
              leadingIcon={HiOutlineLockClosed}
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              trailingIcon={showPassword ? HiOutlineEyeOff : HiOutlineEye}
              onTrailingIconClick={() => setShowPassword(!showPassword)}
              minLength={8}
            />
            <InputGroup
              type={showConfirmPassword ? 'text' : 'password'}
              label="Confirm Password"
              placeholder="••••••••"
              leadingIcon={HiOutlineLockClosed}
              required
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              trailingIcon={showConfirmPassword ? HiOutlineEyeOff : HiOutlineEye}
              onTrailingIconClick={() => setShowConfirmPassword(!showConfirmPassword)}
              minLength={8}
            />
            <InputGroup
              type="checkbox"
              label={`I agree to the Terms of Service and Privacy Policy`}
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
            />
            <Button variant="primary" fullWidth>Create Account</Button>
          </form>
          <InlineLink label="Already have an account?" linkText="Sign Up" href={Routes.LOGIN} textSize="sm" className="flex items-center justify-center gap-1 mt-6 text-gray-600" />
        </div>
      </div>
    </BaseLayout>
  );
};

export default Register