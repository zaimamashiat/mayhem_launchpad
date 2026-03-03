import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "Mayhem CRM",
    tagline: "Customer relationships, simplified.",
    description: "A lightweight CRM built for growing teams. Track leads, manage pipelines, and close deals faster.",
    features: ["Lead management", "Pipeline tracking", "Email integration", "Analytics dashboard"],
    color: "from-primary/10 to-primary/5",
  },
  {
    name: "Mayhem Commerce",
    tagline: "Your store, your way.",
    description: "A modern e-commerce platform designed for Bangladeshi businesses. Sell online with ease.",
    features: ["Multi-vendor support", "Mobile-optimized", "bKash & Nagad integration", "Inventory management"],
    color: "from-accent/10 to-accent/5",
  },
  {
    name: "Mayhem Analytics",
    tagline: "Data that drives decisions.",
    description: "Turn raw data into actionable insights with our analytics platform. No data science degree required.",
    features: ["Real-time dashboards", "Custom reports", "AI-powered insights", "Team collaboration"],
    color: "from-primary/10 to-primary/5",
  },
  {
    name: "Mayhem LMS",
    tagline: "Learning made accessible.",
    description: "A learning management system for schools, universities, and corporate training programs.",
    features: ["Course builder", "Progress tracking", "Video hosting", "Certificate generation"],
    color: "from-accent/10 to-accent/5",
  },
];

const Products = () => {
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
            Our <span className="text-gradient">Products</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready-to-use solutions built with the same care we bring to custom projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`glass rounded-2xl p-8 bg-gradient-to-br ${product.color}`}
            >
              <h2 className="text-xl font-bold mb-1">{product.name}</h2>
              <p className="text-sm text-primary font-medium mb-3">{product.tagline}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {product.description}
              </p>
              <ul className="space-y-2 mb-6">
                {product.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="rounded-full gap-2">
                Learn More <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Products;
