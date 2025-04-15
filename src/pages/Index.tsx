
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import ServiceAreas from "../components/ServiceAreas";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <ServiceAreas />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
