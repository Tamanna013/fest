import Hero from "./hero";
import About from "./about";
import Events from "./events";
import Teams from "./teams";
import Partners from "./partners";
import Testimonials from "./testimonials";
import Footer from "./footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Events />
      <Teams />
      <Partners />
      <Testimonials />
      <Footer />
    </main>
  );
}
