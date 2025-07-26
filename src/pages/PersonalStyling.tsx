
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Star, Calendar, Clock, Users } from 'lucide-react';

const PersonalStyling = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const stylingPackages = [
    {
      name: "Quick Style Consultation",
      price: 49,
      duration: "30 minutes",
      features: ["Style assessment", "Color analysis", "Basic wardrobe tips", "Shopping recommendations"],
      popular: false
    },
    {
      name: "Complete Style Makeover",
      price: 149,
      duration: "2 hours",
      features: ["Full wardrobe audit", "Personal shopping session", "Style guide creation", "Follow-up consultation"],
      popular: true
    },
    {
      name: "VIP Styling Experience",
      price: 299,
      duration: "Full day",
      features: ["Complete wardrobe overhaul", "Personal shopping", "Custom design consultation", "Seasonal style updates"],
      popular: false
    }
  ];

  const stylists = [
    {
      name: "Sarah Johnson",
      specialty: "Corporate & Professional",
      experience: "8 years",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b890?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Mike Chen",
      specialty: "Casual & Street Style",
      experience: "6 years",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Emily Rodriguez",
      specialty: "Special Events & Fashion",
      experience: "10 years",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Personal Styling Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your wardrobe with our expert personal stylists. Get personalized fashion advice and curated looks that reflect your unique style.
          </p>
        </div>

        {/* Styling Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Choose Your Styling Package</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stylingPackages.map((pkg, index) => (
              <Card key={index} className={`p-6 relative ${pkg.popular ? 'border-2 border-blue-500 shadow-xl scale-105' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
                    Most Popular
                  </Badge>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">${pkg.price}</div>
                  <div className="flex items-center justify-center text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    {pkg.duration}
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-slate-800">
                  Book Now
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Meet Our Stylists */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Meet Our Expert Stylists</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stylists.map((stylist, index) => (
              <Card key={index} className="p-6 text-center">
                <img 
                  src={stylist.image} 
                  alt={stylist.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{stylist.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{stylist.specialty}</p>
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-4 h-4 mr-1 text-gray-500" />
                  <span className="text-gray-600">{stylist.experience} experience</span>
                </div>
                <div className="flex items-center justify-center mb-4">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 font-medium">{stylist.rating}</span>
                </div>
                <Button variant="outline" className="w-full">
                  Book with {stylist.name.split(' ')[0]}
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Book Consultation Form */}
        <Card className="p-8 bg-gradient-to-r from-blue-50 to-slate-50">
          <h2 className="text-2xl font-bold text-center mb-6">Book Your Styling Consultation</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <Input placeholder="Enter your full name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input type="email" placeholder="Enter your email" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <Input placeholder="Enter your phone number" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Preferred Date</label>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <Input type="date" />
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Tell us about your style goals</label>
              <Textarea placeholder="What would you like to achieve with your personal styling session?" />
            </div>
          </div>
          <div className="text-center mt-6">
            <Button className="bg-gradient-to-r from-blue-600 to-slate-800 px-8">
              Book Consultation
            </Button>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default PersonalStyling;
