import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Building, 
  Clock, 
  CheckCircle, 
  TrendingUp, 
  DollarSign, 
  UserCheck,
  Award,
  ArrowRight,
  Globe,
  Star,
  Sparkles,
  Target,
  Shield,
  Zap,
  Calculator,
  Search,
  BookOpen,
  CreditCard,
  Play,
  ChevronRight,
  MessageCircle,
  PiggyBank,
  SlidersHorizontal,
  Headphones,
  ShieldCheck,
  Laptop,
  Lock,
  Home as HomeIcon,
  GraduationCap,
  Banknote,
  HelpCircle,
  Share2,
  Heart,
  Plane,
  Smartphone
} from 'lucide-react';
import Player from 'lottie-react';
import SpinWheel from '../components/SpinWheel';

// Custom hook to fetch Lottie JSONs
function useLottieAnimations(urls: string[]) {
  const [data, setData] = React.useState<(object | null)[]>(urls.map(() => null));
  React.useEffect(() => {
    urls.forEach((url, idx) => {
      fetch(url)
        .then((res) => res.json())
        .then((json) => setData((prev) => {
          const copy = [...prev];
          copy[idx] = json;
          return copy;
        }));
    });
  }, [urls]);
  return data;
}

// Example Lottie animation URLs (replace with your own or use public URLs)
const lottieAnimations = [
  'https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json', // Step 1
  'https://assets2.lottiefiles.com/packages/lf20_2LdLki.json',   // Step 2
  'https://assets2.lottiefiles.com/packages/lf20_4kx2q32n.json', // Step 3
  'https://assets2.lottiefiles.com/packages/lf20_1pxqjqps.json', // Step 4
];

type HowItWorksStep = {
  step: string;
  title: string;
  description: string;
  lottie: string;
};

