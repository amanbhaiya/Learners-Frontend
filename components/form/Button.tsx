import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'outline' | 'ghost' | 'link';
    fullWidth?: boolean;
    icon?: ReactNode;
    iconEnd?: boolean
    href?: string;
}

const Button = ({
    children,
    variant = 'primary',
    fullWidth = false,
    icon,
    className = "",
    iconEnd = false,
    href,
    ...props
}: ButtonProps) => {

    const baseStyles = "flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50";

    const variants = {
        primary: "bg-blue-500 text-white p-2 rounded-md font-semibold hover:bg-blue-600",
        outline: "border border-gray-300 bg-white text-gray-700 p-2 rounded-md hover:bg-gray-100",
        ghost: "bg-transparent hover:bg-gray-100 text-gray-700 p-2 rounded-md",
        link: "bg-transparent text-blue-600 hover:underline p-0 font-medium inline-flex"
    };

    const widthStyle = (fullWidth && variant !== 'link') ? "w-full" : "";
    const combinedClasses = `${baseStyles} ${variants[variant]} ${widthStyle} ${className}`;

    const content = (
        <>
            {icon && !iconEnd && <span className="shrink-0">{icon}</span>}
            {children}
            {icon && iconEnd && <span className="shrink-0">{icon}</span>}
        </>
    );

    if (href) {
        return <Link href={href} className={combinedClasses}>{content}</Link>;
    }

    return <button className={combinedClasses} {...props}>{content}</button>;
};

export default Button;
