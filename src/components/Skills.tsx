import { Badge } from "./ui/badge";
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";

export default function Skills() {
    return (
        <section id="skills" className="py-16 container">
            <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <SkillCard
                    title="Programming Languages"
                    badges={[
                        "Python",
                        "Javascript",
                        "Typescript",
                        "Java",
                        "C#",
                        "SQL",
                        "HTML/CSS",
                    ]}
                />
                <SkillCard
                    title="Frameworks & Libraries"
                    badges={["React", "Next.js", "Node.js"]}
                />
                <SkillCard
                    title="Tools & Platforms"
                    badges={["Git", "Docker", "PostgreSQL", "VS Code"]}
                />
            </div>
        </section>
    );
}

type skillCardProps = {
    title: string;
    badges: string[];
};

function SkillCard({ title, badges }: skillCardProps) {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                        {badges.map((item, index) => (
                            <Badge key={index}>{item}</Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </>
    );
}
