import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import CountUp from 'react-countup';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { TrendingUp, Users, DollarSign, Calendar, Zap, Award } from 'lucide-react';

const GlobalPool = () => {
  const poolStats = [
    { label: 'Total Pool Value', value: 125480, prefix: '$', color: 'text-cyan-400' },
    { label: 'Weekly Distribution', value: 8750, prefix: '$', color: 'text-purple-400' },
    { label: 'Active Contributors', value: 2847, color: 'text-green-400' },
    { label: 'Next Distribution', value: 3, suffix: ' days', color: 'text-orange-400' },
  ];

  const contributionData = [
    { name: 'New Joinings', value: 60, color: '#06B6D4' },
    { name: 'Weekly Payouts', value: 25, color: '#8B5CF6' },
    { name: 'Pool Growth', value: 15, color: '#10B981' },
  ];

  const weeklyDistribution = [
    { week: 'Week 1', amount: 7250 },
    { week: 'Week 2', amount: 8100 },
    { week: 'Week 3', amount: 8750 },
    { week: 'Week 4', amount: 9200 },
    { week: 'Week 5', amount: 8650 },
    { week: 'Week 6', amount: 9450 },
  ];

  const eligibilityRanks = [
    { rank: 'Bronze', requirement: '5+ Active Referrals', percentage: 15, color: 'bg-orange-600' },
    { rank: 'Silver', requirement: '15+ Active Referrals', percentage: 25, color: 'bg-gray-500' },
    { rank: 'Gold', requirement: '30+ Active Referrals', percentage: 35, color: 'bg-yellow-500' },
    { rank: 'Platinum', requirement: '50+ Active Referrals', percentage: 45, color: 'bg-purple-600' },
    { rank: 'Diamond', requirement: '100+ Active Referrals', percentage: 60, color: 'bg-cyan-500' },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Global Pool
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Collective earnings distributed weekly to active community members
          </p>
        </motion.div>

        {/* Pool Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {poolStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-slate-900/80 border-purple-800/20 backdrop-blur-xl">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      {stat.prefix && <span>{stat.prefix}</span>}
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        separator=","
                      />
                      {stat.suffix && <span>{stat.suffix}</span>}
                    </div>
                    <p className="text-slate-400">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Pool Explanation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold text-white flex items-center">
                <DollarSign className="h-8 w-8 text-green-400 mr-3" />
                How the Global Pool Works
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">$0.50 Contribution</h4>
                      <p className="text-slate-300">Every new member contributes $0.50 to the global reward pool upon joining.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Weekly Distribution</h4>
                      <p className="text-slate-300">Pool funds are distributed every Monday to eligible active members.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Fair Distribution</h4>
                      <p className="text-slate-300">Rewards are distributed based on network activity and referral levels.</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-80 h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={contributionData}
                          cx="50%"
                          cy="50%"
                          outerRadius={120}
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}%`}
                        >
                          {contributionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Weekly Distribution Chart */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold text-white flex items-center">
                <Calendar className="h-8 w-8 text-purple-400 mr-3" />
                Weekly Distribution History
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyDistribution}>
                    <XAxis dataKey="week" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px'
                      }}
                    />
                    <Bar dataKey="amount" fill="url(#barGradient)" />
                    <defs>
                      <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#06B6D4" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Eligibility Ranks */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold text-white flex items-center">
                <Award className="h-8 w-8 text-yellow-400 mr-3" />
                Pool Eligibility & Distribution Rates
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                {eligibilityRanks.map((rank, index) => (
                  <motion.div
                    key={rank.rank}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-6 bg-slate-800/50 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <Badge className={rank.color}>{rank.rank}</Badge>
                        <div>
                          <h4 className="text-lg font-bold text-white">{rank.rank} Rank</h4>
                          <p className="text-slate-400 text-sm">{rank.requirement}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-white">{rank.percentage}%</p>
                        <p className="text-slate-400 text-sm">Pool Share</p>
                      </div>
                    </div>
                    <Progress value={rank.percentage} className="h-2" />
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 rounded-lg">
                <div className="flex items-center mb-4">
                  <Zap className="h-6 w-6 text-cyan-400 mr-3" />
                  <h4 className="text-lg font-bold text-white">Distribution Schedule</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-cyan-400 font-semibold">Distribution Day</p>
                    <p className="text-white text-lg">Every Monday</p>
                  </div>
                  <div>
                    <p className="text-purple-400 font-semibold">Cut-off Time</p>
                    <p className="text-white text-lg">Sunday 11:59 PM UTC</p>
                  </div>
                  <div>
                    <p className="text-green-400 font-semibold">Payment Method</p>
                    <p className="text-white text-lg">Direct to Wallet</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Current Pool Status */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 border-purple-800/20">
            <CardContent className="p-8 text-center">
              <TrendingUp className="h-16 w-16 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Join the Global Pool
              </h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Start building your network today and become eligible for weekly pool distributions. 
                The more active your network, the higher your share!
              </p>
              <Badge className="bg-green-600 text-lg px-6 py-2">
                Next Distribution: Monday, 10:00 AM UTC
              </Badge>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
};

export default GlobalPool;