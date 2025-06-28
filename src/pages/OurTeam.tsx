import React from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Users,
  Award,
  CheckCircle,
  TrendingUp,
  Star,
  Heart,
  Shield,
  Globe
} from 'lucide-react';

const OurTeam = () => {
  const teamStats = [
    { number: '500+', label: 'Students Helped', icon: Users },
    { number: '50+', label: 'Universities Partnered', icon: Globe },
    { number: '95%', label: 'Success Rate', icon: CheckCircle },
    { number: '24/7', label: 'Support Available', icon: Award }
  ];

  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      expertise: ['Education Loans', 'Business Strategy', 'Student Counseling'],
      experience: '15+ years',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      description: 'Leading the vision to make quality education accessible to every student.',
      linkedin: '#',
      email: 'rajesh@studentschoice.com',
      phone: '+91 98765 43210'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Operations',
      expertise: ['Loan Processing', 'Documentation', 'Team Management'],
      experience: '12+ years',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      description: 'Ensuring smooth operations and exceptional customer experience.',
      linkedin: '#',
      email: 'priya@studentschoice.com',
      phone: '+91 98765 43211'
    },
    {
      name: 'Amit Patel',
      role: 'Senior Loan Advisor',
      expertise: ['Education Financing', 'University Partnerships', 'Visa Guidance'],
      experience: '10+ years',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      description: 'Expert guidance for students pursuing international education.',
      linkedin: '#',
      email: 'amit@studentschoice.com',
      phone: '+91 98765 43212'
    },
    {
      name: 'Neha Singh',
      role: 'Student Counselor',
      expertise: ['Career Guidance', 'University Selection', 'Application Support'],
      experience: '8+ years',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      description: 'Helping students make informed decisions about their academic future.',
      linkedin: '#',
      email: 'neha@studentschoice.com',
      phone: '+91 98765 43213'
    },
    {
      name: 'Vikram Mehta',
      role: 'Technical Lead',
      expertise: ['Digital Solutions', 'Platform Development', 'Innovation'],
      experience: '9+ years',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      description: 'Building cutting-edge digital solutions for seamless loan processing.',
      linkedin: '#',
      email: 'vikram@studentschoice.com',
      phone: '+91 98765 43214'
    },
    {
      name: 'Anjali Reddy',
      role: 'Customer Success Manager',
      expertise: ['Client Relations', 'Support Management', 'Process Optimization'],
      experience: '7+ years',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
      description: 'Dedicated to ensuring every student achieves their educational dreams.',
      linkedin: '#',
      email: 'anjali@studentschoice.com',
      phone: '+91 98765 43215'
    }
  ];

  const coreValues = [
    {
      title: 'Student First',
      description: 'Every decision we make prioritizes the success and well-being of our students.',
      icon: '🎓',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in service quality and professional expertise.',
      icon: '⭐',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Innovation',
      description: 'Continuously improving our processes to provide better solutions for students.',
      icon: '🚀',
      color: 'from-purple-500 to-pink-500'
    }
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
              Meet Our{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Expert Team
              </span>
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto mb-8">
              Our dedicated professionals are here to guide you through every step of your education loan journey
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-white/20">
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Experienced Professionals</span>
              </div>
              <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-white/20">
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Student-Focused</span>
              </div>
              <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-white/20">
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
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
              Our Impact
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300">
              Numbers that reflect our commitment to student success
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => {
              const Icon = stat.icon;
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
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-300 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50 dark:from-neutral-900 dark:to-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-6">
              Our Leadership Team
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              Meet the experts who are dedicated to making your educational dreams a reality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white dark:bg-neutral-800 rounded-3xl shadow-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Member Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <div className="text-white">
                        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                        <p className="text-sm opacity-90">{member.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Member Details */}
                  <div className="p-6">
                    <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-4 leading-relaxed">
                      {member.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mr-2"></div>
                        <span className="font-medium">{member.experience} Experience</span>
                      </div>
                    </div>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full border border-primary-200 dark:border-primary-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                        <Mail className="w-4 h-4 mr-2 text-primary-500" />
                        <span className="truncate">{member.email}</span>
                      </div>
                      <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                        <Phone className="w-4 h-4 mr-2 text-primary-500" />
                        <span>{member.phone}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button className="flex-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-2 rounded-xl font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
                        Schedule Meeting
                      </button>
                      <a
                        href={member.linkedin}
                        className="inline-flex items-center justify-center w-12 h-10 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 rounded-xl hover:bg-primary-500 hover:text-white transition-all duration-300"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              These principles guide everything we do and shape the way we serve our students
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 text-center">
                    <div className="text-5xl mb-6">{value.icon}</div>
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Work with Our Team?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get in touch with our experts and start your journey towards educational success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-2xl font-semibold hover:bg-neutral-100 transition-all duration-300 shadow-lg transform hover:scale-105">
                Schedule a Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105">
                View Our Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam; 