import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  Glasses,
  Globe,
  Mail,
  MapPin,
  Phone,
  Store,
} from "lucide-react";
import "./modem-animated-footer.css";
import endingBg from "../../assets/ending-bg.webp";
import endingImg from "../../assets/ending.jpg";

const socialLinks = [
  { icon: <Globe size={20} />, href: "#", label: "Website" },
  { icon: <Store size={20} />, href: "#collections", label: "Collections" },
  { icon: <Phone size={20} />, href: "tel:+919999999999", label: "Call" },
  { icon: <Mail size={20} />, href: "mailto:hello@eyeconoptics.in", label: "Email" },
];

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Collections", href: "#collections" },
  { label: "Brands", href: "#brands" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function ModemAnimatedFooter() {
  const endingRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: endingRef,
    offset: ["start end", "end start"],
  });
  const endingScale = useTransform(scrollYProgress, [0, 0.45, 1], [1, 1.08, 1]);

  return (
    <section className="eyecon-footer-wrap" id="contact">
      <motion.footer
        className="eyecon-footer"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="eyecon-footer__shell">
          <div className="eyecon-footer__main">
            <div className="eyecon-footer__brand-block">
              <p className="eyecon-footer__kicker">Eyecon Optics</p>
              <h2 className="eyecon-footer__title">Clarity, Comfort, and Signature Style</h2>
              <p className="eyecon-footer__desc">
                Premium shades, everyday specs, and precision lenses curated for modern Indian lifestyles.
                Visit Eyecon for personalized fitting and trusted optical guidance.
              </p>
            </div>

            <div className="eyecon-footer__actions">
              <div className="eyecon-footer__socials">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="eyecon-footer__social-link"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>

              <nav className="eyecon-footer__nav">
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href} className="eyecon-footer__nav-link">
                    {link.label}
                  </a>
                ))}
              </nav>

              <p className="eyecon-footer__address">
                <MapPin size={15} />
                Arera Colony, Bhopal, Madhya Pradesh
              </p>
            </div>
          </div>

           

          <div className="eyecon-footer__line" aria-hidden="true" />
          <p className="eyecon-footer__big-text">EYECON OPTICS</p>

          <div className="eyecon-footer__bottom">
            <p>(c) {new Date().getFullYear()} Eyecon Optics. All rights reserved.</p>
            <p>Crafted for better vision in every generation.</p>
          </div>
        </div>
      </motion.footer>

      <div className="eyecon-ending-scene" ref={endingRef}>
        <img
          src={endingBg}
          alt="Eyecon decorative ending background"
          className="eyecon-ending-bg-overlay"
          aria-hidden="true"
        />
        <motion.img
          src={endingImg}
          alt="Eyecon Optics ending visual"
          className="eyecon-ending-image"
          style={{ scale: endingScale, transformOrigin: "center top" }}
        />
      </div>
    </section>
  );
}
