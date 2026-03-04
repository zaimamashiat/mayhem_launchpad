import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";


const Careers = () => {
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
            Join Our <span className="text-gradient">Team</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're always on the lookout for talented humans… or maybe robots. 😉
          </p>
        </motion.div>

        {/* Perks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-8 mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-xl font-semibold mb-6 text-center">Why Work With Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {perks.map((perk, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                {perk}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Snarky placeholder for openings */}
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold mb-6">Open Positions</h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-6 text-center text-muted-foreground"
          >
            <p className="text-lg">
              We might hire some humans soon… or not. Stay tuned, or just send us a carrier pigeon. 🕊️
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Careers;