"use client"

import Logo from "@/components/Logo";
import { smoothScrollTo } from "@/lib/functions";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "@/components/form/Button";
import { Menu } from "@/lib/props";

const Header = ({ menus }: { menus: Menu[] }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

    const onMenuClick = (id: string) => {
        smoothScrollTo(id);
        setSelectedMenu(id);
        setMobileMenuOpen(false);
    }

    return (
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Logo onClick={() => onMenuClick("heros")} />
                    <nav className="hidden md:flex items-center gap-8">
                        {menus.map(item => (
                            <Button key={item.id} variant="link" className={selectedMenu === item.id ? "text-blue-600" : "text-gray-700"} onClick={() => onMenuClick(item.id)}>{item.title}</Button>
                        ))}
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button variant="link">Login</Button>
                        <Button variant="primary" className="px-6">Get Started</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <Button variant="ghost" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                    </Button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <nav className="flex flex-col gap-2 mb-4">
                            {menus.map(item => (
                                <Button key={item.id} variant="link" className={`px-4 py-2 justify-start ${selectedMenu === item.id ? "text-blue-600" : "text-gray-700"}`} onClick={() => onMenuClick(item.id)}>{item.title}</Button>
                            ))}
                        </nav>
                        <div className="flex flex-col gap-2 px-4">
                            <Button variant="outline">Login</Button>
                            <Button variant="primary">Get Started</Button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header