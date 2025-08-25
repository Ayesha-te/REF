import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Upload, CreditCard, Shield, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const Checkout = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [transactionId, setTransactionId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock product data
  const product = {
    id: parseInt(id || '1'),
    name: 'Wireless Bluetooth Headphones',
    price: 199.99,
    originalPrice: 249.99,
    discount: 20,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400'
  };

  const memberDiscount = 0.10;
  const discountedPrice = product.price * (1 - memberDiscount);
  const totalSavings = product.originalPrice - discountedPrice;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setScreenshot(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!screenshot || !transactionId) {
      toast.error('Please upload screenshot and enter transaction ID');
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Order submitted successfully! Awaiting verification.');
    navigate('/my-orders');
    setIsSubmitting(false);
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => navigate(`/product/${id}`)}
            className="text-slate-300 hover:text-cyan-400 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Product
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <CreditCard className="h-6 w-6 text-cyan-400 mr-3" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">{product.name}</h3>
                    <p className="text-slate-400">Quantity: 1</p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-slate-700 pt-4">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Original Price:</span>
                    <span className="text-slate-300">${product.originalPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Product Discount:</span>
                    <span className="text-green-400">-${(product.originalPrice - product.price).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Member Discount (10%):</span>
                    <span className="text-cyan-400">-${(product.price * memberDiscount).toFixed(2)}</span>
                  </div>
                  <div className="border-t border-slate-700 pt-3">
                    <div className="flex justify-between text-xl font-bold">
                      <span className="text-white">Total:</span>
                      <span className="text-white">${discountedPrice.toFixed(2)}</span>
                    </div>
                    <Badge className="mt-2 bg-green-600">
                      You save ${totalSavings.toFixed(2)}!
                    </Badge>
                  </div>
                </div>

                <Card className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border-purple-800/20">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="h-5 w-5 text-cyan-400" />
                      <span className="text-cyan-400 font-semibold">Payment Security</span>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Your payment will be verified manually by our admin team for maximum security.
                    </p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </motion.div>

          {/* Payment Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <Upload className="h-6 w-6 text-purple-400 mr-3" />
                  Payment Verification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="p-4 bg-slate-800/50 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-2">Payment Instructions:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-slate-300 text-sm">
                      <li>Complete your payment of <strong>${discountedPrice.toFixed(2)}</strong></li>
                      <li>Take a screenshot of the successful transaction</li>
                      <li>Upload the screenshot below</li>
                      <li>Enter your transaction ID</li>
                      <li>Submit for verification</li>
                    </ol>
                  </div>

                  <div>
                    <Label htmlFor="screenshot" className="text-white">
                      Payment Screenshot *
                    </Label>
                    <div className="mt-2">
                      <Input
                        id="screenshot"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="bg-slate-800 border-purple-800/20 text-white file:bg-purple-600 file:text-white file:border-0 file:rounded-md"
                        required
                      />
                    </div>
                    {screenshot && (
                      <div className="mt-2 flex items-center text-green-400 text-sm">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        File uploaded: {screenshot.name}
                      </div>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="transactionId" className="text-white">
                      Transaction ID *
                    </Label>
                    <Input
                      id="transactionId"
                      type="text"
                      placeholder="Enter your transaction ID"
                      value={transactionId}
                      onChange={(e) => setTransactionId(e.target.value)}
                      className="mt-2 bg-slate-800 border-purple-800/20 text-white placeholder-slate-400"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="notes" className="text-white">
                      Additional Notes (Optional)
                    </Label>
                    <Textarea
                      id="notes"
                      placeholder="Any additional information..."
                      className="mt-2 bg-slate-800 border-purple-800/20 text-white placeholder-slate-400"
                      rows={3}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Upload className="h-4 w-4 mr-2" />
                        Submit Order
                      </>
                    )}
                  </Button>

                  <p className="text-slate-400 text-sm text-center">
                    Your order will be marked as <strong>confirmed</strong> after admin verification.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;