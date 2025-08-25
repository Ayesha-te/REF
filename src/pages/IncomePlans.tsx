import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { DollarSign, Users, TrendingUp, Crown, Award, Star, Zap } from 'lucide-react';

const IncomePlans = () => {
  const dailyIncomeData = [
    { days: '1-5', percentage: 1, color: '#06b6d4' },
    { days: '6-10', percentage: 1.5, color: '#3b82f6' },
    { days: '11-15', percentage: 2, color: '#6366f1' },
    { days: '16-20', percentage: 2.5, color: '#8b5cf6' },
    { days: '21-25', percentage: 3, color: '#a855f7' },
    { days: '26-30', percentage: 3.5, color: '#c084fc' },
    { days: '31-130', percentage: 4, color: '#d946ef' },
  ];

  const globalPoolData = [
    { name: 'User Contributions', value: 50, color: '#06b6d4' },
    { name: 'Weekly Distribution', value: 30, color: '#8b5cf6' },
    { name: 'Platform Growth', value: 20, color: '#d946ef' },
  ];

  const salaryRanks = [
    { rank: 'Pioneer', requirement: '5 Direct Referrals', salary: '$100', icon: Star, color: 'text-blue-400' },
    { rank: 'Explorer', requirement: '10 Direct Referrals', salary: '$250', icon: TrendingUp, color: 'text-purple-400' },
    { rank: 'Navigator', requirement: '25 Direct Referrals', salary: '$500', icon: Award, color: 'text-pink-400' },
    { rank: 'Champion', requirement: '50 Direct Referrals', salary: '$1,000', icon: Crown, color: 'text-orange-400' },
    { rank: 'Maestro', requirement: '100 Direct Referrals', salary: '$2,500', icon: Zap, color: 'text-cyan-400' },
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
              Income Plans
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive earning opportunities with multiple revenue streams
          </p>
        </motion.div>

        {/* Daily Passive Income */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold text-white flex items-center">
                <DollarSign className="h-8 w-8 text-cyan-400 mr-3" />
                Daily Passive Income Cycle
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-4">Income Timeline (130 Days)</h3>
                  {dailyIncomeData.map((period, index) => (
                    <motion.div
                      key={period.days}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50"
                    >
                      <div className="flex items-center space-x-4">
                        <Badge style={{ backgroundColor: period.color }} className="text-white">
                          Days {period.days}
                        </Badge>
                        <span className="text-slate-300">Daily Return</span>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-white">{period.percentage}%</span>
                      </div>
                    </motion.div>
                  ))}
                  <div className="mt-6 p-4 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-lg">
                    <p className="text-cyan-400 font-semibold mb-2">Auto-Renewal Feature:</p>
                    <p className="text-slate-300">After 130 days, the cycle automatically renews, continuing your passive income stream.</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-80 h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={dailyIncomeData}
                          cx="50%"
                          cy="50%"
                          outerRadius={120}
                          dataKey="percentage"
                          label={({ days, percentage }) => `${days}: ${percentage}%`}
                        >
                          {dailyIncomeData.map((entry, index) => (
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

        {/* Referral Bonuses */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold text-white flex items-center">
                <Users className="h-8 w-8 text-purple-400 mr-3" />
                Multi-Level Referral Bonuses
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">L1</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Level 1</h3>
                  <p className="text-3xl font-bold text-cyan-400 mb-2">10%</p>
                  <p className="text-slate-300">Direct referrals commission</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">L2</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Level 2</h3>
                  <p className="text-3xl font-bold text-purple-400 mb-2">5%</p>
                  <p className="text-slate-300">Second level commission</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center"
                >
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">L3</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Level 3</h3>
                  <p className="text-3xl font-bold text-pink-400 mb-2">2%</p>
                  <p className="text-slate-300">Third level commission</p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Global Pool */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold text-white flex items-center">
                <TrendingUp className="h-8 w-8 text-green-400 mr-3" />
                Global Pool Distribution
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="p-4 bg-slate-800/50 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-2">$0.50 per joining</h4>
                    <p className="text-slate-300">Every new member contributes to the global reward pool</p>
                  </div>
                  <div className="p-4 bg-slate-800/50 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-2">Weekly Distribution</h4>
                    <p className="text-slate-300">Pool rewards distributed every Monday to eligible members</p>
                  </div>
                  <div className="p-4 bg-slate-800/50 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-2">Fair Distribution</h4>
                    <p className="text-slate-300">Rewards based on network size and activity level</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-80 h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={globalPoolData}
                          cx="50%"
                          cy="50%"
                          outerRadius={120}
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}%`}
                        >
                          {globalPoolData.map((entry, index) => (
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

        {/* Weekly Salary Ranks */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold text-white flex items-center">
                <Crown className="h-8 w-8 text-yellow-400 mr-3" />
                Weekly Salary Ranks
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                {salaryRanks.map((rank, index) => (
                  <motion.div
                    key={rank.rank}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center justify-between p-6 bg-slate-800/50 rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <rank.icon className={`h-8 w-8 ${rank.color}`} />
                      <div>
                        <h3 className="text-xl font-bold text-white">{rank.rank}</h3>
                        <p className="text-slate-300">{rank.requirement}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-white">{rank.salary}</p>
                      <p className="text-slate-400">Weekly</p>
                    </div>
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

export default IncomePlans;