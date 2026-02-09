import { motion } from "framer-motion";
import { Zap, ShieldCheck, Headphones, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description:
      "Agile methodology ensures rapid iteration and on-time delivery without compromising quality.",
    stat: "2x",
    statLabel: "Faster than industry average",
  },
  {
    icon: ShieldCheck,
    title: "Security First",
    description:
      "Enterprise-grade security practices built into every layer of our solutions from day one.",
    stat: "100%",
    statLabel: "Security compliance rate",
  },
  {
    icon: Headphones,
    title: "24/7 Dedicated Support",
    description:
      "Round-the-clock monitoring and support to ensure your systems are always running smoothly.",
    stat: "<1h",
    statLabel: "Average response time",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description:
      "Architecture designed to grow with your business, from startup to enterprise scale.",
    stat: "10M+",
    statLabel: "Users served by our apps",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 md:py-32 border-t border-border/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Why Mayhem
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We combine technical excellence with a relentless focus on results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-border/50 bg-card/50 hover:bg-card hover:glow transition-all duration-300 flex gap-6"
            >
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {benefit.description}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-gradient">
                    {benefit.stat}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {benefit.statLabel}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
