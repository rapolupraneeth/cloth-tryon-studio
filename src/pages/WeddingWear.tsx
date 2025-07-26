
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';

const WeddingWear = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([100, 1000]);
  const [selectedGender, setSelectedGender] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');

  const genders = ['all', 'men', 'women', 'unisex'];
  const sizes = ['all', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const weddingProducts = [
    {
      id: 21,
      name: "Bridal Gown",
      category: "women",
      price: 899.99,
      originalPrice: 1199.99,
      image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sizes: ["XS", "S", "M", "L"],
      colors: ["White", "Ivory", "Champagne"],
      rating: 4.9,
      brand: "SRK Bridal"
    },
    {
      id: 22,
      name: "Groom's Tuxedo",
      category: "men",
      price: 699.99,
      originalPrice: 899.99,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sizes: ["M", "L", "XL", "XXL"],
      colors: ["Black", "Navy", "Charcoal"],
      rating: 4.8,
      brand: "SRK Formal"
    },
    {
      id: 23,
      name: "Bridesmaid Dress",
      category: "women",
      price: 249.99,
      originalPrice: 329.99,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Rose", "Lavender", "Sage"],
      rating: 4.7,
      brand: "SRK Party"
    },
    {
      id: 24,
      name: "Wedding Guest Suit",
      category: "men",
      price: 449.99,
      originalPrice: 599.99,
      image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Navy", "Gray", "Charcoal"],
      rating: 4.6,
      brand: "SRK Formal"
    }
  ];

  const filteredProducts = weddingProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGender = selectedGender === 'all' || product.category === selectedGender;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSize = selectedSize === 'all' || product.sizes.includes(selectedSize);
    
    return matchesSearch && matchesGender && matchesPrice && matchesSize;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Wedding Collection</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make your special day unforgettable with our exquisite wedding collection. 
            From stunning bridal gowns to elegant groom's attire and perfect guest outfits.
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
                  max={1000}
                  step={50}
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
                <div className="text-6xl mb-4">💒</div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">No wedding wear found</h3>
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

export default WeddingWear;
