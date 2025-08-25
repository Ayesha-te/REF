import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import CountUp from 'react-countup';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { 
  Wallet, 
  TrendingUp, 
  Users, 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownRight, 
  Copy,
  Share2,
  Crown,
  Gift,
  Download
} from 'lucide-react';
import { toast } from 'sonner';

const Dashboard = () => {
  const [referralLink, setReferralLink] = useState('https://bizchain.com/ref/USER123456');
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const walletData = {
    totalBalance: 2456.78,
    availableBalance: 1965.42,
    pendingEarnings: 491.36,
    totalEarnings: 15234.56,
    totalWithdrawn: 12777.78
  };

  const walletBreakdown = [
    { name: '80% Earnings', value: 80, amount: 1965.42, color: '#06B6D4' },
    { name: '10% Global Pool', value: 10, amount: 245.68, color: '#8B5CF6' },
    { name: '10% Tax', value: 10, amount: 245.68, color: '#EF4444' },
  ];

  const earningsData = [
    { date: '01/01', earnings: 45.30 },
    { date: '01/02', earnings: 52.10 },
    { date: '01/03', earnings: 38.75 },
    { date: '01/04', earnings: 67.20 },
    { date: '01/05', earnings: 74.50 },
    { date: '01/06', earnings: 82.15 },
    { date: '01/07', earnings: 91.30 },
  ];

  const referralStats = [
    { level: 'Level 1', count: 12, earnings: 1245.67, rate: '10%', color: 'text-cyan-400' },
    { level: 'Level 2', count: 8, earnings: 432.10, rate: '5%', color: 'text-purple-400' },
    { level: 'Level 3', count: 3, earnings: 85.45, rate: '2%', color: 'text-pink-400' },
  ];

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    toast.success('Referral link copied to clipboard!');
  };

  const handleWithdraw = () => {
    if (!withdrawAmount || parseFloat(withdrawAmount) <= 0) {
      toast.error('Please enter a valid withdrawal amount');
      return;
    }
    if (parseFloat(withdrawAmount) > walletData.availableBalance) {
      toast.error('Insufficient balance');
      return;
    }
    toast.success(`Withdrawal of $${withdrawAmount} initiated successfully!`);
    setWithdrawAmount('');
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Dashboard
                </span>
              </h1>
              <p className="text-slate-300 mt-2">Welcome back, manage your earnings and network</p>
            </div>
            <Badge className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2">
              <Crown className="h-4 w-4 mr-2" />
              Gold Member
            </Badge>
          </div>
        </motion.div>

        <Tabs defaultValue="wallet" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 lg:w-fit bg-slate-800">
            <TabsTrigger value="wallet" className="data-[state=active]:bg-cyan-600">
              <Wallet className="h-4 w-4 mr-2" />
              Wallet
            </TabsTrigger>
            <TabsTrigger value="referrals" className="data-[state=active]:bg-purple-600">
              <Users className="h-4 w-4 mr-2" />
              Referrals
            </TabsTrigger>
            <TabsTrigger value="earnings" className="data-[state=active]:bg-green-600">
              <TrendingUp className="h-4 w-4 mr-2" />
              Earnings
            </TabsTrigger>
            <TabsTrigger value="tools" className="data-[state=active]:bg-orange-600">
              <Gift className="h-4 w-4 mr-2" />
              Tools
            </TabsTrigger>
          </TabsList>

          {/* Wallet Tab */}
          <TabsContent value="wallet" className="space-y-8">
            {/* Wallet Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="bg-slate-900/80 border-purple-800/20 backdrop-blur-xl">
                  <CardContent className="p-6 text-center">
                    <Wallet className="h-8 w-8 mx-auto mb-2 text-cyan-400" />
                    <div className="text-2xl font-bold text-white mb-1">
                      $<CountUp end={walletData.totalBalance} duration={2} separator="," decimals={2} />
                    </div>
                    <p className="text-slate-400 text-sm">Total Balance</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-slate-900/80 border-purple-800/20 backdrop-blur-xl">
                  <CardContent className="p-6 text-center">
                    <ArrowUpRight className="h-8 w-8 mx-auto mb-2 text-green-400" />
                    <div className="text-2xl font-bold text-white mb-1">
                      $<CountUp end={walletData.availableBalance} duration={2} separator="," decimals={2} />
                    </div>
                    <p className="text-slate-400 text-sm">Available</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="bg-slate-900/80 border-purple-800/20 backdrop-blur-xl">
                  <CardContent className="p-6 text-center">
                    <DollarSign className="h-8 w-8 mx-auto mb-2 text-purple-400" />
                    <div className="text-2xl font-bold text-white mb-1">
                      $<CountUp end={walletData.totalEarnings} duration={2} separator="," decimals={2} />
                    </div>
                    <p className="text-slate-400 text-sm">Total Earned</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="bg-slate-900/80 border-purple-800/20 backdrop-blur-xl">
                  <CardContent className="p-6 text-center">
                    <ArrowDownRight className="h-8 w-8 mx-auto mb-2 text-orange-400" />
                    <div className="text-2xl font-bold text-white mb-1">
                      $<CountUp end={walletData.totalWithdrawn} duration={2} separator="," decimals={2} />
                    </div>
                    <p className="text-slate-400 text-sm">Withdrawn</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Wallet Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-white">Wallet Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-64 h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={walletBreakdown}
                              cx="50%"
                              cy="50%"
                              outerRadius={100}
                              dataKey="value"
                              label={({ name, value }) => `${name}: ${value}%`}
                            >
                              {walletBreakdown.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {walletBreakdown.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                            <span className="text-slate-300">{item.name}</span>
                          </div>
                          <span className="text-white font-bold">${item.amount.toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-white">Withdraw Funds</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="amount" className="text-white">Withdrawal Amount</Label>
                      <Input
                        id="amount"
                        type="number"
                        placeholder="Enter amount"
                        value={withdrawAmount}
                        onChange={(e) => setWithdrawAmount(e.target.value)}
                        className="mt-2 bg-slate-800 border-purple-800/20 text-white"
                      />
                      <p className="text-slate-400 text-sm mt-1">
                        Available: ${walletData.availableBalance.toFixed(2)}
                      </p>
                    </div>

                    <div className="p-4 bg-slate-800/50 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">Withdrawal Fee: 10%</h4>
                      <p className="text-slate-300 text-sm">
                        A 10% fee is automatically deducted from all withdrawals to support platform operations.
                      </p>
                    </div>

                    <Button
                      onClick={handleWithdraw}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Withdraw Funds
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>

          {/* Referrals Tab */}
          <TabsContent value="referrals" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-white">Referral Statistics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {referralStats.map((stat, index) => (
                      <div key={stat.level} className="p-4 bg-slate-800/50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="text-lg font-bold text-white">{stat.level}</h4>
                            <p className="text-slate-400 text-sm">Commission: {stat.rate}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-white">{stat.count}</p>
                            <p className="text-slate-400 text-sm">Referrals</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-300">Earnings:</span>
                          <span className={`font-bold ${stat.color}`}>${stat.earnings.toFixed(2)}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-white">Your Referral Link</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label className="text-white">Share this link to earn commissions:</Label>
                      <div className="flex items-center space-x-2 mt-2">
                        <Input
                          value={referralLink}
                          readOnly
                          className="bg-slate-800 border-purple-800/20 text-white"
                        />
                        <Button
                          size="sm"
                          onClick={copyReferralLink}
                          className="bg-cyan-600 hover:bg-cyan-700"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        variant="outline"
                        className="border-purple-600 text-purple-300 hover:bg-purple-600/20"
                      >
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                      <Button
                        variant="outline"
                        className="border-green-600 text-green-300 hover:bg-green-600/20"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        QR Code
                      </Button>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">Referral Bonuses:</h4>
                      <ul className="space-y-1 text-slate-300 text-sm">
                        <li>• Level 1: 10% commission</li>
                        <li>• Level 2: 5% commission</li>
                        <li>• Level 3: 2% commission</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>

          {/* Earnings Tab */}
          <TabsContent value="earnings" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">7-Day Earnings Chart</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={earningsData}>
                        <XAxis dataKey="date" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#1F2937', 
                            border: '1px solid #374151',
                            borderRadius: '8px'
                          }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="earnings" 
                          stroke="url(#earningsGradient)" 
                          strokeWidth={3}
                          dot={{ fill: '#06B6D4', strokeWidth: 2, r: 4 }}
                        />
                        <defs>
                          <linearGradient id="earningsGradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#06B6D4" />
                            <stop offset="100%" stopColor="#8B5CF6" />
                          </linearGradient>
                        </defs>
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Tools Tab */}
          <TabsContent value="tools" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl h-full">
                  <CardContent className="p-6 text-center">
                    <Share2 className="h-12 w-12 mx-auto mb-4 text-cyan-400" />
                    <h3 className="text-lg font-bold text-white mb-2">Marketing Materials</h3>
                    <p className="text-slate-300 text-sm mb-4">Download banners, logos, and promotional content</p>
                    <Button className="bg-cyan-600 hover:bg-cyan-700">
                      Download Pack
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl h-full">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="h-12 w-12 mx-auto mb-4 text-purple-400" />
                    <h3 className="text-lg font-bold text-white mb-2">Performance Analytics</h3>
                    <p className="text-slate-300 text-sm mb-4">Detailed reports on your network performance</p>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      View Reports
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl h-full">
                  <CardContent className="p-6 text-center">
                    <Gift className="h-12 w-12 mx-auto mb-4 text-green-400" />
                    <h3 className="text-lg font-bold text-white mb-2">Bonus Calculator</h3>
                    <p className="text-slate-300 text-sm mb-4">Calculate potential earnings from referrals</p>
                    <Button className="bg-green-600 hover:bg-green-700">
                      Open Calculator
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;