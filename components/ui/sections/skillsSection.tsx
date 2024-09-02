import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
    return (
        <Card className="bg-gray-800 border-gray-700 shadow-lg rounded-lg">
            <CardHeader>
                <CardTitle className="text-violet-400">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                        <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-violet-600 text-gray-200"
                        >
                            {skill}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

export default function SkillsSection() {
    return (
        <section className="w-full py-16" id="skills">
            <div className="container px-4 md:px-6">
                <h2 className="text-4xl font-bold mb-8 text-center text-violet-400">
                    Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <SkillCard
                        title="Frontend"
                        skills={[
                            "Flutter",
                            "Android (Kotlin / Jetpack Compose)",
                        ]}
                    />
                    <SkillCard
                        title="Backend"
                        skills={["Flask", "FastAPI", "Go (http/net)"]}
                    />
                    <SkillCard
                        title="Languages"
                        skills={[
                            "Python",
                            "Dart",
                            "Java/Kotlin",
                            "Go",
                            "C",
                            "Javascript",
                        ]}
                    />
                    <SkillCard
                        title="Other Technologies"
                        skills={[
                            "Selenium (Python)",
                            "MySQL",
                            "PostgreSQL",
                            "Prisma",
                            "Git",
                            "Postman",
                            "HTTP toolkit",
                            "Bash/zsh",
                            "Linux Operating System",
                            "Data Structures and Algorithms",
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}
