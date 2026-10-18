import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Menu } from "@/components/sections/Menu";
import { Chef } from "@/components/sections/Chef";
import { StatementBand } from "@/components/sections/StatementBand";
import { Awards } from "@/components/sections/Awards";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Menu />
        <Chef />
        <StatementBand />
        <Awards />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
