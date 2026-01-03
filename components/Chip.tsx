import React from "react";
import { cn } from "@/lib/functions";
import { CgClose } from "react-icons/cg";

type ChipVariant = "default" | "primary" | "success" | "warning" | "danger";
type ChipStyle = "solid" | "outline";
type ChipSize = "sm" | "md" | "lg";

export interface ChipProps {
    children: React.ReactNode;
    variant?: ChipVariant;
    style?: ChipStyle;
    size?: ChipSize;
    className?: string;
    onDelete?: () => void;
}

const baseStyles =
    "inline-flex items-center gap-1 rounded-full font-medium transition";

const sizeStyles: Record<ChipSize, string> = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base"
};

const variantStyles: Record<
    ChipVariant,
    Record<ChipStyle, string>
> = {
    default: {
        solid: "bg-gray-700 text-white",
        outline: "bg-gray-100 text-gray-700"
    },
    primary: {
        solid: "bg-blue-600 text-white",
        outline: "bg-blue-100 text-blue-700"
    },
    success: {
        solid: "bg-green-600 text-white",
        outline: "bg-green-100 text-green-700"
    },
    warning: {
        solid: "bg-yellow-500 text-white",
        outline: "bg-yellow-100 text-yellow-700"
    },
    danger: {
        solid: "bg-red-600 text-white",
        outline: "bg-red-100 text-red-700"
    }
};

const Chip: React.FC<ChipProps> = ({
    children,
    variant = "default",
    style = "solid",
    size = "md",
    className,
    onDelete
}) => {
    return (
        <div className={cn(baseStyles, sizeStyles[size], variantStyles[variant][style], className)}>
            <span>{children}</span>
            {onDelete && (
                <button onClick={onDelete} className="ml-1 rounded-full p-0.5 hover:bg-black/10 transition">
                    <CgClose className="h-3.5 w-3.5" />
                </button>
            )}
        </div>
    );
};

export default Chip;
