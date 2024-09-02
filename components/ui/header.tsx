"use client";

import Link from "next/link";
import { useState } from "react";
import Hamburger from "./hamburger";

const navItems = ["About", "Skills", "Projects", "Education", "Contact"];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [navigatedTo, setNavigatedTo] = useState<string>(navItems[0]);

    return (
        <header className="px-4 lg:px-6 h-16 flex justify-between  items-center bg-gray-900 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
            <Link className="flex items-center" href="#">
                <span className="sr-only">Achyut Badyal Portfolio</span>
                <span className="font-bold text-xl text-violet-400">
                    Achyut Badyal
                </span>
            </Link>
            <Hamburger
                navItems={navItems}
                state={isMenuOpen}
                setState={setIsMenuOpen}
            />
            <nav className="md:flex hidden">
                {navItems.map((item) => (
                    <NavItem
                        item={item}
                        navigatedTo={navigatedTo}
                        setNavigatedTo={setNavigatedTo}
                        key={item}
                    />
                ))}
            </nav>
        </header>
    );
}

function NavItem(props: {
    item: string;
    navigatedTo: string;
    setNavigatedTo: (value: string) => void;
}) {
    return (
        <Link
            onClick={() => props.setNavigatedTo(props.item)}
            className={`text-sm font-medium underline-offset-4 p-6 ${
                props.navigatedTo === props.item
                    ? "text-violet-400 underline"
                    : "text-gray-300 hover:text-violet-400 hover:underline"
            }`}
            href={`#${props.item.toLowerCase()}`}
        >
            {props.item}
        </Link>
    );
}
