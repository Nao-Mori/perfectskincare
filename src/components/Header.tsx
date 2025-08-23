'use client'
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/find-by-concern", label: "Find by Concern" },
  { href: "/find-by-ingredient", label: "Find by Ingredient" },
  { href: "/talk-to-ai", label: "Talk to AI" },
  { href: "/product-check", label: "Product Check" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="
    sticky w-full top-0 z-50 px-4 py-3 
    bg-gradient-to-b from-[var(--color-bg)] via-[var(--color-bg)] to-transparent
    ">
        <div className="flex items-center justify-between pb-4">
        {/* Mobile menu button */}
        <div>
            <button
                className="md:hidden mr-3"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
            >
                {menuOpen ? <X size={17}/> : <Menu size={17} />}
            </button>
            <Link href="/" className="text-xl font-bold pr-2">
                SkinMatch.AI
            </Link>
        </div>

        {/* Desktop nav */}
        {/* <nav className="hidden md:flex gap-6 items-center">
            {navItems.map(({ href, label }) => (
            <Link
                key={href}
                href={href}
                className="text-sm text-gray-700 hover:text-black mr-2 whitespace-nowrap"
            >
                {label}
            </Link>
            ))}
        </nav> */}
        <button className="text-sm whitespace-nowrap font-bold">
            Sign in with Google
        </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start gap-4 px-4 py-4 md:hidden">
            {navItems.map(({ href, label }) => (
                <Link
                key={href}
                href={href}
                className="text-sm text-gray-700 hover:text-black"
                onClick={() => setMenuOpen(false)}
                >
                {label}
                </Link>
            ))}
            </div>
        )}
    </header>
  );
}