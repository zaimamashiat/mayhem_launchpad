import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
{
  title: "Barobi Design",
  image: "public/projects/barobi.jpg",
  category: "Bathroom • Kitchen • Sanitary Solutions",
  description:
    "Global leader with 30+ years of excellence delivering high-end bathroom, kitchen, and plumbing solutions, blending innovative design, sustainability, and award-winning craftsmanship.",
  tags: ["Enterprise", "Product Showcase", "Global Brand", "Sustainable Design"],
  link: "https://www.barobidesign.com.bd/",
  gradient:
    "linear-gradient(135deg, hsl(160 80% 40% / 0.18), hsl(190 90% 45% / 0.18))",
},

  {
    title: "Dr. Ashfaque Nabi",
    image: "public/projects/ashfaqnabi.jpg",
    category: "Medical Portfolio",
    description:
      "Professional medical profile and service portal featuring doctor credentials, specialties, and patient information access.",
    tags: ["Web", "Profile", "Healthcare", "Responsive"],
    link: "https://drashfaquenabi.onrender.com/",
    gradient:
      "linear-gradient(135deg, hsl(220 80% 55% / 0.18), hsl(270 70% 55% / 0.18))",
  },
  {
    title: "Aalooc Media",
    image: "public/projects/aloocmedia.jpg",
    category: "Digital Media Website",
    description:
      "A creative studio dedicated to graphic design, video editing, animation, illustration, and 3D modelling. ",
    tags: ["3D", "Animation", "Illustration", "Creative Studio"],
    link: "https://aaloocmedia.netlify.app",
    gradient:
      "linear-gradient(135deg, hsl(25 90% 55% / 0.18), hsl(340 75% 55% / 0.18))",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 border-t">
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
            Portfolio
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mt-3 mb-4 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Selected builds where design, scale, and engineering shake hands.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="rounded-2xl overflow-hidden border shadow-sm hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Gradient Hero */}
                <div
  className="relative h-52 flex items-end p-6"
  style={{
    backgroundImage: `url(${project.image})`,
    backgroundSize: "cover",
    backgroundPosition: "top center",
  }}
>
  {/* dark overlay so text stays readable */}
  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300" />
                    <div className="relative z-10">
                    <Badge variant="secondary" className="mb-3 rounded-full">
                      {project.category}
                    </Badge>
                    <h3
                      className="text-2xl font-bold tracking-tight"
                      style={{
                        display: "inline-block",
                        background: "hsl(262 83% 58%)",
                        color: "#ffffff",
                        padding: "4px 14px",
                        borderRadius: "999px",
                        fontSize: "0.875rem",
                      }}
                    >
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <CardContent className="p-6 flex flex-col gap-5 flex-1">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="rounded-full text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-auto pt-2">
                    <Button
                      variant="ghost"
                      className="group/btn rounded-xl px-4"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noreferrer">
                        View Project
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
