import { motion } from "framer-motion";
import { Link } from "wouter";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function PrivacyPage() {
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
                        Privacy Policy
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
                            <h2 className="font-display font-bold text-xl mb-3">1. Who We Are</h2>
                            <p className="text-muted-foreground">
                                RYNC Studio ("we", "us", "our") is a digital product studio based in Cebu City, Philippines. We provide web development, mobile app development, brand identity, UI/UX design, social media design, and motion content services. Our contact email is <a href="mailto:ryncstudio@gmail.com" className="text-primary hover:underline">ryncstudio@gmail.com</a>.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-display font-bold text-xl mb-3">2. What Information We Collect</h2>
                            <p className="text-muted-foreground mb-3">When you use our website or contact us, we may collect:</p>
                            <ul className="space-y-2 text-muted-foreground ml-4">
                                <li className="flex gap-2"><span className="text-primary mt-1">•</span>Your name and email address (when you submit the contact form)</li>
                                <li className="flex gap-2"><span className="text-primary mt-1">•</span>Your message and project details (what you type in our contact form)</li>
                                <li className="flex gap-2"><span className="text-primary mt-1">•</span>Basic usage data via Google Analytics (pages visited, session duration, device type) — anonymized</li>
                                <li className="flex gap-2"><span className="text-primary mt-1">•</span>IP address and browser type (standard server logs)</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-display font-bold text-xl mb-3">3. How We Use Your Information</h2>
                            <p className="text-muted-foreground mb-3">We use your information only to:</p>
                            <ul className="space-y-2 text-muted-foreground ml-4">
                                <li className="flex gap-2"><span className="text-primary mt-1">•</span>Respond to your project inquiry or message</li>
                                <li className="flex gap-2"><span className="text-primary mt-1">•</span>Improve our website based on usage analytics</li>
                                <li className="flex gap-2"><span className="text-primary mt-1">•</span>Send project-related communications (no spam)</li>
                            </ul>
                            <p className="text-muted-foreground mt-3">We do <strong className="text-foreground">not</strong> sell, rent, or share your personal data with third parties for marketing purposes.</p>
                        </div>

                        <div>
                            <h2 className="font-display font-bold text-xl mb-3">4. Cookies & Analytics</h2>
                            <p className="text-muted-foreground">
                                Our website uses Google Analytics to understand how visitors use our site. Google Analytics uses cookies to collect anonymized data about your visit. You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Analytics Opt-out Browser Add-on</a>.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-display font-bold text-xl mb-3">5. Third-Party Services</h2>
                            <p className="text-muted-foreground mb-3">This website uses the following third-party services:</p>
                            <ul className="space-y-2 text-muted-foreground ml-4">
                                <li className="flex gap-2"><span className="text-primary mt-1">•</span><strong className="text-foreground">Web3Forms</strong> — processes contact form submissions securely</li>
                                <li className="flex gap-2"><span className="text-primary mt-1">•</span><strong className="text-foreground">Google Analytics</strong> — anonymized website usage tracking</li>
                                <li className="flex gap-2"><span className="text-primary mt-1">•</span><strong className="text-foreground">Vercel</strong> — website hosting and deployment</li>
                                <li className="flex gap-2"><span className="text-primary mt-1">•</span><strong className="text-foreground">Google Fonts</strong> — font delivery (may log IP addresses per Google's policy)</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-display font-bold text-xl mb-3">6. Data Retention</h2>
                            <p className="text-muted-foreground">
                                Contact form submissions are retained in our email inbox for as long as necessary to fulfill your inquiry. Analytics data is retained per Google Analytics' default retention settings (26 months). You may request deletion of your data at any time by emailing us.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-display font-bold text-xl mb-3">7. Your Rights</h2>
                            <p className="text-muted-foreground">You have the right to:</p>
                            <ul className="space-y-2 text-muted-foreground ml-4 mt-2">
                                <li className="flex gap-2"><span className="text-primary mt-1">•</span>Request access to data we hold about you</li>
                                <li className="flex gap-2"><span className="text-primary mt-1">•</span>Request correction or deletion of your data</li>
                                <li className="flex gap-2"><span className="text-primary mt-1">•</span>Withdraw consent at any time</li>
                            </ul>
                            <p className="text-muted-foreground mt-3">To exercise these rights, email us at <a href="mailto:ryncstudio@gmail.com" className="text-primary hover:underline">ryncstudio@gmail.com</a>.</p>
                        </div>

                        <div>
                            <h2 className="font-display font-bold text-xl mb-3">8. Changes to This Policy</h2>
                            <p className="text-muted-foreground">
                                We may update this Privacy Policy occasionally. Changes will be posted on this page with an updated date. Continued use of our website after changes means you accept the updated policy.
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
