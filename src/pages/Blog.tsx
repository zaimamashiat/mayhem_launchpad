import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  {
    title: "How We Helped a Startup Scale to 1M Users",
    excerpt: "A behind-the-scenes look at the architecture and decisions that powered rapid growth for one of our clients.",
    date: "Feb 28, 2026",
    category: "Case Study",
    slug: "#",
  },
  {
    title: "The Future of AI in Everyday Business",
    excerpt: "Artificial intelligence isn't just for tech giants. Here's how small businesses can leverage AI today.",
    date: "Feb 20, 2026",
    category: "Insights",
    slug: "#",
  },
  {
    title: "Why Your Business Needs a Mobile App in 2026",
    excerpt: "Mobile-first isn't a trend anymore — it's the standard. Learn why investing in a mobile app pays off.",
    date: "Feb 12, 2026",
    category: "Strategy",
    slug: "#",
  },
  {
    title: "Our Approach to Secure Software Development",
    excerpt: "Security isn't an afterthought. Discover the practices we follow to keep your data safe from day one.",
    date: "Jan 30, 2026",
    category: "Engineering",
    slug: "#",
  },
  {
    title: "Designing for Humans: Our UX Philosophy",
    excerpt: "Great software is invisible. Here's how we design experiences that feel natural and effortless.",
    date: "Jan 18, 2026",
    category: "Design",
    slug: "#",
  },
  {
    title: "Cloud Migration Done Right: A Practical Guide",
    excerpt: "Moving to the cloud doesn't have to be painful. We share lessons learned from dozens of migrations.",
    date: "Jan 5, 2026",
    category: "Engineering",
    slug: "#",
  },
];

const Blog = () => {
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
            Our <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Insights, stories, and ideas from the Mayhem team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-8 flex flex-col group"
            >
              <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mb-4">
                {post.category}
              </span>
              <h2 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> {post.date}
                </span>
                <span className="flex items-center gap-1 text-primary font-medium">
                  Read more <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
