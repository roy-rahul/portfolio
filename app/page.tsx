import TopNavBar from "@/app/ui/TopNavBar/topBar";
import HeroSection from "@/app/ui/HeroSection/hero";
import AboutMeSection from "@/app/ui/AboutMeSection/AboutMe";
import ProjectsSection from "@/app/ui/ProjectsSection/projects";
import ContactsSection from "@/app/ui/Contacts/contacts";
// import TestSection from "@/app/ui/TestSection/test";

export default function Home() {
  return (
    <div>
      <div className="hidden md:block">
        <main>
          <TopNavBar />
          <HeroSection />
          <hr className="my-16 border-brand-dark" />
          <AboutMeSection />
          <hr className="my-16 border-brand-dark" />
          <ProjectsSection />
          <hr className="my-16 border-brand-dark" />
          <ContactsSection />
          {/* <TestSection /> */}
        </main>
      </div>
      <div className="md:hidden absolute top-1/3 left-1/6 p-8">
        <p className="text-brand-600 text-lg font-bold">Currently, only available in <br /> Laptops and Desktops.</p>
      </div>
    </div>
  );
}
