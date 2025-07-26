
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "support@srkstyles.com",
      description: "We respond within 24 hours"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      info: "Available Now",
      description: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "123 Fashion District, NY 10001",
      description: "Flagship store & design studio"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help! Reach out to us for any questions, concerns, or feedback.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-blue-600 font-medium mb-1">{method.info}</p>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input placeholder="Enter your last name" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="Enter your email" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                <Input placeholder="Enter your phone number" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>General Inquiry</option>
                  <option>Order Support</option>
                  <option>Product Question</option>
                  <option>Custom Design</option>
                  <option>Bulk Orders</option>
                  <option>Returns & Exchanges</option>
                  <option>Technical Support</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea placeholder="How can we help you?" className="min-h-[120px]" />
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-slate-800">
                Send Message
              </Button>
            </div>
          </Card>

          {/* Additional Info */}
          <div className="space-y-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Clock className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="text-xl font-bold">Business Hours</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-gray-900">How long does shipping take?</p>
                  <p className="text-gray-600 text-sm">Standard shipping: 3-5 business days</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Can I return items?</p>
                  <p className="text-gray-600 text-sm">Yes, within 30 days with original tags</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Do you offer custom designs?</p>
                  <p className="text-gray-600 text-sm">Yes! Contact us for custom design options</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All FAQs
              </Button>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-blue-50 to-slate-50">
              <h3 className="text-xl font-bold mb-4">Visit Our Store</h3>
              <p className="text-gray-600 mb-4">
                Experience our collections in person at our flagship store in the heart of the Fashion District.
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p>📍 123 Fashion District, New York, NY 10001</p>
                <p>🚇 Near Herald Square Station</p>
                <p>🅿️ Valet parking available</p>
              </div>
              <Button variant="outline" className="w-full">
                Get Directions
              </Button>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
