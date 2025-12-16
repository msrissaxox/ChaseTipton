import Nav from "@/components/Nav";
import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Nav />
      <div className="pt-24">
        <Carousel />
        <Hero />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
