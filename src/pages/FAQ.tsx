import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, HelpCircle, BookOpen, CreditCard, Globe } from 'lucide-react';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openFAQ, setOpenFAQ] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'general', name: 'General', icon: HelpCircle, count: 8 },
    { id: 'loans', name: 'Education Loans', icon: CreditCard, count: 12 },
    { id: 'admissions', name: 'Admissions', icon: BookOpen, count: 10 },
    { id: 'visa', name: 'Visa & Immigration', icon: Globe, count: 9 }
  ];

  const faqs = {
    general: [
      {
        id: 1,
        question: 'What is Student\'s Choice and how does it help students?',
        answer: 'Student\'s Choice is India\'s leading education loan platform that helps students secure financing for their international education. We work with 20+ lending partners to provide the best loan options, along with comprehensive support services including counselling, admission assistance, and visa processing.'
      },
      {
        id: 2,
        question: 'Is Student\'s Choice a lending institution?',
        answer: 'No, Student\'s Choice is not a lending institution. We are a financial services platform that connects students with various banks and NBFCs. We help you compare different loan options and choose the best one based on your requirements.'
      },
      {
        id: 3,
        question: 'What services does Student\'s Choice provide?',
        answer: 'We provide end-to-end support including education loan assistance, university counselling, admission support, visa processing, forex cards, blocked accounts, and international bank account opening services.'
      },
      {
        id: 4,
        question: 'How much does Student\'s Choice charge for its services?',
        answer: 'Our basic consultation and loan assistance services are free. We may charge nominal fees for premium services like visa processing, document preparation, and specialized counselling sessions. All fees are transparent and communicated upfront.'
      },
      {
        id: 5,
        question: 'How can I contact Student\'s Choice for support?',
        answer: 'You can reach us through multiple channels: call us at +91 98765 43210, email us at info@studentschoice.com, visit our office in Subhash Nagar, Delhi, or use the contact form on our website.'
      },
      {
        id: 6,
        question: 'What makes Student\'s Choice different from other education loan providers?',
        answer: 'We offer a comprehensive ecosystem with 20+ lending partners, personalized service, quick processing (approval in 48 hours*), and end-to-end support from loan application to visa processing. Our track record of helping 20,000+ students sets us apart.'
      },
      {
        id: 7,
        question: 'Can I apply for multiple loans through Student\'s Choice?',
        answer: 'Yes, we can help you apply to multiple lenders simultaneously to increase your chances of approval and help you compare different offers to choose the best one.'
      },
      {
        id: 8,
        question: 'Is my personal information safe with Student\'s Choice?',
        answer: 'Absolutely. We follow strict data protection protocols and use encrypted systems to ensure your personal and financial information is completely secure. We never share your data without your explicit consent.'
      }
    ],
    loans: [
      {
        id: 1,
        question: 'What is the maximum loan amount I can get for studying abroad?',
        answer: 'The maximum loan amount varies by lender and loan type. For secured loans, you can get up to ₹2 crores, while unsecured loans typically go up to ₹75 lakhs. The exact amount depends on your profile, course, university, and co-applicant\'s financial strength.'
      },
      {
        id: 2,
        question: 'What is the difference between secured and unsecured education loans?',
        answer: 'Secured loans require collateral (property, FDs, etc.) and offer lower interest rates (8.5%-11.5%) with higher loan amounts. Unsecured loans don\'t require collateral but have higher interest rates (10.5%-15%) and lower maximum amounts.'
      },
      {
        id: 3,
        question: 'What documents are required for education loan application?',
        answer: 'Key documents include: admission letter, academic transcripts, passport, visa documents, income proof of co-applicant, bank statements, property documents (for secured loans), and identity/address proofs.'
      },
      {
        id: 4,
        question: 'How long does the loan approval process take?',
        answer: 'Our partner lenders typically process applications within 15-30 days. However, with our streamlined process and pre-verification, many applications get approved within 48 hours* (*subject to complete documentation).'
      },
      {
        id: 5,
        question: 'Can I get a loan without a co-applicant?',
        answer: 'Most education loans require a co-applicant, typically a parent or guardian with stable income. However, some lenders offer loans to students with exceptional academic records or those with job offers, though these are rare.'
      },
      {
        id: 6,
        question: 'What is the typical interest rate for education loans?',
        answer: 'Interest rates vary from 8.5% to 16% depending on the loan type, lender, and your profile. Secured loans have lower rates (8.5%-11.5%) while unsecured loans range from 10.5%-15%.'
      },
      {
        id: 7,
        question: 'When do I need to start repaying the loan?',
        answer: 'Most education loans have a moratorium period (course duration + 6 months to 1 year). You only pay simple interest during studies and start EMI repayment after the moratorium period ends.'
      },
      {
        id: 8,
        question: 'Can I prepay my education loan?',
        answer: 'Yes, most lenders allow prepayment of education loans. Some may charge a prepayment penalty (typically 2-5% of the outstanding amount), while others offer penalty-free prepayment after a certain period.'
      },
      {
        id: 9,
        question: 'What expenses are covered under education loans?',
        answer: 'Education loans typically cover tuition fees, accommodation, travel expenses, books, equipment, insurance, and other study-related expenses. Living expenses are usually covered up to a certain limit.'
      },
      {
        id: 10,
        question: 'Can I get tax benefits on education loan interest?',
        answer: 'Yes, under Section 80E of the Income Tax Act, you can claim deduction for the entire interest paid on education loans. There\'s no upper limit, and the benefit is available for up to 8 years.'
      },
      {
        id: 11,
        question: 'What happens if my loan application is rejected?',
        answer: 'If one lender rejects your application, we help you apply to other lenders in our network. We also provide guidance on improving your profile and reapplying. Rejection by one lender doesn\'t mean rejection by all.'
      },
      {
        id: 12,
        question: 'Can I transfer my education loan to another bank?',
        answer: 'Yes, education loan balance transfer is possible if you find better interest rates or terms elsewhere. However, consider processing fees, legal charges, and other costs before making the decision.'
      }
    ],
    admissions: [
      {
        id: 1,
        question: 'How does Student\'s Choice help with university admissions?',
        answer: 'We provide comprehensive admission support including university shortlisting, application preparation, SOP and LOR guidance, interview preparation, and application tracking. Our counselors have expertise in admissions to top global universities.'
      },
      {
        id: 2,
        question: 'What is the typical timeline for university applications?',
        answer: 'Application timelines vary by country and university. Generally, applications open 8-12 months before the intake. For fall intake (Sep), applications typically open in October-November of the previous year.'
      },
      {
        id: 3,
        question: 'Do you help with scholarship applications?',
        answer: 'Yes, we provide guidance on various scholarships including university-specific scholarships, government scholarships, and private foundation scholarships. We help identify suitable opportunities and assist with applications.'
      },
      {
        id: 4,
        question: 'What standardized tests are required for international admissions?',
        answer: 'Common tests include IELTS/TOEFL for English proficiency, GRE/GMAT for graduate programs, and SAT/ACT for undergraduate programs. Requirements vary by university and program.'
      },
      {
        id: 5,
        question: 'How important is the Statement of Purpose (SOP)?',
        answer: 'SOP is crucial for admissions as it showcases your motivation, goals, and fit for the program. A well-written SOP can significantly improve your chances of admission and scholarships.'
      },
      {
        id: 6,
        question: 'Can you help with conditional offer letters?',
        answer: 'Yes, we help students understand conditional offers and work towards meeting the conditions, whether they\'re related to academic scores, English proficiency, or other requirements.'
      },
      {
        id: 7,
        question: 'What is the difference between conditional and unconditional offers?',
        answer: 'Unconditional offers mean you\'ve met all requirements and have a guaranteed seat. Conditional offers require you to meet certain conditions (like achieving specific grades or English scores) before final admission.'
      },
      {
        id: 8,
        question: 'How many universities should I apply to?',
        answer: 'We typically recommend applying to 6-8 universities with a mix of reach, target, and safety schools. This strategy maximizes your chances while managing application costs and effort.'
      },
      {
        id: 9,
        question: 'Do you provide interview preparation for university admissions?',
        answer: 'Yes, we offer comprehensive interview preparation including mock interviews, common question practice, and tips for presenting yourself effectively to admission committees.'
      },
      {
        id: 10,
        question: 'Can you help with course selection and university shortlisting?',
        answer: 'Absolutely. Our counselors help you choose courses aligned with your career goals and shortlist universities based on your academic profile, budget, location preferences, and career aspirations.'
      }
    ],
    visa: [
      {
        id: 1,
        question: 'What visa services does Student\'s Choice provide?',
        answer: 'We provide complete visa assistance including document preparation, application filing, interview preparation, visa tracking, and support throughout the process. We handle student visas for all major study destinations.'
      },
      {
        id: 2,
        question: 'How long does the student visa process take?',
        answer: 'Visa processing times vary by country: USA (F1) - 3-5 weeks, UK - 3-6 weeks, Canada - 4-12 weeks, Australia - 4-6 weeks, Germany - 6-12 weeks. We recommend applying well in advance.'
      },
      {
        id: 3,
        question: 'What documents are required for student visa applications?',
        answer: 'Common documents include passport, admission letter, financial proof, academic transcripts, English proficiency scores, visa application form, photographs, and country-specific requirements like medical exams or police clearance.'
      },
      {
        id: 4,
        question: 'How much financial proof is required for student visas?',
        answer: 'Financial requirements vary by country and course duration. Generally, you need to show funds covering tuition fees plus living expenses for at least one year. Specific amounts: USA - $60,000-80,000, UK - £15,000-25,000, Canada - CAD 20,000-30,000.'
      },
      {
        id: 5,
        question: 'Do you help with visa interview preparation?',
        answer: 'Yes, we provide comprehensive visa interview preparation including mock interviews, common question practice, document organization, and tips for presenting yourself confidently to visa officers.'
      },
      {
        id: 6,
        question: 'What happens if my visa application is rejected?',
        answer: 'We analyze the rejection reasons and help you address the issues before reapplying. We provide guidance on strengthening your application and, if needed, help you apply to alternative destinations.'
      },
      {
        id: 7,
        question: 'Can family members accompany me on a student visa?',
        answer: 'Dependent visa policies vary by country. Some countries allow spouses and children to accompany students, while others have restrictions. We provide guidance on dependent visa applications where applicable.'
      },
      {
        id: 8,
        question: 'Do you help with post-study work visa applications?',
        answer: 'Yes, we provide information and assistance with post-study work visa applications, helping you understand eligibility criteria and application processes for extending your stay after graduation.'
      },
      {
        id: 9,
        question: 'What is a blocked account and do I need one?',
        answer: 'A blocked account is required for German student visas, showing you have sufficient funds (currently €11,208 for 2024). We help you open blocked accounts with partner banks and ensure compliance with visa requirements.'
      }
    ]
  };

  const filteredFAQs = faqs[activeCategory].filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find answers to common questions about education loans, admissions, visa processes, and our services.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <nav className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveCategory(category.id);
                        setOpenFAQ(null);
                      }}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors duration-200 ${
                        activeCategory === category.id
                          ? 'bg-primary text-white'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className="h-5 w-5" />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        activeCategory === category.id
                          ? 'bg-white/20 text-white'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {categories.find(cat => cat.id === activeCategory)?.name} Questions
                </h2>
                <p className="text-gray-600">
                  {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''} found
                </p>
              </div>

              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {openFAQ === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 border-t border-gray-100">
                            <p className="text-gray-700 leading-relaxed pt-4">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {filteredFAQs.length === 0 && (
                <div className="text-center py-12">
                  <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No questions found</h3>
                  <p className="text-gray-600">
                    Try adjusting your search terms or browse different categories.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our expert team is here to help you with personalized guidance and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Contact Support
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-200">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;