"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Github } from "lucide-react";

const team = [
  {
    name: "Ahmed Awsaf",
    role: "CEO & Co-Founder",
    image: "/team/awsaf.jpg",
    initials: "AA",
    bio: "Visionary leader with 5+ years of experience shaping digital products across tech and business.",
    socials: {
      email: "officialawsaf@gmail.com",
      linkedin: "https://www.linkedin.com/in/awsaf-ahmed/",
      github: "https://github.com/AhmedAwsaf",
    },
  },
  {
    name: "Zaima Mashiat Nabi",
    role: "AI & Data Science Lead",
    image: "/team/zaima.jpeg",
    initials: "ZMN",
    bio: "AI expert building intelligent systems and scalable data pipelines.",
    socials: {
      email: "zaimamashiatnabi01@gmail.com",
      linkedin: "https://www.linkedin.com/in/zaimamashiat/",
      github: "https://github.com/zaimamashiat",
    },
  },
  {
    name: "Utshob Bose",
    role: "Full-Stack Developer & UI/UX Engineer",
    image: "/team/bose.jpg",
    initials: "UB",
    bio: "Code craftsman specializing in performant and elegant solutions.",
    socials: {
      email: "utshob.bose.2015@gmail.com",
      linkedin: "https://www.linkedin.com/in/utshob-bose-135812373/",
      github: "https://github.com/utshobbose",
    },
  },
  {
    name: "Ibtisum Jaman Aornob",
    role: "Dev-ops & Cloud Architect",
    image: "/team/jaman.jpg",
    initials: "IJA",
    bio: "Infrastructure specialist focused on resilient cloud-native systems.",
    socials: {
      email: "aornobjaman5@gmail.com",
      linkedin: "https://www.linkedin.com/in/ibtisum-jaman-276983289/",
      github: "https://github.com/gojo83",
    },
  },
];
//   {
//     name: "Maya Johnson",
//     role: "AI Engineer",
//     image: "/team/maya.jpg",
//     initials: "MJ",
//     bio: "ML engineer building intelligent automation and model-driven features.",
//   },
// ];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function MeetTheTeam() {
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});

  return (
    <section
      id="team"
      className="relative py-24 md:py-36 border-t bg-gradient-to-b from-background via-muted/30 to-background"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Badge className="mb-4 text-sm px-4 py-1 rounded-full backdrop-blur-md">
            Our People
          </Badge>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight">
            Meet the Team
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Engineers, designers, and builders behind the pixels and pipelines.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={item}
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="group h-full relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-primary/40 via-transparent to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardContent className="relative p-10 flex flex-col items-center text-center gap-5 h-full">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-500 bg-primary/20" />

                    <Avatar className="relative w-56 h-56 border-4 border-primary/20 shadow-xl">
                      <AvatarImage
                        src={member.image}
                        alt={member.name}
                        onLoad={() =>
                          setLoaded((prev) => ({
                            ...prev,
                            [member.name]: true,
                          }))
                        }
                        className={`object-cover transition-all duration-700 ease-out
                          ${
                            loaded[member.name]
                              ? "opacity-100 scale-100 blur-0"
                              : "opacity-0 scale-110 blur-md"
                          }`}
                      />

                      <AvatarFallback
                        className="flex items-center justify-center text-2xl font-semibold
                        bg-gradient-to-br from-primary/30 via-primary/10 to-muted
                        text-primary tracking-wider"
                      >
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  {/* Name + Role */}
                  <div className="space-y-1 h-full">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-primary">
                      {member.role}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                    {member.bio}
                  </p>

                  {/* Social Icons */}
                  <div className="flex gap-4 pt-3">
                  <a href={`mailto:${member.socials.email}`}>
                    <IconButton label="Email">
                      <Mail className="h-4 w-4" />
                    </IconButton>
                  </a>
                  <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                    <IconButton label="LinkedIn">
                      <Linkedin className="h-4 w-4" />
                    </IconButton>
                  </a>
                  <a href={member.socials.github} target="_blank" rel="noopener noreferrer">
                    <IconButton label="GitHub">
                      <Github className="h-4 w-4" />
                    </IconButton>
                  </a>
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

function IconButton({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <div className="relative group/icon">
      <button className="p-2 rounded-xl border border-white/10 bg-white/5 hover:bg-primary/10 transition-all duration-300">
        {children}
      </button>

      {/* Tooltip */}
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded-md bg-black text-white opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}
