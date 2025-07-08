import { Badge } from "./ui/badge";
import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
    CardDescription,
    CardFooter,
} from "./ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Github, AppWindow } from "lucide-react";
import { GITHUB } from "./Globals";
import MessageButton from "./MessageButton";

export default function Projects() {
    return (
        <section id="projects" className="py-16 ">
            <div className="container space-y-8">
                <h2 className="text-3xl font-bold">Featured Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ProjectCard
                        title="Personal Website"
                        description="The very site you're on"
                        body="A personal website built using Next.js and hosted on Vercel."
                        badges={["Next.js", "Tailwindcss", "React"]}
                        githubLink="#"
                        demoMessage="You're already here 😎"
                        image="/placeholder"
                    />
                    <ProjectCard
                        title="E_Cinema Site"
                        description="Full-stack movie booking site"
                        body="Built a complete movie booking website with movie catalogue, ticket booking, user authentication, and a mock payment system."
                        badges={[
                            "Next.js",
                            "ClerkAuth",
                            "DrizzleORM",
                            "PostgressSQL",
                        ]}
                        githubLink="#"
                        demoMessage="Demo is not available 🙁"
                        image="/placeholder"
                    />
                </div>
                <div className="flex justify-center mt-8">
                    <Button asChild>
                        <Link
                            href={GITHUB}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View All Projects on GitHub{" "}
                            <Github className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

type GithubLinkOrMessage =
    | { githubLink: string; githubMessage?: never }
    | { githubLink?: never; githubMessage: string };

type DemoLinkOrMessage =
    | { demoLink: string; demoMessage?: never }
    | { demoLink?: never; demoMessage: string };

type ProjectCardBase = {
    title: string;
    description: string;
    body: string;
    badges: string[];
    image: string;
};

type ProjectCardProps = ProjectCardBase &
    GithubLinkOrMessage &
    DemoLinkOrMessage;

function ProjectCard({
    title,
    description,
    body,
    badges,
    githubLink,
    githubMessage,
    demoLink,
    demoMessage,
    image,
}: ProjectCardProps) {
    return (
        <Card className="flex flex-col h-full">
            <CardHeader>
                <div className="aspect-video relative mb-2 overflow-hidden rounded-md flex items-center justify-center">
                    <Image
                        src={image}
                        alt={title}
                        width={350}
                        height={200}
                        className="object-cover transition-all hover:scale-105"
                    />
                </div>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                <p className="text-muted-foreground">{body}</p>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
                {badges.map((item, index) => (
                    <Badge key={index} variant={"outline"}>
                        {item}
                    </Badge>
                ))}
            </CardFooter>
            <CardFooter className="pt-0 flex items-center justify-center">
                <div className="flex gap-2 ">
                    {githubLink != null && (
                        <Button size="sm" asChild>
                            <Link
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="mr-1 h-4 w-4" /> Code
                            </Link>
                        </Button>
                    )}
                    {githubMessage != null && (
                        <MessageButton size={"sm"} message={githubMessage}>
                            <Github className="mr-1 h-4 w-4" /> Code
                        </MessageButton>
                    )}
                    {demoLink != null && (
                        <Button size="sm" asChild>
                            <Link
                                href={demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AppWindow /> Demo
                            </Link>
                        </Button>
                    )}
                    {demoMessage != null && (
                        <MessageButton size={"sm"} message={demoMessage}>
                            <AppWindow /> Demo
                        </MessageButton>
                    )}
                </div>
            </CardFooter>
        </Card>
    );
}
