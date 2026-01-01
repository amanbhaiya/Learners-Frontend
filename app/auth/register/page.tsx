"use client"
import Button from '@/components/form/Button'
import InputGroup from '@/components/form/InputGroup'
import InlineLink from '@/components/InlineLink'
import Logo from '@/components/Logo'
import BaseLayout from '@/layouts/BaseLayout'

const Register = () => {
  return (
    <BaseLayout>
      <div className="w-full max-w-md bg-white rounded-lg sm:shadow-md p-6">
        <div className="space-y-4">
          <Logo fullWidth />
          <form className="space-y-4">
            <InputGroup type="text" label="First Name" placeholder="John" required />
            <InputGroup type="text" label="Middle Name" placeholder="Smith" />
            <InputGroup type="text" label="Last Name" placeholder="Doe" required />
            <InputGroup type="email" label="Email" placeholder="abc@example.com" required />
            <InputGroup type="password" label="Password" placeholder="••••••••••••••••" required />
            <InputGroup type="password" label="Confirm Password" placeholder="••••••••••••••••" required />
            <InputGroup type="checkbox" label="Remember me" />
            <Button type="submit" variant="primary" fullWidth>Sign In</Button>
          </form>
          <div className="grid grid-cols-1 gap-3">
            <InlineLink label="Already have an account?" linkText="Sign In" href="/auth/login" textSize="md" className="flex items-center justify-center gap-1 pt-2" />
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}

export default Register