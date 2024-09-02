import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import Link from "next/link";

export default function AboutSection() {
    return (
        <section
            className="w-full py-16 md:py-24 lg:py-32 min-h-screen flex items-center"
            id="about"
        >
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-6 text-center">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl text-violet-400">
                            Achyut Badyal
                        </h1>
                        <p className="mx-auto max-w-3xl text-lg text-gray-300">
                            Flutter/Kotlin Developer | Go Backend Developer |
                            Open Source Enthusiast
                        </p>
                    </div>
                    <div className="space-y-3">
                        <p className="text-gray-300 flex items-center justify-center">
                            <TfiEmail className="mr-2 h-5 w-5" />
                            achubadyal4@gmail.com
                        </p>
                        <p className="text-gray-300 flex items-center justify-center">
                            <FiMapPin className="mr-2 h-5 w-5" />
                            Jammu, Jammu and Kashmir
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        <Button
                            asChild
                            variant="destructive"
                            className="bg-violet-400 text-gray-900 hover:bg-violet-600"
                        >
                            <Link href="https://linkedin.com/in/achyut-badyal-0f402a275">
                                <FaLinkedin className="mr-2 h-5 w-5" />
                                LinkedIn
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="destructive"
                            className="bg-violet-400 text-gray-900 hover:bg-violet-600"
                        >
                            <Link href="https://github.com/YuanziX">
                                <FaGithub className="mr-2 h-5 w-5" />
                                GitHub
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
