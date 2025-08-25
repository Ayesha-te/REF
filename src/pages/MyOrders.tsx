import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Package, Clock, CheckCircle, Truck, Eye } from 'lucide-react';

const MyOrders = () => {
  const orders = [
    {
      id: '12345',
      productName: 'Wireless Bluetooth Headphones',
      price: 179.99,
      orderDate: '2024-01-15',
      status: 'delivered',
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '12346',
      productName: 'Smart Fitness Tracker',
      price: 254.99,
      orderDate: '2024-01-12',
      status: 'verified',
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '12347',
      productName: 'Premium Skincare Set',
      price: 67.49,
      orderDate: '2024-01-10',
      status: 'pending',
      image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'pending':
        return { icon: Clock, color: 'bg-orange-600', text: 'Pending Verification' };
      case 'verified':
        return { icon: CheckCircle, color: 'bg-green-600', text: 'Payment Verified' };
      case 'delivered':
        return { icon: Truck, color: 'bg-blue-600', text: 'Delivered' };
      default:
        return { icon: Clock, color: 'bg-gray-600', text: 'Unknown' };
    }
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
              My Orders
            </span>
          </h1>
          <p className="text-xl text-slate-300">Track your order status and history</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {orders.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <Package className="h-16 w-16 text-slate-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No Orders Yet</h3>
              <p className="text-slate-400 mb-6">Start shopping to see your orders here</p>
              <Button
                onClick={() => window.location.href = '/ecommerce'}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
              >
                Browse Products
              </Button>
            </motion.div>
          ) : (
            <div className="space-y-6">
              {orders.map((order, index) => {
                const statusInfo = getStatusInfo(order.status);
                const StatusIcon = statusInfo.icon;

                return (
                  <motion.div
                    key={order.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl">
                      <CardHeader className="pb-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-white flex items-center">
                              <Package className="h-5 w-5 text-cyan-400 mr-2" />
                              Order #{order.id}
                            </CardTitle>
                            <p className="text-slate-400 text-sm mt-1">
                              Ordered on {new Date(order.orderDate).toLocaleDateString()}
                            </p>
                          </div>
                          <Badge className={statusInfo.color}>
                            <StatusIcon className="h-4 w-4 mr-1" />
                            {statusInfo.text}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center space-x-4">
                          <img
                            src={order.image}
                            alt={order.productName}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-white mb-1">
                              {order.productName}
                            </h4>
                            <p className="text-2xl font-bold text-cyan-400">
                              ${order.price}
                            </p>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-purple-600 text-purple-300 hover:bg-purple-600/20"
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                        </div>

                        {/* Order Status Timeline */}
                        <div className="mt-6 pt-6 border-t border-slate-700">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className={`w-3 h-3 rounded-full ${
                                ['pending', 'verified', 'delivered'].includes(order.status) 
                                ? 'bg-green-400' : 'bg-slate-600'
                              }`}></div>
                              <span className="text-sm text-slate-300">Order Placed</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className={`w-3 h-3 rounded-full ${
                                ['verified', 'delivered'].includes(order.status) 
                                ? 'bg-green-400' : 'bg-slate-600'
                              }`}></div>
                              <span className="text-sm text-slate-300">Payment Verified</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className={`w-3 h-3 rounded-full ${
                                order.status === 'delivered' 
                                ? 'bg-green-400' : 'bg-slate-600'
                              }`}></div>
                              <span className="text-sm text-slate-300">Delivered</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;