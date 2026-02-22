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
    image: "public/projects/barobi.jpg",
    gallery: [
      "public/projects/barobi-2.jpg",
      "public/projects/barobi-3.jpg",
      "public/projects/barobi-4.jpg",
    ],
    category: "Bathroom • Kitchen • Sanitary Solutions",
    description:
      "Global leader with 30+ years of excellence delivering high-end bathroom, kitchen, and plumbing solutions.",
    longDescription:
      "Barobi Design is a globally recognised brand with over three decades of expertise in premium bathroom and kitchen solutions. The project involved building a comprehensive enterprise-grade digital platform to showcase their award-winning product lines, highlight their sustainable manufacturing practices, and provide seamless product discovery for both trade professionals and end consumers. The platform integrates multi-language support, a rich product catalogue, and a dealer locator.",
    tags: ["Enterprise", "Product Showcase", "Global Brand", "Sustainable Design"],
    link: "https://www.barobidesign.com.bd/",
    gradient: "linear-gradient(135deg, hsl(160 80% 40% / 0.18), hsl(190 90% 45% / 0.18))",
    meta: {
      year: "2024",
      client: "Barobi Design Ltd.",
      location: "Dhaka, Bangladesh",
      teamSize: "4 members",
    },
    highlights: [
      "Full product catalogue with 500+ SKUs",
      "Multi-language & RTL support",
      "Integrated dealer & showroom locator",
      "Sustainable design certifications showcase",
      "SEO-optimised architecture with 95+ Lighthouse score",
    ],
  },
  // {
  //   title: "Dr. Ashfaque Nabi",
  //   image: "public/projects/ashfaqnabi.jpg",
  //   gallery: [
  //     "public/projects/ashfaq-2.jpg",
  //     "public/projects/ashfaq-3.jpg",
  //   ],
  //   category: "Medical Portfolio",
  //   description:
  //     "Professional medical profile and service portal featuring doctor credentials, specialties, and patient information access.",
  //   longDescription:
  //     "A bespoke digital presence for a senior medical professional, combining a credentialed profile with a patient-facing service portal. The platform communicates specialties, qualifications, published research, and clinic schedules in a clean, trustworthy interface. Built with accessibility and mobile responsiveness as core requirements, it serves both referring physicians and patients seeking appointment information.",
  //   tags: ["Web", "Profile", "Healthcare", "Responsive"],
  //   link: "https://drashfaquenabi.onrender.com/",
  //   gradient: "linear-gradient(135deg, hsl(220 80% 55% / 0.18), hsl(270 70% 55% / 0.18))",
  //   meta: {
  //     year: "2023",
  //     client: "Dr. Ashfaque Nabi",
  //     location: "Chittagong, Bangladesh",
  //     teamSize: "2 members",
  //   },
  //   highlights: [
  //     "WCAG 2.1 AA accessibility compliant",
  //     "Dynamic appointment & schedule section",
  //     "Published research & credentials display",
  //     "Optimised for mobile-first patient access",
  //     "Secure contact form with spam protection",
  //   ],
  // },
  {
    title: "Aalooc Media",
    image: "public/projects/aloocmedia.jpg",
    gallery: [
      "public/projects/alooc-2.jpg",
      "public/projects/alooc-3.jpg",
      "public/projects/alooc-4.jpg",
    ],
    category: "Digital Media Website",
    description:
      "A creative studio dedicated to graphic design, video editing, animation, illustration, and 3D modelling.",
    longDescription:
      "Aalooc Media required a visually-led website to reflect their identity as a cutting-edge creative studio. The platform showcases their full range of services — from motion graphics and 3D modelling to brand identity and illustration — with an immersive portfolio section, animated transitions, and a compelling services breakdown. The site acts as both a portfolio and a lead-generation tool for prospective clients across South Asia and beyond.",
    tags: ["3D", "Animation", "Illustration", "Creative Studio"],
    link: "https://aaloocmedia.netlify.app",
    gradient: "linear-gradient(135deg, hsl(25 90% 55% / 0.18), hsl(340 75% 55% / 0.18))",
    meta: {
      year: "2024",
      client: "Aalooc Media",
      location: "Remote",
      teamSize: "3 members",
    },
    highlights: [
      "Immersive animated portfolio gallery",
      "Services section with interactive breakdowns",
      "3D asset previews embedded in-page",
      "Lead capture with CRM integration",
      "Sub-second load times on Netlify Edge",
    ],
  },
  {
    "title": "Masroors PLLC",
    "image": "public/projects/masroors.jpg",
    "gallery": [
      "public/projects/masroors-2.jpg",
      "public/projects/masroors-3.jpg",
      "public/projects/masroors-4.jpg"
    ],
    "category": "Civil & Structural Engineering",
    "description": "Licensed engineering consultancy delivering PE-stamped structural solutions across telecom, industrial, residential, and commercial sectors in 8 US states.",
    "longDescription": "MASROORS PLLC is a licensed civil and structural engineering consultancy headquartered in Chandler, Arizona, operating across AZ, CA, CO, NM, NV, OR, TX, and WA. The firm specialises in structural analysis and design across a wide range of materials — steel, concrete, wood, masonry, and cold-formed steel/unistrut — serving telecom towers, industrial facilities, residential builds, and commercial properties. Their work spans PE-stamped construction drawings, anchorage calculations, retrofit engineering, and custom mounting solutions, all delivered to meet state and county permitting requirements.",
    "tags": ["Structural Engineering", "PE-Stamped", "Telecom", "Industrial", "Residential", "Commercial"],
    "link": "https://www.masroors.com/",
    "gradient": "linear-gradient(135deg, hsl(210 70% 45% / 0.18), hsl(195 80% 40% / 0.18))",
    "meta": {
      "year": "2023–Present",
      "client": "Masroors PLLC",
      "location": "Chandler, AZ (Licensed in 8 states)",
      "teamSize": "Engineering team"
    },
    "highlights": [
      "Licensed to practice in AZ, CA, CO, NM, NV, OR, TX, and WA",
      "Structural analysis & design in steel, concrete, wood, masonry, and cold-formed steel",
      "PE-stamped drawings for telecom, industrial, residential, and commercial projects",
      "Retrofit and structural modification services for existing structures",
      "Custom mounting solutions and anchorage calculations",
      "Delivered compliant foundation plans for prefab metal warehouses and agricultural facilities",
      "Retaining wall structural evaluations using 2018 IBC standards"
    ]
  }
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
        <AlertDialogContent className="max-w-2xl w-full p-0 gap-0 rounded-2xl overflow-hidden flex flex-col max-h-[90vh]">

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