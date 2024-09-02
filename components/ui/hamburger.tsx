import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Hamburger(props: {
    navItems: Array<string>;
    state: boolean;
    setState: (value: boolean) => void;
}) {
    return (
        <div className="flex md:hidden">
            {!props.state ? (
                <GiHamburgerMenu
                    onClick={() => props.setState(true)}
                    className="hover:cursor-pointer hover:scale-110"
                    aria-label="Open menu"
                />
            ) : (
                <div className="flex flex-row h-fit fixed top-0 right-0 backdrop-blur-sm bg-violet-400 rounded-bl-lg">
                    <div className="flex flex-col mt-2.5">
                        {props.navItems.map((item) => (
                            <Link
                                key={item}
                                onClick={() => props.setState(false)}
                                className="text-sm font-medium text-gray-900 hover:underline underline-offset-4 p-3"
                                href={`#${item.toLowerCase()}`}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                    <GiHamburgerMenu
                        onClick={() => props.setState(false)}
                        className="hover:cursor-pointer hover:scale-110 text-gray-900 mr-4 mt-6"
                        aria-label="Close menu"
                    />
                </div>
            )}
        </div>
    );
}
