import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";

function EducationCard({
    title,
    institution,
    date,
    grade,
}: {
    title: string;
    institution: string;
    date: string;
    grade: string;
}) {
    return (
        <Card className="bg-gray-800 border-gray-700 shadow-lg rounded-lg">
            <CardHeader>
                <CardTitle className="text-violet-400">{title}</CardTitle>
                <CardDescription className="text-gray-400">
                    {institution}
                </CardDescription>
                <CardDescription className="text-gray-400">
                    {date}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-gray-300">{grade}</p>
            </CardContent>
        </Card>
    );
}

export default function EducationSection() {
    return (
        <section className="w-full py-16" id="education">
            <div className="container px-4 md:px-6">
                <h2 className="text-4xl font-bold mb-8 text-center text-violet-400">
                    Education
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
                    <EducationCard
                        title="Bachelor of Technology in Computer Science"
                        institution="VIT-AP"
                        date="September 2022 - present"
                        grade="CGPA: 9.33"
                    />
                    <EducationCard
                        title="12th in Non-Medical with Informatics Practices"
                        institution="Jodhamal Public School, Jammu"
                        date="June 2022"
                        grade="Percentage: 94%"
                    />
                    <EducationCard
                        title="10th"
                        institution="Army Public School, Udhampur"
                        date="June 2020"
                        grade="Percentage: 93%"
                    />
                </div>
            </div>
        </section>
    );
}
