import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { GripHorizontal, Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";

import social1 from "@/assets/social-1.png";
import social2 from "@/assets/social-2.jpg";
import social3 from "@/assets/social-3.jpg";
import social4 from "@/assets/social-4.jpg";
import social5 from "@/assets/social-5.jpg";

interface ReelItem {
  image?: string;
  video?: string;
  caption: string;
}

const reelItems: ReelItem[] = [
  { image: social1, caption: "Grow your personal or business brand with a professional website that builds your online presence. 🚀 #RYNCStudio #WebDesign #Growth" },
  { image: social2, caption: "Shop Local. Earn Together. We built FILKART to connect communities through everyday products from local Philippine brands. 🛒🇵🇭 #Filkart #AppDev #LocalBusiness" },
  { image: social3, caption: "Reimagine your next creation with RYNC Studio. We turn big ideas into reality. 💡✨ #CreativeAgency #DigitalProduct #Innovation" },
  { image: social4, caption: "Founder's Birthday Month! 🎉 Celebrate with 12% OFF on all services until May 31. Let's build something great together. #RYNCStudio #Promo #WebDevelopment" },
  { image: social5, caption: "RYNC Studio builds SUKI: A smart, voice-first inventory app for Filipino microbusiness owners. Tulong sa negosyo mo, araw-araw! 📱📦 #SukiApp #SariSariStore #TechForGood" },
];

function SocialPostCard({ item, index }: { item: ReelItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [4, -4]);
  const rotateY = useTransform(x, [-100, 100], [-4, 4]);

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  function handleMouse(e: React.MouseEvent) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformPerspective: 800,
      }}
      className="relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] cursor-grab active:cursor-grabbing bg-card border border-border/50 rounded-2xl shadow-lg transition-shadow duration-500 hover:shadow-2xl flex flex-col overflow-hidden"
    >
      {/* Social Media Header */}
      <div className="flex items-center justify-between p-4 border-b border-border/30">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
            <div className="w-full h-full bg-card rounded-full border-2 border-card overflow-hidden flex items-center justify-center">
              <span className="font-bold text-[10px] text-foreground">RYNC</span>
            </div>
          </div>
          <div>
            <p className="font-semibold text-sm leading-none text-foreground">ryncstudio</p>
            <p className="text-xs text-muted-foreground mt-0.5">Cebu City, Philippines</p>
          </div>
        </div>
        <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
      </div>

      {/* Image or Video Content */}
      <div className="relative aspect-[4/5] bg-muted/20 overflow-hidden flex items-center justify-center">
        {item.video ? (
          <video
            src={item.video}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={item.image}
            alt="RYNC Studio Post"
            className="w-full h-full object-cover"
            draggable={false}
          />
        )}
      </div>

      {/* Social Media Footer Actions */}
      <div className="p-4 pb-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Heart className="w-6 h-6 text-foreground hover:text-rose-500 transition-colors cursor-pointer" />
          <MessageCircle className="w-6 h-6 text-foreground hover:text-muted-foreground transition-colors cursor-pointer" />
          <Send className="w-6 h-6 text-foreground hover:text-muted-foreground transition-colors cursor-pointer" />
        </div>
        <Bookmark className="w-6 h-6 text-foreground hover:text-muted-foreground transition-colors cursor-pointer" />
      </div>

      {/* Caption (Likes removed) */}
      <div className="px-4 pb-5 pt-2">
        <p className="text-sm">
          <span className="font-semibold mr-2">ryncstudio</span>
          <span className="text-foreground/90 leading-relaxed">{item.caption}</span>
        </p>
      </div>
    </motion.div>
  );
}

export function ShowcaseReel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showHint, setShowHint] = useState(true);

  // Hide the drag hint after user scrolls
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      if (el.scrollLeft > 20) setShowHint(false);
    };
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-16 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="container px-6 relative z-10 w-full max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-4 text-primary font-mono text-sm tracking-widest uppercase font-bold"
            >
              Social Feed
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl md:text-5xl mb-4 md:mb-6"
            >
              What We <span className="text-primary">Create.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground"
            >
              A glimpse into our latest posts, behind-the-scenes, and design highlights from Instagram.
            </motion.p>
          </div>

          {/* Drag hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showHint ? 1 : 0 }}
            className="hidden md:flex items-center gap-2 text-muted-foreground text-sm"
          >
            <GripHorizontal className="h-4 w-4" />
            <span>Drag to explore</span>
          </motion.div>
        </div>
      </div>

      {/* Scrollable reel — full bleed */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide px-6 md:px-[max(1.5rem,calc((100vw-1400px)/2+1.5rem))] pb-8 pt-4 select-none"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {reelItems.map((item, i) => (
          <SocialPostCard key={i} item={item} index={i} />
        ))}

        {/* Follow us card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: reelItems.length * 0.08, duration: 0.5 }}
          className="relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] flex items-center justify-center p-6"
        >
          <div className="text-center w-full bg-card border border-border/50 p-8 rounded-3xl hover:border-primary/50 transition-colors cursor-pointer group">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px] mb-4">
              <div className="w-full h-full bg-card rounded-full border-2 border-card overflow-hidden flex items-center justify-center">
                <span className="font-bold text-sm text-foreground">RYNC</span>
              </div>
            </div>
            <p className="font-display font-bold text-xl mb-2 group-hover:text-primary transition-colors">Follow Us</p>
            <p className="text-muted-foreground text-sm mb-6">See more on our Instagram @ryncstudio</p>
            <a href="https://www.instagram.com/ryncstudio/" target="_blank" rel="noreferrer" className="inline-block bg-primary text-primary-foreground font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-primary/90 transition-colors w-full">
              View Profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
