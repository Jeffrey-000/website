import { Badge } from "./ui/badge";
import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
    CardDescription,
} from "./ui/card";

export default function EducatonAndExperiences() {
    return (
        <>
            <section id="education" className="py-16 container">
                <h2 className="text-3xl font-bold mb-8">
                    Education & Experiences
                </h2>
                <div className="space-y-8">
                    <Card>
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle>
                                        Bachelor of Science in Computer Science
                                    </CardTitle>
                                    <CardDescription>
                                        University of Georgia
                                    </CardDescription>
                                </div>
                                <Badge>2022 - 2025</Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p>GPA: 3.81/4.0</p>
                            <p className="mt-2">Relevant Coursework:</p>
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                                <li>Data Structures and Algorithms</li>
                                <li>Software Engineering</li>
                                <li>Cryptography</li>
                                <li>Artificial Intelligence</li>
                                <li>Computer Networks</li>
                                <li>Mobile Robotics</li>
                                <li>Linear Algebra</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle>
                                        Software Engineer Intern
                                    </CardTitle>
                                    <CardDescription>
                                        U.S. Airforce
                                    </CardDescription>
                                </div>
                                <Badge>Summer 2024</Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Utilized Next.js and Tailwindcss to create a
                                local RAG LLM chat agent with a focus on user
                                authentication and user-experience.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </>
    );
}
