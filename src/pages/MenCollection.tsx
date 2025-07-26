
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';

const MenCollection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');

  const categories = ['all', 'formal', 'casual', 'party', 'sports', 'traditional'];
  const sizes = ['all', 'S', 'M', 'L', 'XL', 'XXL'];

  const menProducts = [
    {
      id: 1,
      name: "Premium Cotton Shirt",
      category: "formal",
      price: 89.99,
      originalPrice: 129.99,
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Blue", "White", "Black"],
      rating: 4.8,
      brand: "SRK Premium"
    },
    {
      id: 2,
      name: "Designer Blazer",
      category: "formal",
      price: 249.99,
      originalPrice: 329.99,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sizes: ["M", "L", "XL", "XXL"],
      colors: ["Black", "Navy", "Charcoal"],
      rating: 4.9,
      brand: "SRK Elite"
    },
    {
      id: 3,
      name: "Casual Polo Shirt",
      category: "casual",
      price: 49.99,
      originalPrice: 69.99,
      image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Navy", "White", "Green"],
      rating: 4.6,
      brand: "SRK Casual"
    },
    {
      id: 4,
      name: "Sports Track Pants",
      category: "sports",
      price: 79.99,
      originalPrice: 99.99,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sizes: ["M", "L", "XL"],
      colors: ["Black", "Gray", "Navy"],
      rating: 4.7,
      brand: "SRK Sports"
    }
  ];

  const filteredProducts = menProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSize = selectedSize === 'all' || product.sizes.includes(selectedSize);
    
    return matchesSearch && matchesCategory && matchesPrice && matchesSize;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Men's Collection</h1>
          <p className="text-xl text-gray-600">Discover premium fashion for the modern man</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="font-semibold text-gray-900 mb-4">Filters</h3>
              
              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}
                </label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={500}
                  step={10}
                  className="w-full"
                />
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Category</label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      onClick={() => setSelectedCategory(category)}
                      className="w-full justify-start capitalize"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
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

          {/* Products Grid */}
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
                <div className="text-6xl mb-4">👔</div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">No products found</h3>
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

export default MenCollection;
