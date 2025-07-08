"use client";

import Link from "next/link";

import ThemeToggle from "./ThemeToggle";
import { House } from "lucide-react";

export default function NavBar() {
    return (
        <div className="relative w-full px-4 py-3 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
            <Link href="#" className="text-lg font-semibold">
                <House />
            </Link>

            <div className="hidden md:flex gap-6 text-sm font-medium">
                <Link href="#about">About</Link>
                <Link href="#education">Education</Link>
                <Link href="#projects">Projects</Link>
                <Link href="#contact">Contact</Link>
            </div>
            <ThemeToggle />
        </div>
    );
}
