
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Camera, Smartphone, Monitor, Sparkles } from 'lucide-react';
import { useState } from 'react';

const VirtualTryOn = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Virtual Try-On Technology</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Experience the future of fashion with our AI-powered virtual try-on technology. 
            See how clothes look on you before you buy, from the comfort of your home.
          </p>
          <Button className="bg-gradient-to-r from-blue-600 to-slate-800 hover:from-blue-700 hover:to-slate-900 text-white px-8 py-3 rounded-full text-lg">
            Start Virtual Try-On
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Camera className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">3D Body Scanning</h3>
            <p className="text-gray-600">Advanced camera technology creates your 3D avatar for accurate fitting</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Smartphone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Mobile Compatible</h3>
            <p className="text-gray-600">Try on clothes anywhere using your smartphone camera</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Monitor className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-Time Preview</h3>
            <p className="text-gray-600">See instant results with realistic fabric movement and lighting</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Sparkles className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI Recommendations</h3>
            <p className="text-gray-600">Get personalized style suggestions based on your preferences</p>
          </Card>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Upload Photo</h3>
              <p className="text-gray-600">Take a photo or upload an existing one to create your avatar</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Select Clothing</h3>
              <p className="text-gray-600">Browse and select any item from our extensive collection</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Try & Buy</h3>
              <p className="text-gray-600">See the perfect fit and make confident purchase decisions</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-slate-800 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Shopping Experience?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of satisfied customers using our virtual try-on technology</p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold">
            Get Started Now
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VirtualTryOn;
