
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';

const SummerCollection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([25, 300]);
  const [selectedGender, setSelectedGender] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');

  const genders = ['all', 'men', 'women', 'kids'];
  const sizes = ['all', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const summerProducts = [
    {
      id: 33,
      name: "Linen Beach Dress",
      category: "women",
      price: 99.99,
      originalPrice: 129.99,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sizes: ["XS", "S", "M", "L"],
      colors: ["White", "Coral", "Turquoise"],
      rating: 4.8,
      brand: "SRK Beach"
    },
    {
      id: 34,
      name: "Cotton Summer Shorts",
      category: "men",
      price: 49.99,
      originalPrice: 69.99,
      image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Navy", "Khaki", "White"],
      rating: 4.7,
      brand: "SRK Casual"
    },
    {
      id: 35,
      name: "Swimwear Set",
      category: "women",
      price: 79.99,
      originalPrice: 99.99,
      image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Blue", "Pink", "Black"],
      rating: 4.6,
      brand: "SRK Swim"
    },
    {
      id: 36,
      name: "Kids Summer Tee",
      category: "kids",
      price: 29.99,
      originalPrice: 39.99,
      image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sizes: ["4-5Y", "6-7Y", "8-9Y"],
      colors: ["Sunny", "Ocean", "Tropical"],
      rating: 4.5,
      brand: "SRK Kids"
    }
  ];

  const filteredProducts = summerProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGender = selectedGender === 'all' || product.category === selectedGender;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSize = selectedSize === 'all' || product.sizes.includes(selectedSize);
    
    return matchesSearch && matchesGender && matchesPrice && matchesSize;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-blue-50">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Summer Collection ☀️</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beat the heat in style with our breezy summer collection. Lightweight fabrics, 
            vibrant colors, and comfortable designs for the sunny season.
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
                  max={300}
                  step={15}
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
                <div className="text-6xl mb-4">☀️</div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">No summer collection found</h3>
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

export default SummerCollection;
