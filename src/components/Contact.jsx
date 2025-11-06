import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import VariableProximity from "../components/VariableProximity";
import ScrollReveal, { ScrollRevealChild } from "./ScrollReveal";
import {
  FaInstagram,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { Mail, MessageSquare } from "lucide-react";
import "../styles/Thank.css";
import "../styles/animations.css";

const ThankYou = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <>
      <motion.div 
        className="scroll-progress" 
        style={{ 
          scaleX: scrollProgress,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'var(--theme-primary)',
          transformOrigin: '0%',
          zIndex: 1000
        }} 
      />
      <div className="thankyou-page">
        {/* ====== Thank You Section ====== */}
        <ScrollReveal className="thankyou-hero" direction="up">
          <div className="thankyou-text">
            <ScrollRevealChild>
              <span ref={containerRef} style={{ color: "var(--theme-accent)" }}>
                <VariableProximity
                  label={"THANK"}
                  className={"variable-proximity-demo"}
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 1000, 'opsz' 40"
                  containerRef={containerRef}
                  radius={100}
                  falloff="linear"
                />
              </span>
            </ScrollRevealChild>
            &nbsp;
            <ScrollRevealChild delay={0.2}>
              <h1 className="thank-title">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >YOU</motion.span>
              </h1>
            </ScrollRevealChild>
            <ScrollRevealChild delay={0.3}>
              <h3 className="thank-sub">For Your Attention</h3>
            </ScrollRevealChild>
            <ScrollRevealChild delay={0.4}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
                ipsum vitae lacus lobortis lacinia. Donec tristique arcu massa.
              </p>
            </ScrollRevealChild>
            <ScrollReveal direction="right" delay={0.5} className="thank-icons">
              <motion.div 
                className="thank-icons"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                <motion.a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <FaFacebookF />
                </motion.a>
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <FaInstagram />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <FaLinkedinIn />
                </motion.a>
                <motion.a 
                  href="https://x.com" 
                  target="_blank" 
                  rel="noreferrer"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <FaXTwitter />
                </motion.a>
                <motion.a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://wa.me/923090236185"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <FaWhatsapp />
                </motion.a>
              </motion.div>
            </ScrollReveal>
          </div>
        </ScrollReveal>

        {/* ====== Contact Section ====== */}

        {/* ====== Footer ====== */}
       <ScrollReveal direction="up" className="footer">
      <div className="footer-container">
        {/* Brand */}
        <ScrollRevealChild>
          <div className="footer-brand">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="finalsign">Zeeshan .</span>
            </motion.h2>
            <motion.p 
              className="tagline"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Crafting clean, creative digital experiences.
            </motion.p>
          </div>
        </ScrollRevealChild>

        {/* Quick Links */}
        <ScrollReveal direction="right" className="footer-nav-wrapper">
          <ul className="footer-nav">
            <ScrollRevealChild delay={0.1}><li><a href="#home">Home</a></li></ScrollRevealChild>
            <ScrollRevealChild delay={0.2}><li><a href="#about">About</a></li></ScrollRevealChild>
            <ScrollRevealChild delay={0.3}><li><a href="#experience">Experience</a></li></ScrollRevealChild>
            <ScrollRevealChild delay={0.4}><li><a href="#work">Work</a></li></ScrollRevealChild>
            <ScrollRevealChild delay={0.5}><li><a href="#contact">Contact</a></li></ScrollRevealChild>
          </ul>
        </ScrollReveal>

        {/* Short Message */}
        <ScrollRevealChild delay={0.4}>
          <form className="footer-message">
            <motion.input 
              type="text" 
              placeholder="Your message..."
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.button 
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send
            </motion.button>
          </form>
        </ScrollRevealChild>

        {/* Social Links */}
        <ScrollReveal direction="up" className="social-links">
          <motion.a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noreferrer"
            whileHover={{ y: -3 }}
          >
            <FaFacebookF />
          </motion.a>
          <motion.a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noreferrer"
            whileHover={{ y: -3 }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noreferrer"
            whileHover={{ y: -3 }}
          >
            <FaLinkedinIn />
          </motion.a>
          <motion.a 
            href="https://x.com" 
            target="_blank" 
            rel="noreferrer"
            whileHover={{ y: -3 }}
          >
            <FaXTwitter />
          </motion.a>
          <motion.a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer"
            whileHover={{ y: -3 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a 
            href="https://wa.me/923001234567" 
            target="_blank" 
            rel="noreferrer"
            whileHover={{ y: -3 }}
          >
            <FaWhatsapp />
          </motion.a>
        </ScrollReveal>

        <ScrollRevealChild delay={0.6}>
          <p className="copyright">
            © 2025 Zeeshan. All rights reserved.
          </p>
        </ScrollRevealChild>
      </div>
    </ScrollReveal>
      </div>
    </>
  );
};

export default ThankYou;
