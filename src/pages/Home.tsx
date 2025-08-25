import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Users, DollarSign, Coins, TrendingUp, Shield, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: Users, label: 'Total Users', value: 25847, color: 'text-cyan-400' },
    { icon: DollarSign, label: 'Total Pool Earnings', value: 1284596, prefix: '$', color: 'text-purple-400' },
    { icon: Coins, label: 'Token Supply', value: 10000000, suffix: ' BST', color: 'text-green-400' },
    { icon: TrendingUp, label: 'Daily Growth', value: 15.7, suffix: '%', color: 'text-orange-400' },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Blockchain Security',
      description: 'Built on secure blockchain technology with transparent transactions'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Connect with users worldwide and build your international network'
    },
    {
      icon: DollarSign,
      title: 'Daily Earnings',
      description: 'Earn passive income daily with our automated reward system'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Next Generation
              </span>
              <br />
              <span className="text-white">Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Earn Daily, Refer Globally – Join the future of decentralized network marketing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigate('/auth')}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-lg px-8 py-3"
              >
                Join Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/ecommerce')}
                className="border-purple-600 text-purple-300 hover:bg-purple-600/20 text-lg px-8 py-3"
              >
                Shop Products
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900/50 to-purple-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Platform Statistics
            </h2>
            <p className="text-slate-300 text-lg">Real-time data from our growing ecosystem</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-slate-900/80 border-purple-800/20 backdrop-blur-xl">
                  <CardContent className="p-6 text-center">
                    <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
                    <div className="text-3xl font-bold text-white mb-2">
                      {stat.prefix && <span>{stat.prefix}</span>}
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        separator=","
                        decimal="."
                        decimals={stat.suffix === '%' ? 1 : 0}
                      />
                      {stat.suffix && <span>{stat.suffix}</span>}
                    </div>
                    <p className="text-slate-400">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose BizChain?
            </h2>
            <p className="text-slate-300 text-lg">Experience the future of network marketing</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl h-full">
                  <CardContent className="p-8 text-center">
                    <feature.icon className="h-16 w-16 mx-auto mb-6 text-cyan-400" />
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Earning?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already earning daily through our revolutionary platform
            </p>
            <Button
              size="lg"
              onClick={() => navigate('/income-plans')}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-lg px-8 py-3"
            >
              View Income Plans
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;