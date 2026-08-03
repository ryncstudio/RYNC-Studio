import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Tag } from "lucide-react";
import { Link } from "wouter";
import { blogPosts } from "@/data/blog";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/Footer";

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero */}
            <section className="pt-32 pb-16 md:pb-24">
                <div className="container px-6 max-w-4xl mx-auto text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block mb-6 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium tracking-wide uppercase"
                    >
                        RYNC Blog
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-display font-bold text-4xl md:text-6xl lg:text-7xl tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50"
                    >
                        Insights for Growing Businesses
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        Practical tips, local insights, and honest advice on building your digital presence — from the team at RYNC Studio in Cebu.
                    </motion.p>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="pb-32">
                <div className="container px-6 max-w-5xl mx-auto">
                    <div className="grid gap-8 md:gap-10">
                        {blogPosts.map((post, i) => (
                            <motion.article
                                key={post.slug}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link href={`/blog/${post.slug}`}>
                                    <div className="group relative bg-card border border-border/50 rounded-3xl p-8 md:p-10 hover:border-primary/40 hover:shadow-xl transition-all duration-400 cursor-pointer">
                                        <div className="flex flex-wrap items-center gap-3 mb-5">
                                            <Badge variant="secondary" className="rounded-full text-xs font-medium px-3 py-1">
                                                <Tag className="h-3 w-3 mr-1" />
                                                {post.category}
                                            </Badge>
                                            <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                                                <Clock className="h-3 w-3" />
                                                {post.readTime}
                                            </span>
                                            <span className="text-xs text-muted-foreground">{post.date}</span>
                                        </div>

                                        <h2 className="font-display font-bold text-2xl md:text-3xl mb-4 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed mb-6 text-base md:text-lg">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                                            Read Article
                                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
