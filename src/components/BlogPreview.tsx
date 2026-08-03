import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Tag } from "lucide-react";
import { Link } from "wouter";
import { blogPosts } from "@/data/blog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function BlogPreview() {
    const featured = blogPosts.slice(0, 3);

    return (
        <section id="blog" className="py-24 md:py-32 bg-background">
            <div className="container px-6 w-full max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-display font-bold text-4xl md:text-6xl mb-4"
                        >
                            From the <span className="text-primary">Blog.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg md:text-xl text-muted-foreground"
                        >
                            Tips, insights, and honest advice for businesses building online.
                        </motion.p>
                    </div>

                    <Button asChild variant="ghost" className="rounded-full text-lg group hidden md:inline-flex">
                        <Link href="/blog">
                            View All Articles
                            <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Link>
                    </Button>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {featured.map((post, i) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link href={`/blog/${post.slug}`}>
                                <div className="group h-full bg-card border border-border/50 rounded-3xl p-7 hover:border-primary/40 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col">
                                    <div className="flex flex-wrap items-center gap-2 mb-5">
                                        <Badge variant="secondary" className="rounded-full text-xs font-medium px-3 py-1">
                                            <Tag className="h-3 w-3 mr-1" />
                                            {post.category}
                                        </Badge>
                                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                                            <Clock className="h-3 w-3" />
                                            {post.readTime}
                                        </span>
                                    </div>

                                    <h3 className="font-display font-bold text-xl mb-3 group-hover:text-primary transition-colors leading-snug flex-1">
                                        {post.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center gap-2 text-primary font-semibold text-sm mt-auto">
                                        Read Article
                                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>

                {/* Mobile CTA */}
                <div className="flex justify-center mt-10 md:hidden">
                    <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12">
                        <Link href="/blog">View All Articles</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
