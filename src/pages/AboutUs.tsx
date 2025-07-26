
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card } from '@/components/ui/card';
import { Users, Award, Globe, Heart } from 'lucide-react';
import { useState } from 'react';

const AboutUs = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About SRK Styles</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing fashion since 2025 with cutting-edge virtual try-on technology 
            and personalized styling solutions for every individual.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold mb-4 text-blue-600">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To democratize fashion by making style accessible to everyone through innovative 
              technology, sustainable practices, and personalized experiences that celebrate 
              individual expression.
            </p>
          </Card>
          
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-bold mb-4 text-slate-700">Our Vision</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To become the world's leading fashion-tech platform where technology meets 
              creativity, enabling everyone to discover their unique style while contributing 
              to a more sustainable fashion industry.
            </p>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">1M+</div>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          
          <div className="text-center">
            <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
            <p className="text-gray-600">Awards Won</p>
          </div>
          
          <div className="text-center">
            <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
            <p className="text-gray-600">Countries Served</p>
          </div>
          
          <div className="text-center">
            <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
        </div>

        {/* Story */}
        <div className="bg-white rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <div className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed space-y-6">
            <p>
              Founded in 2025, SRK Styles emerged from a simple yet powerful vision: to bridge 
              the gap between technology and fashion. Our founders, passionate about both style 
              and innovation, recognized the need for a more personalized and sustainable approach 
              to fashion retail.
            </p>
            <p>
              What started as a small team of fashion enthusiasts and tech innovators has grown 
              into a global platform serving millions of customers worldwide. We've pioneered 
              virtual try-on technology, custom design solutions, and AI-powered styling 
              recommendations that have transformed how people shop for clothes.
            </p>
            <p>
              Today, we continue to push the boundaries of fashion technology while staying 
              true to our core values of sustainability, inclusivity, and individual expression. 
              Every piece in our collection is carefully curated to ensure quality, style, and 
              ethical production practices.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Innovation</h3>
            <p className="text-gray-600">
              Continuously pushing the boundaries of fashion technology to create better 
              shopping experiences.
            </p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Sustainability</h3>
            <p className="text-gray-600">
              Committed to ethical practices and environmental responsibility in every 
              aspect of our business.
            </p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Inclusivity</h3>
            <p className="text-gray-600">
              Celebrating diversity and ensuring fashion is accessible to people of all 
              backgrounds and body types.
            </p>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
