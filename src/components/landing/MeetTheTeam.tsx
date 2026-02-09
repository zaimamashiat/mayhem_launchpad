import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const team = [
  {
    name: "Alex Chen",
    role: "CEO & Co-Founder",
    initials: "AC",
    bio: "Visionary leader with 15+ years shaping digital products across fintech and healthcare.",
  },
  {
    name: "Sarah Mitchell",
    role: "CTO",
    initials: "SM",
    bio: "Full-stack architect passionate about building systems that scale to millions of users.",
  },
  {
    name: "James Rodriguez",
    role: "Lead Developer",
    initials: "JR",
    bio: "Code craftsman specializing in performant, maintainable, and elegant solutions.",
  },
  {
    name: "Emily Park",
    role: "Design Director",
    initials: "EP",
    bio: "UX strategist who transforms complex workflows into intuitive, delightful interfaces.",
  },
  {
    name: "David Kim",
    role: "Cloud Architect",
    initials: "DK",
    bio: "Infrastructure wizard and DevOps pioneer with deep expertise in AWS and Kubernetes.",
  },
  {
    name: "Maya Johnson",
    role: "AI Engineer",
    initials: "MJ",
    bio: "Machine learning specialist driving innovation through intelligent automation.",
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const MeetTheTeam = () => {
  return (
    <section id="team" className="py-20 md:py-32 border-t border-border/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Our People
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Meet the Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A talented group of engineers, designers, and strategists united by a
            passion for technology.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="group p-8 rounded-2xl border border-border/50 bg-card/50 hover:bg-card hover:glow transition-all duration-300 text-center"
            >
              <Avatar className="w-20 h-20 mx-auto mb-4 border-2 border-primary/20">
                <AvatarFallback className="text-lg font-semibold text-primary bg-primary/10">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-primary text-sm font-medium mt-1">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
