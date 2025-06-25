import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, DollarSign, Clock, Shield, Users, TrendingUp, ArrowRight, FileText } from 'lucide-react';

const StudentLoan = () => {
  const loanTypes = [
    {
      title: 'Secured Education Loan',
      description: 'Lower interest rates with collateral',
      features: ['Up to ₹1.5 Crores', 'Interest from 8.5%', 'Longer repayment terms', 'Tax benefits under Section 80E'],
      icon: Shield
    },
    {
      title: 'Unsecured Education Loan',
      description: 'No collateral required',
      features: ['Up to ₹75 Lakhs', 'Quick processing', 'Co-applicant required', 'Flexible documentation'],
      icon: Users
    },
    {
      title: 'International Study Loan',
      description: 'Specially designed for abroad studies',
      features: ['Up to ₹2 Crores', 'Covers tuition & living costs', 'Multi-currency support', 'Pre-visa processing'],
      icon: TrendingUp
    }
  ];

  const eligibilityCriteria = [
    'Indian citizen with valid passport',
    'Age between 18-35 years',
    'Admission confirmed in recognized institution',
    'Co-applicant with steady income',
    'Minimum academic score requirements',
    'Course duration should be 6 months to 10 years'
  ];

  const documentsList = [
    'Academic transcripts and certificates',
    'Admission letter from institution',
    'Income proof of co-applicant',
    'Bank statements (6 months)',
    'Identity and address proof',
    'Passport and visa documents',
    'Fee structure from institution',
    'Collateral documents (if applicable)'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-28 bg-gradient-to-br from-primary-100 via-secondary-100 to-blue-50 dark:from-primary-900 dark:via-secondary-900 dark:to-blue-900 overflow-hidden flex items-center justify-center">
        {/* Animated SVG Blob */}
        <svg className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[700px] opacity-20 -z-10 animate-float-slow" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="350" cy="350" rx="350" ry="320" fill="url(#studentLoanBlob)" />
          <defs>
            <radialGradient id="studentLoanBlob" cx="0" cy="0" r="1" gradientTransform="translate(350 350) scale(350)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#a5b4fc" />
              <stop offset="1" stopColor="#f472b6" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 w-full flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700 bg-clip-text text-transparent mb-6 animate-gradient flex items-center gap-3 drop-shadow-lg">
            <Shield className="w-10 h-10 text-primary-500" />
            Student Loan Solutions
          </h1>
          <p className="text-2xl text-blue-800/90 dark:text-blue-200 max-w-2xl mx-auto mb-8 drop-shadow">
            Comprehensive education financing options to make your study abroad dreams <span className="font-bold text-primary-600">affordable</span> and <span className="font-bold text-secondary-600">accessible</span>.
          </p>
        </motion.div>
      </section>

      {/* Loan Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700 bg-clip-text text-transparent mb-4 animate-gradient flex items-center gap-3">
              <DollarSign className="w-8 h-8 text-primary-500" />
              Types of Education Loans
            </h2>
            <p className="text-xl text-gray-600">
              Choose the right loan type that fits your financial needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loanTypes.map((loan, index) => {
              const Icon = loan.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl border-2 border-transparent rounded-2xl p-8 shadow-xl hover:border-primary-400 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                  style={{ boxShadow: '0 8px 32px 0 #a5b4fc22' }}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br from-primary-200 via-secondary-200 to-blue-200 dark:from-primary-800 dark:via-secondary-800 dark:to-blue-800 shadow group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-primary-600 group-hover:animate-bounce" />
                  </div>
                  <span className="absolute top-4 right-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow">{loan.title.split(' ')[0]}</span>
                  <h3 className="text-xl font-extrabold bg-gradient-to-r from-blue-600 via-fuchsia-500 to-cyan-600 bg-clip-text text-transparent mb-3 animate-gradient flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-blue-400" />
                    {loan.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{loan.description}</p>
                  <ul className="space-y-2">
                    {loan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700 bg-clip-text text-transparent mb-4 animate-gradient flex items-center gap-3">
              <Clock className="w-8 h-8 text-primary-500" />
              Loan Application Process
            </h2>
            <p className="text-xl text-gray-600">
              Simple and streamlined process to get your education loan approved
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Initial Consultation', desc: 'Discuss your requirements with our experts' },
              { step: '02', title: 'Document Collection', desc: 'Gather all necessary documents' },
              { step: '03', title: 'Application Submission', desc: 'Submit application to preferred lenders' },
              { step: '04', title: 'Approval & Disbursement', desc: 'Get approval and loan disbursement' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="bg-gradient-to-br from-primary-500 via-secondary-500 to-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg animate-float-slow border-4 border-white/30">
                  {item.step}
                </div>
                <h3 className="text-lg font-extrabold bg-gradient-to-r from-blue-600 via-fuchsia-500 to-cyan-600 bg-clip-text text-transparent mb-2 animate-gradient flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-20 bg-gradient-to-br from-white via-primary/10 to-secondary/10 dark:from-neutral-900 dark:via-primary-900/10 dark:to-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Eligibility Criteria */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-extrabold bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700 bg-clip-text text-transparent mb-6 animate-gradient flex items-center gap-2">
                <Users className="w-6 h-6 text-primary-500" />
                Eligibility Criteria
              </h3>
              <div className="space-y-4">
                {eligibilityCriteria.map((criteria, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{criteria}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Required Documents */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-fuchsia-500 to-cyan-600 bg-clip-text text-transparent mb-6 animate-gradient flex items-center gap-2">
                <FileText className="w-6 h-6 text-blue-500" />
                Required Documents
              </h3>
              <div className="space-y-4">
                {documentsList.map((document, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{document}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interest Rates */}
      <section className="py-20 bg-gradient-to-br from-primary/20 via-secondary/10 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700 bg-clip-text text-transparent mb-4 animate-gradient">Competitive Interest Rates</h2>
            <p className="text-xl text-gray-600">
              Get the best rates from our network of lending partners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { type: 'Secured Loans', rate: '8.5% - 11.5%', desc: 'With collateral security' },
              { type: 'Unsecured Loans', rate: '10.5% - 15%', desc: 'Without collateral' },
              { type: 'NBFCs', rate: '12% - 16%', desc: 'Non-banking financial companies' }
            ].map((rate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl text-center border-2 border-transparent hover:border-primary-400 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                style={{ boxShadow: '0 8px 32px 0 #a5b4fc22' }}
              >
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4 animate-pulse" />
                <h3 className="text-xl font-extrabold bg-gradient-to-r from-blue-600 via-fuchsia-500 to-cyan-600 bg-clip-text text-transparent mb-2 animate-gradient">{rate.type}</h3>
                <div className="text-3xl font-bold text-primary mb-2">{rate.rate}</div>
                <p className="text-gray-600">{rate.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-primary-50 to-secondary-100 overflow-hidden flex items-center justify-center">
        {/* Floating SVG */}
        <svg className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[600px] opacity-10 -z-10 animate-float-slow" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="300" cy="300" rx="300" ry="270" fill="url(#ctaBlob)" />
          <defs>
            <radialGradient id="ctaBlob" cx="0" cy="0" r="1" gradientTransform="translate(300 300) scale(300)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fff" />
              <stop offset="1" stopColor="#a5b4fc" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 rounded-3xl shadow-2xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-primary-100 dark:border-primary-900 p-12 text-center max-w-2xl mx-auto animate-float"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700 bg-clip-text text-transparent mb-6 animate-gradient flex items-center gap-3">
            <ArrowRight className="w-8 h-8 text-primary-500" />
            Ready to Apply for Your Education Loan?
          </h2>
          <p className="text-xl text-blue-900 dark:text-primary-200 mb-8 max-w-3xl mx-auto">
            Get personalized loan options and expert guidance for your study abroad journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center text-lg group animate-float-slow">
              <ArrowRight className="mr-2 h-5 w-5" />
              Apply Now
            </button>
            <button className="border-2 border-primary-500 text-primary-700 dark:text-primary-200 px-8 py-4 rounded-2xl font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 flex items-center justify-center text-lg animate-float-slow">
              <CheckCircle className="mr-2 h-5 w-5" />
              Get Free Consultation
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default StudentLoan;