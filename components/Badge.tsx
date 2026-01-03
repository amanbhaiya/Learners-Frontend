import { cn } from "@/lib/functions";
import { Size } from "@/lib/types";
import React from "react";

export type BadgeVariant = "default" | "primary" | "success" | "warning" | "danger" | "outline";

interface BadgeProps {
    children: React.ReactNode;
    variant?: BadgeVariant;
    size?: Size;
    className?: string;
}

const baseStyles = "inline-flex items-center rounded-full font-semibold transition";

const variantStyles: Record<BadgeVariant, string> = {
    default: "bg-gray-100 text-gray-800",
    primary: "bg-blue-600 text-white",
    success: "bg-green-600 text-white",
    warning: "bg-yellow-500 text-white",
    danger: "bg-red-600 text-white",
    outline: "border border-gray-300 text-gray-700"
};

const sizeStyles: Record<Size, string> = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base"
};

const Badge = ({
    children,
    variant = "default",
    size = "md",
    className
}: BadgeProps) => {
    return (
        <span className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}>
            {children}
        </span>
    );
};

export default Badge;
