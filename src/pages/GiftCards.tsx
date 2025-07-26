
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Gift, Mail, Calendar, CreditCard } from 'lucide-react';

const GiftCards = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(50);

  const giftCardAmounts = [25, 50, 100, 150, 200, 500];

  const giftCardDesigns = [
    {
      name: "Classic Elegance",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      theme: "Sophisticated and timeless"
    },
    {
      name: "Modern Chic",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      theme: "Contemporary and stylish"
    },
    {
      name: "Festive Celebration",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      theme: "Perfect for special occasions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🎁</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Gift Cards</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Give the gift of style! Perfect for any occasion, our gift cards let your loved ones choose exactly what they want.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Gift Card Purchase */}
          <div>
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Purchase Gift Card</h2>
              
              {/* Amount Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-3">Select Amount</label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {giftCardAmounts.map((amount) => (
                    <Button
                      key={amount}
                      variant={selectedAmount === amount ? "default" : "outline"}
                      onClick={() => setSelectedAmount(amount)}
                      className="h-12"
                    >
                      ${amount}
                    </Button>
                  ))}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Custom amount:</span>
                  <Input
                    type="number"
                    placeholder="$"
                    className="w-24"
                    onChange={(e) => setSelectedAmount(Number(e.target.value))}
                  />
                </div>
              </div>

              {/* Design Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-3">Choose Design</label>
                <div className="grid grid-cols-3 gap-3">
                  {giftCardDesigns.map((design, index) => (
                    <div key={index} className="cursor-pointer border-2 border-gray-200 rounded-lg p-2 hover:border-blue-500 transition-colors">
                      <img 
                        src={design.image} 
                        alt={design.name}
                        className="w-full h-20 object-cover rounded mb-2"
                      />
                      <p className="text-xs font-medium text-center">{design.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recipient Information */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Recipient Email</label>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <Input placeholder="Enter recipient's email" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Recipient Name</label>
                  <Input placeholder="Enter recipient's name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Personal Message</label>
                  <Textarea placeholder="Write a personal message (optional)" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Delivery Date</label>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <Input type="date" />
                  </div>
                </div>
              </div>

              {/* Purchase Summary */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Gift Card Value:</span>
                  <span className="text-2xl font-bold text-blue-600">${selectedAmount}</span>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-blue-600 to-slate-800 h-12">
                <CreditCard className="w-4 h-4 mr-2" />
                Purchase Gift Card
              </Button>
            </Card>
          </div>

          {/* Gift Card Benefits & Info */}
          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Why Choose Our Gift Cards?</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">No Expiration Date</p>
                    <p className="text-gray-600 text-sm">Our gift cards never expire</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Instant Delivery</p>
                    <p className="text-gray-600 text-sm">Delivered via email immediately or on your chosen date</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Works Site-Wide</p>
                    <p className="text-gray-600 text-sm">Can be used on any product across our collections</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium">Easy to Redeem</p>
                    <p className="text-gray-600 text-sm">Simple checkout process with gift card code</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Perfect For</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg">
                  <div className="text-2xl mb-2">🎂</div>
                  <p className="font-medium">Birthdays</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg">
                  <div className="text-2xl mb-2">🎄</div>
                  <p className="font-medium">Holidays</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg">
                  <div className="text-2xl mb-2">💍</div>
                  <p className="font-medium">Weddings</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg">
                  <div className="text-2xl mb-2">🎓</div>
                  <p className="font-medium">Graduation</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-blue-50 to-slate-50">
              <h3 className="text-xl font-bold mb-4">Check Gift Card Balance</h3>
              <p className="text-gray-600 mb-4">Enter your gift card code to check remaining balance</p>
              <div className="flex space-x-2">
                <Input placeholder="Enter gift card code" />
                <Button variant="outline">Check Balance</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GiftCards;
