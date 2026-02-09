import { motion } from "framer-motion";
import { Globe, Smartphone, Cloud, ShieldCheck, Brain, GitBranch } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks, optimized for performance and scalability.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps that deliver seamless experiences across all devices.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Cloud architecture, migration, and management services on AWS, Azure, and Google Cloud.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Comprehensive security audits, penetration testing, and threat monitoring to protect your assets.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Intelligent automation, predictive analytics, and custom ML models to drive business decisions.",
  },
  {
    icon: GitBranch,
    title: "DevOps & Automation",
    description:
      "CI/CD pipelines, infrastructure as code, and automated workflows for faster delivery.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From concept to deployment, we deliver end-to-end IT solutions
            tailored to your business needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group p-8 rounded-2xl border border-border/50 bg-card/50 hover:bg-card hover:glow transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
