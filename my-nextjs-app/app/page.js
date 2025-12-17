import Nav from "@/components/Nav";
import Carousel from "@/components/Carousel";
import Marquee from "@/components/Marquee";
import Hero from "@/components/Hero";
import LogosMarquee from "@/components/LogosMarquee";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  // Structured data for SEO - Only include verified information
  // Add more fields only when you have real, accurate data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Chase Tipton",
    jobTitle: "Professional Photographer",
    url: "https://chasetiptonphotography.com",
    // Add these fields ONLY when you have real data:
    // "telephone": "+1-555-123-4567",
    // "email": "contact@chasetiptonphotography.com",
    // "image": "https://chasetiptonphotography.com/chase-tipton-photo.jpg",
    // "address": { "@type": "PostalAddress", "addressLocality": "Los Angeles", "addressRegion": "CA", "addressCountry": "US" },
    // "sameAs": ["https://instagram.com/your-real-handle", "https://facebook.com/your-real-page"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Nav />
      <main className="pt-24">
        <Carousel />
        <Marquee />
        <Hero />
        <LogosMarquee />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
