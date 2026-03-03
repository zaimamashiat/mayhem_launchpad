import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="h-32" />

      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real stories from businesses we've helped grow and transform.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-2xl p-16 max-w-3xl mx-auto text-center"
        >
          <Quote className="h-10 w-10 text-primary/30 mx-auto mb-6" />

          <h2 className="text-2xl font-semibold mb-4">
            Testimonials Coming Soon
          </h2>

          <p className="text-muted-foreground text-base leading-relaxed">
            We're currently working with our early partners and gathering
            thoughtful feedback.
            <br /><br />
            As we continue building and improving, we’ll be sharing their
            experiences here.
            <br /><br />
            Thank you for your patience — exciting things are ahead.
          </p>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
};

export default Testimonials;