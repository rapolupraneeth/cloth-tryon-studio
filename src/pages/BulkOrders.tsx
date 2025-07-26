
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Package, Users, Truck, Award } from 'lucide-react';

const BulkOrders = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const bulkBenefits = [
    {
      icon: Package,
      title: "Volume Discounts",
      description: "Save up to 30% on orders of 50+ items"
    },
    {
      icon: Users,
      title: "Dedicated Account Manager",
      description: "Personal support for your bulk order needs"
    },
    {
      icon: Truck,
      title: "Priority Shipping",
      description: "Expedited processing and delivery"
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all bulk orders"
    }
  ];

  const pricingTiers = [
    { quantity: "10-24 items", discount: "5%", badge: "Small" },
    { quantity: "25-49 items", discount: "10%", badge: "Medium" },
    { quantity: "50-99 items", discount: "20%", badge: "Large" },
    { quantity: "100+ items", discount: "30%", badge: "Enterprise" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Bulk Orders</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Perfect for businesses, events, teams, and organizations. Get wholesale pricing and personalized service for large quantity orders.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {bulkBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Pricing Tiers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Volume Pricing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className="p-6 text-center relative">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-slate-800">
                  {tier.badge}
                </Badge>
                <div className="pt-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{tier.quantity}</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-2">{tier.discount}</div>
                  <p className="text-gray-600 text-sm">discount off regular prices</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Perfect For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Corporate Events</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Company uniforms</li>
                <li>• Conference merchandise</li>
                <li>• Team building events</li>
                <li>• Client gifts</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Educational Institutions</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• School uniforms</li>
                <li>• Sports teams</li>
                <li>• Graduation ceremonies</li>
                <li>• Faculty apparel</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Special Events</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Wedding parties</li>
                <li>• Festival merchandise</li>
                <li>• Charity events</li>
                <li>• Family reunions</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Quote Request Form */}
        <Card className="p-8 bg-gradient-to-r from-blue-50 to-slate-50">
          <h2 className="text-2xl font-bold text-center mb-6">Request a Bulk Order Quote</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Company/Organization Name</label>
              <Input placeholder="Enter organization name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Contact Person</label>
              <Input placeholder="Enter contact name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input type="email" placeholder="Enter email address" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <Input placeholder="Enter phone number" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Estimated Quantity</label>
              <Input placeholder="How many items do you need?" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Event Date</label>
              <Input type="date" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Product Requirements</label>
              <Textarea placeholder="Describe the products you need, sizes, colors, any customization requirements..." />
            </div>
          </div>
          <div className="text-center mt-6">
            <Button className="bg-gradient-to-r from-blue-600 to-slate-800 px-8">
              Request Quote
            </Button>
            <p className="text-gray-600 text-sm mt-3">
              We'll respond within 24 hours with a detailed quote
            </p>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default BulkOrders;
