import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle,
  MessageSquare,
  User,
  Building
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  serviceType: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    serviceType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        serviceType: 'general'
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: [
        'Student\'s Choice Education Loans',
        'Subhash Nagar, New Delhi',
        'Delhi - 110027, India'
      ],
      color: 'bg-red-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        '+91 98765 43210',
        '+91 98765 43211',
        'Mon-Sat: 9:00 AM - 6:00 PM'
      ],
      color: 'bg-green-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'info@studentschoice.com',
        'support@studentschoice.com',
        'We reply within 24 hours'
      ],
      color: 'bg-blue-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 10:00 AM - 4:00 PM',
        'Sunday: Closed'
      ],
      color: 'bg-purple-500'
    }
  ];

  const serviceTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'loan', label: 'Education Loan' },
    { value: 'admission', label: 'Admission Support' },
    { value: 'visa', label: 'Visa Processing' },
    { value: 'counselling', label: 'Educational Counselling' },
    { value: 'other', label: 'Other Services' }
  ];

  const officeFeatures = [
    'Free consultation sessions',
    'Document verification support',
    'Loan application assistance',
    'Visa interview preparation',
    'Educational counselling',
    'Career guidance sessions'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-accent-500/10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230044cc\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
              Get in{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto mb-8">
              Have questions about education loans or need personalized guidance? Our expert team is here to help you achieve your study abroad dreams.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-white/20">
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">24/7 Support</span>
              </div>
              <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-white/20">
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Free Consultation</span>
              </div>
              <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-white/20">
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Expert Guidance</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-6">
              Contact Information
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300">
              Multiple ways to reach us for your convenience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">{info.title}</h3>
                      <div className="space-y-2">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-neutral-600 dark:text-neutral-300">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50 dark:from-neutral-900 dark:to-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white dark:bg-neutral-800 rounded-3xl shadow-2xl p-8 border border-neutral-200 dark:border-neutral-700 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-50" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    Send us a Message
                  </h3>
                  
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <CheckCircle className="h-10 w-10 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">Message Sent Successfully!</h4>
                      <p className="text-neutral-600 dark:text-neutral-300">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3">
                            Full Name *
                          </label>
                          <div className="relative group">
                            <div className="absolute left-3 top-3 w-6 h-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center opacity-80 group-focus-within:opacity-100 transition-opacity duration-300">
                              <User className="h-4 w-4 text-white" />
                            </div>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full pl-12 pr-4 py-4 border-2 border-neutral-200 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 transition-all duration-300"
                              placeholder="Enter your full name"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3">
                            Email Address *
                          </label>
                          <div className="relative group">
                            <div className="absolute left-3 top-3 w-6 h-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center opacity-80 group-focus-within:opacity-100 transition-opacity duration-300">
                              <Mail className="h-4 w-4 text-white" />
                            </div>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full pl-12 pr-4 py-4 border-2 border-neutral-200 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 transition-all duration-300"
                              placeholder="Enter your email"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3">
                            Phone Number *
                          </label>
                          <div className="relative group">
                            <div className="absolute left-3 top-3 w-6 h-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center opacity-80 group-focus-within:opacity-100 transition-opacity duration-300">
                              <Phone className="h-4 w-4 text-white" />
                            </div>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                              className="w-full pl-12 pr-4 py-4 border-2 border-neutral-200 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 transition-all duration-300"
                              placeholder="Enter your phone number"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3">
                            Service Type
                          </label>
                          <div className="relative group">
                            <div className="absolute left-3 top-3 w-6 h-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center opacity-80 group-focus-within:opacity-100 transition-opacity duration-300">
                              <Building className="h-4 w-4 text-white" />
                            </div>
                            <select
                              name="serviceType"
                              value={formData.serviceType}
                              onChange={handleInputChange}
                              className="w-full pl-12 pr-10 py-4 border-2 border-neutral-200 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white appearance-none transition-all duration-300"
                            >
                              {serviceTypes.map((type) => (
                                <option key={type.value} value={type.value}>
                                  {type.label}
                                </option>
                              ))}
                            </select>
                            <div className="absolute right-3 top-4 pointer-events-none">
                              <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3">
                          Subject *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 border-2 border-neutral-200 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 transition-all duration-300"
                          placeholder="Enter message subject"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="w-full px-4 py-4 border-2 border-neutral-200 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 resize-none transition-all duration-300"
                          placeholder="Tell us how we can help you..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                            Sending Message...
                          </div>
                        ) : (
                          <>
                            <Send className="mr-3 h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Map and Office Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="bg-white dark:bg-neutral-800 rounded-3xl shadow-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700">
                <div className="h-80 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-700 dark:to-neutral-800 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.674!2d77.1025!3d28.6692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03a4b8c0e0e1%3A0x1234567890abcdef!2sSubhash%20Nagar%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Student's Choice Office Location"
                    className="rounded-t-3xl"
                  ></iframe>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-neutral-900 dark:text-white">Our Office Location</h4>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    Visit us at our Subhash Nagar office for in-person consultations and document assistance.
                  </p>
                </div>
              </div>

              {/* Office Services */}
              <div className="bg-white dark:bg-neutral-800 rounded-3xl shadow-2xl p-8 border border-neutral-200 dark:border-neutral-700">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-neutral-900 dark:text-white">What You Can Do at Our Office</h4>
                </div>
                <ul className="space-y-4">
                  {officeFeatures.map((feature, index) => (
                    <motion.li 
                      key={index} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-8 p-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl border border-primary-200 dark:border-primary-800">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                      <span className="text-white text-sm font-bold">💡</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary-700 dark:text-primary-300 mb-1">
                        Pro Tip
                      </p>
                      <p className="text-sm text-primary-600 dark:text-primary-400">
                        Schedule an appointment in advance to ensure dedicated time with our experts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-6">
              Need Quick Answers?
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-8">
              Check out our comprehensive FAQ section for instant answers to common questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 transform hover:scale-105 active:scale-95">
                Browse FAQ
              </button>
              <button className="border-2 border-primary-500 text-primary-600 dark:text-primary-400 px-8 py-4 rounded-2xl font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95">
                Schedule Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;