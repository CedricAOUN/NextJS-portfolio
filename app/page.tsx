import { ContactForm } from "@/app/components/ContactForm";
import { ParallaxHeader } from "@/app/components/ParallaxHeader";
import { NavBar } from "@/app/components/NavBar";
import { AboutComponent } from "@/app/components/AboutComponent";
import { Projects } from "@/app/components/Projects";
import { SiteInfoComponent } from "@/app/components/SiteInfoComponent";

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <ParallaxHeader></ParallaxHeader>
      <div className={`mt-[100svh]`}>
        <AboutComponent></AboutComponent>
        <Projects />
        <SiteInfoComponent></SiteInfoComponent>
        <ContactForm></ContactForm>
      </div>
    </>
  );
}
