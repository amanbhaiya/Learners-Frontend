import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/functions";
import { IconType } from "react-icons";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "outline" | "ghost" | "link";
    fullWidth?: boolean;
    leadingIcon?: IconType;
    trailingIcon?: IconType;
    href?: string;
}

const Button = ({
    children,
    variant = "primary",
    fullWidth = false,
    className,
    leadingIcon: LeadingIcon,
    trailingIcon: TrailingIcon,
    href,
    ...props
}: ButtonProps) => {
    const baseStyles = "flex items-center justify-center gap-3 transition-all cursor-pointer disabled:opacity-50";

    const variants = {
        primary: "py-3 px-4 bg-linear-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition shadow-md",
        outline: "border border-gray-300 bg-white text-gray-700 py-3 px-4 rounded-lg hover:border-blue-500 hover:bg-blue-50",
        ghost: "bg-transparent hover:bg-gray-100 text-gray-700 py-3 px-4 rounded-lg",
        link: "relative bg-transparent text-blue-600 p-0 font-medium inline-flex after:block after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[1px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full",
    };

    const content = (
        <>
            {LeadingIcon && (<LeadingIcon className="h-5 w-5 mb-0.5" />)}
            {children}
            {TrailingIcon && (<TrailingIcon className="h-5 w-5 mb-0.5" />)}
        </>
    );

    const combinedClasses = cn(
        baseStyles,
        variants[variant],
        fullWidth && variant !== "link" && "w-full",
        className
    );

    if (href) {
        return (
            <Link href={href} className={combinedClasses}>
                {content}
            </Link>
        );
    }

    return (
        <button className={combinedClasses} {...props}>
            {content}
        </button>
    );
};

export default Button;
