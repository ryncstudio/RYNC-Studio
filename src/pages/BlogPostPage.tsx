import { motion } from "framer-motion";
import { ArrowLeft, Clock, Tag, ArrowRight } from "lucide-react";
import { Link, useParams } from "wouter";
import { blogPosts } from "@/data/blog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/Footer";

function renderMarkdown(content: string): React.ReactNode[] {
    const lines = content.split("\n");
    const nodes: React.ReactNode[] = [];
    let i = 0;

    while (i < lines.length) {
        const line = lines[i].trim();

        if (!line) { i++; continue; }

        // H2
        if (line.startsWith("## ")) {
            nodes.push(
                <h2 key={i} className="font-display font-bold text-2xl md:text-3xl mt-12 mb-4 text-foreground">
                    {line.slice(3)}
                </h2>
            );
        }
        // H3
        else if (line.startsWith("### ")) {
            nodes.push(
                <h3 key={i} className="font-display font-bold text-xl mt-8 mb-3 text-foreground">
                    {line.slice(4)}
                </h3>
            );
        }
        // Horizontal rule
        else if (line === "---") {
            nodes.push(<hr key={i} className="border-border/50 my-10" />);
        }
        // Table (starts with |)
        else if (line.startsWith("|")) {
            const tableLines: string[] = [];
            while (i < lines.length && lines[i].trim().startsWith("|")) {
                tableLines.push(lines[i].trim());
                i++;
            }
            // Filter out separator rows (---|---) 
            const headerRow = tableLines[0];
            const dataRows = tableLines.slice(2);
            const parseRow = (row: string) =>
                row.split("|").filter((_, idx, arr) => idx !== 0 && idx !== arr.length - 1).map(c => c.trim());

            nodes.push(
                <div key={`table-${i}`} className="overflow-x-auto my-8">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr className="bg-muted/50">
                                {parseRow(headerRow).map((cell, ci) => (
                                    <th key={ci} className="border border-border px-4 py-2.5 text-left font-semibold text-foreground">{cell}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {dataRows.map((row, ri) => (
                                <tr key={ri} className="even:bg-muted/20">
                                    {parseRow(row).map((cell, ci) => (
                                        <td key={ci} className="border border-border px-4 py-2.5 text-muted-foreground">{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
            continue;
        }
        // Unordered list item
        else if (line.startsWith("- ")) {
            const items: string[] = [];
            while (i < lines.length && lines[i].trim().startsWith("- ")) {
                items.push(lines[i].trim().slice(2));
                i++;
            }
            nodes.push(
                <ul key={`ul-${i}`} className="space-y-2 my-6 ml-4">
                    {items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                            <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
                        </li>
                    ))}
                </ul>
            );
            continue;
        }
        // Regular paragraph
        else {
            nodes.push(
                <p key={i} className="text-muted-foreground leading-relaxed mb-5 text-base md:text-lg"
                    dangerouslySetInnerHTML={{ __html: formatInline(line) }}
                />
            );
        }
        i++;
    }

    return nodes;
}

function formatInline(text: string): string {
    return text
        // Bold **text**
        .replace(/\*\*(.+?)\*\*/g, "<strong class=\"font-semibold text-foreground\">$1</strong>")
        // [Link text](/path)
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "<a href=\"$2\" class=\"text-primary hover:underline\">$1</a>")
        // Inline code `code`
        .replace(/`([^`]+)`/g, "<code class=\"bg-muted px-1.5 py-0.5 rounded text-sm font-mono\">$1</code>");
}

export default function BlogPostPage() {
    const params = useParams<{ slug: string }>();
    const post = blogPosts.find((p) => p.slug === params.slug);
    const currentIndex = blogPosts.findIndex((p) => p.slug === params.slug);
    const nextPost = blogPosts[currentIndex + 1];

    if (!post) {
        return (
            <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-6 pt-32">
                <h1 className="font-display font-bold text-4xl">Post Not Found</h1>
                <Button asChild variant="outline" className="rounded-full">
                    <Link href="/blog">← Back to Blog</Link>
                </Button>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <section className="pt-32 pb-12">
                <div className="container px-6 max-w-3xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <Button asChild variant="ghost" className="rounded-full mb-8 -ml-2 text-muted-foreground hover:text-foreground">
                            <Link href="/blog">
                                <ArrowLeft className="h-4 w-4 mr-2" /> Back to Blog
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-wrap items-center gap-3 mb-6"
                    >
                        <Badge variant="secondary" className="rounded-full text-xs font-medium px-3 py-1">
                            <Tag className="h-3 w-3 mr-1" />
                            {post.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                        </span>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="font-display font-bold text-3xl md:text-5xl tracking-tighter mb-6 leading-tight"
                    >
                        {post.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-muted-foreground leading-relaxed border-l-4 border-primary pl-5 italic"
                    >
                        {post.excerpt}
                    </motion.p>
                </div>
            </section>

            {/* Divider */}
            <div className="container px-6 max-w-3xl mx-auto mb-12">
                <div className="h-px bg-border/50" />
            </div>

            {/* Content */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pb-24"
            >
                <div className="container px-6 max-w-3xl mx-auto">
                    <div className="space-y-1">
                        {renderMarkdown(post.content)}
                    </div>
                </div>
            </motion.section>

            {/* Next Post */}
            {nextPost && (
                <section className="border-t border-border/50 py-16">
                    <div className="container px-6 max-w-3xl mx-auto">
                        <p className="text-sm text-muted-foreground uppercase tracking-wide font-medium mb-4">Next Article</p>
                        <Link href={`/blog/${nextPost.slug}`}>
                            <div className="group flex items-center justify-between gap-4 hover:text-primary transition-colors cursor-pointer">
                                <h3 className="font-display font-bold text-xl md:text-2xl">{nextPost.title}</h3>
                                <ArrowRight className="h-6 w-6 flex-shrink-0 transition-transform group-hover:translate-x-2" />
                            </div>
                        </Link>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="bg-gradient-to-b from-background to-card/40 py-20 border-t border-border/30">
                <div className="container px-6 max-w-2xl mx-auto text-center">
                    <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Ready to grow your business online?</h2>
                    <p className="text-muted-foreground mb-8">We build websites and digital products for businesses in Cebu and beyond.</p>
                    <Button asChild size="lg" className="rounded-full h-12 px-8">
                        <Link href="/contact">Let's Talk — It's Free</Link>
                    </Button>
                </div>
            </section>

            <Footer />
        </div>
    );
}
