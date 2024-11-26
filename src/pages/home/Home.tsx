import NavBar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import Hero from "@/components/hero.tsx";
import About from "@/components/about.tsx";
import QualityAssurance from "@/components/quality-assurance.tsx";
import Contact from "@/components/contact.tsx";
import {ScrollToHash} from "@/components/scroll-to-hash.tsx";

function Home() {
  return (
    <div>
      <ScrollToHash />
      <NavBar />
      <main>
        <Hero />
        <About />
        <QualityAssurance />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;