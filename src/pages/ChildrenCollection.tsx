
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';

const ChildrenCollection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');

  const categories = ['all', 'casual', 'formal', 'party', 'playwear', 'school'];
  const sizes = ['all', '2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y', '12-13Y'];

  const childrenProducts = [
    {
      id: 9,
      name: "Kids Rainbow T-Shirt",
      category: "casual",
      price: 29.99,
      originalPrice: 39.99,
      image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sizes: ["2-3Y", "4-5Y", "6-7Y"],
      colors: ["Multi", "Blue", "Pink"],
      rating: 4.7,
      brand: "SRK Kids"
    },
    {
      id: 10,
      name: "School Uniform Set",
      category: "school",
      price: 59.99,
      originalPrice: 79.99,
      image: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sizes: ["6-7Y", "8-9Y", "10-11Y", "12-13Y"],
      colors: ["Navy", "White", "Gray"],
      rating: 4.8,
      brand: "SRK School"
    },
    {
      id: 11,
      name: "Party Dress",
      category: "party",
      price: 79.99,
      originalPrice: 99.99,
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
      colors: ["Pink", "Purple", "Blue"],
      rating: 4.9,
      brand: "SRK Party"
    },
    {
      id: 12,
      name: "Comfort Joggers",
      category: "playwear",
      price: 34.99,
      originalPrice: 49.99,
      image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
      colors: ["Gray", "Black", "Navy"],
      rating: 4.6,
      brand: "SRK Comfort"
    }
  ];

  const filteredProducts = childrenProducts.filter(product => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Children's Collection</h1>
          <p className="text-xl text-gray-600">Comfortable and stylish clothes for kids</p>
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
                  max={200}
                  step={5}
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
                <label className="block text-sm font-medium text-gray-700 mb-3">Age Group</label>
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
                <div className="text-6xl mb-4">👶</div>
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

export default ChildrenCollection;
