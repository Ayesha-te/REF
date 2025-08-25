import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingCart, Star, ArrowLeft, Share2, Heart, Percent } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data - in real app, fetch by ID
  const product = {
    id: parseInt(id || '1'),
    name: 'Wireless Bluetooth Headphones',
    price: 199.99,
    originalPrice: 249.99,
    discount: 20,
    rating: 4.8,
    reviews: 324,
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3394652/pexels-photo-3394652.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'electronics',
    description: 'Premium wireless bluetooth headphones with active noise cancellation and 30-hour battery life.',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Quick charge (5 min = 3 hours)',
      'Premium comfort design',
      'Multiple device connectivity'
    ],
    specifications: {
      'Driver Size': '40mm',
      'Frequency Response': '20Hz - 20kHz',
      'Impedance': '32Ω',
      'Battery': '1000mAh',
      'Weight': '250g',
      'Warranty': '2 years'
    }
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => navigate('/ecommerce')}
            className="text-slate-300 hover:text-cyan-400 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl">
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                  <Badge className="absolute top-4 right-4 bg-red-500">
                    -{product.discount}%
                  </Badge>
                </div>
                <div className="flex space-x-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                        selectedImage === index
                          ? 'border-cyan-400'
                          : 'border-slate-700'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <Badge className="mb-2 bg-purple-600">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {product.name}
              </h1>
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-slate-400'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-slate-400">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-4xl font-bold text-white">
                ${product.price}
              </span>
              <span className="text-2xl text-slate-400 line-through">
                ${product.originalPrice}
              </span>
              <Badge className="bg-green-600">
                Save ${(product.originalPrice - product.price).toFixed(2)}
              </Badge>
            </div>

            <Card className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border-purple-800/20">
              <CardContent className="p-4">
                <div className="flex items-center justify-center space-x-2">
                  <Percent className="h-5 w-5 text-cyan-400" />
                  <span className="text-cyan-400 font-semibold">Special Offer:</span>
                  <span className="text-white">10% additional discount for members</span>
                </div>
              </CardContent>
            </Card>

            <div className="flex space-x-4">
              <Button
                size="lg"
                onClick={() => navigate(`/checkout/${product.id}`)}
                className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Buy Now
              </Button>
              <Button size="lg" variant="outline" className="border-purple-600 text-purple-300 hover:bg-purple-600/20">
                <Heart className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-600 text-purple-300 hover:bg-purple-600/20">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-slate-800">
                <TabsTrigger value="description" className="data-[state=active]:bg-purple-600">Description</TabsTrigger>
                <TabsTrigger value="features" className="data-[state=active]:bg-purple-600">Features</TabsTrigger>
                <TabsTrigger value="specifications" className="data-[state=active]:bg-purple-600">Specs</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-4">
                <Card className="bg-slate-900/50 border-purple-800/20">
                  <CardContent className="p-4">
                    <p className="text-slate-300 leading-relaxed">
                      {product.description}
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="features" className="mt-4">
                <Card className="bg-slate-900/50 border-purple-800/20">
                  <CardContent className="p-4">
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-slate-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="specifications" className="mt-4">
                <Card className="bg-slate-900/50 border-purple-800/20">
                  <CardContent className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between border-b border-slate-700 pb-2">
                          <span className="text-slate-400">{key}:</span>
                          <span className="text-white">{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;