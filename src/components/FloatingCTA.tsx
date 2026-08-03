import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Facebook } from "lucide-react";
import { useState } from "react";
import viberLogo from "@/assets/viber-logo.png";

export function FloatingCTA() {
    const [open, setOpen] = useState(false);

    const whatsappUrl = "https://wa.me/639053009722?text=Hi%20RYNC%20Studio%21%20I%20am%20interested%20in%20your%20services.";
    const viberUrl = "viber://chat?number=%2B639053009722";
    const facebookUrl = "https://www.facebook.com/ryncstudio/";

    return (
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[200] flex flex-col items-end gap-3 scale-90 md:scale-100 origin-bottom-right">
            {/* Expanded Options */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className="flex flex-col gap-3"
                    >
                        {/* WhatsApp Button */}
                        <motion.a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all duration-300 font-medium text-sm"
                        >
                            <svg className="h-5 w-5 fill-white flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <span>WhatsApp Us</span>
                        </motion.a>

                        {/* Viber Button */}
                        <motion.a
                            href={viberUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-3 bg-[#7360F2] text-white px-4 py-3 rounded-full shadow-lg shadow-[#7360F2]/30 hover:shadow-[#7360F2]/50 transition-all duration-300 font-medium text-sm"
                        >
                            <img src={viberLogo} alt="Viber" className="h-6 w-6 object-contain flex-shrink-0" />
                            <span>Viber Us</span>
                        </motion.a>

                        {/* Facebook/Messenger Button */}
                        <motion.a
                            href={facebookUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-3 bg-[#1877F2] text-white px-4 py-3 rounded-full shadow-lg shadow-[#1877F2]/30 hover:shadow-[#1877F2]/50 transition-all duration-300 font-medium text-sm"
                        >
                            <Facebook className="h-5 w-5 flex-shrink-0" />
                            <span>Message on Facebook</span>
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Toggle Button */}
            <motion.button
                onClick={() => setOpen(!open)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative h-14 w-14 rounded-full bg-gradient-to-br from-primary to-violet-500 text-white shadow-xl shadow-primary/40 hover:shadow-primary/60 transition-all duration-300 flex items-center justify-center"
                aria-label="Contact us"
            >
                <AnimatePresence mode="wait">
                    {open ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X className="h-6 w-6" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <MessageCircle className="h-6 w-6" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Pulse ring */}
                {!open && (
                    <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
                )}
            </motion.button>
        </div>
    );
}
