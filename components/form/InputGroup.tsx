import { cn } from "@/lib/functions";
import { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";
import { FaStar } from "react-icons/fa6";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    leadingIcon?: IconType;
    onLeadingIconClick?: () => void;
    trailingIcon?: IconType;
    onTrailingIconClick?: () => void;
}

const InputGroup = ({
    label,
    type,
    className,
    leadingIcon: LeadingIcon,
    trailingIcon: TrailingIcon,
    onLeadingIconClick,
    onTrailingIconClick,
    ...props
}: InputProps) => {
    const isRequired = props.required;
    if (type === "checkbox") {
        return (
            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input type="checkbox"{...props} className={cn("w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-0", className)} />
                <span className="mt-1">{label}</span>
            </label>
        );
    }
    return (
        <div>
            {label && (<label className="flex justify-start items-center gap-0.5 text-sm font-medium text-gray-700 mb-2">{label}{isRequired ? (<FaStar className="text-red-500 mb-1 sm:pb-0" size={8} />) : null}</label>)}
            <div className="relative">
                {LeadingIcon && (<LeadingIcon className={cn(`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 ${onLeadingIconClick && "cursor-pointer"}`)} onClick={onLeadingIconClick} />)}
                <input type={type} {...props} className={cn(`w-full ${LeadingIcon ? "pl-10" : "pl-4"} ${TrailingIcon ? "pr-10" : "pr-4"} py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all`, className)} />
                {TrailingIcon && (<TrailingIcon className={cn(`absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 ${onTrailingIconClick && "cursor-pointer"}`)} onClick={onTrailingIconClick} />)}
            </div>
        </div>
    );
};

export default InputGroup