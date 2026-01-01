import { InputHTMLAttributes } from "react";
import { FaStar, FaStarOfLife } from "react-icons/fa6";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const InputGroup = ({ label, type, className, ...props }: InputProps) => {
    const isRequired = props.required;
    if (type === "checkbox") {
        return (
            <label className="flex items-center gap-1 text-sm text-gray-600 cursor-pointer">
                <input type="checkbox"{...props} className={`h-4 w-4 rounded  ${className}`} />
                <span className="mt-0.5">{label}</span>
            </label>
        );
    }
    return (
        <div className="w-full">
            {label && (<label className="inline-flex items-center gap-1 text-sm font-medium text-gray-500">{label}{isRequired ? (<FaStar className="text-red-500 mb-1 sm:pb-0" size={8}/>) : null}</label>)}
            <input type={type} {...props} className="w-full border border-gray-300 p-2 rounded-md focus:ring-1 focus:ring-gray-500 outline-none transition-all" />
        </div>
    );
};

export default InputGroup