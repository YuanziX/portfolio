import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full py-6 px-4 md:px-6 bg-gray-900 border-t border-gray-800">
            <div className="container flex flex-col sm:flex-row justify-between items-center">
                <p className="text-sm text-gray-400">
                    © 2024 Achyut Badyal. All rights reserved.
                </p>
                <nav className="flex gap-6 mt-4 sm:mt-0">
                    {[
                        "About",
                        "Skills",
                        "Projects",
                        "Education",
                        "Contact",
                    ].map((item) => (
                        <Link
                            key={item}
                            className="text-sm text-gray-400 hover:text-violet-400 hover:underline underline-offset-4"
                            href={`#${item.toLowerCase()}`}
                        >
                            {item}
                        </Link>
                    ))}
                </nav>
            </div>
        </footer>
    );
}
