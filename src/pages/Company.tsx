import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  Heart, 
  Shield, 
  Globe, 
  TrendingUp, 
  CheckCircle,
  Star,
  GraduationCap,
  IndianRupee,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowRight,
  Quote,
  Lightbulb,
  Handshake,
  Zap
} from 'lucide-react';

const Company = () => {
  const stats = [
    { number: '50,000+', label: 'Students Helped', icon: Users },
    { number: '₹500Cr+', label: 'Loans Disbursed', icon: IndianRupee },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '98%', label: 'Success Rate', icon: CheckCircle },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Student-First Approach',
      description: 'Every decision we make is centered around what\'s best for students and their educational journey.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'We believe in complete transparency in our processes, fees, and loan terms.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Supporting students across 50+ countries with comprehensive financial solutions.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Continuously evolving our services to meet the changing needs of students worldwide.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      position: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      experience: '20+ years in Education Finance',
      linkedin: '#'
    },
    {
      name: 'Priya Sharma',
      position: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      experience: '15+ years in Student Services',
      linkedin: '#'
    },
    {
      name: 'Amit Patel',
      position: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      experience: '12+ years in FinTech',
      linkedin: '#'
    },
    {
      name: 'Neha Singh',
      position: 'Head of Customer Success',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      experience: '10+ years in Education',
      linkedin: '#'
    }
  ];

  const milestones = [
    { year: '2008', title: 'Company Founded', description: 'Started with a vision to make education accessible to all' },
    { year: '2012', title: 'First 1000 Students', description: 'Reached our first milestone of helping 1000 students' },
    { year: '2015', title: 'International Expansion', description: 'Extended services to 10+ countries' },
    { year: '2018', title: 'Digital Transformation', description: 'Launched our comprehensive online platform' },
    { year: '2021', title: '50,000+ Students', description: 'Achieved the milestone of helping 50,000+ students' },
    { year: '2024', title: 'AI-Powered Solutions', description: 'Introduced AI-driven loan assessment and recommendations' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-neutral-900 dark:to-neutral-800">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Students Choice
              </span>
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto mb-8">
              Empowering students worldwide to achieve their educational dreams through innovative financial solutions and unwavering support.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-700">
                      <Icon className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-neutral-900 dark:text-white mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-400">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-8">
                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-8 h-8 text-primary-500" />
                    <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">Our Mission</h3>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    To democratize access to quality education by providing innovative, transparent, and student-friendly financial solutions that break down barriers to learning.
                  </p>
                </div>
                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
                  <div className="flex items-center gap-3 mb-4">
                    <Lightbulb className="w-8 h-8 text-secondary-500" />
                    <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">Our Vision</h3>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    To become the most trusted partner for students worldwide, enabling millions to pursue their educational dreams without financial constraints.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl p-8 text-white">
                <Quote className="w-12 h-12 mb-6 opacity-80" />
                <blockquote className="text-xl font-medium mb-6 leading-relaxed">
                  "Education is the most powerful weapon which you can use to change the world. We're here to make sure that weapon is accessible to every student."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Students Choice Team</div>
                    <div className="text-sm opacity-80">Dedicated to Your Success</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              These principles guide everything we do and shape the way we serve our students.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-700 rounded-2xl p-8 shadow-lg border border-neutral-200 dark:border-neutral-600">
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20" id="team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              Experienced professionals dedicated to transforming the education financing landscape.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-primary-100 dark:border-primary-900"
                  />
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {member.position}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    {member.experience}
                  </p>
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                    Connect on LinkedIn
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted partner for students worldwide.
            </p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-700">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full shadow-lg" />
                  </div>
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Educational Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of students who have already achieved their dreams with our support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/tools"
                className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-2xl font-semibold hover:bg-neutral-100 transition-all duration-300 shadow-lg"
              >
                Check Your Eligibility
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Talk to Our Experts
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Company;
