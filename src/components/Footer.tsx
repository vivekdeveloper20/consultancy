import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, IndianRupee, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = {
    'Quick Links': [
      { name: 'Home', path: '/' },
      { name: 'Student Loans', path: '/student-loan' },
      { name: 'Services', path: '/services' },
      { name: 'Tools', path: '/tools' },
    ],
    'Destinations': [
      { name: 'Study in USA', path: '/country-loans' },
      { name: 'Study in UK', path: '/country-loans' },
      { name: 'Study in Germany', path: '/country-loans' },
      { name: 'Study in Canada', path: '/country-loans' },
    ],
    'Company': [
      { name: 'About Us', path: '/company' },
      { name: 'Contact Us', path: '/contact' },
      { name: 'Careers', path: '/company' },
      { name: 'Community', path: '/community' },
    ],
    'Support': [
      { name: 'FAQ', path: '/faq' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms & Conditions', path: '/terms' },
      { name: 'RBI Guidelines', path: '/rbi-guidelines' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-500' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-600' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-700' },
  ];

  return (
    <footer className="bg-neutral-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500 to-secondary-500" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-3 rounded-2xl shadow-glass">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 bg-accent-500 p-1 rounded-full">
                    <IndianRupee className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div>
                  <span className="text-2xl font-display font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                    Students Choice
                  </span>
                  <div className="text-sm text-neutral-400 font-medium">
                    Trusted Education Loans
                  </div>
                </div>
              </div>
              
              <p className="text-neutral-300 mb-6 leading-relaxed">
                India's most trusted education loan provider helping students achieve their global study abroad dreams with financial solutions tailored for success.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary-500/20 p-2 rounded-lg">
                    <Mail className="h-4 w-4 text-primary-400" />
                  </div>
                  <span className="text-neutral-300">info@studentschoice.in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-secondary-500/20 p-2 rounded-lg">
                    <Phone className="h-4 w-4 text-secondary-400" />
                  </div>
                  <span className="text-neutral-300">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-accent-500/20 p-2 rounded-lg">
                    <MapPin className="h-4 w-4 text-accent-400" />
                  </div>
                  <span className="text-neutral-300">Subhash Nagar, Delhi, India</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className={`w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center hover:bg-neutral-700 transition-all duration-300 group ${social.color}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="h-5 w-5 text-neutral-400 group-hover:text-current transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-neutral-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* RBI Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-neutral-800/50 backdrop-blur-sm rounded-2xl border border-neutral-700"
        >
          <div className="flex items-start space-x-3">
            <div className="bg-amber-500/20 p-2 rounded-lg flex-shrink-0">
              <Shield className="h-5 w-5 text-amber-400" />
            </div>
            <div>
              <h4 className="text-amber-400 font-semibold mb-2">RBI Disclaimer</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Students Choice is a financial services platform that connects students with registered NBFCs and lending institutions. 
                We do not provide loans directly. All loan products are subject to the terms and conditions of the respective lenders. 
                Interest rates and loan terms may vary based on lender policies and borrower eligibility.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <div className="flex items-center space-x-2">
                <span className="text-neutral-400">Made with</span>
                <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
                <span className="text-neutral-400">in India</span>
              </div>
              <div className="bg-gradient-to-r from-orange-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
                <span>🇮🇳</span>
                <span>Made in India</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-neutral-400 text-sm"
            >
              © 2024 Students Choice. All rights reserved.
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;