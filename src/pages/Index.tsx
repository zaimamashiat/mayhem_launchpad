import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import TechStack from "@/components/landing/TechStack";
import Projects from "@/components/landing/Projects";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import MeetTheTeam from "@/components/landing/MeetTheTeam";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">

      {/* Main Navigation */}
      <Navbar />

      {/* 
        SEO: Internal links for entry page
        Helps search engines detect multiple internal destinations
      */}
      <nav aria-label="Primary Site Links" className="sr-only">
        <ul>
          <li><a href="/#services">Our Services</a></li>
          <li><a href="/#projects">Featured Projects</a></li>
          <li><a href="/#why-us">Why Choose Us</a></li>
          <li><a href="/#team">Meet The Team</a></li>
          <li><a href="/#contact">Contact Us</a></li>
        </ul>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-40"></div>

      {/* Sections */}
      <Hero />
      <Services />
      {/* <TechStack /> */}
      <Projects />
      <WhyChooseUs />
      <MeetTheTeam />
      <ContactForm />
      <Footer />

    </main>
  );
};

export default Index;