const howItWorksSteps: HowItWorksStep[] = [
  {
    step: 'Step 1',
    title: 'Fill Application',
    description: 'Complete our simple online application form to get started with your education loan journey.',
    lottie: lottieAnimations[0],
  },
  {
    step: 'Step 2',
    title: 'Upload Documents',
    description: 'Securely upload all required documents for a quick and smooth verification process.',
    lottie: lottieAnimations[1],
  },
  {
    step: 'Step 3',
    title: 'Get Offers',
    description: 'Receive multiple loan offers from our trusted partners and compare your options easily.',
    lottie: lottieAnimations[2],
  },
  {
    step: 'Step 4',
    title: 'Choose & Get Funds',
    description: 'Select the best offer for you and receive funds directly to your account for your studies.',
    lottie: lottieAnimations[3],
  },
];

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openLoan, setOpenLoan] = useState<number | null>(null);
  const [openSupport, setOpenSupport] = useState<number | null>(null);
  const [focusIdx, setFocusIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [spinModalOpen, setSpinModalOpen] = React.useState(false);

  const heroFeatures = [
    {
      icon: Users,
      title: 'Guided 20,000+ Students',
      description: 'Successfully helped thousands achieve their study abroad dreams',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Building,
      title: '20+ Lending Partners',
      description: 'Wide network of trusted financial institutions',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: Clock,
      title: 'Approval in 48 Hours*',
      description: 'Quick processing for urgent education needs',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  const achievements = [
    { icon: Building, label: 'Loan Partners', value: '20+', color: 'text-blue-600' },
    { icon: DollarSign, label: 'Amount Disbursed', value: '₹1000 Cr+', color: 'text-green-600' },
    { icon: Users, label: 'Happy Students', value: '20K+', color: 'text-purple-600' },
    { icon: UserCheck, label: 'Loans Facilitated', value: '15K+', color: 'text-orange-600' }
  ];

  const loanCategories = [
    {
      title: 'Non-Collateral Loans',
      description: 'Up to ₹75 Lakhs without security',
      interest: '10.5% onwards',
      icon: Shield,
      gradient: 'from-blue-500 to-cyan-500',
      features: ['No collateral required', 'Quick approval', 'Flexible terms']
    },
    {
      title: 'Secured Loans',
      description: 'Up to ₹2 Crores with collateral',
      interest: '8.5% onwards',
      icon: Building,
      gradient: 'from-green-500 to-emerald-500',
      features: ['Lower interest rates', 'Higher loan amounts', 'Longer tenure']
    },
    {
      title: 'Co-Applicant Loans',
      description: 'Enhanced eligibility with co-signer',
      interest: '9.5% onwards',
      icon: Users,
      gradient: 'from-purple-500 to-pink-500',
      features: ['Better approval chances', 'Competitive rates', 'Shared responsibility']
    },
    {
      title: 'Dollar Loans',
      description: 'Direct foreign currency loans',
      interest: '7.5% onwards',
      icon: DollarSign,
      gradient: 'from-orange-500 to-red-500',
      features: ['No forex fluctuation', 'Direct disbursement', 'Lower processing fees']
    }
  ];

  const countries = [
    { name: 'USA', code: 'us', students: '5000+', popular: true },
    { name: 'UK', code: 'gb', students: '3500+', popular: true },
    { name: 'Germany', code: 'de', students: '2800+', popular: true },
    { name: 'Canada', code: 'ca', students: '4200+', popular: true },
    { name: 'Australia', code: 'au', students: '2100+', popular: false },
    { name: 'France', code: 'fr', students: '1800+', popular: false },
    { name: 'Ireland', code: 'ie', students: '1200+', popular: false },
    { name: 'New Zealand', code: 'nz', students: '900+', popular: false },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      course: 'MS Computer Science',
      university: 'Stanford University',
      country: '🇺🇸',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      quote: 'Students Choice made my dream of studying at Stanford possible. The loan process was seamless and the team was incredibly supportive.',
      rating: 5
    },
    {
      name: 'Rahul Kumar',
      course: 'MBA',
      university: 'London Business School',
      country: '🇬🇧',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      quote: 'Got my education loan approved in just 2 days! The interest rates were competitive and the documentation process was hassle-free.',
      rating: 5
    },
    {
      name: 'Sneha Patel',
      course: 'MS Data Science',
      university: 'University of Toronto',
      country: '🇨🇦',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg',
      quote: 'Excellent service and guidance throughout the loan application process. Highly recommend Students Choice for education loans.',
      rating: 5
    }
  ];

  const tools = [
    {
      title: 'EMI Calculator',
      description: 'Calculate your monthly payments',
      icon: Calculator,
      color: 'bg-blue-500'
    },
    {
      title: 'Eligibility Checker',
      description: 'Check loan eligibility instantly',
      icon: CheckCircle,
      color: 'bg-green-500'
    },
    {
      title: 'University Finder',
      description: 'Find your dream university',
      icon: Search,
      color: 'bg-purple-500'
    },
    {
      title: 'Grade Converter',
      description: 'Convert grades between systems',
      icon: BookOpen,
      color: 'bg-orange-500'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Add partner logo URLs and trust badge URLs
  const partners = [
    { name: 'HDFC Credila', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/HDFC_Credila_logo.svg' },
    { name: 'Axis Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Axis_Bank_logo.svg' },
    { name: 'SBI', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/State_Bank_of_India_logo.svg' },
    { name: 'ICICI Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/ICICI_Bank_Logo.svg' },
    { name: 'Avanse', logo: 'https://www.avanse.com/images/logo.svg' },
    { name: 'InCred', logo: 'https://www.incred.com/images/logo.svg' },
    { name: 'IDFC FIRST Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/IDFC_FIRST_Bank_logo.svg' },
    { name: 'Bank of Baroda', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Bank_of_Baroda_logo.svg' },
    { name: 'Punjab National Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Punjab_National_Bank_Logo.svg' },
    { name: 'Union Bank of India', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Union_Bank_of_India_logo.svg' },
    { name: 'Kotak Mahindra Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Kotak_Mahindra_Bank_logo.svg' },
    { name: 'Canara Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Canara_Bank_logo.svg' },
  ];
  const trustBadges = [
    { name: 'ISO Certified', logo: 'https://cdn-icons-png.flaticon.com/512/1040/1040230.png', alt: 'ISO Certified' },
    { name: 'RBI Approved', logo: 'https://cdn-icons-png.flaticon.com/512/1040/1040242.png', alt: 'RBI Approved' },
  ];

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const cards = Array.from(scrollRef.current.children);
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = cards[0].clientWidth;
    const idx = Math.round(scrollLeft / cardWidth);
    setFocusIdx(idx);
  };

  const scrollToIdx = (idx: number) => {
    if (!scrollRef.current) return;
    const cards = Array.from(scrollRef.current.children);
    if (cards[idx]) {
      (cards[idx] as HTMLElement).scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  // Why Choose features and Lottie data
  const whyChooseFeatures = [
    {
      icon: PiggyBank,
      title: 'Save up to ₹3 Lakhs',
      desc: 'Get maximum loan benefits & tax savings.'
    },
    {
      icon: Clock,
      title: 'Loan Approvals in 48 Hours',
      desc: 'Fast-track process with minimal paperwork.'
    },
    {
      icon: SlidersHorizontal,
      title: 'Compare 15+ Lenders Instantly',
      desc: 'Choose the best offer tailored for you.'
    },
    {
      icon: Headphones,
      title: '1-on-1 Advisor Support',
      desc: 'Expert help till loan disbursal & beyond.'
    },
    {
      icon: ShieldCheck,
      title: 'Non-Collateral Loans up to ₹1 Cr',
      desc: 'No security required. Starting at 8.9% p.a.'
    },
    {
      icon: Laptop,
      title: '100% Online Process',
      desc: 'From application to approval, all digital.'
    },
  ];
  // Fix: Only map lottie if it exists, else use an empty array
  const whyChooseLottieUrls: string[] = [];
  const whyChooseLottieData = useLottieAnimations(whyChooseLottieUrls);

  // In Home component, add post-admission services data
  const postAdmissionServices = [
    {
      icon: BookOpen,
      color: 'text-fuchsia-500',
      title: 'Abroad Education Loan',
      desc: 'Get the best loan offers for your study abroad journey from top lenders.',
      cta: 'Explore Loan Offers',
      link: '/student-loan',
      bg: 'bg-gradient-to-br from-pink-300 via-fuchsia-200 to-purple-200',
      span: 'row-span-2',
    },
    {
      icon: Lock,
      color: 'text-emerald-500',
      title: 'Block Account (Germany)',
      desc: 'Open your blocked account for German visa requirements quickly and easily.',
      cta: 'Explore Options',
      link: '/services/blocked-account',
      bg: 'bg-gradient-to-br from-pink-100 via-purple-100 to-white',
    },
    {
      icon: GraduationCap,
      color: 'text-blue-500',
      title: 'Scholarships',
      desc: 'Find and apply for scholarships tailored to your profile and destination.',
      cta: 'Apply Now',
      link: '/services/scholarships',
      bg: 'bg-gradient-to-br from-blue-200 via-cyan-100 to-blue-100',
      span: 'row-span-2',
    },
    {
      icon: Banknote,
      color: 'text-cyan-600',
      title: 'Bank Account',
      desc: 'Open your international student bank account before you travel.',
      cta: 'Explore Options',
      link: '/services/bank-account',
      bg: 'bg-gradient-to-br from-blue-50 via-gray-100 to-white',
    },
    {
      icon: BookOpen,
      color: 'text-emerald-500',
      title: 'Domestic Education Loan',
      desc: 'Get education loans for studies in India with flexible terms.',
      cta: 'Explore Universities',
      link: '/student-loan',
      bg: 'bg-gradient-to-br from-teal-200 via-emerald-100 to-cyan-200',
      span: 'row-span-2',
    },
    {
      icon: ArrowRight,
      color: 'text-yellow-600',
      title: 'Refinancing',
      desc: 'Refinance your existing education loan for better rates and terms.',
      cta: 'Find Place',
      link: '/services/refinancing',
      bg: 'bg-gradient-to-br from-yellow-200 via-orange-100 to-amber-200',
      span: 'row-span-2',
    },
    {
      icon: CreditCard,
      color: 'text-indigo-500',
      title: 'Credit Card',
      desc: 'Get premium student credit cards with exclusive benefits.',
      cta: 'Explore Options',
      link: '/services/credit-card',
      bg: 'bg-gradient-to-br from-indigo-100 via-purple-100 to-white',
    },
    {
      icon: Banknote,
      color: 'text-purple-500',
      title: 'Guaranteed Investment Certificate (Canada)',
      desc: 'Open a GIC account for your Canadian study visa process.',
      cta: 'Explore Options',
      link: '/services/gic',
      bg: 'bg-gradient-to-br from-blue-100 via-purple-100 to-white',
    },
    {
      icon: Banknote,
      color: 'text-green-500',
      title: 'Forex Card',
      desc: 'Get a student forex card with zero markup and best rates.',
      cta: 'Explore Options',
      link: '/services/forex-card',
      bg: 'bg-gradient-to-br from-green-100 via-lime-100 to-cyan-100',
    },
    {
      icon: Heart,
      color: 'text-pink-500',
      title: 'Health Insurance',
      desc: 'Comprehensive health insurance plans for students abroad.',
      cta: 'Explore Options',
      link: '/services/health-insurance',
      bg: 'bg-gradient-to-br from-pink-100 via-purple-100 to-white',
    },
    {
      icon: Globe,
      color: 'text-blue-500',
      title: 'Travel Insurance',
      desc: 'Protect your journey with travel insurance for students.',
      cta: 'Explore Options',
      link: '/services/travel-insurance',
      bg: 'bg-gradient-to-br from-blue-100 via-cyan-100 to-white',
    },
    {
      icon: Plane,
      color: 'text-cyan-500',
      title: 'Flight Tickets',
      desc: 'Book discounted student flight tickets to your destination.',
      cta: 'Book Now',
      link: '/services/flight-tickets',
      bg: 'bg-gradient-to-br from-cyan-100 via-blue-100 to-white',
    },
    {
      icon: Smartphone,
      color: 'text-indigo-500',
      title: 'Sim Card',
      desc: 'Get your international SIM card before you fly.',
      cta: 'Apply Now',
      link: '/services/sim-card',
      bg: 'bg-gradient-to-br from-indigo-100 via-blue-100 to-white',
    },
  ];

  return (
    <div className="pt-20 bg-white dark:bg-neutral-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-secondary-50 to-white dark:from-primary-900 dark:via-secondary-900 dark:to-neutral-900" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-accent-200 to-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="relative w-full px-4 md:px-8 lg:px-12 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-full text-sm font-medium text-primary-700 dark:text-primary-300"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  India's Most Trusted Education Loan Provider
                </motion.div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 bg-clip-text text-transparent animate-gradient bg-300%">
                    Make Your Global
                  </span>
                  <br />
                  <span className="text-neutral-900 dark:text-white">
                    Study Abroad Dream
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-accent-500 to-orange-500 bg-clip-text text-transparent">
                    Financially Possible
                  </span>
                </h1>
                
                <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl">
                  Get instant loan approvals, competitive interest rates, and comprehensive support for your international education journey.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/student-loan"
                  className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-2xl shadow-glass hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
                
                <Link
                  to="/tools"
                  className="group px-8 py-4 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border-2 border-primary-200 dark:border-primary-700 text-primary-600 dark:text-primary-400 font-semibold rounded-2xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                >
                  <span className="flex items-center justify-center">
                    <Calculator className="mr-2 h-5 w-5" />
                    Calculate EMI
                  </span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {heroFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-neutral-900 dark:text-white text-sm">{feature.title}</h3>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">{feature.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Content - Hero Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                {/* Main Card */}
                <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-xl rounded-3xl shadow-glass border border-white/20 p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg"
                    alt="Student studying abroad"
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-br from-accent-400 to-orange-500 p-4 rounded-2xl shadow-lg animate-bounce-slow">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-green-400 to-emerald-500 p-3 rounded-xl shadow-lg">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Floating Stats Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-10 -left-8 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-2xl shadow-glass p-4 border border-white/20"
                >
                  <div className="text-2xl font-bold text-primary-600">₹1000Cr+</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">Disbursed</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  className="absolute bottom-20 -right-8 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-2xl shadow-glass p-4 border border-white/20"
                >
                  <div className="text-2xl font-bold text-secondary-600">20K+</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">Students</div>
                </motion.div>
              </div>

              {/* Background Decorations */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full opacity-20 animate-pulse" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-accent-200 to-orange-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Study Loans for Your Dream Abroad Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-cyan-100 to-blue-200 dark:from-blue-900 dark:via-cyan-900 dark:to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Heading and Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-cyan-200 mb-4">
              Study Loans for Your Dream Abroad
            </h2>
            <p className="text-xl text-blue-700 dark:text-cyan-100 mb-6">
              Competitive interest rates, fast approval, and tailored repayment plans.
            </p>
            <div className="space-y-4">
              {["Non-Collateral Loans", "Without Co-Applicant Loans", "Dollar Loans"].map((item, idx) => (
                <div key={idx}>
                  <button
                    onClick={() => setOpenLoan(idx === openLoan ? null : idx)}
                    className={`w-full flex items-center justify-between px-6 py-4 rounded-xl font-semibold text-lg shadow-lg border-2 border-cyan-400 dark:border-cyan-600 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 dark:from-blue-700 dark:via-cyan-700 dark:to-blue-800 text-white hover:from-cyan-500 hover:to-blue-600 dark:hover:from-cyan-800 dark:hover:to-blue-900 transition-all duration-300 focus:outline-none relative overflow-hidden ${openLoan === idx ? 'ring-4 ring-cyan-300 dark:ring-cyan-700 scale-105' : ''}`}
                  >
                    <span className="flex items-center">
                      <DollarSign className="h-5 w-5 mr-2 text-yellow-300 drop-shadow" />
                      {item}
                    </span>
                    <ChevronRight className={`ml-2 h-5 w-5 transform transition-transform duration-300 ${openLoan === idx ? 'rotate-90' : ''}`} />
                  </button>
                  {openLoan === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900 dark:to-blue-900 rounded-xl px-6 py-4 mt-2 mb-2 text-blue-900 dark:text-cyan-100 shadow"
                    >
                      {item} details go here.
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
          {/* Right: Animated Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg"
                alt="Study Loans Abroad"
                className="w-full max-w-md h-80 object-cover rounded-3xl shadow-2xl border-4 border-cyan-300 dark:border-cyan-700 animate-float"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-400 to-orange-500 p-4 rounded-2xl shadow-lg animate-bounce-slow opacity-80">
                <Star className="h-8 w-8 text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Free End-to-End Admission Support Services Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-fuchsia-100 to-pink-200 dark:from-pink-900 dark:via-fuchsia-900 dark:to-pink-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Animated Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center order-2 md:order-1"
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg"
                alt="Admission Support"
                className="w-full max-w-md h-80 object-cover rounded-3xl shadow-2xl border-4 border-pink-300 dark:border-fuchsia-700 animate-float"
              />
              <div className="absolute -top-4 -left-4 bg-gradient-to-br from-fuchsia-400 to-pink-500 p-4 rounded-2xl shadow-lg animate-bounce-slow opacity-80">
                <Award className="h-8 w-8 text-white" />
              </div>
            </div>
          </motion.div>
          {/* Right: Heading, Subtitle, Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8 order-1 md:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pink-900 dark:text-fuchsia-200 mb-4">
              Free End-to-End Admission Support Services
            </h2>
            <p className="text-xl text-pink-700 dark:text-fuchsia-100 mb-6">
              Receive comprehensive support from application to acceptance
            </p>
            <div className="space-y-4">
              {["Admission Counseling", "Visa Assistance", "Insurance"].map((item, idx) => (
                <div key={idx}>
                  <button
                    onClick={() => setOpenSupport(idx === openSupport ? null : idx)}
                    className={`w-full flex items-center justify-between px-6 py-4 rounded-xl font-semibold text-lg shadow-lg border-2 border-fuchsia-400 dark:border-fuchsia-600 bg-gradient-to-r from-pink-400 via-fuchsia-400 to-pink-500 dark:from-pink-700 dark:via-fuchsia-700 dark:to-pink-800 text-white hover:from-fuchsia-500 hover:to-pink-600 dark:hover:from-fuchsia-800 dark:hover:to-pink-900 transition-all duration-300 focus:outline-none relative overflow-hidden ${openSupport === idx ? 'ring-4 ring-fuchsia-300 dark:ring-fuchsia-700 scale-105' : ''}`}
                  >
                    <span className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-yellow-300 drop-shadow" />
                      {item}
                    </span>
                    <ChevronRight className={`ml-2 h-5 w-5 transform transition-transform duration-300 ${openSupport === idx ? 'rotate-90' : ''}`} />
                  </button>
                  {openSupport === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-gradient-to-r from-fuchsia-100 to-pink-100 dark:from-fuchsia-900 dark:to-pink-900 rounded-xl px-6 py-4 mt-2 mb-2 text-pink-900 dark:text-fuchsia-100 shadow"
                    >
                      {item} details go here.
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold font-display bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700 bg-clip-text text-transparent mb-2 inline-block animate-gradient">
              <span className="inline-flex items-center gap-2">
                <Star className="w-8 h-8 text-accent-500 animate-bounce-slow" />
              Trusted by Thousands
              </span>
            </h2>
            <div className="flex justify-center">
              <span className="block w-24 h-1 rounded-full bg-gradient-to-r from-primary-500 via-secondary-400 to-primary-600 mb-4 animate-pulse-glow"></span>
            </div>
            <p className="text-xl md:text-2xl font-medium text-secondary-700 dark:text-secondary-200 mb-2 flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-primary-500" />
              Numbers that speak for our commitment to student success
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="bg-white dark:bg-neutral-800 rounded-3xl shadow-glass border border-white/20 p-8 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                    <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-700 dark:to-neutral-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`h-8 w-8 ${achievement.color}`} />
                    </div>
                    <div className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">{achievement.value}</div>
                    <div className="text-neutral-600 dark:text-neutral-400 font-medium">{achievement.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-16 bg-gradient-to-br from-white via-primary-50 to-secondary-50 dark:from-neutral-900 dark:via-primary-900 dark:to-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold font-display bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700 bg-clip-text text-transparent mb-2 inline-block animate-gradient">
              <span className="inline-flex items-center gap-2">
                <svg className="w-8 h-8 text-secondary-500 animate-bounce-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                Our Partners
              </span>
            </h2>
            <div className="flex justify-center">
              <span className="block w-24 h-1 rounded-full bg-gradient-to-r from-primary-500 via-secondary-400 to-primary-600 mb-4 animate-pulse-glow"></span>
            </div>
            <p className="text-lg md:text-xl font-medium text-secondary-700 dark:text-secondary-200 mb-2 flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12.93V17a1 1 0 11-2 0v-2.07A6.002 6.002 0 014 10a6 6 0 1112 0 6.002 6.002 0 01-5 5.93z" /></svg>
              Multiple lenders to choose from
            </p>
            <p className="text-base text-neutral-500 dark:text-neutral-300 mb-4">
              We are proudly associated with top financial institutions to bring you the best education loan offers.
            </p>
            <div className="flex justify-center gap-4 mb-4">
              {trustBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/80 dark:bg-neutral-800/80 px-3 py-1 rounded-full shadow border border-primary-100 dark:border-primary-700">
                  <img src={badge.logo} alt={badge.alt} className="w-6 h-6" />
                  <span className="text-xs font-medium text-primary-700 dark:text-primary-100">{badge.name}</span>
                </div>
              ))}
            </div>
            <button className="mt-2 inline-flex items-center bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-xl font-semibold shadow hover:shadow-lg transition-all duration-300 group">
              Compare Loan Options
            </button>
          </div>
          {/* Partner Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-center">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center bg-white dark:bg-neutral-800 rounded-2xl shadow border border-primary-100 dark:border-primary-700 p-4 h-24 transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-secondary-500 group"
                style={{ minHeight: '96px' }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name + ' logo'}
                  className="max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
                  style={{ maxWidth: '120px' }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Categories Section */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white mb-4">
              Loan Categories
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300">
              Choose the perfect loan type for your educational journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {loanCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white dark:bg-neutral-800 rounded-3xl shadow-glass border border-white/20 p-8 hover:shadow-lg transition-all duration-500 group-hover:-translate-y-2 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">{category.title}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-4">{category.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-sm text-neutral-500 dark:text-neutral-400">Interest Rate</span>
                      <div className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                        {category.interest}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button className="w-full bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 py-3 rounded-xl font-medium hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-secondary-500 group-hover:text-white">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-fuchsia-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 overflow-x-hidden">
        <HowItWorksFullPage howItWorksSteps={howItWorksSteps} lottieUrls={lottieAnimations} />
      </section>

      {/* Why Choose StudentsChoice.in Section - Horizontal Carousel */}
      <section className="py-20 bg-gradient-to-br from-primary-100 via-fuchsia-100 to-cyan-100 dark:from-primary-900 dark:via-fuchsia-900 dark:to-cyan-900 relative overflow-hidden backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold font-display bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700 bg-clip-text text-transparent mb-2 inline-block animate-gradient">
              Why Choose StudentsChoice.in?
            </h2>
            <div className="flex justify-center">
              <span className="block w-24 h-1 rounded-full bg-gradient-to-r from-primary-500 via-secondary-400 to-primary-600 mb-4 animate-pulse-glow"></span>
            </div>
            <p className="text-xl md:text-2xl font-medium text-secondary-700 dark:text-secondary-200 mb-2 flex items-center justify-center gap-2 italic">
              We bring the smartest education loan solutions under one roof.
            </p>
          </motion.div>
          <div className="relative">
            {/* Left Arrow */}
            <button
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-neutral-800/80 rounded-full shadow p-2 hover:bg-primary-100 dark:hover:bg-primary-900 transition"
              onClick={() => scrollToIdx(Math.max(0, focusIdx - 1))}
              aria-label="Scroll Left"
              style={{ left: '-2rem' }}
            >
              <ChevronRight className="rotate-180 w-6 h-6 text-primary-600" />
            </button>
            {/* Scrollable Cards */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-primary-200 scrollbar-track-transparent"
              style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
            >
              {whyChooseFeatures.map((feature: { icon: any; title: string; desc: string }, idx: number) => {
                const Icon = feature.icon;
                // Assign a color class based on feature
                const iconColors = [
                  'text-green-500',      // PiggyBank
                  'text-orange-500',     // Clock
                  'text-blue-500',       // SlidersHorizontal
                  'text-fuchsia-500',    // Headphones
                  'text-emerald-500',    // ShieldCheck
                  'text-cyan-500'        // Laptop
                ];
                  return (
                    <motion.div
                    key={idx}
                    className={`snap-center flex-shrink-0 bg-white/70 dark:bg-neutral-800/70 backdrop-blur-xl rounded-3xl shadow-glass border border-white/30 p-8 flex flex-col items-center text-center transition-all duration-300 group cursor-pointer ${focusIdx === idx ? 'scale-105 ring-4 ring-primary-200 dark:ring-primary-700 shadow-2xl z-10' : 'scale-95 opacity-80'} hover:scale-105 hover:shadow-2xl`}
                    style={{ width: '90vw', maxWidth: '340px', minHeight: '320px' }}
                    onClick={() => scrollToIdx(idx)}
                    whileHover={{ scale: 1.06, boxShadow: '0 8px 32px 0 rgba(80, 80, 200, 0.18), 0 0 0 4px #a5b4fc33' }}
                    animate={focusIdx === idx ? { y: [0, -8, 0] } : { y: 0 }}
                    transition={{ duration: 0.7, repeat: focusIdx === idx ? Infinity : 0, repeatType: 'reverse' }}
                  >
                  <motion.div
                      className={`w-20 h-20 mb-4 flex items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 via-fuchsia-100 to-indigo-100 dark:from-cyan-900 dark:via-fuchsia-900 dark:to-indigo-900 shadow group-hover:scale-110 transition-transform duration-300 ${iconColors[idx]}`}
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', delay: idx * 0.1 }}
                      whileHover={{ scale: 1.15 }}
                    >
                      <Icon className={`w-12 h-12 ${iconColors[idx]} group-hover:animate-bounce`} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-100 mb-2 font-display">{feature.title}</h3>
                    <p className="text-base text-neutral-600 dark:text-neutral-300 mb-6">{feature.desc}</p>
                  </motion.div>
                );
              })}
            </div>
            {/* Right Arrow */}
            <button
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-neutral-800/80 rounded-full shadow p-2 hover:bg-primary-100 dark:hover:bg-primary-900 transition"
              onClick={() => scrollToIdx(Math.min(whyChooseFeatures.length - 1, focusIdx + 1))}
              aria-label="Scroll Right"
              style={{ right: '-2rem' }}
            >
              <ChevronRight className="w-6 h-6 text-primary-600" />
            </button>
            {/* Swipe hint for mobile */}
            <div className="md:hidden text-center text-xs text-primary-400 mt-2 animate-pulse-glow">Swipe to explore features →</div>
            {/* Floating CTA */}
            <div className="flex justify-center mt-10">
              <Link
                to="/tools"
                className="inline-flex items-center bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 group text-lg shadow-glass backdrop-blur-md"
                style={{ position: 'relative', top: 0 }}
              >
                <CheckCircle className="mr-2 h-5 w-5" />
                Check My Eligibility
              </Link>
              <Link
                to="/contact"
                className="ml-4 inline-flex items-center bg-white dark:bg-neutral-800 border-2 border-primary-200 dark:border-primary-700 text-primary-600 dark:text-primary-400 px-8 py-4 rounded-2xl font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 text-lg shadow-glass backdrop-blur-md"
                style={{ position: 'relative', top: 0 }}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Talk to a Loan Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Study Destinations */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-secondary-50 to-white dark:from-primary-900 dark:via-secondary-900 dark:to-neutral-900 relative overflow-hidden">
        {/* Decorative SVG background */}
        <svg className="absolute left-0 top-0 w-96 h-96 opacity-10 -z-10" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="200" fill="url(#paint0_radial)" />
          <defs>
            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(200 200) scale(200)" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0044cc" />
              <stop offset="1" stop-color="#00bcd4" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold font-display bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700 bg-clip-text text-transparent mb-2 inline-block animate-gradient">
              <span className="inline-flex items-center gap-2">
                <Globe className="w-8 h-8 text-secondary-500 animate-bounce-slow" />
              Study Destinations
              </span>
            </h2>
            <div className="flex justify-center">
              <span className="block w-24 h-1 rounded-full bg-gradient-to-r from-primary-500 via-secondary-400 to-primary-600 mb-4 animate-pulse-glow"></span>
            </div>
            <p className="text-xl md:text-2xl font-medium text-secondary-700 dark:text-secondary-200 mb-2 flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-primary-500" />
              We provide education loans for popular study destinations worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {countries.map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`relative bg-white dark:bg-neutral-800 rounded-3xl shadow-xl border-2 border-primary-100 dark:border-primary-700 p-8 text-center cursor-pointer transition-all duration-300 group overflow-hidden ${country.popular ? 'ring-2 ring-primary-200 dark:ring-primary-700' : ''}`}
              >
                {/* Subtle background illustration */}
                <svg className="absolute -right-8 -bottom-8 w-32 h-32 opacity-20 group-hover:opacity-40 transition-opacity duration-300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="50" fill="url(#countryCardGradient)" />
                  <defs>
                    <radialGradient id="countryCardGradient" cx="0" cy="0" r="1" gradientTransform="translate(50 50) scale(50)" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#0044cc" />
                      <stop offset="1" stop-color="#00bcd4" stop-opacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
                <div className="flex flex-col items-center mb-4">
                  <img
                    src={`https://flagcdn.com/w80/${country.code}.png`}
                    alt={country.name + ' flag'}
                    className="w-16 h-12 object-cover rounded-lg shadow-md border-2 border-primary-100 dark:border-primary-700 mb-2 bg-white"
                    loading="lazy"
                  />
                  <h3 className="font-semibold text-primary-700 dark:text-primary-100 text-lg mb-1 group-hover:text-secondary-600 transition-colors duration-300">{country.name}</h3>
                </div>
                <p className="text-sm text-secondary-700 dark:text-secondary-200 mb-3">{country.students} students</p>
                {country.popular && (
                  <span className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow">
                    Popular
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/country-loans"
              className="inline-flex items-center bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 group"
            >
              Explore All Countries
              <Globe className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Post Admission Services Section */}
      <section className="relative py-20 overflow-visible bg-gradient-to-br from-cyan-50 via-fuchsia-50 to-indigo-100 dark:from-cyan-900 dark:via-fuchsia-900 dark:to-indigo-900">
        {/* Animated SVG or gradient background */}
        <svg className="absolute left-0 top-0 w-full h-full opacity-10 pointer-events-none z-0 animate-pulse-glow" width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="url(#pattern1)" fillOpacity="1" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          <defs>
            <linearGradient id="pattern1" x1="0" y1="0" x2="1440" y2="320" gradientUnits="userSpaceOnUse">
              <stop stopColor="#a5b4fc" />
              <stop offset="0.5" stopColor="#f0abfc" />
              <stop offset="1" stopColor="#67e8f9" />
            </linearGradient>
          </defs>
        </svg>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold font-display bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-indigo-600 bg-clip-text text-transparent mb-4 animate-gradient">
              Post Admission Services
            </h2>
            <p className="text-xl text-fuchsia-700 dark:text-fuchsia-200 max-w-2xl mx-auto">
              Everything you need after your admission, in a vibrant, modern style.
            </p>
          </motion.div>
          {/* Modern Masonry-like Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {postAdmissionServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0], boxShadow: '0 8px 32px 0 rgba(80, 80, 200, 0.10), 0 0 0 4px #f0abfc33' }}
                  transition={{ duration: 0.7, delay: idx * 0.08, type: 'spring' }}
                  viewport={{ once: true }}
                  className={`relative rounded-3xl shadow-xl border-0 p-6 md:p-8 flex flex-col justify-between ${service.bg} ${service.span || ''} group cursor-pointer min-h-[220px] md:min-h-[260px] hover:shadow-2xl transition-all duration-300`}
                  style={{ aspectRatio: idx % 3 === 0 ? '2/3' : idx % 4 === 0 ? '1/1' : '4/5' }}
                >
                  {/* Icon or Image */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`inline-flex items-center justify-center rounded-2xl shadow-lg bg-white/80 p-3 text-3xl ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-10 h-10 ${service.color}`} />
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <h3 className="text-2xl font-bold text-neutral-800 dark:text-white mb-2 font-display leading-tight group-hover:text-fuchsia-600 transition-colors duration-300">{service.title}</h3>
                    <p className="text-base text-neutral-600 dark:text-neutral-200 mb-4 flex-1">{service.desc}</p>
                  </div>
                  <Link
                    to={service.link}
                    className="mt-auto inline-flex items-center justify-between bg-white/80 dark:bg-neutral-900/80 border border-fuchsia-100 dark:border-fuchsia-800 text-fuchsia-700 dark:text-fuchsia-200 px-5 py-3 rounded-xl font-semibold shadow hover:bg-fuchsia-100 dark:hover:bg-fuchsia-900/30 hover:text-fuchsia-900 dark:hover:text-fuchsia-100 transition-all duration-300 group text-base"
                  >
                    {service.cta}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  {/* Shine effect */}
                  <span className="absolute left-0 top-0 w-full h-full rounded-3xl pointer-events-none overflow-hidden">
                    <span className="absolute left-[-60%] top-0 w-2/3 h-full bg-gradient-to-r from-white/60 via-white/10 to-transparent rotate-12 blur-lg opacity-0 group-hover:opacity-60 transition-all duration-700 group-hover:left-[120%]" />
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Tools Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 dark:from-emerald-900 dark:via-teal-900 dark:to-cyan-900 relative overflow-hidden backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold font-display bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-700 bg-clip-text text-transparent mb-2 inline-block animate-gradient">
              <span className="inline-flex items-center gap-2">
                <Zap className="w-8 h-8 text-teal-500 animate-pulse" />
                Tech Tools
              </span>
            </h2>
            <div className="flex justify-center">
              <span className="block w-24 h-1 rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-600 mb-4 animate-pulse-glow"></span>
                    </div>
            <p className="text-xl md:text-2xl font-medium text-teal-700 dark:text-teal-200 mb-2 flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-500" />
              Powerful tools to help you plan your education journey
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.06, boxShadow: '0 8px 32px 0 rgba(80, 80, 200, 0.18), 0 0 0 4px #a5b4fc33' }}
                  transition={{ duration: 0.7, delay: idx * 0.1, type: 'spring' }}
                  viewport={{ once: true }}
                  className="bg-white/70 dark:bg-neutral-800/70 backdrop-blur-xl rounded-3xl shadow-glass border border-white/30 p-8 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
                  style={{ minHeight: '280px' }}
                >
                  <motion.div
                    className={`w-20 h-20 mb-4 flex items-center justify-center rounded-2xl shadow group-hover:scale-110 transition-transform duration-300 ${tool.color}`}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', delay: idx * 0.1 }}
                    whileHover={{ scale: 1.15 }}
                  >
                    <Icon className={`w-12 h-12 text-white group-hover:animate-bounce`} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-teal-700 dark:text-teal-100 mb-2 font-display">{tool.title}</h3>
                  <p className="text-base text-neutral-600 dark:text-neutral-300 mb-6">{tool.description}</p>
                  <Link
                    to="/tools"
                    className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-xl font-semibold shadow hover:shadow-lg transition-all duration-300 group text-base"
                  >
                    Try Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-secondary-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Student Success Stories
            </h2>
            <p className="text-xl text-blue-100">
              Hear from students who achieved their dreams with our support
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-glass border border-white/20 p-8 md:p-12 text-center max-w-4xl mx-auto"
            >
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-accent-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-white font-medium mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white/20"
                />
                <div className="text-left">
                  <div className="flex items-center space-x-2">
                    <h4 className="text-lg font-semibold text-white">{testimonials[currentTestimonial].name}</h4>
                    <span className="text-2xl">{testimonials[currentTestimonial].country}</span>
                  </div>
                  <p className="text-blue-100">{testimonials[currentTestimonial].course}</p>
                  <p className="text-blue-200 text-sm">{testimonials[currentTestimonial].university}</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700 bg-clip-text text-transparent mb-6 animate-gradient drop-shadow-lg">
              Ready to Start Your Study Abroad Journey?
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-12">
              Get personalized loan assistance and make your educational dreams come true with our expert guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/tools"
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-2xl shadow-glass hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Check Your Eligibility
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              
              <Link
                to="/contact"
                className="group px-8 py-4 bg-white dark:bg-neutral-800 border-2 border-primary-200 dark:border-primary-700 text-primary-600 dark:text-primary-400 font-semibold rounded-2xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
              >
                <span className="flex items-center justify-center">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get Expert Consultation
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="relative group">
          {/* Glowing pulse ring */}
          <span className="absolute inset-0 rounded-full ring-4 ring-green-400/40 animate-pulse pointer-events-none" style={{ filter: 'blur(2px)' }}></span>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            title="Chat with us on WhatsApp"
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            {/* WhatsApp SVG icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-7 h-7 group-hover:scale-110 transition-transform" aria-hidden="true">
              <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.37L4 29l7.824-2.05A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.77 0-3.484-.463-4.98-1.34l-.355-.21-4.65 1.22 1.24-4.53-.23-.36C5.47 18.49 5 16.78 5 15c0-6.065 4.935-11 11-11s11 4.935 11 11-4.935 11-11 11zm6.16-7.13c-.34-.17-2.01-.99-2.32-1.1-.31-.12-.54-.17-.77.17-.23.34-.88 1.1-1.08 1.33-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.7-1.01-.9-1.7-2-1.9-2.34-.2-.34-.02-.52.15-.69.16-.16.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.86-1.05-2.54-.28-.68-.56-.59-.77-.6-.2-.01-.43-.01-.66-.01-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.85 0 1.68 1.23 3.31 1.4 3.54.17.23 2.42 3.7 5.87 5.04.82.32 1.46.51 1.96.65.82.26 1.57.22 2.16.13.66-.1 2.01-.82 2.3-1.61.28-.79.28-1.47.2-1.61-.08-.14-.31-.23-.65-.4z"/>
          </svg>
          </a>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-fuchsia-50 to-indigo-100 dark:from-blue-900 dark:via-fuchsia-900 dark:to-indigo-900 overflow-hidden">
        {/* Decorative SVG background */}
        <svg className="absolute left-0 top-0 w-96 h-96 opacity-10 -z-10" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="200" fill="url(#faqRadial)" />
          <defs>
            <radialGradient id="faqRadial" cx="0" cy="0" r="1" gradientTransform="translate(200 200) scale(200)" gradientUnits="userSpaceOnUse">
              <stop stop-color="#a5b4fc" />
              <stop offset="1" stop-color="#f472b6" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold font-display bg-gradient-to-r from-blue-500 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent mb-2 inline-block animate-gradient drop-shadow-lg">
              Frequently Asked Questions
            </h2>
            <div className="flex justify-center">
              <span className="block w-24 h-1 rounded-full bg-gradient-to-r from-blue-500 via-fuchsia-400 to-indigo-500 mb-4 animate-pulse-glow"></span>
            </div>
          </motion.div>

          {/* Floating Icon Row */}
          <div className="flex justify-center gap-6 mb-8 animate-float-slow">
            <HelpCircle className="w-8 h-8 text-fuchsia-500 drop-shadow-lg animate-bounce-slow" />
            <BookOpen className="w-8 h-8 text-blue-500 drop-shadow-lg animate-bounce-slow" style={{ animationDelay: '0.2s' }} />
            <CreditCard className="w-8 h-8 text-indigo-500 drop-shadow-lg animate-bounce-slow" style={{ animationDelay: '0.4s' }} />
            <Globe className="w-8 h-8 text-cyan-500 drop-shadow-lg animate-bounce-slow" style={{ animationDelay: '0.6s' }} />
            <Award className="w-8 h-8 text-emerald-500 drop-shadow-lg animate-bounce-slow" style={{ animationDelay: '0.8s' }} />
          </div>

          {/* FAQ Tabs and Accordions */}
          {(() => {
            const categories = ["General", "Loans", "Admissions"];
            const [activeTab, setActiveTab] = React.useState(0);
            const faqs = [
              [
                { q: "What is Students Choice?", a: "Students Choice is a one-stop platform dedicated to helping Indian students achieve their study abroad dreams by simplifying and supporting every step of the journey. We specialize in education loans, admissions guidance, and student insurance, offering a seamless, transparent, and free experience for students and parents." },
                { q: "What is the process of applying for an education loan with Students Choice?", a: "The process of applying for an education loan with Students Choice, is extremely simple and 100% free. Just fill in your basic details and preferences on our platform - and you'll receive customized loan offers from top lenders. Choose the best offer, upload the required documents, and that's it! Your application is complete. Now relax - your loan approval is usually processed within just 7 days. So, what are you waiting for? Start your application now at https://studentschoice.in" },
                { q: "I have my visa interview very soon. How quickly can I get an education loan?", a: "If you've completed your loan application on our platform and submitted all the required documents, we will log in your file with the best-suited lenders within 24 hours. Your profile evaluation is done within 48 hours working days. Once that's complete, you can receive a provisional sanction letter within 48 hours, provided everything is in order. This provisional approval is sufficient for your visa interview and can be used as financial proof. To fast-track your process, please complete your application and document submission without delay." },
              ],
              [
                { q: "What is Students Choice?", a: "Students Choice is a one-stop platform dedicated to helping Indian students achieve their study abroad dreams by simplifying and supporting every step of the journey. We specialize in education loans, admissions guidance, and student insurance, offering a seamless, transparent, and free experience for students and parents." },
                { q: "What expenses are covered in education loans for abroad studies?", a: "Education loans processed through Students Choice generally cover a wide range of expenses related to your international education journey, Example Tuition Fees, Living Expenses, Travel Costs, Books & Study Materials, Laptop or Equipment, Student Health/Travel Insurance, Visa Fees, depending on the lender and your university, the loan can include:" },
                { q: "Does Students Choice charge any fee for Study Abroad services?", a: "No, Students Choice does not charge any fee from students for study abroad loan assistance or admission guidance. Our entire process from loan consultation to university shortlisting and admission support is absolutely free of cost for students. We are directly partnered with top banks, NBFCs, and global institutions, which allows us to provide expert guidance without charging students anything. Our mission is to make your study abroad journey affordable, transparent, and stress-free." },
                { q: "Is the Students Choice application process secure?", a: "Yes, the entire application process with Students Choice is 100% secure and confidential. We use industry-standard encryption and follow strict data privacy policies to ensure your personal, academic, and financial information is protected at every step. Your documents are only shared with trusted and authorized lending partners, and we never disclose any data without your consent. With Students Choice, you can apply confidently, knowing your information is in safe hands." },
              ],
              [
                { q: "Do you help with both collateral and non-collateral education loans for studying abroad?", a: "Yes, we assist with both collateral (secured) and non-collateral (unsecured) education loans for students planning to study abroad. As an official partner of 10+ top banks and NBFCs, including Credila, Avanse, ICICI Bank, Union Bank, Auxilo, and more — we provide personalized loan options based on your academic profile, university, and financial background." },
                { q: "Do you help with university shortlisting and applications?", a: "Yes, we offer expert guidance to help you shortlist the most suitable universities based on your academic history, career goals, and budget. Our team also supports you through the application process, including SOP reviews, documentation, and deadlines." },
                { q: "Can you help with the visa application process after admission?", a: "Absolutely. We offer complete visa assistance, including document verification, financial planning, mock interviews, and submission guidance — ensuring a smooth and timely visa process for your chosen study destination." },
              ],
            ];
            const [openIdx, setOpenIdx] = React.useState<number | null>(null);
            return (
              <div>
                {/* Tabs */}
                <div className="flex justify-center gap-4 mb-10">
                  {categories.map((cat, idx) => (
                    <button
                      key={cat}
                      onClick={() => { setActiveTab(idx); setOpenIdx(null); }}
                      className={`px-7 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-md border-2 focus:outline-none backdrop-blur-md ${activeTab === idx
                        ? 'bg-gradient-to-r from-blue-500 via-fuchsia-500 to-indigo-500 text-white border-transparent scale-110 shadow-lg'
                        : 'bg-white/70 dark:bg-neutral-800/70 text-blue-700 dark:text-fuchsia-200 border-blue-200 dark:border-fuchsia-700 hover:bg-blue-50 dark:hover:bg-fuchsia-900/20'}`}
                      style={{ boxShadow: activeTab === idx ? '0 4px 24px 0 #a5b4fc44' : undefined }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                {/* Accordion */}
                <div className="space-y-7">
                  {faqs[activeTab].map((faq, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className={`rounded-3xl shadow-glass border border-blue-100 dark:border-fuchsia-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl p-0 overflow-hidden transition-all duration-300 group ${openIdx === idx ? 'ring-4 ring-blue-200 dark:ring-fuchsia-700 scale-105' : 'hover:scale-102'}`}
                      style={{ boxShadow: openIdx === idx ? '0 8px 32px 0 #a5b4fc33' : undefined }}
                    >
                      <button
                        className="w-full flex items-center justify-between px-8 py-7 text-left text-lg font-semibold text-blue-700 dark:text-fuchsia-200 focus:outline-none group"
                        onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                      >
                        <span className="flex items-center gap-3">
                          <HelpCircle className={`w-7 h-7 ${openIdx === idx ? 'text-fuchsia-500 drop-shadow-glow' : 'text-blue-400'} transition-colors animate-pulse-glow`} />
                          {faq.q}
                        </span>
                        <ChevronRight className={`w-7 h-7 transform transition-transform duration-300 ${openIdx === idx ? 'rotate-90 text-fuchsia-500' : 'text-blue-400'}`} />
                      </button>
                      <div
                        className={`px-8 pb-7 text-base text-blue-900 dark:text-fuchsia-100 transition-all duration-300 ${openIdx === idx ? 'block' : 'hidden'}`}
                      >
                        {faq.a}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Referral Marketing Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-100 dark:from-emerald-900 dark:via-green-900 dark:to-teal-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-400/20 to-emerald-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg mb-6">
              <Share2 className="w-10 h-10 text-white animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display bg-gradient-to-r from-emerald-600 via-green-500 to-teal-700 bg-clip-text text-transparent mb-4 animate-gradient">
              Introduce Friends to Better Loans & Get ₹2500 Each!
            </h2>
            <div className="flex justify-center">
              <span className="block w-24 h-1 rounded-full bg-gradient-to-r from-emerald-500 via-green-400 to-teal-600 mb-6 animate-pulse-glow"></span>
            </div>
            <p className="text-xl md:text-2xl font-medium text-green-700 dark:text-green-200 mb-8 max-w-3xl mx-auto">
              Help your friends get the best education loans while earning rewards for yourself. 
              <span className="font-bold text-emerald-600 dark:text-emerald-400"> Win-Win for everyone!</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* How it works */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-glass border border-emerald-100 dark:border-emerald-800"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-200 mb-3">Share Your Link</h3>
                <p className="text-green-600 dark:text-green-300">
                  Get your unique referral link and share it with friends who need education loans
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-glass border border-emerald-100 dark:border-emerald-800"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-200 mb-3">Friends Apply</h3>
                <p className="text-green-600 dark:text-green-300">
                  Your friends apply through your link and get approved for their education loans
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-glass border border-emerald-100 dark:border-emerald-800"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-200 mb-3">Earn Rewards</h3>
                <p className="text-green-600 dark:text-green-300">
                  Get ₹2500 for each successful referral! Money credited directly to your account
                </p>
              </div>
            </motion.div>
          </div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-teal-500/10 rounded-3xl p-8 mb-12 border border-emerald-200 dark:border-emerald-700"
          >
            <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-200 text-center mb-6">
              Why Refer Friends?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-200 mb-1">Instant Rewards</h4>
                  <p className="text-green-600 dark:text-green-300 text-sm">₹2500 credited within 24 hours of loan approval</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-200 mb-1">No Limits</h4>
                  <p className="text-green-600 dark:text-green-300 text-sm">Refer as many friends as you want - unlimited earnings!</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-200 mb-1">Track Progress</h4>
                  <p className="text-green-600 dark:text-green-300 text-sm">Monitor your referrals and earnings in real-time</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-200 mb-1">Help Friends</h4>
                  <p className="text-green-600 dark:text-green-300 text-sm">Your friends get better loan rates and faster approval</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center">
                  <Share2 className="mr-2 h-5 w-5" />
                  Get Referral Link
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button className="group px-8 py-4 bg-white dark:bg-neutral-800 border-2 border-emerald-200 dark:border-emerald-700 text-emerald-600 dark:text-emerald-400 font-semibold rounded-2xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300">
                <span className="flex items-center justify-center">
                  <DollarSign className="mr-2 h-5 w-5" />
                  View My Earnings
                </span>
              </button>
            </div>
            
            <p className="text-sm text-green-600 dark:text-green-300 mt-4">
              *Terms and conditions apply. Rewards paid after successful loan disbursement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Floating Spin Icon Button */}
      <button
        className="fixed bottom-24 right-6 z-50 bg-yellow-400 text-sky-700 rounded-full shadow-lg flex items-center justify-center w-14 h-14 text-3xl font-bold hover:bg-yellow-300 transition focus:outline-none focus:ring-2 focus:ring-yellow-400 animate-bounce"
        onClick={() => setSpinModalOpen(true)}
        aria-label="Open Spin the Wheel"
        title="Spin the Wheel"
      >
        🎡
      </button>
      {/* SpinWheel Modal */}
      {spinModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl p-4 w-full max-w-full max-h-[90vh] overflow-auto relative animate-fadeIn flex flex-col md:flex-row items-stretch">
            <button
              className="absolute top-2 right-2 text-neutral-400 hover:text-neutral-700 text-xl font-bold focus:outline-none"
              onClick={() => setSpinModalOpen(false)}
              aria-label="Close Spin the Wheel"
            >
              &times;
            </button>
            {/* Left: SpinWheel */}
            <div className="flex-1 min-w-0 min-h-0 max-w-md flex items-center justify-center p-2 border-b md:border-b-0 md:border-r border-sky-100 dark:border-neutral-800">
              <SpinWheel />
            </div>
            {/* Right: Referral & CTAs (no duplicates, medium size) */}
            <div className="flex-1 min-w-0 min-h-0 max-w-xs flex flex-col gap-4 justify-center items-center p-3 bg-sky-50 dark:bg-neutral-800">
              <div className="w-full bg-sky-100 dark:bg-neutral-900 rounded-xl p-3 flex flex-col items-center">
                <div className="text-base font-bold text-sky-700 mb-1">📣 Refer a friend and earn an extra spin after their loan is approved!</div>
                <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-lg px-4 py-2 mt-2 transition text-sm">Refer Now</button>
              </div>
              <div className="w-full bg-yellow-100 dark:bg-yellow-900 rounded-xl p-3 flex flex-col items-center text-center">
                <div className="text-xl">🎓</div>
                <div className="font-bold text-sky-800 mb-1 text-base">Unlock Scholarships</div>
                <div className="text-xs text-sky-700 mb-2">Merit-based, need-based, country-wise</div>
                <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-lg px-4 py-2 transition text-sm">Explore All Scholarships</button>
              </div>
              <div className="w-full bg-sky-100 dark:bg-sky-900 rounded-xl p-3 flex flex-col items-center text-center">
                <div className="text-xl">💰</div>
                <div className="font-bold text-sky-800 mb-1 text-base">Best Education Loan Offers</div>
                <div className="text-xs text-sky-700 mb-2">Upto ₹1.5 Cr | Approval in 48 hrs | Save ₹8–10L</div>
                <button className="bg-yellow-400 hover:bg-yellow-300 text-sky-900 font-bold rounded-lg px-4 py-2 transition text-sm">Check Eligibility</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function HowItWorksFullPage({ howItWorksSteps, lottieUrls }: { howItWorksSteps: HowItWorksStep[], lottieUrls: string[] }) {
  const lottieData = useLottieAnimations(lottieUrls);
  return (
    <div className="w-full h-screen flex flex-col snap-y snap-mandatory overflow-y-scroll scrollbar-hide" style={{ scrollSnapType: 'y mandatory', height: '100vh' }}>
      {/* Section Heading and Intro */}
      <div className="absolute top-0 left-0 w-full z-20 flex flex-col items-center pt-10 pointer-events-none">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-blue-900 dark:text-fuchsia-200 mb-2 pointer-events-auto">
          How It Works
        </h2>
        <p className="text-lg md:text-xl text-blue-700 dark:text-fuchsia-100 font-medium max-w-2xl text-center pointer-events-auto">
          Follow these simple steps to secure your education loan and make your study abroad dreams a reality.
        </p>
      </div>
      {howItWorksSteps.map((step: HowItWorksStep, index: number) => {
        // Unique gradient for each step
        const gradients = [
          'from-blue-100 via-cyan-100 to-blue-200',
          'from-fuchsia-100 via-pink-100 to-fuchsia-200',
          'from-orange-100 via-yellow-100 to-orange-200',
          'from-green-100 via-teal-100 to-green-200',
        ];
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, amount: 0.7 }}
            className={`snap-center flex flex-col items-center justify-center min-h-screen w-full px-4 bg-gradient-to-br ${gradients[index % gradients.length]} transition-all duration-700`}
            style={{ scrollSnapAlign: 'center' }}
          >
            <span className="text-lg font-bold text-blue-500 dark:text-fuchsia-200 mb-2 tracking-widest">
              {step.step}
            </span>
            <div className="w-56 h-56 md:w-72 md:h-72 flex items-center justify-center mb-6">
              {lottieData[index] ? (
                <Player
                  autoplay
                  loop
                  animationData={lottieData[index]}
                  style={{ width: '100%', height: '100%' }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-blue-400 dark:text-fuchsia-400 animate-pulse">Loading...</span>
                </div>
              )}
            </div>
            <h3 className="text-3xl md:text-4xl font-semibold text-blue-900 dark:text-fuchsia-100 mb-4 text-center">
              {step.title}
            </h3>
            <p className="text-lg text-blue-700 dark:text-fuchsia-200 text-center max-w-xl opacity-80 mb-8">
              {step.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}

export default Home;