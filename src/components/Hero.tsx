import { Button } from "./ui/button";
import {
    Linkedin,
    ChevronRight,
    Github,
    Mail,
    MessageSquare,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { NAME, GITHUB, LINKEDIN, EMAIL } from "./Globals";

export default function Hero() {
    return (
        <section className="container py-24 md:py-32 space-y-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="space-y-6 md:w-2/3">
                    <h1 className="text-4xl md:text-6xl font-bold">
                        Hi, I&apos;m {NAME}
                        <span className="text-primary">.</span>
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        A pretty cool dude 😎
                    </p>
                    <div className="flex gap-4">
                        <Button asChild>
                            <Link href="#projects">
                                View Projects{" "}
                                <ChevronRight className="ml-1 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href="#contact">
                                {<MessageSquare />}Contact Me
                            </Link>
                        </Button>
                    </div>
                    <div className="flex gap-4 pt-2">
                        <Link
                            href={GITHUB}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant="ghost" size="icon">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Button>
                        </Link>
                        <Link
                            href={LINKEDIN}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant="ghost" size="icon">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Button>
                        </Link>
                        <Link href={`mailto:${EMAIL}`}>
                            <Button variant="ghost" size="icon">
                                <Mail className="h-5 w-5" />
                                <span className="sr-only">Email</span>
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="md:w-1/3 flex justify-center">
                    <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
                        <Image
                            src="/placeholder.svg?height=256&width=256"
                            alt={NAME}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
