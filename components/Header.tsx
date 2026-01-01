"use client"

import { useState, useRef, useEffect } from "react"
import { User } from "@/types/interfaces"
import { HiOutlineCog, HiOutlineLogout, HiOutlineUserCircle } from "react-icons/hi"
import Button from "@/components/form/Button"
import Title from "@/components/courses/Title"
import { courses } from "@/data/courses"

const Header = ({ user }: { user: User }) => {
    const firstLetter = user.name.charAt(0).toUpperCase()
    const [open, setOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <header className="fixed flex h-16 w-full items-center justify-between border-b border-gray-200 px-4 bg-white">
            <Title course={courses[0]} />
            <input
                type="text"
                placeholder="Search lessons..."
                className="w-125 border border-gray-200 rounded-md px-3 py-2 outline-none transition-all duration-300 focus:w-150 focus:border-gray-300 focus:ring-1 focus:ring-gray-100"
            />
            <div className="relative" ref={dropdownRef}>
                <button
                    onClick={() => setOpen(!open)}
                    className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold cursor-pointer"
                >
                    {firstLetter}
                </button>

                {open && (
                    <div className="absolute right-0 mt-2 rounded-lg border border-gray-200 bg-white shadow-lg">
                        <div className="px-4 py-3 border-b border-gray-300">
                            <p className="text-sm font-medium">{user.name}</p>
                            <p className="text-xs text-gray-500 truncate">{user.email}</p>
                        </div>

                        <div className="flex flex-col items-start p-2">
                            <Button variant="ghost" href="/" className="w-full flex gap-1 justify-start" icon={<HiOutlineUserCircle className="h-5 w-5" />}>
                                Profile
                            </Button>
                            <Button variant="ghost" href="/" className="w-full flex gap-1 justify-start" icon={<HiOutlineCog className="h-5 w-5" />}>
                                Settings
                            </Button>
                            <Button variant="ghost" href="/" className="w-full flex gap-1 justify-start text-red-600 hover:bg-red-50" icon={<HiOutlineLogout className="h-5 w-5" />}>
                                Logout
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
