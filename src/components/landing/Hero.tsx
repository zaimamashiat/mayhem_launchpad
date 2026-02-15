import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

const stats = [
  { value: "50+", label: "Projects" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Support" },
  { value: "AI‑First", label: "Approach" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* layered glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px] bg-primary/10" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[140px] bg-secondary/20" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] bg-primary/10" />

        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,theme(colors.foreground)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.foreground)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center max-w-5xl mx-auto"
        >
          {/* heading */}
          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8"
          >
            We Engineer Digital
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              Experiences
            </span>
            <br />
            That Move Businesses
          </motion.h1>

          {/* subtext */}
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Mayhem is a full‑service IT company delivering high‑impact web,
            cloud, and AI solutions with production‑grade reliability and
            design precision.
          </motion.p>

          {/* buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Button
              size="lg"
              className="text-base px-10 rounded-2xl shadow-lg hover:shadow-xl transition"
              asChild
            >
              <a href="#contact">
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-base px-10 rounded-2xl border-2"
              asChild
            >
              <a href="#projects">View Our Work</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* stats card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl border border-border/50 bg-card/60 backdrop-blur shadow-xl">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#services"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition"
        >
          <span className="text-xs tracking-wide">Scroll</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}