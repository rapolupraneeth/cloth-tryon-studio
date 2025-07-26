
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingBag } from 'lucide-react';
import VirtualTryOnModal from './VirtualTryOnModal';
import CustomDesignModal from './CustomDesignModal';

interface Product {
  id: number;
  name: string;
  category: string;
  occasion: string;
  season: string;
  price: number;
  originalPrice: number;
  image: string;
  colors: string[];
  sizes: string[];
  rating: number;
  isNew?: boolean;
  isBestseller?: boolean;
}

interface FeaturedProductsProps {
  searchQuery: string;
}

const FeaturedProducts = ({ searchQuery }: FeaturedProductsProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showTryOn, setShowTryOn] = useState(false);
  const [showDesignModal, setShowDesignModal] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: "Premium Cotton Shirt",
      category: "Men",
      occasion: "Formal",
      season: "All Season",
      price: 89.99,
      originalPrice: 129.99,
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      colors: ["Blue", "White", "Black"],
      sizes: ["S", "M", "L", "XL"],
      rating: 4.8,
      isNew: true
    },
    {
      id: 2,
      name: "Elegant Maxi Dress",
      category: "Women",
      occasion: "Party",
      season: "Summer",
      price: 159.99,
      originalPrice: 199.99,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      colors: ["Red", "Navy", "Emerald"],
      sizes: ["XS", "S", "M", "L"],
      rating: 4.9,
      isBestseller: true
    },
    {
      id: 3,
      name: "Kids Rainbow T-Shirt",
      category: "Children",
      occasion: "Casual",
      season: "Spring",
      price: 29.99,
      originalPrice: 39.99,
      image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      colors: ["Multi", "Blue", "Pink"],
      sizes: ["2-3Y", "4-5Y", "6-7Y"],
      rating: 4.7,
      isNew: true
    },
    {
      id: 4,
      name: "Designer Blazer",
      category: "Men",
      occasion: "Formal",
      season: "Winter",
      price: 249.99,
      originalPrice: 329.99,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      colors: ["Black", "Charcoal", "Navy"],
      sizes: ["M", "L", "XL", "XXL"],
      rating: 4.6,
      isBestseller: true
    }
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.occasion.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.season.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleTryOn = (product: Product) => {
    setSelectedProduct(product);
    setShowTryOn(true);
  };

  const handleCustomDesign = (product: Product) => {
    setSelectedProduct(product);
    setShowDesignModal(true);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked collection of trending styles
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 space-y-2">
                  {product.isNew && (
                    <Badge className="bg-blue-600 hover:bg-blue-700 text-white">New</Badge>
                  )}
                  {product.isBestseller && (
                    <Badge className="bg-slate-700 hover:bg-slate-800 text-white">Bestseller</Badge>
                  )}
                </div>

                {/* Wishlist */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                </Button>

                {/* Quick Action Buttons */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 space-y-2">
                  <Button 
                    onClick={() => handleTryOn(product)}
                    className="w-full bg-gradient-to-r from-blue-600 to-slate-800 hover:from-blue-700 hover:to-slate-900 text-white rounded-full"
                  >
                    Virtual Try-On
                  </Button>
                  <Button 
                    onClick={() => handleCustomDesign(product)}
                    variant="outline"
                    className="w-full bg-white/90 hover:bg-white rounded-full"
                  >
                    Add Custom Design
                  </Button>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900 text-lg">{product.name}</h3>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{product.category}</span>
                    <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded-full">{product.occasion}</span>
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full">{product.season}</span>
                  </div>
                </div>

                {/* Colors */}
                <div className="flex space-x-2">
                  {product.colors.slice(0, 3).map((color, index) => (
                    <div
                      key={index}
                      className="w-6 h-6 rounded-full border-2 border-gray-200 cursor-pointer hover:scale-110 transition-transform"
                      style={{
                        backgroundColor: color.toLowerCase() === 'multi' ? 
                          'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)' : 
                          color.toLowerCase()
                      }}
                    ></div>
                  ))}
                  {product.colors.length > 3 && (
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600">
                      +{product.colors.length - 3}
                    </div>
                  )}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="space-x-2">
                    <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                    <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                  </div>
                  <Button size="sm" className="bg-gradient-to-r from-slate-600 to-blue-700 hover:from-slate-700 hover:to-blue-800 text-white rounded-full">
                    <ShoppingBag className="w-4 h-4 mr-1" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search terms</p>
          </div>
        )}

        {/* Modals */}
        {showTryOn && (
          <VirtualTryOnModal
            product={selectedProduct}
            isOpen={showTryOn}
            onClose={() => setShowTryOn(false)}
          />
        )}

        {showDesignModal && (
          <CustomDesignModal
            product={selectedProduct}
            isOpen={showDesignModal}
            onClose={() => setShowDesignModal(false)}
          />
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
