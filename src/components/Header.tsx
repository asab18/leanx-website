"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { LINKS } from "@/constants/links";

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
        if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
        ) {
        setIsNavOpen
        }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className="sticky top-0 z-50 shadow bg-white md:bg-white/50 md:backdrop-blur">
            <div className="container px-6 py-6 flex flex-row md:grid grid-cols-2">
                <div className="justify-self-start my-auto">
                    <Link href="/">
                        <Image src="brand/logo.svg" alt="Lean.X Logo" width={148} height={40} />
                    </Link>
                </div>
                <div className="flex flex-row gap-8 justify-self-end my-auto">
                    <div className="hidden md:block">
                        <div className="flex flex-row gap-8">
                            <Link href="#pricing" className="reg-text-purple">Pricing</Link>
                            <Link href={LINKS.apiDocs} target="_blank" className="reg-text-purple">Developer</Link>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <Link href={LINKS.portalLogin} target="_blank" className="btn-pri">Merchant Login</Link>
                    </div>
                </div>
                

                {/* SM screens and below */}
                <button className="md:hidden flex ml-auto items-center" onClick={() => setIsNavOpen(!isNavOpen)} aria-label="Toggle Menu">
                    <svg className="w-6 h-6" fill="none" stroke="#5FC7CD" viewBox="0 0 24 24">
                        {isNavOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            { isNavOpen && (
                <div className="md:hidden flex flex-col absolute w-full whitespace-nowrap bg-white rounded-lg shadow-md">
                    <Link href="#pricing" className="reg-text-purple menu-items mx-auto">Pricing</Link>
                    <Link href={LINKS.apiDocs} target="_blank" className="reg-text-purple menu-items mx-auto">Developer</Link>
                    <Link href={LINKS.portalLogin} target="_blank" className="btn-pri w-[90%] my-3 mx-auto">Merchant Login</Link>
                </div>
            )}
        </nav>
    )
}