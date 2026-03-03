import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const openings = [
  {
    title: "Senior Frontend Developer",
    type: "Full-time",
    location: "Dhaka / Remote",
    description: "Build beautiful, performant web applications using React and modern tooling.",
  },
  {
    title: "Backend Engineer",
    type: "Full-time",
    location: "Dhaka",
    description: "Design and develop scalable APIs and microservices powering our client solutions.",
  },
  {
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Remote",
    description: "Craft intuitive, delightful user experiences for web and mobile products.",
  },
  {
    title: "Mobile Developer (Flutter)",
    type: "Full-time",
    location: "Dhaka / Remote",
    description: "Build cross-platform mobile apps that users love.",
  },
  {
    title: "DevOps Engineer",
    type: "Contract",
    location: "Remote",
    description: "Manage cloud infrastructure, CI/CD pipelines, and deployment automation.",
  },
];

const perks = [
  "Flexible working hours",
  "Remote-friendly culture",
  "Learning & development budget",
  "Health benefits",
  "Team retreats",
  "Competitive salary",
];

const Careers = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="h-32" />

      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our <span className="text-gradient">Team</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're looking for passionate people to help us build exceptional software. Come grow with us.
          </p>
        </motion.div>

        {/* Perks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-8 mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-xl font-semibold mb-6 text-center">Why Work With Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {perks.map((perk, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                {perk}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Openings */}
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold mb-6">Open Positions</h2>
          {openings.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <h3 className="font-semibold text-lg">{job.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{job.description}</p>
                <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {job.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {job.location}
                  </span>
                </div>
              </div>
              <Button variant="outline" className="rounded-full shrink-0 gap-2">
                Apply <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Careers;
