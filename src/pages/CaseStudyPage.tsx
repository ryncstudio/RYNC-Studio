import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ExternalLink, Code2 } from "lucide-react";
import { Link, useParams } from "wouter";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";

export default function CaseStudyPage() {
    const params = useParams<{ slug: string }>();
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        return (
            <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-6">
                <h1 className="font-display font-bold text-4xl">Project Not Found</h1>
                <Button asChild variant="outline" className="rounded-full">
                    <Link href="/work">← Back to Work</Link>
                </Button>
                <Footer />
            </div>
        );
    }

    const { caseStudy } = project;

    return (
        <div className="min-h-screen bg-background">
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-30 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
                </div>

                <div className="container px-6 relative z-10 pt-32 pb-20 max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <Button asChild variant="ghost" className="rounded-full mb-8 -ml-2 text-muted-foreground hover:text-foreground">
                            <Link href="/work">
                                <ArrowLeft className="h-4 w-4 mr-2" /> Back to Work
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-2 mb-6"
                    >
                        <span className="h-px w-8 bg-primary" />
                        <span className="text-primary font-mono text-sm tracking-widest uppercase font-bold">
                            {project.category}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="font-display font-bold text-4xl md:text-7xl tracking-tighter mb-6"
                    >
                        {project.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed"
                    >
                        {project.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="flex flex-wrap gap-3 items-center"
                    >
                        {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="rounded-full px-4 py-1.5 text-sm">
                                {tag}
                            </Badge>
                        ))}
                        {project.url && (
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-primary text-sm font-medium hover:underline"
                            >
                                Visit Site <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Hero Image */}
            <section className="container px-6 max-w-5xl mx-auto -mt-8 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="rounded-3xl overflow-hidden shadow-2xl border border-border/30"
                >
                    <img src={project.image} alt={project.title} className="w-full h-[400px] md:h-[560px] object-cover" />
                </motion.div>
            </section>

            {/* Case Study Content */}
            <section className="container px-6 max-w-4xl mx-auto pb-24">
                <div className="grid md:grid-cols-3 gap-16">
                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-16">
                        {/* Overview */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">Overview</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">{caseStudy.overview}</p>
                        </motion.div>

                        {/* Challenge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">The Challenge</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">{caseStudy.challenge}</p>
                        </motion.div>

                        {/* Solution */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">Our Solution</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">{caseStudy.solution}</p>
                        </motion.div>

                        {/* Results */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-display font-bold text-2xl md:text-3xl mb-6">Results</h2>
                            <ul className="space-y-4">
                                {caseStudy.results.map((result, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span className="text-foreground/80 leading-relaxed">{result}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Tech Stack */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-card border border-border/50 rounded-2xl p-6"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <Code2 className="h-4 w-4 text-primary" />
                                <h3 className="font-bold text-sm uppercase tracking-wide text-muted-foreground">Tech Stack</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {caseStudy.stack.map((tech) => (
                                    <Badge key={tech} variant="secondary" className="rounded-full text-xs font-medium">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-primary/10 to-violet-500/10 border border-primary/20 rounded-2xl p-6"
                        >
                            <h3 className="font-bold text-lg mb-2">Want results like these?</h3>
                            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                                Let's talk about your project. Free consultation, no pressure.
                            </p>
                            <Button asChild className="w-full rounded-full">
                                <Link href="/contact">Start a Project</Link>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </div>
    );
}
