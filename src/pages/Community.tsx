import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Users, 
  BookOpen, 
  Globe, 
  ThumbsUp, 
  Reply, 
  Plus,
  Filter,
  Search,
  Calendar,
  User,
  Eye
} from 'lucide-react';

const Community = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Discussions', icon: MessageSquare, count: 156 },
    { id: 'loans', name: 'Student Loans', icon: BookOpen, count: 67 },
    { id: 'admissions', name: 'Admissions', icon: Users, count: 45 },
    { id: 'visa', name: 'Visa Help', icon: Globe, count: 44 }
  ];

  const discussions = [
    {
      id: 1,
      category: 'loans',
      title: 'Best banks for education loan for MS in USA?',
      author: 'Priya Sharma',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      time: '2 hours ago',
      replies: 12,
      likes: 23,
      views: 156,
      tags: ['USA', 'MS', 'Education Loan'],
      preview: 'I am planning to pursue MS in Computer Science from USA. Can anyone suggest the best banks for education loan with competitive interest rates?',
      solved: false
    },
    {
      id: 2,
      category: 'admissions',
      title: 'SOP tips for UK universities - Computer Science',
      author: 'Rahul Kumar',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      time: '4 hours ago',
      replies: 8,
      likes: 15,
      views: 89,
      tags: ['UK', 'SOP', 'Computer Science'],
      preview: 'I need help with writing my Statement of Purpose for UK universities. What are the key points I should focus on?',
      solved: true
    },
    {
      id: 3,
      category: 'visa',
      title: 'F1 Visa interview experience - Chennai Consulate',
      author: 'Sneha Patel',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg',
      time: '1 day ago',
      replies: 25,
      likes: 41,
      views: 234,
      tags: ['F1 Visa', 'Chennai', 'Interview'],
      preview: 'Just got my F1 visa approved from Chennai consulate! Sharing my experience and tips for others.',
      solved: false
    },
    {
      id: 4,
      category: 'loans',
      title: 'Collateral vs Non-collateral loans - Which is better?',
      author: 'Amit Singh',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
      time: '2 days ago',
      replies: 18,
      likes: 32,
      views: 178,
      tags: ['Collateral', 'Non-collateral', 'Comparison'],
      preview: 'Confused between collateral and non-collateral education loans. What are the pros and cons of each?',
      solved: true
    },
    {
      id: 5,
      category: 'admissions',
      title: 'IELTS vs TOEFL for German universities',
      author: 'Kavya Reddy',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      time: '3 days ago',
      replies: 14,
      likes: 28,
      views: 145,
      tags: ['IELTS', 'TOEFL', 'Germany'],
      preview: 'Which English proficiency test is preferred by German universities - IELTS or TOEFL?',
      solved: false
    },
    {
      id: 6,
      category: 'visa',
      title: 'Blocked account requirements for Germany',
      author: 'Arjun Nair',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      time: '4 days ago',
      replies: 11,
      likes: 19,
      views: 123,
      tags: ['Germany', 'Blocked Account', 'Student Visa'],
      preview: 'What is the current blocked account amount required for German student visa in 2024?',
      solved: true
    }
  ];

  const filteredDiscussions = discussions.filter(discussion => 
    (activeTab === 'all' || discussion.category === activeTab) &&
    (searchTerm === '' || discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     discussion.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  const popularTopics = [
    { name: 'Education Loan', count: 45 },
    { name: 'USA Admissions', count: 38 },
    { name: 'IELTS Preparation', count: 32 },
    { name: 'Visa Interview', count: 29 },
    { name: 'SOP Writing', count: 25 },
    { name: 'Scholarship', count: 22 }
  ];

  const featuredMembers = [
    {
      name: 'Dr. Rajesh Gupta',
      title: 'Education Consultant', 
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      contributions: 142,
      badge: 'Expert'
    },
    {
      name: 'Priya Sharma',
      title: 'Loan Specialist',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      contributions: 98,
      badge: 'Helper'
    },
    {
      name: 'Michael Chen',
      title: 'International Student',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
      contributions: 76,
      badge: 'Student'
    }
  ];

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
              Student Community
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with fellow students, share experiences, and get expert advice on education loans, admissions, and visa processes.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 flex items-center mx-auto">
              <Plus className="mr-2 h-5 w-5" />
              Start New Discussion
            </button>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filter */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search discussions, topics, or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <button className="flex items-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <Filter className="mr-2 h-5 w-5" />
                  Filter
                </button>
              </div>
            </div>

            {/* Category Tabs */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setActiveTab(category.id)}
                        className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors duration-200 ${
                          activeTab === category.id
                            ? 'border-primary text-primary'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        <span>{category.name}</span>
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                          {category.count}
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Discussions List */}
            <div className="space-y-4">
              {filteredDiscussions.map((discussion, index) => (
                <motion.div
                  key={discussion.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start space-x-4">
                    <img
                      src={discussion.avatar}
                      alt={discussion.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 hover:text-primary cursor-pointer">
                          {discussion.title}
                        </h3>
                        {discussion.solved && (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            Solved
                          </span>
                        )}
                      </div>
                      
                      <p className="text-gray-600 mb-3 line-clamp-2">
                        {discussion.preview}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {discussion.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{discussion.author}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{discussion.time}</span>
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{discussion.views}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Reply className="h-4 w-4" />
                            <span>{discussion.replies}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <ThumbsUp className="h-4 w-4" />
                            <span>{discussion.likes}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200">
                Load More Discussions
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Popular Topics */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Topics</h3>
              <div className="space-y-3">
                {popularTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-700 hover:text-primary cursor-pointer">
                      {topic.name}
                    </span>
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                      {topic.count}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Featured Members */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Members</h3>
              <div className="space-y-4">
                {featuredMembers.map((member, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <p className="font-medium text-gray-900">{member.name}</p>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          member.badge === 'Expert' ? 'bg-purple-100 text-purple-800' :
                          member.badge === 'Helper' ? '  bg-blue-100 text-blue-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {member.badge}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{member.title}</p>
                      <p className="text-xs text-gray-500">{member.contributions} contributions</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Community Guidelines */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-primary/5 rounded-xl border border-primary/20 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Community Guidelines</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Be respectful and helpful to fellow students</li>
                <li>• Search before posting to avoid duplicates</li>
                <li>• Use clear, descriptive titles</li>
                <li>• Tag your posts appropriately</li>
                <li>• Share accurate information only</li>
                <li>• No spam or promotional content</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;