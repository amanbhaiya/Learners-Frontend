"use client"

import Button from '@/components/form/Button'
import InputGroup from '@/components/form/InputGroup'
import Logo from '@/components/Logo'
import BaseLayout from '@/layouts/BaseLayout'
import { useState } from 'react'
import { HiOutlineEye, HiOutlineEyeOff, HiOutlineLockClosed } from 'react-icons/hi'

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <BaseLayout>
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl sm:shadow-xl p-8 border border-gray-100">
          <Logo className="flex justify-center" />

          <div className="text-center my-4">
            <h1 className="text-2xl font-bold text-gray-900">Reset Password!</h1>
          </div>
          <form className="space-y-4">
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
            <Button type="submit" variant="primary" fullWidth>Verify</Button>
          </form>
        </div>
      </div>
    </BaseLayout>
  )
}

export default ResetPassword