import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, MessageCircle, Phone, MapPin, Send, Clock, Users, Headphones } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', category: '', message: '' });
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email',
      contact: 'support@bizchain.com',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-900/20'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: '24/7 instant support',
      contact: 'Chat with us',
      color: 'text-purple-400',
      bgColor: 'bg-purple-900/20'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak with our team',
      contact: '+1 (234) 567-890',
      color: 'text-green-400',
      bgColor: 'bg-green-900/20'
    }
  ];

  const supportCategories = [
    'General Inquiry',
    'Technical Support',
    'Account Issues',
    'Payment Problems',
    'Referral Questions',
    'E-commerce Support',
    'Token/Wallet Help'
  ];

  const faqs = [
    {
      question: 'How do I start earning?',
      answer: 'Simply create an account, make your initial investment, and start referring others to build your network.'
    },
    {
      question: 'When do I receive my daily earnings?',
      answer: 'Daily earnings are automatically calculated and added to your wallet every 24 hours.'
    },
    {
      question: 'How does the referral system work?',
      answer: 'You earn commissions from 3 levels: 10% from Level 1, 5% from Level 2, and 2% from Level 3 referrals.'
    },
    {
      question: 'What is the minimum withdrawal amount?',
      answer: 'The minimum withdrawal amount is $50, with a 10% processing fee.'
    }
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
              Contact Support
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Get in touch with our support team for any questions or assistance
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl h-full">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${method.bgColor} flex items-center justify-center`}>
                      <method.icon className={`h-8 w-8 ${method.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                    <p className="text-slate-400 mb-4">{method.description}</p>
                    <p className={`font-semibold ${method.color}`}>{method.contact}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <Send className="h-6 w-6 text-cyan-400 mr-3" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-white">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="mt-1 bg-slate-800 border-purple-800/20 text-white placeholder-slate-400"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="mt-1 bg-slate-800 border-purple-800/20 text-white placeholder-slate-400"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="category" className="text-white">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                      <SelectTrigger className="mt-1 bg-slate-800 border-purple-800/20 text-white">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-purple-800/20">
                        {supportCategories.map((category) => (
                          <SelectItem key={category} value={category} className="text-white">
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-white">Subject</Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Brief description of your inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="mt-1 bg-slate-800 border-purple-800/20 text-white placeholder-slate-400"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide as much detail as possible..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="mt-1 bg-slate-800 border-purple-800/20 text-white placeholder-slate-400 min-h-32"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* FAQ & Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Support Hours */}
            <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center">
                  <Clock className="h-5 w-5 text-green-400 mr-3" />
                  Support Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                  <span className="text-slate-300">Live Chat</span>
                  <span className="text-green-400 font-semibold">24/7</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                  <span className="text-slate-300">Email Support</span>
                  <span className="text-cyan-400 font-semibold">24 hours</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                  <span className="text-slate-300">Phone Support</span>
                  <span className="text-purple-400 font-semibold">9 AM - 6 PM UTC</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center">
                  <Headphones className="h-5 w-5 text-purple-400 mr-3" />
                  Quick Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full border-cyan-600 text-cyan-300 hover:bg-cyan-600/20 justify-start"
                  onClick={() => window.open('https://t.me/bizchain', '_blank')}
                >
                  <MessageCircle className="h-4 w-4 mr-3" />
                  Join Telegram Group
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-green-600 text-green-300 hover:bg-green-600/20 justify-start"
                  onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                >
                  <Phone className="h-4 w-4 mr-3" />
                  WhatsApp Support
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-purple-600 text-purple-300 hover:bg-purple-600/20 justify-start"
                  onClick={() => window.open('mailto:support@bizchain.com', '_blank')}
                >
                  <Mail className="h-4 w-4 mr-3" />
                  Email Direct
                </Button>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="bg-slate-900/50 border-purple-800/20 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="p-4 bg-slate-800/50 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">{faq.question}</h4>
                    <p className="text-slate-300 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Office Info */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border-purple-800/20">
            <CardContent className="p-8 text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white mb-4">Global Headquarters</h3>
              <p className="text-slate-300 mb-2">BizChain Technologies Ltd.</p>
              <p className="text-slate-300 mb-6">
                Decentralized Network • Serving Users Worldwide
              </p>
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto mb-2 text-purple-400" />
                  <p className="text-white font-bold">25,000+</p>
                  <p className="text-slate-400 text-sm">Active Users</p>
                </div>
                <div className="text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-2 text-green-400" />
                  <p className="text-white font-bold">150+</p>
                  <p className="text-slate-400 text-sm">Countries</p>
                </div>
                <div className="text-center">
                  <Headphones className="h-8 w-8 mx-auto mb-2 text-cyan-400" />
                  <p className="text-white font-bold">24/7</p>
                  <p className="text-slate-400 text-sm">Support</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
};

export default Contact;