import { motion } from "framer-motion";
import { ExternalLink, MapPin, Calendar, Users, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Project {
  title: string;
  image: string;
  gallery: string[];          // extra images shown in dialog
  category: string;
  description: string;
  longDescription: string;    // fuller copy for dialog body
  tags: string[];
  link: string;
  gradient: string;
  meta: {
    year: string;
    client: string;
    location: string;
    teamSize: string;
  };
  highlights: string[];       // bullet achievements
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const projects: Project[] = [
  {
    title: "Barobi Design",
    image: "projects/barobi.png",
    gallery: [
      " projects/barobi-2.jpg",
      " projects/barobi-3.jpg",
      " projects/barobi-4.jpg",
    ],
    category: "Bathroom • Kitchen • Sanitary Solutions",
    description:
      "A globally recognised brand with 30+ years of excellence in premium bathroom, kitchen, and sanitary solutions.",
    longDescription:
      "Mayhem Bangladesh partnered with Barobi Design to engineer a robust, enterprise-grade digital platform that reflects their premium global brand identity. Our scope focused on building a scalable product discovery experience, optimising performance for high-traffic usage, and ensuring the platform supports international audiences through multilingual capabilities. The solution was designed with long-term scalability, SEO performance, and maintainability in mind, supporting both trade professionals and end customers.",
    tags: ["Enterprise Platform", "Scalable Architecture", "Global Brand", "SEO"],
    link: "https://www.barobidesign.com.bd/",
    gradient:
      "linear-gradient(135deg, hsl(160 80% 40% / 0.18), hsl(190 90% 45% / 0.18))",
    meta: {
      year: "2024",
      client: "Barobi Design Ltd.",
      location: "Dhaka, Bangladesh",
      teamSize: "4 members",
    },
    highlights: [
      "Designed and developed a scalable enterprise web platform",
      "Implemented performance-focused architecture for fast load times",
      "Built multilingual-ready infrastructure for international audiences",
      "Optimised SEO and technical structure for high search visibility",
      "Delivered a future-proof solution aligned with brand growth",
    ],
  },

  {
    title: "Dr. Ashfaque Nabi",
    image: " projects/ashfaqnabi.jpg",
    gallery: [
      " projects/ashfaq-2.jpg",
      " projects/ashfaq-3.jpg",
    ],
    category: "Medical Portfolio",
    description:
      "A professional digital presence for a senior medical consultant serving patients and referring physicians.",
    longDescription:
      "Mayhem Bangladesh delivered a tailored digital solution for a healthcare professional, focusing on trust, clarity, and accessibility. The platform was designed to clearly communicate credentials, services, and availability while ensuring a smooth experience across devices. Special emphasis was placed on accessibility standards, mobile usability, and secure communication to meet the expectations of both patients and medical peers.",
    tags: ["Healthcare", "Accessibility", "Responsive Design", "Web Platform"],
    link: "https://drashfaquenabi.onrender.com/",
    gradient:
      "linear-gradient(135deg, hsl(220 80% 55% / 0.18), hsl(270 70% 55% / 0.18))",
    meta: {
      year: "2023",
      client: "Dr. Ashfaque Nabi",
      location: "Chittagong, Bangladesh",
      teamSize: "2 members",
    },
    highlights: [
      "Delivered a clean, trust-focused healthcare web experience",
      "Built with accessibility and mobile-first principles",
      "Structured information architecture for clarity and usability",
      "Implemented secure communication and contact workflows",
      "Optimised for reliability and long-term maintainability",
    ],
  },

  {
    title: "Aalooc Media",
    image: " projects/aloocmedia.jpg",
    gallery: [
      " projects/alooc-2.jpg",
      " projects/alooc-3.jpg",
      " projects/alooc-4.jpg",
    ],
    category: "Digital Media Website",
    description:
      "A creative studio specialising in graphic design, animation, video editing, illustration, and 3D modelling.",
    longDescription:
      "Mayhem Bangladesh collaborated with Aalooc Media to craft a visually-driven digital platform that aligns with their creative identity while maintaining technical excellence. Our work balanced immersive visuals with performance optimisation, ensuring fast load times and smooth interactions. The website serves as both a portfolio and a conversion-focused platform, supporting the client’s growth and outreach goals.",
    tags: ["Creative Platform", "Performance Optimisation", "Interactive UI", "Brand Showcase"],
    link: "https://aaloocmedia.netlify.app",
    gradient:
      "linear-gradient(135deg, hsl(25 90% 55% / 0.18), hsl(340 75% 55% / 0.18))",
    meta: {
      year: "2024",
      client: "Aalooc Media",
      location: "Remote",
      teamSize: "3 members",
    },
    highlights: [
      "Engineered a visually rich yet performance-optimised platform",
      "Implemented smooth animations without compromising load speed",
      "Designed a scalable structure for future content expansion",
      "Focused on lead generation and conversion pathways",
      "Delivered reliable hosting and deployment architecture",
    ],
  },

  {
    title: "Masroors PLLC",
    image: " projects/masroors.png",
    gallery: [
      " projects/masroors-2.jpg",
      " projects/masroors-3.jpg",
      " projects/masroors-4.jpg",
    ],
    category: "Civil & Structural Engineering",
    description:
      "A licensed civil and structural engineering consultancy operating across multiple US states.",
    longDescription:
      "Mayhem Bangladesh supported Masroors PLLC by delivering a professional, credibility-driven digital presence aligned with the standards of regulated engineering services in the United States. The platform was designed to communicate technical authority, service breadth, and licensing coverage while remaining clean, fast, and easy to navigate. Our focus was on reliability, clarity, and long-term scalability to support ongoing business growth.",
    tags: ["Professional Services", "Corporate Website", "International Client", "Scalable Web"],
    link: "https://www.masroors.com/",
    gradient:
      "linear-gradient(135deg, hsl(210 70% 45% / 0.18), hsl(195 80% 40% / 0.18))",
    meta: {
      year: "2023–Present",
      client: "Masroors PLLC",
      location: "Chandler, AZ, USA",
      teamSize: "Engineering team",
    },
    highlights: [
      "Delivered a credibility-focused corporate web platform",
      "Structured content to communicate complex technical services clearly",
      "Built a scalable foundation for long-term updates and expansion",
      "Ensured performance, security, and cross-device compatibility",
      "Successfully supported an international, regulated-services client",
    ],
  },
];
// ─── Main Component ───────────────────────────────────────────────────────────

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

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
          <Badge className="mb-4 text-sm px-4 py-1 rounded-full">Portfolio</Badge>
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
              className="group cursor-pointer"
              onClick={() => setSelected(project)}
            >
              <Card className="rounded-2xl overflow-hidden border shadow-sm hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div
                  className="relative h-52 flex items-end p-6"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300" />
                  <div className="relative z-10">
                    <Badge variant="secondary" className="mb-3 rounded-full">
                      {project.category}
                    </Badge>
                    <h3
                      style={{
                        display: "inline-block",
                        background: "hsl(262 83% 58%)",
                        color: "#ffffff",
                        padding: "4px 14px",
                        borderRadius: "999px",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                      }}
                    >
                      {project.title}
                    </h3>
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col gap-5 flex-1">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="rounded-full text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-auto pt-2">
                    <Button variant="ghost" className="group/btn rounded-xl px-4 pointer-events-none">
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Dialog ── */}
      <AlertDialog open={!!selected} onOpenChange={(open) => { if (!open) setSelected(null); }}>
        <AlertDialogContent className="max-w-2xl w-full p-0 gap-0 rounded-2xl overflow-hidden flex flex-col max-h-[90vh] border-0">

          {/* Hero image */}
          {selected && (
            <>
              <div
                className="relative h-56 w-full flex-shrink-0"
                style={{
                  backgroundImage: `url(${selected.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-6 z-10 flex flex-col gap-2">
                  <Badge variant="secondary" className="rounded-full w-fit text-xs">
                    {selected.category}
                  </Badge>
                  <span
                    style={{
                      display: "inline-block",
                      background: "hsl(262 83% 58%)",
                      color: "#ffffff",
                      padding: "4px 16px",
                      borderRadius: "999px",
                      fontSize: "1rem",
                      fontWeight: 700,
                      width: "fit-content",
                    }}
                  >
                    {selected.title}
                  </span>
                </div>
              </div>

              {/* Scrollable body */}
              <div className="overflow-y-auto flex-1 px-7 py-6 space-y-7">

                {/* Title + description */}
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-xl font-bold tracking-tight">
                    {selected.title}
                  </AlertDialogTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                    {selected.longDescription}
                  </p>
                </AlertDialogHeader>

                {/* Meta row */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Calendar, label: "Year", value: selected.meta.year },
                    { icon: Users,    label: "Team",     value: selected.meta.teamSize },
                    { icon: MapPin,   label: "Location", value: selected.meta.location },
                    { icon: CheckCircle2, label: "Client", value: selected.meta.client },
                  ].map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3"
                    >
                      <Icon className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">{label}</p>
                        <p className="text-sm font-medium text-gray-800">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Tech & Scope</p>
                  <div className="flex flex-wrap gap-2">
                    {selected.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="rounded-full text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Highlights</p>
                  <ul className="space-y-2">
                    {selected.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Gallery */}
                {selected.gallery.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Gallery</p>
                    <div className="grid grid-cols-2 gap-3">
                      {selected.gallery.map((src, idx) => (
                        <div
                          key={idx}
                          className="rounded-xl overflow-hidden bg-gray-100 aspect-video"
                          style={{
                            backgroundImage: `url(${src})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <AlertDialogFooter className="px-7 py-5 border-t border-gray-100 bg-gray-50/60 flex-shrink-0">
                <AlertDialogCancel className="rounded-xl">Close</AlertDialogCancel>
                <AlertDialogAction asChild>
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-medium text-white transition-opacity hover:opacity-90"
                    style={{ background: "hsl(262 83% 58%)" }}
                  >
                    Visit Site
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </AlertDialogAction>
              </AlertDialogFooter>
            </>
          )}
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}