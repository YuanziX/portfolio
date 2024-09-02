import Link from "next/link";

export default function Header() {
    return (
        <header className="px-4 lg:px-6 h-16 flex items-center bg-gray-900 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
            <Link className="flex items-center" href="#">
                <span className="sr-only">Achyut Badyal Portfolio</span>
                <span className="font-bold text-xl text-violet-400">
                    Achyut Badyal
                </span>
            </Link>
            <nav className="ml-auto flex gap-6">
                {["About", "Skills", "Projects", "Education", "Contact"].map(
                    (item) => (
                        <Link
                            key={item}
                            className="text-sm font-medium text-gray-300 hover:text-violet-400 hover:underline underline-offset-4"
                            href={`#${item.toLowerCase()}`}
                        >
                            {item}
                        </Link>
                    )
                )}
            </nav>
        </header>
    );
}
