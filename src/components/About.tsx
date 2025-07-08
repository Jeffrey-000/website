import { Button } from "./ui/button";
import Link from "next/link";
import { Download } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-16 w-full ">
            <div className="container space-y-6 mx-auto">
                <h2 className=" text-3xl font-bold ">About Me</h2>
                <div className="  grid md:grid-cols-2 gap-8">
                    <div className="flex flex-wrap  space-y-4 break-all">
                        <p className="">I code and stuff.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h3 className="font-medium">Location</h3>
                                <p className="text-muted-foreground">
                                    Atlanta, GA
                                </p>
                            </div>
                            <div>
                                <h3 className="font-medium">School</h3>
                                <p className="text-muted-foreground">
                                    University of Georgia
                                </p>
                            </div>
                            <div>
                                <h3 className="font-medium">Degree</h3>
                                <p className="text-muted-foreground">
                                    B.S. Computer Science
                                </p>
                            </div>
                            <div>
                                <h3 className="font-medium">Graduation</h3>
                                <p className="text-muted-foreground">
                                    May 2025
                                </p>
                            </div>
                        </div>
                        <div className="pt-4">
                            <Button variant="outline" asChild>
                                <Link href="/resume.pdf" target="_blank">
                                    <Download /> Download Resume
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
