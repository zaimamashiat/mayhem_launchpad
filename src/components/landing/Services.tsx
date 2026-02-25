import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Cloud,
  Database,
  Brain,
  GitBranch,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "We build fast, secure web applications with modern frameworks—designed to scale as your business grows.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps with smooth UX, reliable performance, and maintainable codebases.",
  },
  {
    icon: Cloud,
    title: "Cloud Engineering",
    description:
      "Cloud architecture, migration, and ongoing management on AWS, Azure, or Google Cloud to reduce cost and improve reliability.",
  },
  {
    icon: Database,
    title: "ERP & Business Systems",
    description:
      "Custom ERP systems that connect finance, HR, inventory, and operations—so teams work from one source of truth.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Practical AI solutions like automation, forecasting, and analytics—built around your data and real business goals.",
  },
  {
    icon: GitBranch,
    title: "DevOps & Automation",
    description:
      "CI/CD pipelines, infrastructure as code, and automated monitoring to ship faster with fewer incidents.",
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
          {/* SEO-safe H1 (keep ONLY if this is a standalone /services page or the audit page) */}
          <h1 className="sr-only">
            IT Services: Web Development, Mobile Apps, Cloud, AI, ERP, and DevOps
          </h1>

          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            What We Do
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Our IT Services
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We design, build, and run digital products—from web and mobile apps
            to cloud infrastructure, AI, ERP systems, and DevOps automation.
          </p>
        </motion.div>

        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.li
              key={service.title}
              variants={itemVariants}
              className="group p-8 rounded-2xl border border-border/50 bg-card/50 hover:bg-card hover:glow transition-all duration-300 list-none"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Services;