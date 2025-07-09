import Link from "next/link";
import { Button } from "./ui/button";
import { Mail, Linkedin } from "lucide-react";
import { EMAIL, LINKEDIN } from "./Globals";

export default function Contact() {
    return (
        <>
            <section id="contact" className="py-16 ">
                <div className="container mx-auto">
                    <div className="max-w-2xl mx-auto text-center space-y-6">
                        <h2 className="text-3xl font-bold">Get In Touch</h2>
                        <p className="text-muted-foreground">
                            I&apos;m currently looking for new opportunities.
                            Whether you have a question or just want to say hi,
                            I&apos;ll try my best to get back to you!
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button asChild>
                                <Link href={`mailto:${EMAIL}`}>
                                    <Mail className="mr-2 h-4 w-4" /> Email Me
                                </Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link
                                    href={LINKEDIN}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Linkedin className="mr-2 h-4 w-4" />{" "}
                                    LinkedIn
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
