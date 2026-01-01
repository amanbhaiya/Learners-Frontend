"use client"
import Button from '@/components/form/Button'
import InputGroup from '@/components/form/InputGroup'
import Logo from '@/components/Logo'
import BaseLayout from '@/layouts/BaseLayout'

const ResetPassword = () => {
  return (
    <BaseLayout>
      <div className="w-full max-w-md bg-white rounded-lg sm:shadow-md p-6">
        <div className="space-y-4">
          <Logo fullWidth />
          <form className="space-y-4">
            <InputGroup type="email" label="Registered Email Address" placeholder="abc@example.com" disabled/>
            <Button type="submit" variant="primary" fullWidth>Verify</Button>
          </form>
        </div>
      </div>
    </BaseLayout>
  )
}

export default ResetPassword