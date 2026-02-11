import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Github } from "lucide-react";

const team = [
  {
    name: "Ahmed Awsaf",
    role: "CEO & Co-Founder",
    image: "/team/ahmed.jpg",
    initials: "AC",
    bio: "Visionary leader with 15+ years shaping digital products across fintech and healthcare.",
  },
  {
    name: "Zaima Mashiat Nabi",
    role: "AI and Data Science Lead",
    image: "/team/zaima.jpg",
    initials: "ZMN",
    bio: "AI and data science expert with a focus on building intelligent systems and scalable data pipelines.",
  },
  {
    name: "James Rodriguez",
    role: "Lead Developer",
    image: "/team/james.jpg",
    initials: "JR",
    bio: "Code craftsman specializing in performant, maintainable, and elegant solutions.",
  },
  {
    name: "Emily Park",
    role: "Design Director",
    image: "/team/emily.jpg",
    initials: "EP",
    bio: "UX strategist who transforms complex workflows into intuitive, delightful interfaces.",
  },
  {
    name: "David Kim",
    role: "Cloud Architect",
    image: "/team/david.jpg",
    initials: "DK",
    bio: "Infrastructure specialist focused on resilient cloud-native systems.",
  },
  {
    name: "Maya Johnson",
    role: "AI Engineer",
    image: "/team/maya.jpg",
    initials: "MJ",
    bio: "Machine learning engineer building intelligent automation and model-driven features.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function MeetTheTeam() {
  return (
    <section id="team" className="py-20 md:py-32 border-t">
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
            Our People
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mt-3 mb-4 tracking-tight">
            Meet the Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Engineers, designers, and builders behind the pixels and pipelines.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"
        >
          {team.map((member) => (
            <motion.div key={member.name} variants={item} whileHover={{ y: -10 }}>
              <Card className="group relative rounded-2xl overflow-hidden border shadow-sm hover:shadow-2xl transition-all duration-300 h-full">
                {/* Top Glow Bar */}
                <div className="h-1 w-full bg-gradient-to-r from-primary/40 via-primary/10 to-primary/40 opacity-60 group-hover:opacity-100 transition-opacity" />

                <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                  {/* Avatar with Image */}
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity bg-primary/20" />
                    <Avatar className="relative w-24 h-24 border-4 border-primary/20">
                      <AvatarImage
                        src={member.image}
                        alt={member.name}
                        className="object-cover"
                      />
                      <AvatarFallback className="text-xl font-bold text-primary bg-primary/10">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  {/* Text */}
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-primary">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Actions */}
                  <div className="flex gap-3 pt-2 opacity-70 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 rounded-xl border hover:bg-accent transition-colors">
                      <Mail className="h-4 w-4" />
                    </button>
                    <button className="p-2 rounded-xl border hover:bg-accent transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </button>
                    <button className="p-2 rounded-xl border hover:bg-accent transition-colors">
                      <Github className="h-4 w-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
