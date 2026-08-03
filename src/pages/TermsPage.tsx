import { motion } from "framer-motion";
import { Link } from "wouter";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background">
            <section className="pt-32 pb-20">
                <div className="container px-6 max-w-3xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <Button asChild variant="ghost" className="rounded-full mb-8 -ml-2 text-muted-foreground">
                            <Link href="/">← Back to Home</Link>
                        </Button>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-display font-bold text-4xl md:text-5xl mb-4"
                    >
                        Terms of Service
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.15 }}
                        className="text-muted-foreground mb-12"
                    >
                        Last updated: February 26, 2026
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-10 text-base leading-relaxed"
                    >
                        <div>
                            <h2 className="font-display font-bold text-xl mb-3">1. Agreement to Terms</h2>
                            <p className="text-muted-foreground">
                                By accessing and using the RYNC Studio website (ryncstudiov2.vercel.app) and our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-display font-bold text-xl mb-3">2. Services</h2>
                            <p className="text-muted-foreground mb-3">
                                RYNC Studio provides digital services including but not limited to:
                            </p>
                            <ul className="space-y-2 text-muted-foreground ml-4">
                                <li className="flex gap-2"><span className="text-primary mt-1">•</span>Web and software development</li>
                                <li className="flex gap-2"><span className="text-primary mt-1">•</span>Mobile application development</li>
                                <li className="flex gap-2"><span className="text-primary mt-1">•</span>Brand identity design</li>
                                <li className="flex gap-2"><span className="text-primary mt-1">•</span>UI/UX design</li>
                                <li className="flex gap-2"><span className="text-primary mt-1">•</span>Social media visual design</li>
                                <li className="flex gap-2"><span className="text-primary mt-1">•</span>Motion content and animation</li>
                            </ul>
                            <p className="text-muted-foreground mt-3">
                                All project-specific terms, timelines, deliverables, and payment schedules are governed by the individual project contract or proposal agreed upon between RYNC Studio and the client.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-display font-bold text-xl mb-3">3. Payment Terms</h2>
                            <p className="text-muted-foreground mb-3">Unless otherwise stated in your project contract:</p>
                            <ul className="space-y-2 text-muted-foreground ml-4">
                                <li className="flex gap-2"><span className="text-primary mt-1">•</span>A <strong className="text-foreground">50% downpayment</strong> is required before project work begins</li>
                                <li className="flex gap-2"><span className="text-primary mt-1">•</span>The remaining <strong className="text-foreground">50% is due upon project completion</strong> before final files or live deployment</li>
                                <li className="flex gap-2"><span className="text-primary mt-1">•</span>Retainer agreements are billed monthly in advance</li>
                                <li className="flex gap-2"><span className="text-primary mt-1">•</span>Payments may be made via bank transfer, GCash, or other agreed methods</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-display font-bold text-xl mb-3">4. Revisions & Scope</h2>
                            <p className="text-muted-foreground">
                                Each project package includes a defined number of revision rounds as agreed in the proposal. Work beyond the agreed scope will be quoted separately. RYNC Studio reserves the right to decline work that conflicts with our values or violates any law.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-display font-bold text-xl mb-3">5. Intellectual Property</h2>
                            <p className="text-muted-foreground">
                                Upon full payment, the client receives full ownership of all custom design and code deliverables created for their project. RYNC Studio retains the right to display completed work in our portfolio unless the client requests otherwise in writing. Any third-party assets (fonts, stock images, plugins) are subject to their own respective licenses.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-display font-bold text-xl mb-3">6. Confidentiality</h2>
                            <p className="text-muted-foreground">
                                RYNC Studio treats all client information as confidential. We will not share, disclose, or use your business information, designs, or strategies for any purpose other than completing your project. Clients may request a formal Non-Disclosure Agreement (NDA) before project commencement.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-display font-bold text-xl mb-3">7. Cancellations & Refunds</h2>
                            <p className="text-muted-foreground">
                                If a client cancels a project after work has started, the downpayment is non-refundable. Work completed up to the cancellation date will be invoiced at the project's hourly rate. RYNC Studio reserves the right to cancel a project if the client fails to provide required materials, feedback, or payment within the agreed timeframe.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-display font-bold text-xl mb-3">8. Limitation of Liability</h2>
                            <p className="text-muted-foreground">
                                RYNC Studio is not liable for any indirect, incidental, or consequential damages arising from the use of delivered products or services. Our maximum liability shall not exceed the total amount paid for the project in question.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-display font-bold text-xl mb-3">9. Governing Law</h2>
                            <p className="text-muted-foreground">
                                These Terms are governed by the laws of the Republic of the Philippines. Any disputes shall be resolved in the appropriate courts of Cebu City, Philippines.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-display font-bold text-xl mb-3">10. Changes to Terms</h2>
                            <p className="text-muted-foreground">
                                We reserve the right to update these Terms at any time. Continued use of our services after changes constitutes acceptance of the new Terms.
                            </p>
                        </div>

                        <div className="pt-6 border-t border-border/50">
                            <p className="text-muted-foreground text-sm">
                                Questions? Contact us at <a href="mailto:ryncstudio@gmail.com" className="text-primary hover:underline">ryncstudio@gmail.com</a> or via <a href="https://wa.me/639053009722" className="text-primary hover:underline">WhatsApp</a>.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
