import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import EducatonAndExperiences from "@/components/EducationAndExperiences";

export default function Home() {
    return (
        <div className="container flex flex-col w-full items-center max-w-[100vw] ">
            <NavBar />

            <Hero />
            <About />
            <Skills />
            <Projects />
            <EducatonAndExperiences />
            <Contact />
        </div>
    );
}
