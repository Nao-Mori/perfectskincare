'use client'
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import LanguageDropdown from "./ui/LanguageDropdown";
import { internalLinks } from "@/data/internalLinks";
import { useTranslations } from 'next-intl';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const tLinks = useTranslations('Links');
  const tControls = useTranslations('Controls');

  return (
    <header className="
    sticky w-full top-0 z-50
    ">
      <div className="flex items-center justify-between px-4 py-3 bg-[var(--color-bg)]">
      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="
        absolute top-full left-0 w-full md:hidden
        ">
          <div className="flex flex-col items-start bg-[var(--color-bg)] px-4 py-4 gap-4">
            {internalLinks.map(({ href, label }) => (
              <Link
              key={href}
              href={href}
              className="text-sm text-gray-700 hover:text-black"
              onClick={() => setMenuOpen(false)}
              >
                {tLinks(label)}
              </Link>
            ))}
            <LanguageDropdown isWide={false} />
          </div>
          <div className="bg-gradient-to-b from-[var(--color-bg)] to-transparent h-3" />
        </div>
      )}
        <div className="flex items-center">
          {/* Mobile menu button */}
          <button
          className="md:hidden mr-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          >
            {menuOpen ? <X size={17}/> : <Menu size={17} />}
          </button>

          <Link href="/" className="text-xl font-bold pr-1">
            SkinMatch.io
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
        <div className="flex">
          {/* <button
          //onClick={handleSwitchLocale}
          className="hidden md:flex text-sm whitespace-nowrap font-bold button--outlined"
          >
            🌐 {locale}
          </button> */}
          <LanguageDropdown isWide={true} />
          <button className="text-sm whitespace-nowrap font-bold ml-2">
            {tControls("login")}
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="bg-gradient-to-b from-[var(--color-bg)] to-transparent h-3 absolute top-0 left-0 w-full" />
      </div>
    </header>
  );
}