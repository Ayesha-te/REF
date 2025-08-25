import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import CountUp from 'react-countup';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Coins, TrendingUp, DollarSign, Wallet, ExternalLink, Copy } from 'lucide-react';
import { toast } from 'sonner';

const Token = () => {
  const tokenData = [
    { date: '01/01', price: 0.45 },
    { date: '01/05', price: 0.52 },
    { date: '01/10', price: 0.48 },
    { date: '01/15', price: 0.63 },
    { date: '01/20', price: 0.71 },
    { date: '01/25', price: 0.68 },
    { date: '01/30', price: 0.75 },
  ];

  const tokenStats = [
    { label: 'Current Price', value: 0.75, prefix: '$', color: 'text-cyan-400' },
    { label: 'Market Cap', value: 7500000, prefix: '$', color: 'text-purple-400' },
    { label: 'Total Supply', value: 10000000, suffix: ' BST', color: 'text-green-400' },
    { label: '24h Volume', value: 250000, prefix: '$', color: 'text-orange-400' },
  ];

  const walletAddresses = [
    { network: 'BSC (BEP-20)', address: '0x1234567890123456789012345678901234567890' },
    { network: 'Ethereum (ERC-20)', address: '0x0987654321098765432109876543210987654321' },
    { network: 'Polygon (MATIC)', address: '0x1122334455667788990011223344556677889900' },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Address copied to clipboard!');
  };

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
              BizSui Token (BST)
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            The native utility token powering the BizChain ecosystem
          </p>
        </motion.div>

        {/* Token Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tokenStats.map((stat, index) => (
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
                        decimal="."
                        decimals={stat.prefix === '$' && stat.value < 1 ? 2 : 0}
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

        {/* Price Chart */}
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
                Price Chart (7 Days)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={tokenData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
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
                      dataKey="price" 
                      stroke="url(#colorGradient)" 
                      strokeWidth={3}
                      dot={{ fill: '#06B6D4', strokeWidth: 2, r: 4 }}
                    />
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#06B6D4" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Token Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <Coins className="h-6 w-6 text-cyan-400 mr-3" />
                  Token Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-800/50 rounded-lg">
                    <p className="text-slate-400 text-sm">Symbol</p>
                    <p className="text-white font-bold text-lg">BST</p>
                  </div>
                  <div className="p-4 bg-slate-800/50 rounded-lg">
                    <p className="text-slate-400 text-sm">Decimals</p>
                    <p className="text-white font-bold text-lg">18</p>
                  </div>
                  <div className="p-4 bg-slate-800/50 rounded-lg">
                    <p className="text-slate-400 text-sm">Network</p>
                    <p className="text-white font-bold text-lg">Multi-Chain</p>
                  </div>
                  <div className="p-4 bg-slate-800/50 rounded-lg">
                    <p className="text-slate-400 text-sm">Type</p>
                    <p className="text-white font-bold text-lg">Utility</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-white">Token Utility:</h4>
                  <ul className="space-y-2">
                    {[
                      'Platform transaction fees',
                      'Governance voting rights',
                      'Staking rewards',
                      'E-commerce discounts',
                      'Premium features access'
                    ].map((utility, index) => (
                      <li key={index} className="flex items-center text-slate-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {utility}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <Wallet className="h-6 w-6 text-purple-400 mr-3" />
                  Supported Wallets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {walletAddresses.map((wallet, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-purple-600">{wallet.network}</Badge>
                    </div>
                    <div className="flex items-center space-x-2 p-3 bg-slate-800/50 rounded-lg">
                      <code className="text-sm text-slate-300 flex-1 break-all">
                        {wallet.address}
                      </code>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(wallet.address)}
                        className="text-cyan-400 hover:bg-cyan-400/20"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                
                <div className="mt-6 p-4 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 rounded-lg">
                  <p className="text-slate-300 text-sm text-center">
                    Compatible with MetaMask, Trust Wallet, and other Web3 wallets
                  </p>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
                  onClick={() => window.open('https://pancakeswap.finance', '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Buy BST Token
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Live Price Feed Placeholder */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border-purple-800/20">
            <CardContent className="p-8 text-center">
              <DollarSign className="h-16 w-16 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white mb-4">Live Price Feed</h3>
              <p className="text-slate-300 mb-6">
                Real-time price data integration coming soon. Stay tuned for live market updates.
              </p>
              <Badge className="bg-orange-600">Coming Soon</Badge>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
};

export default Token;