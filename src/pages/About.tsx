import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Globe, TrendingUp, Users, Target, Eye, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Built on blockchain technology with military-grade encryption'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connecting people worldwide through decentralized networks'
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Growth',
      description: 'Long-term vision with sustainable earning mechanisms'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Success through collaboration and mutual support'
    }
  ];

  const benefits = [
    'Transparent blockchain transactions',
    'Decentralized network structure',
    'Automated smart contracts',
    'Global accessibility 24/7',
    'Low transaction fees',
    'Instant global transfers'
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About BizChain
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing network marketing through blockchain technology, 
            creating opportunities for global financial freedom
          </p>
        </motion.div>

        {/* Company Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Next Generation Platform
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    BizChain represents the future of network marketing, combining the power 
                    of blockchain technology with proven e-commerce strategies. Our platform 
                    enables users to earn daily passive income while building global networks.
                  </p>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Founded on the principles of transparency, fairness, and technological 
                    innovation, we're creating a sustainable ecosystem where everyone can 
                    participate in the digital economy.
                  </p>
                </div>
                <div className="relative">
                  <div className="w-80 h-80 mx-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full animate-pulse"></div>
                    <div className="absolute inset-4 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full animate-ping"></div>
                    <div className="absolute inset-8 bg-gradient-to-r from-cyan-500/40 to-purple-500/40 rounded-full flex items-center justify-center">
                      <Zap className="h-24 w-24 text-cyan-400" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-cyan-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed">
                  To democratize wealth creation through blockchain technology, 
                  providing equal opportunities for people worldwide to achieve 
                  financial independence through our innovative network marketing platform.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-purple-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed">
                  To become the world's leading blockchain-based network marketing 
                  ecosystem, fostering global financial inclusion and empowering 
                  individuals to build sustainable passive income streams.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl h-full">
                  <CardContent className="p-6 text-center">
                    <value.icon className="h-12 w-12 mx-auto mb-4 text-cyan-400" />
                    <h4 className="text-lg font-bold text-white mb-3">{value.title}</h4>
                    <p className="text-slate-300">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Blockchain Benefits */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
                Blockchain & Decentralization Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-4 rounded-lg bg-slate-800/50"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                    <span className="text-slate-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
};

export default About;