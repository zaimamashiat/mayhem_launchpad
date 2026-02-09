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
      <Navbar />
      <Hero />
      <Services />
      <TechStack />
      <Projects />
      <WhyChooseUs />
      <MeetTheTeam />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
