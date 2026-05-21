import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Experience } from "@/components/sections/Experience";
import { Toolbox } from "@/components/sections/Toolbox";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Experience />
      <Toolbox />
      <Contact />
    </>
  );
}
