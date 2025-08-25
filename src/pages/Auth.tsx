import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Lock, UserPlus, LogIn, Shield, Star } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [loginData, setLoginData] = useState<{
    email: string;
    password: string;
    transactionId: string;
    paymentImage: File | null;
  }>({
    email: '',
    password: '',
    transactionId: '',
    paymentImage: null,
  });

  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    referralCode: '',
    transactionId: '',
    paymentImage: null as File | null,
    agreeToTerms: false
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation: email, password, transaction ID, and payment image
    if (!loginData.email || !loginData.password || !loginData.transactionId || !loginData.paymentImage) {
      toast.error('Please fill in email, password, transaction ID, and upload the payment picture.');
      return;
    }

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast.success('Login successful! Payment proof received.');
    navigate('/dashboard');
    setIsLoading(false);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!registerData.firstName || !registerData.lastName || !registerData.email || !registerData.password) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (registerData.password !== registerData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (!registerData.transactionId || !registerData.paymentImage) {
      toast.error('Please upload the payment picture and enter the transaction ID.');
      return;
    }

    if (!registerData.agreeToTerms) {
      toast.error('Please agree to the terms and conditions');
      return;
    }

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Registration successful! Payment proof received.');
    navigate('/dashboard');
    setIsLoading(false);
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Join BizChain
            </span>
          </h1>
          <p className="text-slate-300">Start your journey to financial freedom</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl">
            <CardContent className="p-6">
              <Tabs defaultValue="register" className="space-y-6">
                <TabsList className="grid w-full grid-cols-2 bg-slate-800">
                  <TabsTrigger value="register" className="data-[state=active]:bg-cyan-600">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Sign Up
                  </TabsTrigger>
                  <TabsTrigger value="login" className="data-[state=active]:bg-purple-600">
                    <LogIn className="h-4 w-4 mr-2" />
                    Login
                  </TabsTrigger>
                </TabsList>

                {/* Registration Tab */}
                <TabsContent value="register">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-white">First Name *</Label>
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="John"
                          value={registerData.firstName}
                          onChange={(e) => setRegisterData({...registerData, firstName: e.target.value})}
                          className="mt-1 bg-slate-800 border-purple-800/20 text-white"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-white">Last Name *</Label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Doe"
                          value={registerData.lastName}
                          onChange={(e) => setRegisterData({...registerData, lastName: e.target.value})}
                          className="mt-1 bg-slate-800 border-purple-800/20 text-white"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-white">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={registerData.email}
                        onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                        className="mt-1 bg-slate-800 border-purple-800/20 text-white"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="password" className="text-white">Password *</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={registerData.password}
                        onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                        className="mt-1 bg-slate-800 border-purple-800/20 text-white"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="confirmPassword" className="text-white">Confirm Password *</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        value={registerData.confirmPassword}
                        onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                        className="mt-1 bg-slate-800 border-purple-800/20 text-white"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="referralCode" className="text-white">Referral Code (Optional)</Label>
                      <Input
                        id="referralCode"
                        type="text"
                        placeholder="Enter referral code"
                        value={registerData.referralCode}
                        onChange={(e) => setRegisterData({...registerData, referralCode: e.target.value})}
                        className="mt-1 bg-slate-800 border-purple-800/20 text-white"
                      />
                    </div>

                    {/* Payment Picture Upload */}
                    <div>
                      <Label htmlFor="registerPaymentImage" className="text-white">Payment Picture</Label>
                      <Input
                        id="registerPaymentImage"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setRegisterData({
                          ...registerData,
                          paymentImage: e.target.files && e.target.files[0] ? e.target.files[0] : null,
                        })}
                        className="mt-1 bg-slate-800 border-purple-800/20 text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-cyan-600 file:text-white hover:file:bg-cyan-700"
                        required
                      />
                      <p className="text-slate-400 text-xs mt-1">Upload the screenshot/photo of your payment.</p>
                    </div>

                    {/* Transaction ID */}
                    <div>
                      <Label htmlFor="registerTransactionId" className="text-white">Transaction ID</Label>
                      <Input
                        id="registerTransactionId"
                        type="text"
                        placeholder="Enter your transaction ID"
                        value={registerData.transactionId}
                        onChange={(e) => setRegisterData({ ...registerData, transactionId: e.target.value })}
                        className="mt-1 bg-slate-800 border-purple-800/20 text-white"
                        required
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={registerData.agreeToTerms}
                        onCheckedChange={(checked) => setRegisterData({...registerData, agreeToTerms: !!checked})}
                      />
                      <Label htmlFor="terms" className="text-slate-300 text-sm">
                        I agree to the Terms of Service and Privacy Policy
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Creating Account...
                        </>
                      ) : (
                        <>
                          <UserPlus className="h-4 w-4 mr-2" />
                          Create Account
                        </>
                      )}
                    </Button>
                  </form>
                </TabsContent>

                {/* Login Tab */}
                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <Label htmlFor="loginEmail" className="text-white">Email Address</Label>
                      <Input
                        id="loginEmail"
                        type="email"
                        placeholder="john@example.com"
                        value={loginData.email}
                        onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                        className="mt-1 bg-slate-800 border-purple-800/20 text-white"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="loginPassword" className="text-white">Password</Label>
                      <Input
                        id="loginPassword"
                        type="password"
                        placeholder="Enter your password"
                        value={loginData.password}
                        onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                        className="mt-1 bg-slate-800 border-purple-800/20 text-white"
                        required
                      />
                    </div>

                    {/* Payment Picture Upload */}
                    <div>
                      <Label htmlFor="paymentImage" className="text-white">Payment Picture</Label>
                      <Input
                        id="paymentImage"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setLoginData({
                          ...loginData,
                          paymentImage: e.target.files && e.target.files[0] ? e.target.files[0] : null,
                        })}
                        className="mt-1 bg-slate-800 border-purple-800/20 text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-cyan-600 file:text-white hover:file:bg-cyan-700"
                        required
                      />
                      <p className="text-slate-400 text-xs mt-1">Upload the screenshot/photo of your payment.</p>
                    </div>

                    {/* Transaction ID */}
                    <div>
                      <Label htmlFor="transactionId" className="text-white">Transaction ID</Label>
                      <Input
                        id="transactionId"
                        type="text"
                        placeholder="Enter your transaction ID"
                        value={loginData.transactionId}
                        onChange={(e) => setLoginData({ ...loginData, transactionId: e.target.value })}
                        className="mt-1 bg-slate-800 border-purple-800/20 text-white"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Signing In...
                        </>
                      ) : (
                        <>
                          <LogIn className="h-4 w-4 mr-2" />
                          Sign In
                        </>
                      )}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <Card className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border-purple-800/20">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                Why Join BizChain?
              </h3>
              <div className="space-y-3">
                {[
                  'Daily passive income up to 4%',
                  'Multi-level referral bonuses',
                  'Global pool weekly distributions',
                  'Premium e-commerce discounts',
                  'Blockchain security & transparency'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-slate-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Security Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-center"
        >
          <Badge className="bg-green-600 px-4 py-2">
            <Shield className="h-4 w-4 mr-2" />
            SSL Secured & Blockchain Protected
          </Badge>
        </motion.div>
      </div>
    </div>
  );
};

export default Auth;