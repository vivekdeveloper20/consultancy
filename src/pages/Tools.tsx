import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  TrendingUp, 
  Search, 
  CheckCircle, 
  DollarSign,
  Percent,
  Calendar,
  PiggyBank,
  BookOpen,
  FileText,
  Globe,
  Shield,
  CreditCard,
  Clock,
  Cloud,
  Wallet,
  Target,
  Users,
  MapPin,
  Plane,
  Briefcase,
  Zap,
  Star,
  Award,
  BarChart3,
  Calculator as CalcIcon,
  Scale,
  Compass,
  Thermometer,
  Coins,
  Smartphone,
  Laptop,
  GraduationCap,
  Building,
  Heart,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Home,
  MessageCircle
} from 'lucide-react';

const Tools = () => {
  const [activeCategory, setActiveCategory] = useState('academic');

  const toolCategories = [
    {
      id: 'academic',
      name: 'Academic Tools',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      tools: [
        {
          name: 'GPA Calculator',
          description: 'Calculate your GPA and convert between different grading systems',
          icon: Calculator,
          color: 'bg-blue-500',
          path: '/tools/gpa-calculator'
        },
        {
          name: 'SOP Generator',
          description: 'Create compelling Statement of Purpose with AI assistance',
          icon: FileText,
          color: 'bg-purple-500',
          path: '/tools/sop-generator'
        }
      ]
    },
    {
      id: 'financial',
      name: 'Financial Planning Tools',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      tools: [
        {
          name: 'Cost of Studying Abroad',
          description: 'Calculate total cost including tuition, living, and other expenses',
      icon: Calculator,
          color: 'bg-green-500',
          path: '/tools/cost-calculator'
        },
        {
          name: 'Living Calculator',
          description: 'Estimate monthly living expenses in different cities',
          icon: Home,
          color: 'bg-emerald-500',
          path: '/tools/living-calculator'
        },
        {
          name: 'ROI Calculator',
          description: 'Calculate return on investment for your education',
          icon: TrendingUp,
          color: 'bg-teal-500',
          path: '/tools/roi-calculator'
        },
        {
          name: 'Estimate Future Earnings',
          description: 'Project your potential salary after graduation',
          icon: Target,
          color: 'bg-cyan-500',
          path: '/tools/earnings-estimator'
        }
      ]
    },
    {
      id: 'travel',
      name: 'Travel & Insurance Tools',
      icon: Plane,
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      tools: [
        {
          name: 'Student Packing List',
          description: 'Comprehensive checklist for studying abroad',
          icon: Briefcase,
          color: 'bg-orange-500',
          path: '/tools/packing-list'
        },
        {
          name: 'Health Insurance Compare',
          description: 'Compare different health insurance plans',
          icon: Shield,
          color: 'bg-red-500',
          path: '/tools/insurance-compare'
        }
      ]
    },
    {
      id: 'loan',
      name: 'Loan Tools',
      icon: CreditCard,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      tools: [
        {
          name: 'Compare Loan Offers',
          description: 'Compare different loan offers side by side',
          icon: BarChart3,
          color: 'bg-purple-500',
          path: '/tools/loan-compare'
        },
        {
          name: 'Interest Calculator',
          description: 'Calculate interest rates and total interest payable',
          icon: Percent,
          color: 'bg-pink-500',
          path: '/tools/interest-calculator'
        },
        {
          name: 'Loan Repayment Calculator',
          description: 'Plan your loan repayment schedule',
          icon: Calendar,
          color: 'bg-violet-500',
          path: '/tools/repayment-calculator'
        },
        {
          name: 'Education Loan Eligibility Checker',
          description: 'Check if you qualify for education loans',
          icon: CheckCircle,
          color: 'bg-indigo-500',
          path: '/tools/eligibility-checker'
        },
        {
          name: 'Education Loan EMI Calculator',
          description: 'Calculate monthly EMI for education loans',
          icon: Calculator,
          color: 'bg-blue-500',
          path: '/tools/emi-calculator'
        }
      ]
    },
    {
      id: 'utilities',
      name: 'Utilities Tools',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50',
      tools: [
        {
          name: 'Time Zone Converter',
          description: 'Convert time between different time zones',
          icon: Clock,
          color: 'bg-yellow-500',
          path: '/tools/timezone-converter'
        },
        {
          name: 'Weather Abroad',
          description: 'Check weather conditions in study destinations',
          icon: Cloud,
          color: 'bg-sky-500',
          path: '/tools/weather-abroad'
        },
        {
          name: 'Budget Calculator',
          description: 'Create and manage your study abroad budget',
          icon: Wallet,
          color: 'bg-green-500',
          path: '/tools/budget-calculator'
        },
        {
          name: 'Currency Converter',
          description: 'Convert between different currencies',
          icon: Coins,
          color: 'bg-amber-500',
          path: '/tools/currency-converter'
        }
      ]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-100 to-blue-300 relative overflow-hidden">
        {/* Floating SVG Blob for modern look */}
        <svg className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[700px] opacity-20 -z-10 animate-float-slow" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="350" cy="350" rx="350" ry="320" fill="url(#toolsHeroBlob)" />
          <defs>
            <radialGradient id="toolsHeroBlob" cx="0" cy="0" r="1" gradientTransform="translate(350 350) scale(350)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#a5b4fc" />
              <stop offset="1" stopColor="#f472b6" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 bg-clip-text text-transparent mb-6 animate-gradient">
              Study Abroad Tools
            </h1>
            <p className="text-xl md:text-2xl text-blue-900 max-w-4xl mx-auto mb-8">
              Everything you need to plan, finance, and prepare for your international education journey
            </p>
            <div className="flex justify-center">
              <span className="block w-24 h-1 rounded-full bg-white/30 mb-6"></span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-12 bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {toolCategories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`p-4 rounded-2xl border-2 transition-all duration-300 text-center group ${
                    activeCategory === category.id
                      ? `border-transparent bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                      : 'border-gray-200 dark:border-neutral-700 hover:border-gray-300 dark:hover:border-neutral-600 bg-white dark:bg-neutral-800'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${
                    activeCategory === category.id 
                      ? 'bg-white/20' 
                      : `bg-gradient-to-br ${category.color}`
                  }`}>
                    <Icon className={`h-6 w-6 ${activeCategory === category.id ? 'text-white' : 'text-white'}`} />
                  </div>
                  <h3 className={`font-semibold text-sm ${
                    activeCategory === category.id 
                      ? 'text-white' 
                      : 'text-gray-900 dark:text-white'
                  }`}>
                    {category.name}
                  </h3>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {toolCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: activeCategory === category.id ? 1 : 0,
                y: activeCategory === category.id ? 0 : 30
              }}
              transition={{ duration: 0.5 }}
              className={`${activeCategory === category.id ? 'block' : 'hidden'}`}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {category.name}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Essential tools to help you with your {category.name.toLowerCase()}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.tools.map((tool, index) => {
                  const Icon = tool.icon;
                  return (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-neutral-700 group-hover:border-gray-200 dark:group-hover:border-neutral-600">
                        <div className={`${tool.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                          {tool.name}
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                          {tool.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            Free Tool
                          </span>
                          <button className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold group-hover:gap-3 transition-all duration-300">
                            Try Now
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#e0e7ff] via-[#f0fdfa] to-[#fdf2fa] relative overflow-hidden flex items-center justify-center">
        {/* Floating SVG Blob for trending look */}
        <svg className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[700px] opacity-20 -z-10 animate-float-slow" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="350" cy="350" rx="350" ry="320" fill="url(#toolsCtaBlob)" />
          <defs>
            <radialGradient id="toolsCtaBlob" cx="0" cy="0" r="1" gradientTransform="translate(350 350) scale(350)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#a5b4fc" />
              <stop offset="1" stopColor="#f472b6" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
        <div className="relative z-10 w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-100 px-10 py-16 max-w-2xl mx-auto flex flex-col items-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 via-fuchsia-400 to-pink-400 shadow mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent mb-6 animate-gradient">
              Need Personalized Guidance?
            </h2>
            <p className="text-xl text-blue-900 max-w-3xl mx-auto mb-8">
              Our education experts can help you choose the right tools and create a personalized plan for your study abroad journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-400 via-fuchsia-400 to-pink-400 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <span className="flex items-center justify-center gap-2">
                  <Users className="w-5 h-5" />
                  Get Expert Consultation
                </span>
              </button>
              <button className="px-8 py-4 bg-white/70 backdrop-blur text-blue-700 font-semibold rounded-2xl shadow-lg hover:bg-blue-50 transition-all duration-300 border border-blue-100">
                <span className="flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Chat with Us
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Tools;