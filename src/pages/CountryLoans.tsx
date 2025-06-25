import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  DollarSign, 
  Clock, 
  GraduationCap, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  MapPin,
  Users,
  Award
} from 'lucide-react';

const CountryLoans = () => {
  const [selectedCountry, setSelectedCountry] = useState('usa');

  const countries = [
    {
      id: 'usa',
      name: 'United States',
      flag: '🇺🇸',
      popular: true,
      loanRange: '₹20L - ₹2Cr',
      avgCost: '$50,000 - $80,000',
      duration: '1-4 years',
      topUniversities: ['Harvard', 'MIT', 'Stanford', 'Yale'],
      requirements: [
        'Valid passport and F1 visa',
        'Admission letter from accredited university',
        'TOEFL/IELTS scores',
        'Financial documents',
        'Co-applicant with stable income'
      ],
      benefits: [
        'Covers tuition and living expenses',
        'No collateral for loans up to ₹75L',
        'Flexible repayment options',
        'Pre-visa processing available'
      ],
      interestRate: '9.5% - 15%',
      processingTime: '15-30 days'
    },
    {
      id: 'uk',
      name: 'United Kingdom',
      flag: '🇬🇧',
      popular: true,
      loanRange: '₹15L - ₹1.5Cr',
      avgCost: '£25,000 - £45,000',
      duration: '1-3 years',
      topUniversities: ['Oxford', 'Cambridge', 'Imperial College', 'UCL'],
      requirements: [
        'Valid passport and student visa',
        'Unconditional offer letter',
        'IELTS/TOEFL scores',
        'Academic transcripts',
        'Financial proof'
      ],
      benefits: [
        'Shorter course duration',
        'Post-study work opportunities',
        'Quality education system',
        'Cultural diversity'
      ],
      interestRate: '9% - 14%',
      processingTime: '10-25 days'
    },
    {
      id: 'germany',
      name: 'Germany',
      flag: '🇩🇪',
      popular: true,
      loanRange: '₹8L - ₹50L',
      avgCost: '€15,000 - €25,000',
      duration: '1-3 years',
      topUniversities: ['TU Munich', 'Heidelberg', 'Humboldt', 'RWTH Aachen'],
      requirements: [
        'Valid passport and student visa',
        'University admission letter',
        'German language proficiency (some courses)',
        'Blocked account proof',
        'Academic certificates'
      ],
      benefits: [
        'Low tuition fees',
        'Strong job market',
        'Research opportunities',
        'EU work opportunities'
      ],
      interestRate: '8.5% - 13%',
      processingTime: '20-35 days'
    },
    {
      id: 'canada',
      name: 'Canada',
      flag: '🇨🇦',
      popular: true,
      loanRange: '₹12L - ₹1Cr',
      avgCost: 'CAD 30,000 - CAD 50,000',
      duration: '1-4 years',
      topUniversities: ['University of Toronto', 'UBC', 'McGill', 'Waterloo'],
      requirements: [
        'Valid passport and study permit',
        'Letter of acceptance',
        'Language proficiency test',
        'Financial support proof',
        'Medical examination'
      ],
      benefits: [
        'Immigration-friendly policies',
        'High quality of life',
        'Multicultural environment',
        'Post-graduation work permit'
      ],
      interestRate: '9% - 14.5%',
      processingTime: '15-30 days'
    },
    {
      id: 'australia',
      name: 'Australia',
      flag: '🇦🇺',
      popular: false,
      loanRange: '₹15L - ₹1.2Cr',
      avgCost: 'AUD 35,000 - AUD 55,000',
      duration: '1-4 years',
      topUniversities: ['Melbourne', 'Sydney', 'ANU', 'UNSW'],
      requirements: [
        'Valid passport and student visa',
        'Confirmation of Enrolment (CoE)',
        'English proficiency test',
        'Financial capacity evidence',
        'Health insurance'
      ],
      benefits: [
        'Work while studying',
        'Post-study work rights',
        'High-quality education',
        'Beautiful lifestyle'
      ],
      interestRate: '9.5% - 15%',
      processingTime: '20-35 days'
    },
    {
      id: 'france',
      name: 'France',
      flag: '🇫🇷',
      popular: false,
      loanRange: '₹8L - ₹60L',
      avgCost: '€10,000 - €20,000',
      duration: '1-3 years',
      topUniversities: ['Sorbonne', 'École Normale', 'Sciences Po', 'HEC Paris'],
      requirements: [
        'Valid passport and student visa',
        'University acceptance letter',
        'French language proficiency (some courses)',
        'Financial guarantee',
        'Academic records'
      ],
      benefits: [
        'Affordable tuition fees',
        'Rich cultural experience',
        'EU work opportunities',
        'Research excellence'
      ],
      interestRate: '8.5% - 13.5%',
      processingTime: '25-40 days'
    }
  ];

  const selectedCountryData = countries.find(country => country.id === selectedCountry);

  const loanProviders = [
    { name: 'Avanse', rate: '9.5%', amount: '₹1.5Cr', processing: '15 days' },
    { name: 'Credila', rate: '10%', amount: '₹1Cr', processing: '20 days' },
    { name: 'InCred', rate: '11%', amount: '₹75L', processing: '10 days' },
    { name: 'HDFC Bank', rate: '9.8%', amount: '₹2Cr', processing: '25 days' },
    { name: 'ICICI Bank', rate: '10.2%', amount: '₹1.5Cr', processing: '20 days' },
    { name: 'Axis Bank', rate: '10.5%', amount: '₹1Cr', processing: '18 days' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-20 overflow-hidden">
        {/* Decorative SVG background */}
        <svg className="absolute left-0 top-0 w-96 h-96 opacity-10 -z-10" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="200" fill="url(#countryHeroRadial)" />
          <defs>
            <radialGradient id="countryHeroRadial" cx="0" cy="0" r="1" gradientTransform="translate(200 200) scale(200)" gradientUnits="userSpaceOnUse">
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
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700 bg-clip-text text-transparent mb-6 animate-gradient">
              Country-wise Education Loans
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Explore education loan options for your preferred study destination with detailed information about costs, requirements, and benefits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Country Selection */}
      <section className="py-12 bg-gradient-to-br from-blue-50 via-fuchsia-50 to-cyan-100 dark:from-blue-900 dark:via-fuchsia-900 dark:to-cyan-900 border-b relative overflow-hidden">
        {/* Decorative SVG background */}
        <svg className="absolute left-0 top-0 w-96 h-96 opacity-10 -z-10" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="200" fill="url(#countryRadial)" />
          <defs>
            <radialGradient id="countryRadial" cx="0" cy="0" r="1" gradientTransform="translate(200 200) scale(200)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0044cc" />
              <stop offset="1" stopColor="#00bcd4" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {countries.map((country, index) => (
              <motion.button
                key={country.id}
                onClick={() => setSelectedCountry(country.id)}
                className={`p-4 rounded-2xl border-2 transition-all duration-300 text-center shadow-lg relative overflow-hidden group bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md ${
                  selectedCountry === country.id
                    ? 'border-gradient-to-br from-blue-500 via-fuchsia-500 to-cyan-500 border-4 ring-4 ring-blue-200 dark:ring-fuchsia-700 scale-105 shadow-2xl'
                    : 'border-gray-200 hover:border-primary/30 hover:shadow-xl'
                }`}
                whileHover={{ y: -4, scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-2 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">{country.flag}</div>
                <h3 className="font-bold text-blue-900 dark:text-fuchsia-100 text-base group-hover:text-cyan-600 transition-colors duration-300">{country.name}</h3>
                {country.popular && (
                  <span className="inline-block mt-1 bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow">
                    Popular
                  </span>
                )}
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-blue-200 via-fuchsia-200 to-cyan-200 rounded-full opacity-30 group-hover:opacity-60 transition-all duration-300 z-0" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Country Details */}
      {selectedCountryData && (
        <section className="py-20 bg-gradient-to-br from-blue-50 via-fuchsia-50 to-cyan-100 dark:from-blue-900 dark:via-fuchsia-900 dark:to-cyan-900 relative overflow-hidden">
          {/* Decorative SVG background */}
          <svg className="absolute right-0 top-0 w-96 h-96 opacity-10 -z-10" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="200" r="200" fill="url(#countryDetailRadial)" />
            <defs>
              <radialGradient id="countryDetailRadial" cx="0" cy="0" r="1" gradientTransform="translate(200 200) scale(200)" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f472b6" />
                <stop offset="1" stopColor="#a5b4fc" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
            <motion.div
              key={selectedCountry}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Country Header */}
              <div className="text-center mb-16">
                <div className="text-7xl mb-4 drop-shadow-lg animate-bounce-slow">{selectedCountryData.flag}</div>
                <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-fuchsia-500 to-cyan-600 bg-clip-text text-transparent mb-4 animate-gradient">
                  Study in {selectedCountryData.name}
                </h2>
                <p className="text-xl text-blue-700 dark:text-fuchsia-100">
                  Complete guide to education loans for {selectedCountryData.name}
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
                {[
                  { icon: DollarSign, label: 'Loan Range', value: selectedCountryData.loanRange, color: 'from-blue-400 to-cyan-400' },
                  { icon: TrendingUp, label: 'Avg. Cost', value: selectedCountryData.avgCost, color: 'from-fuchsia-400 to-pink-400' },
                  { icon: Clock, label: 'Duration', value: selectedCountryData.duration, color: 'from-orange-400 to-yellow-400' },
                  { icon: GraduationCap, label: 'Interest Rate', value: selectedCountryData.interestRate, color: 'from-green-400 to-emerald-400' }
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`bg-gradient-to-br ${stat.color} p-6 rounded-xl text-center shadow-lg`}
                    >
                      <div className="bg-white/80 dark:bg-neutral-900/80 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-sm text-blue-900 dark:text-fuchsia-100 mb-1 font-semibold">{stat.label}</p>
                      <p className="text-lg font-bold text-blue-900 dark:text-fuchsia-100">{stat.value}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Requirements */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white/90 dark:bg-neutral-900/90 border-0 rounded-2xl p-8 shadow-xl backdrop-blur-xl"
                >
                  <h3 className="text-2xl font-bold text-blue-900 dark:text-fuchsia-100 mb-6 flex items-center">
                    <CheckCircle className="mr-3 h-6 w-6 text-green-500" />
                    Loan Requirements
                  </h3>
                  <ul className="space-y-3">
                    {selectedCountryData.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-blue-900 dark:text-fuchsia-100">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Benefits */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-gradient-to-br from-fuchsia-100 via-pink-100 to-blue-100 dark:from-fuchsia-900 dark:via-pink-900 dark:to-blue-900 rounded-2xl p-8 shadow-xl"
                >
                  <h3 className="text-2xl font-bold text-fuchsia-700 dark:text-fuchsia-100 mb-6 flex items-center">
                    <Award className="mr-3 h-6 w-6 text-fuchsia-500" />
                    Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    {selectedCountryData.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-fuchsia-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-fuchsia-900 dark:text-fuchsia-100">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Top Universities */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-16 bg-gradient-to-br from-blue-100 via-fuchsia-100 to-cyan-100 dark:from-blue-900 dark:via-fuchsia-900 dark:to-cyan-900 rounded-2xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-bold text-blue-900 dark:text-fuchsia-100 mb-6 text-center flex items-center justify-center">
                  <Users className="mr-3 h-6 w-6 text-blue-500" />
                  Top Universities
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedCountryData.topUniversities.map((university, index) => (
                    <div
                      key={index}
                      className="bg-white/90 dark:bg-neutral-900/90 p-4 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow duration-200 border border-blue-100 dark:border-fuchsia-900"
                    >
                      <p className="font-semibold text-blue-900 dark:text-fuchsia-100">{university}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Loan Providers */}
      <section className="py-20 bg-gradient-to-br from-white via-primary/5 to-secondary/10 dark:from-neutral-900 dark:via-primary-900/10 dark:to-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700 bg-clip-text text-transparent mb-4 animate-gradient">
              Compare Loan Providers
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-200">
              Choose from our network of trusted lending partners
            </p>
          </motion.div>

          <div className="rounded-3xl shadow-xl border border-primary-100 dark:border-primary-900 bg-white/90 dark:bg-neutral-900/90 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Lender</th>
                    <th className="px-6 py-4 text-left font-semibold">Interest Rate</th>
                    <th className="px-6 py-4 text-left font-semibold">Max Amount</th>
                    <th className="px-6 py-4 text-left font-semibold">Processing Time</th>
                    <th className="px-6 py-4 text-left font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary-50 dark:divide-primary-900/30">
                  {loanProviders.map((provider, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={index % 2 === 0 ? "bg-white/70 dark:bg-neutral-800/70" : "bg-primary/5 dark:bg-primary-900/10"}
                    >
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{provider.name}</td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-200">{provider.rate}</td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-200">{provider.amount}</td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-200">{provider.processing}</td>
                      <td className="px-6 py-4">
                        <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-5 py-2 rounded-xl font-semibold shadow hover:shadow-lg transition-all duration-200 flex items-center group">
                          Apply
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl shadow-xl bg-gradient-to-br from-primary/5 via-secondary/10 to-white dark:from-primary-900/10 dark:via-secondary-900/10 dark:to-neutral-900 p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700 bg-clip-text text-transparent mb-6 animate-gradient">
              Ready to Start Your Application?
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-200 mb-10 max-w-2xl mx-auto">
              Get personalized loan recommendations based on your chosen destination and financial profile.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-2xl font-semibold shadow hover:shadow-lg transition-all duration-300 flex items-center justify-center text-lg group">
                <ArrowRight className="mr-2 h-5 w-5" />
                Get Loan Recommendations
              </button>
              <button className="border-2 border-primary-500 text-primary-700 dark:text-primary-200 px-8 py-4 rounded-2xl font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 flex items-center justify-center text-lg">
                <Globe className="mr-2 h-5 w-5" />
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CountryLoans;