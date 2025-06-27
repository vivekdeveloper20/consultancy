import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  GraduationCap, 
  IndianRupee, 
  Moon, 
  Sun,
  Globe,
  Home,
  Shield,
  Heart,
  Lock,
  Smartphone,
  CreditCard,
  PiggyBank,
  RefreshCw,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Student Loans', path: '/student-loan' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Tools', path: '/tools' },
    { name: 'Countries', path: '/country-loans' },
    { name: 'Community', path: '/community' },
    { name: 'Company', hasDropdown: true },
  ];

  const servicesData = [
    {
      category: 'Education Loans',
      items: [
        {
          name: 'Abroad Education Loan',
          description: 'Loans for international studies',
          icon: Globe,
          path: '/services/abroad-education-loan',
          color: 'from-blue-500 to-cyan-500'
        },
        {
          name: 'Domestic Education Loan',
          description: 'Loans for studies in India',
          icon: Home,
          path: '/services/domestic-education-loan',
          color: 'from-green-500 to-emerald-500'
        },
        {
          name: 'Refinancing',
          description: 'Better rates for existing loans',
          icon: RefreshCw,
          path: '/services/refinancing',
          color: 'from-purple-500 to-pink-500'
        }
      ]
    },
    {
      category: 'Insurance & Protection',
      items: [
        {
          name: 'Travel Insurance',
          description: 'Comprehensive travel coverage',
          icon: Shield,
          path: '/services/travel-insurance',
          color: 'from-orange-500 to-red-500'
        },
        {
          name: 'Health Insurance',
          description: 'Medical coverage abroad',
          icon: Heart,
          path: '/services/health-insurance',
          color: 'from-red-500 to-pink-500'
        }
      ]
    },
    {
      category: 'Financial Services',
      items: [
        {
          name: 'Blocked Account',
          description: 'Required for student visas',
          icon: Lock,
          path: '/services/blocked-account',
          color: 'from-indigo-500 to-purple-500'
        },
        {
          name: 'Bank Account',
          description: 'International banking solutions',
          icon: PiggyBank,
          path: '/services/bank-account',
          color: 'from-teal-500 to-cyan-500'
        },
        {
          name: 'Forex Card',
          description: 'Multi-currency travel card',
          icon: CreditCard,
          path: '/services/forex-card',
          color: 'from-yellow-500 to-orange-500'
        },
        {
          name: 'Credit Card',
          description: 'Student credit cards',
          icon: CreditCard,
          path: '/services/credit-card',
          color: 'from-pink-500 to-rose-500'
        },
        {
          name: 'GIC',
          description: 'Guaranteed Investment Certificate',
          icon: PiggyBank,
          path: '/services/gic',
          color: 'from-emerald-500 to-green-500'
        }
      ]
    },
    {
      category: 'Connectivity',
      items: [
        {
          name: 'Sim Card',
          description: 'International mobile plans',
          icon: Smartphone,
          path: '/services/sim-card',
          color: 'from-violet-500 to-purple-500'
        }
      ]
    }
  ];

  const companyDropdown: { name: string; path: string }[] = [
    { name: 'About Us', path: '/company' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Careers', path: '/company#careers' },
    { name: 'Our Team', path: '/company#team' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl shadow-glass border-b border-white/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-3 rounded-2xl shadow-glass group-hover:shadow-lg transition-all duration-300">
                <GraduationCap className="h-7 w-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 bg-accent-500 p-1 rounded-full">
                <IndianRupee className="h-3 w-3 text-white" />
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-2xl font-display font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Students Choice
              </span>
              <div className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">
                Trusted Education Loans
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown && item.name === 'Services' ? (
                  <div
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative group cursor-pointer ${
                      location.pathname === item.path
                        ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                        : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                    }`}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className="flex items-center gap-1">
                      {item.name}
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    </div>
                    
                    {/* Mega Dropdown */}
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-[800px] bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden z-50"
                          onMouseEnter={() => setIsServicesOpen(true)}
                          onMouseLeave={() => setIsServicesOpen(false)}
                        >
                          <div className="p-6">
                            <div className="grid grid-cols-2 gap-8">
                              {servicesData.map((category, categoryIndex) => (
                                <div key={category.category}>
                                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                                    {category.category}
                                  </h3>
                                  <div className="space-y-3">
                                    {category.items.map((service, serviceIndex) => {
                                      const Icon = service.icon;
                                      return (
                                        <motion.div
                                          key={service.name}
                                          initial={{ opacity: 0, x: -10 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ delay: (categoryIndex * 0.1) + (serviceIndex * 0.05) }}
                                        >
                                          <Link
                                            to={service.path}
                                            className="group flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-300"
                                          >
                                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300`}>
                                              <Icon className="w-5 h-5 text-white" />
                                            </div>
                                            <div className="flex-1">
                                              <h4 className="font-semibold text-neutral-900 dark:text-white group-hover:text-primary-600 transition-colors duration-300">
                                                {service.name}
                                              </h4>
                                              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                                {service.description}
                                              </p>
                                            </div>
                                            <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all duration-300" />
                                          </Link>
                                        </motion.div>
                                      );
                                    })}
                                  </div>
                                </div>
                              ))}
                            </div>
                            
                            {/* Bottom CTA */}
                            <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className="font-semibold text-neutral-900 dark:text-white">Need Help Choosing?</h4>
                                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Our experts can guide you to the right service</p>
                                </div>
                                <Link
                                  to="/contact"
                                  className="px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
                                >
                                  Get Consultation
                                </Link>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : item.hasDropdown && item.name === 'Company' ? (
                  <div
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative group cursor-pointer ${
                      location.pathname.startsWith('/company')
                        ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                        : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                    }`}
                    onMouseEnter={() => setIsCompanyOpen(true)}
                    onMouseLeave={() => setIsCompanyOpen(false)}
                  >
                    <div className="flex items-center gap-1">
                      {item.name}
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    </div>
                    <AnimatePresence>
                      {isCompanyOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden z-50"
                          onMouseEnter={() => setIsCompanyOpen(true)}
                          onMouseLeave={() => setIsCompanyOpen(false)}
                        >
                          <div className="py-2">
                            {companyDropdown.map((link) => (
                              <Link
                                key={link.name}
                                to={link.path as string}
                                className="block px-5 py-3 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200"
                                onClick={() => setIsCompanyOpen(false)}
                              >
                                {link.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative group ${
                      location.pathname === item.path
                        ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                        : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 w-1 h-1 bg-primary-500 rounded-full"
                        layoutId="activeTab"
                        initial={false}
                        style={{ x: '-50%' }}
                      />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-300"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-accent-500" />
              ) : (
                <Moon className="h-5 w-5 text-neutral-600" />
              )}
            </button>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                to="/tools"
                className="relative px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-2xl shadow-glass hover:shadow-lg transition-all duration-300 group overflow-hidden"
              >
                <span className="relative z-10">Check Eligibility</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 animate-pulse-glow opacity-0 group-hover:opacity-100" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl rounded-2xl shadow-glass border border-white/20 m-4 p-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.hasDropdown && item.name === 'Services' ? (
                      <div className="space-y-2">
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className={`w-full flex items-center justify-between py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                            location.pathname === item.path
                              ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                              : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                          }`}
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <AnimatePresence>
                          {isServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-4 space-y-2 border-l-2 border-neutral-200 dark:border-neutral-700 pl-4">
                                {servicesData.map((category) => (
                                  <div key={category.category} className="space-y-2">
                                    <h4 className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wide">
                                      {category.category}
                                    </h4>
                                    {category.items.map((service) => {
                                      const Icon = service.icon;
                                      return (
                                        <Link
                                          key={service.name}
                                          to={service.path}
                                          onClick={() => setIsOpen(false)}
                                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-300"
                                        >
                                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                                            <Icon className="w-4 h-4 text-white" />
                                          </div>
                                          <div className="flex-1">
                                            <h5 className="font-medium text-neutral-900 dark:text-white text-sm">
                                              {service.name}
                                            </h5>
                                            <p className="text-xs text-neutral-600 dark:text-neutral-400">
                                              {service.description}
                                            </p>
                                          </div>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : item.hasDropdown && item.name === 'Company' ? (
                      <div className="space-y-2">
                        <button
                          onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                          className={`w-full flex items-center justify-between py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                            location.pathname.startsWith('/company')
                              ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                              : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                          }`}
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isCompanyOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {isCompanyOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-4 space-y-2 border-l-2 border-neutral-200 dark:border-neutral-700 pl-4">
                                {companyDropdown.map((link) => (
                                  <Link
                                    key={link.name}
                                    to={link.path as string}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-2 px-2 rounded-lg text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200"
                                  >
                                    {link.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                          location.pathname === item.path
                            ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                            : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700"
                >
                  <Link
                    to="/tools"
                    onClick={() => setIsOpen(false)}
                    className="block bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-3 rounded-xl font-semibold text-center hover:shadow-lg transition-all duration-300"
                  >
                    Check Eligibility
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;