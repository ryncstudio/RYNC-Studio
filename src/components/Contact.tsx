import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MessageCircle, MapPin, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ContactProps {
  showHeadings?: boolean;
}

export function Contact({ showHeadings = true }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Web Development",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Submitting form with data:", formData);

    // Validation
    if (!formData.name.trim()) {
      toast.error("Please enter your name.");
      setIsSubmitting(false);
      return;
    }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      toast.error("Please put the real gmail or email.");
      setIsSubmitting(false);
      return;
    }

    if (!formData.message.trim()) {
      toast.error("Please enter a message.");
      setIsSubmitting(false);
      return;
    }

    // Web3Forms API Integration
    try {
      const apiKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

      // Debug: Check if API key is loaded (only logs first/last 4 chars for security)
      if (!apiKey) {
        console.error("❌ VITE_WEB3FORMS_ACCESS_KEY is not defined!");
        toast.error("Contact form is not configured. Please contact us via WhatsApp or email directly.");
        setIsSubmitting(false);
        return;
      }

      console.log("✅ API Key loaded:", apiKey.substring(0, 4) + "..." + apiKey.substring(apiKey.length - 4));

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: apiKey,
          name: formData.name,
          email: formData.email,
          subject: `New ${formData.projectType} Inquiry from ${formData.name}`,
          message: `Project Type: ${formData.projectType}\n\nMessage:\n${formData.message}`,
          from_name: formData.name, // Client's full name will appear in Gmail
        }),
      });

      const result = await response.json();

      if (result.success) {
        console.log("Form submitted successfully via Web3Forms");
        toast.success("Message sent successfully! We'll get back to you soon. 🚀");

        // Reset form
        setFormData({ name: "", email: "", projectType: "Web Development", message: "" });
      } else {
        throw new Error(result.message || "Failed to send message");
      }

    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("Failed to send message. Please try contacting us via WhatsApp or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 md:py-32 bg-background pb-32">
      <div id="contact" className="w-full">
        <div className="container px-6 relative z-10 w-full max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center py-8 lg:py-0"
            >
              {showHeadings && (
                <>
                  <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 leading-[1.1] md:leading-[0.9]">
                    Let's build something <br />
                    <span className="text-primary">extraordinary.</span>
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-lg">
                    Ready to start your next project? Tell us about your vision and we'll help you bring it to life.
                  </p>
                </>
              )}

              <div className="space-y-6 md:space-y-8">
                <div className="flex items-center gap-4 group">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email Us</div>
                    <div className="text-lg font-medium break-all">ryncstudio@gmail.com</div>
                  </div>
                </div>

                {/* WhatsApp Link */}
                <a
                  href="https://wa.me/639053009722"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">WhatsApp Us</div>
                    <div className="text-lg font-medium group-hover:text-primary transition-colors">09053009722</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 group">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Visit Us</div>
                    <div className="text-lg font-medium">Veramont Residences<br />Mabolo, Cebu City</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-1 border-border/50 shadow-2xl shadow-primary/5 bg-card/50 backdrop-blur-sm overflow-hidden">
                <div className="p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Name</label>
                        <Input
                          placeholder="John Doe"
                          className="h-12 bg-background/50"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <Input
                          type="email"
                          placeholder="john@company.com"
                          className="h-12 bg-background/50"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Project Type</label>
                      <select
                        className="flex h-12 w-full items-center justify-between rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      >
                        <option>Web Development</option>
                        <option>Mobile App</option>
                        <option>Brand Identity</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message</label>
                      <Textarea
                        placeholder="Tell us about your project..."
                        className="min-h-[150px] bg-background/50 resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full h-12 text-lg rounded-md" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
