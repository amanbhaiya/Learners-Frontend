import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


export const smoothScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const isNullOrUndefinedOrEmpty = (value: any): boolean => {
    if (value === null || value === undefined) return true;
    if (typeof value === "string") return value.trim() === "";
    if (Array.isArray(value)) return value.length === 0;
    if (typeof value === "object") return Object.keys(value).length === 0;
    return false;
};

export const toCapitalCase = (value?: string) => !isNullOrUndefinedOrEmpty(value) ? `${value?.[0].toUpperCase()}${value?.substring(1)}` : "";

export const getCurrentYear = () => new Date().getFullYear();
