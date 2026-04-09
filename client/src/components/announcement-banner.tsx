import { motion } from "framer-motion";
import { ArrowRight, Award } from "lucide-react";
import { useLocation } from "wouter";
import groupPhotoImage from "@assets/signing_2_v2_1775772436204.jpg";

export default function AnnouncementBanner() {
  const [, setLocation] = useLocation();

  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="grid lg:grid-cols-2 min-h-[420px]">
        {/* Image panel */}
        <motion.div
          className="relative overflow-hidden min-h-[280px] lg:min-h-full"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={groupPhotoImage}
            alt="Shaphargroup and Honeywell UOP teams at the Letter of Award signing ceremony in Bracknell, UK"
            className="w-full h-full object-cover object-center absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-navy/60 lg:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent lg:hidden" />
        </motion.div>

        {/* Text content panel */}
        <motion.div
          className="relative z-10 flex flex-col justify-center px-8 py-12 lg:px-12 xl:px-16"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <div className="flex items-center gap-2 mb-5">
            <Award className="w-4 h-4 text-gold" />
            <span className="text-xs font-bold tracking-widest uppercase text-gold border border-gold/40 bg-gold/10 px-3 py-1 rounded-full">
              Landmark Announcement
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
            Shaphargroup Selects{" "}
            <span className="text-emerald">Honeywell UOP</span>{" "}
            Ecofining™ Technology
          </h2>

          {/* Subheadline */}
          <p className="text-gold/80 font-semibold text-sm tracking-wide uppercase mb-5">
            200,000 MT/year SAF Refinery · Port of Rotterdam
          </p>

          {/* Description */}
          <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-lg">
            Shaphargroup has formalised Honeywell UOP's Ecofining™ process technology as licensor for its flagship sustainable aviation fuel facility at the Port of Rotterdam — a defining milestone in Europe's transition to large-scale SAF production.
          </p>

          {/* CTA */}
          <div>
            <motion.button
              onClick={() => setLocation("/article/honeywell-loa-announcement")}
              className="inline-flex items-center gap-3 bg-emerald hover:bg-emerald/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-emerald/30 hover:shadow-xl group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Read the Full Announcement
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald via-gold to-emerald opacity-60" />
    </section>
  );
}
