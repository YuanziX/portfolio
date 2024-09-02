import Header from "@/components/ui/header";
import AboutSection from "@/components/ui/sections/aboutSection";
import SkillsSection from "@/components/ui/sections/skillsSection";
import ProjectsSection from "@/components/ui/sections/projectsSection";
import EducationSection from "@/components/ui/sections/educationSection";
import ContactSection from "@/components/ui/sections/contactSection";
import Footer from "@/components/ui/footer";

export default function Portfolio() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100">
            <Header />
            <main className="flex-1">
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <EducationSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}
