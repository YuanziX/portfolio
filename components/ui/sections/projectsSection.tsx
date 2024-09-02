import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function ProjectCard({
    title,
    description,
    features,
    technologies,
}: {
    title: string;
    description: string;
    features: string[];
    technologies: string[];
}) {
    return (
        <Card className="bg-gray-800 border-gray-700 shadow-lg rounded-lg">
            <CardHeader>
                <CardTitle className="text-violet-400">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="mb-4 text-gray-300">{description}</p>
                <div className="space-y-3">
                    <h4 className="font-semibold text-violet-400">
                        Key Features:
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-300">
                        {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
                <div className="mt-4">
                    <h4 className="font-semibold text-violet-400">
                        Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-3 mt-2">
                        {technologies.map((tech) => (
                            <Badge
                                key={tech}
                                variant="secondary"
                                className="bg-violet-600 text-gray-200"
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default function ProjectsSection() {
    return (
        <section className="w-full py-16" id="projects">
            <div className="container px-4 md:px-6">
                <h2 className="text-4xl font-bold mb-8 text-center text-violet-400">
                    Projects
                </h2>
                <div className="grid grid-cols-1 gap-4">
                    <ProjectCard
                        title="VITalize - Full Stack Student Companion App"
                        description="Developed and distributed VITalize, a full-stack student companion app used by hundreds, offering easy access to timetables, attendance, marks, and exam schedules. The app features a Python-based backend for data scraping and API services, coupled with a robust mobile frontend."
                        features={[
                            "Data Scraping & API: Built using FastAPI, the backend scrapes and processes student data from the university website using libraries like Playwright and Beautiful Soup.",
                            "Async Operations: Utilized asyncio for efficient handling of IO-intensive tasks.",
                            "Data Retrieval & Offline Access: Implemented the backend API for fetching data, with local caching using Hive NoSQL for offline access.",
                            "State Management: Employed BLOC for efficient state management, ensuring smooth user experience.",
                        ]}
                        technologies={[
                            "Flutter/Dart",
                            "BLOC State Management",
                            "Hive NoSQL DB",
                            "FastAPI",
                            "Python",
                        ]}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ProjectCard
                            title="Beatify-core"
                            description="Developed a Go backend for a music streaming app, handling music management, user authentication, and streaming."
                            features={[
                                "Music Hosting & Management: Store, manage, and stream music files.",
                                "User Authentication: Secure login using JWTs and encrypted passwords.",
                                "Music Streaming: Supports HTTP range requests for efficient streaming.",
                                "Metadata Handling & Fetching: Allows user uploads and music retrieval.",
                            ]}
                            technologies={[
                                "Go",
                                "net/http",
                                "JWT",
                                "PostgreSQL",
                            ]}
                        />
                        <ProjectCard
                            title="Customized Android kernel"
                            description="Rebased OEM changes on the latest CAF tag for Qualcomm fixes, and customized the Android kernel for Xiaomi Phoenix to boost performance and battery life."
                            features={[
                                "Kernel Optimizations: Enhanced power efficiency through various tweaks.",
                                "SafetyNet Integration: Implemented hardware level SafetyNet to pass on unlocked bootloader devices.",
                            ]}
                            technologies={["C", "Linux", "Android"]}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
