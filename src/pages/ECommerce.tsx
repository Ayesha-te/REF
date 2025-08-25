import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ShoppingCart, Star, Search, Filter, Percent } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ECommerce = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'all',
    'electronics',
    'fashion',
    'health',
    'home',
    'beauty',
    'sports'
  ];

  const products = [
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      price: 199.99,
      originalPrice: 249.99,
      discount: 20,
      rating: 4.8,
      reviews: 324,
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'electronics',
      featured: true
    },
    {
      id: 2,
      name: 'Premium Skincare Set',
      price: 89.99,
      originalPrice: 119.99,
      discount: 25,
      rating: 4.9,
      reviews: 156,
      image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'beauty',
      featured: false
    },
    {
      id: 3,
      name: 'Smart Fitness Tracker',
      price: 299.99,
      originalPrice: 349.99,
      discount: 15,
      rating: 4.7,
      reviews: 892,
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'electronics',
      featured: true
    },
    {
      id: 4,
      name: 'Organic Health Supplements',
      price: 49.99,
      originalPrice: 69.99,
      discount: 30,
      rating: 4.6,
      reviews: 203,
      image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'health',
      featured: false
    },
    {
      id: 5,
      name: 'Designer Fashion Jacket',
      price: 159.99,
      originalPrice: 199.99,
      discount: 20,
      rating: 4.8,
      reviews: 76,
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'fashion',
      featured: false
    },
    {
      id: 6,
      name: 'Smart Home Hub',
      price: 129.99,
      originalPrice: 169.99,
      discount: 25,
      rating: 4.5,
      reviews: 445,
      image: 'https://images.pexels.com/photos/4790609/pexels-photo-4790609.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'home',
      featured: true
    },
    {
      id: 7,
      name: 'Professional Yoga Mat',
      price: 79.99,
      originalPrice: 99.99,
      discount: 20,
      rating: 4.7,
      reviews: 234,
      image: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'sports',
      featured: false
    },
    {
      id: 8,
      name: 'Luxury Watch Collection',
      price: 399.99,
      originalPrice: 499.99,
      discount: 20,
      rating: 4.9,
      reviews: 89,
      image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'fashion',
      featured: true
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              E-Commerce Store
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Shop premium products and earn referral rewards
          </p>
        </motion.div>

        {/* Discount Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Card className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 border-purple-800/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-center space-x-4">
                <Percent className="h-8 w-8 text-cyan-400" />
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">Special Offers</h3>
                  <p className="text-slate-300">
                    10% buyer discount + Referral bonuses available on all products
                  </p>
                </div>
                <Percent className="h-8 w-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-900/50 border-purple-800/20 text-white placeholder-slate-400"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48 bg-slate-900/50 border-purple-800/20 text-white">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-purple-800/20">
                {categories.map((category) => (
                  <SelectItem key={category} value={category} className="text-white">
                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl h-full overflow-hidden group">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.featured && (
                    <Badge className="absolute top-2 left-2 bg-gradient-to-r from-cyan-500 to-purple-500">
                      Featured
                    </Badge>
                  )}
                  <Badge className="absolute top-2 right-2 bg-red-500">
                    -{product.discount}%
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-slate-400'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-slate-400 text-sm ml-2">
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-white">
                        ${product.price}
                      </span>
                      <span className="text-slate-400 line-through text-sm ml-2">
                        ${product.originalPrice}
                      </span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/checkout/${product.id}`);
                    }}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-slate-400 text-lg">No products found matching your criteria.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ECommerce;