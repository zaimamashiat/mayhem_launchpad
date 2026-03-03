import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";

const Blog = () => {
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
            Our <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Insights, stories, and ideas from the Mayhem team.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-2xl p-16 max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl font-semibold mb-4">
            🚀 Exciting Content Coming Soon
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            We're currently preparing valuable insights, case studies, and
            expert perspectives to share with you.
            <br />
            Stay tuned — something impactful is on the way.
          </p>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;