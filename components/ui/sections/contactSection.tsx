import { Button } from "@/components/ui/button";
import { IoMdMail } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";

export default function ContactSection() {
    return (
        <section className="w-full py-16" id="contact">
            <div className="container px-4 md:px-6">
                <h2 className="text-4xl font-bold mb-8 text-center text-violet-400">
                    Contact Me
                </h2>
                <div className="flex flex-col items-center justify-center space-y-4">
                    <p className="text-center text-gray-300">
                        Feel free to reach out for collaborations or just a
                        friendly chat.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        <Button
                            asChild
                            variant="destructive"
                            className="bg-violet-500 text-gray-900 hover:bg-violet-600"
                        >
                            <Link href="mailto:achubadyal4@gmail.com">
                                <IoMdMail className="mr-2 h-5 w-5" />
                                Email Me
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="destructive"
                            className="bg-violet-500 text-gray-900 hover:bg-violet-600"
                        >
                            <Link href="https://t.me/YuanziX">
                                <FaTelegramPlane className="mr-2 h-5 w-5" />
                                Telegram Me
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
