import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "FinFlow",
    category: "Fintech",
    description:
      "A comprehensive financial management platform with real-time analytics, automated reporting, and multi-currency support.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    gradient:
      "linear-gradient(135deg, hsl(160 80% 40% / 0.15), hsl(190 90% 45% / 0.15))",
  },
  {
    title: "MediConnect",
    category: "Healthcare",
    description:
      "HIPAA-compliant telemedicine platform connecting patients with healthcare providers through secure video consultations.",
    tags: ["Next.js", "Python", "MongoDB", "Docker"],
    gradient:
      "linear-gradient(135deg, hsl(220 80% 55% / 0.15), hsl(270 70% 55% / 0.15))",
  },
  {
    title: "ShopSphere",
    category: "E-Commerce",
    description:
      "Scalable e-commerce solution handling 100K+ daily transactions with AI-powered recommendations and inventory management.",
    tags: ["Vue.js", "Go", "Redis", "Kubernetes"],
    gradient:
      "linear-gradient(135deg, hsl(25 90% 55% / 0.15), hsl(340 75% 55% / 0.15))",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 border-t border-border/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects that showcase our expertise and commitment to
            excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group rounded-2xl border border-border/50 overflow-hidden bg-card/50 hover:bg-card transition-all duration-300 hover:glow"
            >
              <div
                className="h-48 flex items-center justify-center"
                style={{ background: project.gradient }}
              >
                <span className="text-4xl font-bold text-foreground/20 group-hover:text-foreground/30 transition-colors">
                  {project.title}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-primary font-medium tracking-wider uppercase">
                    {project.category}
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
