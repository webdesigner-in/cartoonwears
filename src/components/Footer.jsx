// src/components/Footer.jsx

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { getYear } from "date-fns";

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const date = new Date();
  const year = getYear(date);
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <footer
      className="bg-[#0B0F19] text-white py-12 px-6 md:px-12 lg:px-20"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <motion.div
            className="space-y-4 font-body text-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-[#10B981]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-[#10B981] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:text-[#10B981] transition">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#10B981] transition">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#10B981] transition">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Customer Support */}
          <motion.div
            className="space-y-4 font-body text-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-[#10B981]">
              Customer Support
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/faq" className="hover:text-[#10B981] transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/returns" className="hover:text-[#10B981] transition">
                  Returns
                </a>
              </li>
              <li>
                <a href="/shipping" className="hover:text-[#10B981] transition">
                  Shipping
                </a>
              </li>
              <li>
                <a href="/support" className="hover:text-[#10B981] transition">
                  Support
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Legal Information */}
          <motion.div
            className="space-y-4 font-body text-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-[#10B981]">
              Legal Information
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="hover:text-[#10B981] transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-[#10B981] transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/cookies" className="hover:text-[#10B981] transition">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-4 font-body text-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-xl font-bold text-[#10B981]">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-[#10B981]" />
                <span>support@cartoonwears.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-[#10B981]" />
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-[#10B981]" />
                <span>123 Cartoon Street, Fashion City</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                className="hover:text-[#10B981] transition"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                className="hover:text-[#10B981] transition"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                className="hover:text-[#10B981] transition"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="text-center mt-8 pt-8 border-t border-[#10B981] border-opacity-20 font-body"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-[#E0E0E0]">
            © {year} Cartoon Wears. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
