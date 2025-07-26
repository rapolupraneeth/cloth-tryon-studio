
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';

const NewArrivals = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 600]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');

  const categories = ['all', 'trending', 'limited-edition', 'bestseller', 'featured'];
  const sizes = ['all', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const newProducts = [
    {
      id: 21,
      name: "Tech-Wear Jacket",
      category: "trending",
      price: 199.99,
      originalPrice: 249.99,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sizes: ["M", "L", "XL"],
      colors: ["Black", "Gray", "Navy"],
      rating: 4.8,
      brand: "SRK Tech"
    },
    {
      id: 22,
      name: "Sustainable Cotton Dress",
      category: "featured",
      price: 149.99,
      originalPrice: 199.99,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Green", "Blue", "Beige"],
      rating: 4.9,
      brand: "SRK Eco"
    },
    {
      id: 23,
      name: "Limited Edition Sneakers",
      category: "limited-edition",
      price: 299.99,
      originalPrice: 399.99,
      image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sizes: ["S", "M", "L", "XL"],
      colors: ["White", "Black", "Red"],
      rating: 4.7,
      brand: "SRK Limited"
    },
    {
      id: 24,
      name: "Smart Casual Shirt",
      category: "bestseller",
      price: 79.99,
      originalPrice: 99.99,
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Blue", "White", "Pink"],
      rating: 4.6,
      brand: "SRK Smart"
    }
  ];

  const filteredProducts = newProducts.filter(product => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">New Arrivals</h1>
          <p className="text-xl text-gray-600">Discover the latest fashion trends and exclusive pieces</p>
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
                  max={600}
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
                      {category.replace('-', ' ')}
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
              <p className="text-gray-600">{filteredProducts.length} new products found</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🆕</div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">No new arrivals found</h3>
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

export default NewArrivals;
