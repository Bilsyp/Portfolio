import { Nav, About, Hero } from "@/components";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
