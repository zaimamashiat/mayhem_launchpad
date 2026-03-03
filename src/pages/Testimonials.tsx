import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechVentures",
    text: "Mayhem transformed our outdated systems into a modern, scalable platform. Their team was professional, responsive, and delivered beyond expectations.",
    rating: 5,
  },
  {
    name: "Ahmed Rahman",
    role: "Founder, ShopEasy",
    text: "Working with Mayhem was a game-changer for our e-commerce business. They built a seamless mobile app that our customers love.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "CTO, DataFlow Inc.",
    text: "The cloud migration project was complex, but Mayhem handled it flawlessly. Zero downtime and significant cost savings.",
    rating: 5,
  },
  {
    name: "Michael Torres",
    role: "Director, GreenEnergy Co.",
    text: "Their AI solutions helped us optimize our operations and reduce waste by 40%. Truly innovative team.",
    rating: 5,
  },
  {
    name: "Fatima Al-Rashid",
    role: "Manager, HealthPlus",
    text: "Mayhem built our patient management system from scratch. It's intuitive, secure, and has streamlined our entire workflow.",
    rating: 4,
  },
  {
    name: "James Wilson",
    role: "VP Engineering, FinServe",
    text: "Reliable, creative, and always on schedule. Mayhem is our go-to partner for all software projects.",
    rating: 5,
  },
];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-8 flex flex-col"
            >
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              <p className="text-muted-foreground leading-relaxed flex-1 mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Testimonials;
