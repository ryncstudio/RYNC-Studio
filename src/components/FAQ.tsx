import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Our Starter sites typically launch in 2-3 weeks. Growth projects often take 4-8 weeks depending on complexity. We provide a detailed timeline during our initial consultation so you know exactly what to expect."
  },
  {
    question: "What is your pricing model?",
    answer: "We believe in transparency. We offer fixed project pricing so there are no surprises. For ongoing work, we have retainer packages starting at $1,000/month for dedicated design and development support."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Absolutely. We don't just hand over the keys and disappear. We offer 30 days of complimentary support after launch, and optional maintenance plans to keep your site secure, updated, and performing at its best."
  },
  {
    question: "What technologies do you use?",
    answer: "We specialize in modern stacks: React, Next.js, and TypeScript for web apps; Shopify and Webflow for e-commerce. We choose the right tool for your specific business goals, prioritizing performance and scalability."
  },
  {
    question: "Can you redesign an existing website?",
    answer: "Yes. We can audit your current site, identify performance bottlenecks and UX issues, and rebuild it from the ground up to meet modern standards and your current brand vision."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 pb-32 bg-background">     <div className="container px-6 max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Common Questions</h2>
        <p className="text-muted-foreground">Everything you need to know about working with us.</p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <AccordionItem value={`item-${i}`} className="border-b border-border/50">
              <AccordionTrigger className="text-left font-medium text-lg py-6 hover:no-underline hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
    </section>
  );
}
