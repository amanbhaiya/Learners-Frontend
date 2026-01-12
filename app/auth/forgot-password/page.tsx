"use client"

import Button from '@/components/form/Button'
import InputGroup from '@/components/form/InputGroup'
import Logo from '@/components/Logo'
import BaseLayout from '@/layouts/BaseLayout'

const ForgotPassword = () => {
    return (
        <BaseLayout>
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl sm:shadow-xl p-8 border border-gray-100">
                    <Logo className="flex justify-center" />

                    <div className="text-center my-4">
                        <h1 className="text-2xl font-bold text-gray-900">Forgot Password!</h1>
                        <p className="text-gray-600">Enter registered email address to change password</p>
                    </div>
                    <form className="space-y-4">
                        <InputGroup
                            type="email"
                            label="Registered Email Address"
                            placeholder="abc@example.com"
                            required
                        />
                        <Button type="submit" variant="primary" fullWidth>Sent Verification Link</Button>
                    </form>
                </div>
            </div>
        </BaseLayout>
    )
}

export default ForgotPassword