import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

const products = [
  {
    name: "Mayhem ERP",
    tagline: "All your operations. One intelligent system.",
    description:
      "A complete ERP solution designed to streamline finance, HR, inventory, and operations for growing businesses.",
    features: [
      "Finance & accounting management",
      "HR & payroll system",
      "Inventory & supply chain tracking",
      "Real-time business reporting",
    ],
    color: "from-primary/10 to-primary/5",
    details:
      "Mayhem ERP centralizes your entire business workflow into one unified platform. From managing employee payroll to tracking inventory levels and generating financial reports, everything works together seamlessly. Designed for scalability, it grows with your organization.",
  },
  {
    name: "Mayhem AI Chatbot",
    tagline: "Automated conversations that convert.",
    description:
      "An AI-powered chatbot that handles customer support, lead generation, and sales inquiries 24/7.",
    features: [
      "Website & Facebook integration",
      "Natural language understanding",
      "Automated lead capture",
      "Multi-language support",
    ],
    color: "from-accent/10 to-accent/5",
    details:
      "Our AI Chatbot provides intelligent, human-like responses to customer queries instantly. It reduces support workload, improves response time, and helps businesses convert visitors into paying customers through automated engagement.",
  },
  {
    name: "Mayhem AI Dashboards",
    tagline: "Smarter insights. Faster decisions.",
    description:
      "AI-powered dashboards that transform business data into predictive insights and actionable analytics.",
    features: [
      "Real-time data visualization",
      "Predictive analytics",
      "Custom KPI tracking",
      "Automated reporting",
    ],
    color: "from-primary/10 to-primary/5",
    details:
      "Mayhem AI Dashboards analyze your business data in real time and generate smart insights. With predictive forecasting and customizable KPIs, decision-makers can act faster and more confidently using data-backed intelligence.",
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
            Intelligent solutions built to automate, optimize, and scale your
            business operations.
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
              <p className="text-sm text-primary font-medium mb-3">
                {product.tagline}
              </p>
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

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="rounded-full gap-2">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-lg">
                  <DialogHeader>
                    <DialogTitle>{product.name}</DialogTitle>
                    <DialogDescription>
                      {product.tagline}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-4 mt-4">
                    <p className="text-sm text-muted-foreground">
                      {product.details}
                    </p>

                    <div>
                      <h4 className="font-semibold mb-2">
                        Core Capabilities:
                      </h4>
                      <ul className="space-y-2">
                        {product.features.map((f, j) => (
                          <li
                            key={j}
                            className="flex items-center gap-2 text-sm"
                          >
                            <Check className="h-4 w-4 text-primary shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t text-sm text-muted-foreground">
                      Fully customizable and integrable with your existing
                      business systems.
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Products;