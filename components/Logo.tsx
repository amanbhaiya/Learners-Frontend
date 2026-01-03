import { cn } from "@/lib/functions";

const Logo = ({ className, onClick }: { className?: string, onClick?: () => void }) => {
    return (
        <span className={cn("text-3xl font-black cursor-pointer", className)} onClick={onClick}>
            <span className='text-blue-600'>LEARN</span>
            <span className="text-red-600">ERS</span>
        </span>
    );
};

export default Logo

