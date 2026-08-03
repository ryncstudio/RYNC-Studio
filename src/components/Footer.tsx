import { motion } from "framer-motion";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50 text-foreground py-20 relative overflow-hidden">
      <div className="container px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-full md:col-span-2">
            <Link href="/">
              <span className="font-display font-bold text-3xl tracking-tighter cursor-pointer">
                RYNC<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="mt-6 text-muted-foreground max-w-sm leading-relaxed">
              Engineering the next generation of digital products. We build high-performance websites and apps that scale.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Sitemap</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="/work" className="hover:text-primary transition-colors">Work</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>

              <li><Link href="/team" className="hover:text-primary transition-colors">Team</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Socials</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <a
                  href="https://www.facebook.com/ryncstudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ryncstudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/639053009722"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="viber://chat?number=%2B639053009722"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Viber
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 Rync Studio. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Big text background */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-[0.03] pointer-events-none select-none">
        <span className="text-[20vw] font-display font-black leading-none whitespace-nowrap text-foreground opacity-5">
          RYNC STUDIO
        </span>
      </div>
    </footer>
  );
}
