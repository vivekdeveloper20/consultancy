import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  GraduationCap, 
  Shield, 
  MapPin, 
  CreditCard, 
  Building, 
  Wallet,
  CheckCircle,
  ArrowRight,
  Phone
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: MessageCircle,
      title: 'Educational Counselling',
      description: 'Expert guidance on course selection, university choices, and career planning',
      features: [
        'Personalized counselling sessions',
        'University shortlisting',
        'Course selection guidance',
        'Career pathway planning'
      ],
      color: 'bg-blue-500'
    },
    {
      icon: GraduationCap,
      title: 'Admission Support',
      description: 'Complete assistance with university applications and admission processes',
      features: [
        'Application preparation',
        'SOP and LOR guidance',
        'Interview preparation',
        'Application tracking'
      ],
      color: 'bg-green-500'
    },
    {
      icon: Shield,
      title: 'Student Insurance',
      description: 'Comprehensive insurance coverage for international students',
      features: [
        'Health insurance coverage',
        'Travel insurance',
        'Study interruption cover',
        '24/7 emergency assistance'
      ],
      color: 'bg-purple-500'
    },
    {
      icon: MapPin,
      title: 'Visa Processing',
      description: 'Complete visa application support and documentation assistance',
      features: [
        'Visa application preparation',
        'Document verification',
        'Interview preparation',
        'Visa tracking services'
      ],
      color: 'bg-red-500'
    },
    {
      icon: CreditCard,
      title: 'Forex Card',
      description: 'Multi-currency forex cards for international students',
      features: [
        'Multi-currency support',
        'Competitive exchange rates',
        'Online account management',
        'Emergency card replacement'
      ],
      color: 'bg-yellow-500'
    },
    {
      icon: Wallet,
      title: 'Blocked Account',
      description: 'German blocked account services for visa requirements',
      features: [
        'Quick account opening',
        'Visa compliant amounts',
        'Easy fund transfer',
        'Account management support'
      ],
      color: 'bg-indigo-500'
    },
    {
      icon: Building,
      title: 'International Bank Account',
      description: 'Help opening bank accounts in your destination country',
      features: [
        'Pre-arrival account opening',
        'Document preparation',
        'Bank selection guidance',
        'Account activation support'
      ],
      color: 'bg-teal-500'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Understanding your requirements and goals'
    },
    {
      step: '02',
      title: 'Service Planning',
      description: 'Creating a customized service plan'
    },
    {
      step: '03',
      title: 'Documentation',
      description: 'Preparing and verifying all documents'
    },
    {
      step: '04',
      title: 'Processing',
      description: 'Handling applications and follow-ups'
    },
    {
      step: '05',
      title: 'Completion',
      description: 'Successful service delivery and support'
    }
  ];

  const [selectedService, setSelectedService] = React.useState('all');

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
              Comprehensive Study Abroad Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              From counselling to visa processing, we provide end-to-end support for your international education journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dropdown Filter */}
      <section className="py-4 bg-white sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 w-full">
            <label htmlFor="service-dropdown" className="font-medium text-gray-700 mb-1 sm:mb-0 sm:mr-2 text-base sm:text-sm">Select Service:</label>
            <select
              id="service-dropdown"
              className="w-full sm:w-64 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary text-gray-900 bg-white shadow-sm transition-all duration-200 text-base sm:text-sm"
              value={selectedService}
              onChange={e => setSelectedService(e.target.value)}
              style={{ minHeight: '48px' }}
            >
              <option value="all">All Services</option>
              {services.map((service, idx) => (
                <option key={service.title} value={service.title}>{service.title}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="h-2 md:h-4" />
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Complete support services for your study abroad journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full bg-gray-50 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to ensure successful service delivery
            </p>
          </motion.div>

          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden md:block">
              <div className="flex justify-between items-center mb-8">
                <div className="flex-1 h-1 bg-primary"></div>
              </div>
              <div className="grid grid-cols-5 gap-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4 -mt-8">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden space-y-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Services?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Expert Guidance',
                    description: 'Team of experienced counselors and visa experts'
                  },
                  {
                    title: 'End-to-End Support',
                    description: 'Complete assistance from counselling to departure'
                  },
                  {
                    title: 'Proven Track Record',
                    description: '95% success rate in visa approvals and admissions'
                  },
                  {
                    title: 'Personalized Service',
                    description: 'Tailored solutions based on individual requirements'
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg"
                alt="Student services"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get personalized service consultation and make your study abroad dreams come true.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-200">
                View All Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;