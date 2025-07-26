
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';

const SpringCollection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([30, 400]);
  const [selectedGender, setSelectedGender] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');

  const genders = ['all', 'men', 'women', 'kids'];
  const sizes = ['all', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const springProducts = [
    {
      id: 29,
      name: "Floral Midi Dress",
      category: "women",
      price: 129.99,
      originalPrice: 169.99,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Pink", "Yellow", "White"],
      rating: 4.8,
      brand: "SRK Spring"
    },
    {
      id: 30,
      name: "Light Cotton Blazer",
      category: "men",
      price: 189.99,
      originalPrice: 249.99,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sizes: ["M", "L", "XL", "XXL"],
      colors: ["Beige", "Light Blue", "Mint"],
      rating: 4.7,
      brand: "SRK Light"
    },
    {
      id: 31,
      name: "Kids Spring Outfit",
      category: "kids",
      price: 59.99,
      originalPrice: 79.99,
      image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sizes: ["4-5Y", "6-7Y", "8-9Y"],
      colors: ["Rainbow", "Pastel", "Bright"],
      rating: 4.6,
      brand: "SRK Kids"
    },
    {
      id: 32,
      name: "Pastel Cardigan",
      category: "women",
      price: 89.99,
      originalPrice: 119.99,
      image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Lavender", "Mint", "Peach"],
      rating: 4.5,
      brand: "SRK Soft"
    }
  ];

  const filteredProducts = springProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGender = selectedGender === 'all' || product.category === selectedGender;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSize = selectedSize === 'all' || product.sizes.includes(selectedSize);
    
    return matchesSearch && matchesGender && matchesPrice && matchesSize;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-pink-50 to-yellow-50">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Spring Collection 🌸</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Embrace the season of renewal with our fresh spring collection. Light fabrics, 
            floral patterns, and pastel colors that celebrate new beginnings.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="font-semibold text-gray-900 mb-4">Filters</h3>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}
                </label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={400}
                  step={20}
                  className="w-full"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Category</label>
                <div className="space-y-2">
                  {genders.map((gender) => (
                    <Button
                      key={gender}
                      variant={selectedGender === gender ? "default" : "outline"}
                      onClick={() => setSelectedGender(gender)}
                      className="w-full justify-start capitalize"
                    >
                      {gender === 'all' ? 'All Categories' : gender}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Size</label>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <Badge
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => setSelectedSize(size)}
                    >
                      {size.toUpperCase()}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/4">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">{filteredProducts.length} products found</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🌸</div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">No spring collection found</h3>
                <p className="text-gray-500">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SpringCollection;
