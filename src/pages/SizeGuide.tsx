
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SizeGuide = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const sizingCharts = {
    men: {
      tops: [
        { size: 'S', chest: '36-38', waist: '28-30', length: '28' },
        { size: 'M', chest: '38-40', waist: '30-32', length: '29' },
        { size: 'L', chest: '42-44', waist: '34-36', length: '30' },
        { size: 'XL', chest: '46-48', waist: '38-40', length: '31' },
        { size: 'XXL', chest: '50-52', waist: '42-44', length: '32' }
      ],
      bottoms: [
        { size: '28', waist: '28', hip: '38', inseam: '32' },
        { size: '30', waist: '30', hip: '40', inseam: '32' },
        { size: '32', waist: '32', hip: '42', inseam: '34' },
        { size: '34', waist: '34', hip: '44', inseam: '34' },
        { size: '36', waist: '36', hip: '46', inseam: '34' }
      ]
    },
    women: {
      tops: [
        { size: 'XS', bust: '32-34', waist: '24-26', hip: '34-36' },
        { size: 'S', bust: '34-36', waist: '26-28', hip: '36-38' },
        { size: 'M', bust: '36-38', waist: '28-30', hip: '38-40' },
        { size: 'L', bust: '40-42', waist: '32-34', hip: '42-44' },
        { size: 'XL', bust: '44-46', waist: '36-38', hip: '46-48' }
      ],
      bottoms: [
        { size: '0', waist: '24', hip: '34', inseam: '30' },
        { size: '2', waist: '25', hip: '35', inseam: '30' },
        { size: '4', waist: '26', hip: '36', inseam: '32' },
        { size: '6', waist: '27', hip: '37', inseam: '32' },
        { size: '8', waist: '28', hip: '38', inseam: '32' }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Size Guide</h1>
          <p className="text-xl text-gray-600">Find your perfect fit with our comprehensive sizing charts</p>
        </div>

        <Tabs defaultValue="men" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="men">Men's Sizing</TabsTrigger>
            <TabsTrigger value="women">Women's Sizing</TabsTrigger>
            <TabsTrigger value="kids">Kids Sizing</TabsTrigger>
          </TabsList>

          <TabsContent value="men" className="space-y-8">
            <Card className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Men's Tops</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-3">Size</th>
                      <th className="border border-gray-300 p-3">Chest (inches)</th>
                      <th className="border border-gray-300 p-3">Waist (inches)</th>
                      <th className="border border-gray-300 p-3">Length (inches)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizingCharts.men.tops.map((row, index) => (
                      <tr key={index}>
                        <td className="border border-gray-300 p-3 font-medium">{row.size}</td>
                        <td className="border border-gray-300 p-3">{row.chest}</td>
                        <td className="border border-gray-300 p-3">{row.waist}</td>
                        <td className="border border-gray-300 p-3">{row.length}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Men's Bottoms</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-3">Size</th>
                      <th className="border border-gray-300 p-3">Waist (inches)</th>
                      <th className="border border-gray-300 p-3">Hip (inches)</th>
                      <th className="border border-gray-300 p-3">Inseam (inches)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizingCharts.men.bottoms.map((row, index) => (
                      <tr key={index}>
                        <td className="border border-gray-300 p-3 font-medium">{row.size}</td>
                        <td className="border border-gray-300 p-3">{row.waist}</td>
                        <td className="border border-gray-300 p-3">{row.hip}</td>
                        <td className="border border-gray-300 p-3">{row.inseam}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="women" className="space-y-8">
            {/* Similar structure for women's sizing */}
            <Card className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Women's Tops</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-3">Size</th>
                      <th className="border border-gray-300 p-3">Bust (inches)</th>
                      <th className="border border-gray-300 p-3">Waist (inches)</th>
                      <th className="border border-gray-300 p-3">Hip (inches)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizingCharts.women.tops.map((row, index) => (
                      <tr key={index}>
                        <td className="border border-gray-300 p-3 font-medium">{row.size}</td>
                        <td className="border border-gray-300 p-3">{row.bust}</td>
                        <td className="border border-gray-300 p-3">{row.waist}</td>
                        <td className="border border-gray-300 p-3">{row.hip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="kids">
            <Card className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Kids Sizing</h3>
              <p className="text-gray-600 mb-4">Children's sizes are based on age ranges and measurements.</p>
              <Button className="bg-gradient-to-r from-blue-600 to-slate-800">
                Contact Support for Kids Sizing
              </Button>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="p-6 mt-8 bg-gradient-to-r from-blue-50 to-slate-50">
          <h3 className="text-xl font-semibold mb-4">How to Measure</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">For Accurate Measurements:</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Use a flexible measuring tape</li>
                <li>• Measure over undergarments</li>
                <li>• Keep tape parallel to the floor</li>
                <li>• Take measurements when relaxed</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Still Not Sure?</h4>
              <p className="text-gray-600 mb-3">Our styling experts are here to help!</p>
              <Button variant="outline">Contact Personal Styling</Button>
            </div>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default SizeGuide;
