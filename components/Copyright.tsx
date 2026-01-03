import { getCurrentYear } from '@/lib/functions'
import Logo from '@/components/Logo'

const Copyright = () => {
    return (
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {getCurrentYear()}  <Logo className="text-md" />. All rights reserved.</p>
        </div>
    )
}

export default Copyright