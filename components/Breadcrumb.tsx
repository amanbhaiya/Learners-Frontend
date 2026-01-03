import React from "react";
import { cn } from "@/lib/functions";
import { Size } from "@/lib/types";

export interface BreadcrumbItem {
    label: string;
    href?: string;
    isCurrent?: boolean;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    size?: Size;
    className?: string;
}

const sizeStyles: Record<Size, string> = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
};

const Breadcrumb = ({
    items,
    size = "md",
    className
}: BreadcrumbProps) => {
    return (
        <nav aria-label="Breadcrumb" className={cn("flex items-center gap-2 text-gray-400", sizeStyles[size], className)}>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <span className={cn("cursor-pointer transition-colors", item.isCurrent ? "text-blue-600 cursor-default" : "hover:text-blue-600")}>
                        {item.label}
                    </span>
                    {index < items.length - 1 && (
                        <span className="text-gray-300">›</span>
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
};

export default Breadcrumb;
