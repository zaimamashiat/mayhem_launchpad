import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const technologies = [
  { name: "React", type: "Frontend" },
  { name: "Next.js", type: "Frontend" },
  { name: "Vue.js", type: "Frontend" },
  { name: "TypeScript", type: "Language" },
  { name: "Python", type: "Language" },
  { name: "Go", type: "Language" },
  { name: "Node.js", type: "Backend" },
  { name: "FastAPI", type: "Backend" },
  { name: "Django", type: "Backend" },
  { name: "AWS", type: "Cloud" },
  { name: "Docker", type: "DevOps" },
  { name: "Kubernetes", type: "DevOps" },
  { name: "PostgreSQL", type: "Database" },
  { name: "MongoDB", type: "Database" },
  { name: "GraphQL", type: "API" },

  { name: "TensorFlow", type: "AI" },
  { name: "PyTorch", type: "AI" },
  { name: "OpenCV", type: "AI" },
  { name: "Scikit-learn", type: "AI" },
  { name: "LangChain", type: "AI" },
  { name: "n8n", type: "AI" },
];

const filters = [
  "All",
  "Frontend",
  "Backend",
  "Language",
  "Database",
  "DevOps",
  "Cloud",
  "API",
  "AI",
];

export default function TechStack() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = useMemo(() => {
    return technologies.filter((t) => {
      const matchFilter = activeFilter === "All" || t.type === activeFilter;
      const matchQuery = t.name.toLowerCase().includes(query.toLowerCase());
      return matchFilter && matchQuery;
    });
  }, [query, activeFilter]);

  return (
    <section id="tech-stack" className="py-20 md:py-32 border-t">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 text-sm px-4 py-1 rounded-full">
            Technologies
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Our Tech Stack
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tools, frameworks, and engines that power our builds from pixel to
            production.
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-12 space-y-6"
        >
          <Input
            placeholder="Search technology..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-12 rounded-2xl"
          />

          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-sm border transition-all duration-200 ${
                  activeFilter === f
                    ? "bg-primary text-primary-foreground"
                    : "hover:scale-105"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {filtered.map((tech, i) => (
            <motion.div
              key={tech.name}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -6, scale: 1.03 }}
            >
              <Card className="rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-default h-full">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center gap-3">
                  <div className="text-base font-semibold">
                    {tech.name}
                  </div>
                  <Badge variant="secondary" className="rounded-full">
                    {tech.type}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center mt-12 text-muted-foreground">
            No technologies match your search.
          </div>
        )}
      </div>
    </section>
  );
}
