import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingBag, Eye, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../hooks/useFavorites';
import { useCart } from '../hooks/useCart';
import VirtualTryOnModal from './VirtualTryOnModal';
import CustomDesignModal from './CustomDesignModal';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    category: string;
    price: number;
    originalPrice?: number;
    image: string;
    sizes: string[];
    colors: string[];
    rating: number;
    brand: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [showTryOn, setShowTryOn] = useState(false);
  const [showCustomDesign, setShowCustomDesign] = useState(false);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const { addItem } = useCart();
  const isProductFavorite = isFavorite(product.id);

  const handleFavoriteToggle = () => {
    if (isProductFavorite) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: product.sizes[0], // Default to first available size
      color: product.colors[0], // Default to first available color
      quantity: 1,
      brand: product.brand
    };
    addItem(cartItem);
  };

  return (
    <>
      <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0">
        <div className="relative overflow-hidden h-64">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          
          {/* Brand Badge */}
          <div className="absolute top-4 left-4">
            <Badge className="bg-gradient-to-r from-blue-600 to-slate-800 text-white">
              {product.brand}
            </Badge>
          </div>

          {/* Favorite Button */}
          <Button
            variant="ghost"
            size="sm"
            className={`absolute top-4 right-4 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ${
              isProductFavorite ? 'bg-red-100 hover:bg-red-200 opacity-100' : 'bg-white/80 hover:bg-white'
            }`}
            onClick={handleFavoriteToggle}
          >
            <Heart className={`w-4 h-4 ${isProductFavorite ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
          </Button>

          {/* Quick Actions */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 space-y-2">
            <div className="flex gap-2">
              <Button 
                onClick={() => setShowTryOn(true)}
                className="flex-1 bg-gradient-to-r from-blue-600 to-slate-800 hover:from-blue-700 hover:to-slate-900 text-white rounded-full text-sm"
              >
                Virtual Try-On
              </Button>
              <Button 
                onClick={() => setShowCustomDesign(true)}
                className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white rounded-full text-sm"
              >
                <Palette className="w-3 h-3 mr-1" />
                Custom Design
              </Button>
            </div>
            <div className="flex gap-2">
              <Link to={`/product/${product.id}`} className="flex-1">
                <Button variant="outline" className="w-full bg-white/90 hover:bg-white rounded-full">
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </Link>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-slate-600 to-blue-700 hover:from-slate-700 hover:to-blue-800 text-white rounded-full px-4"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-gray-900 text-lg line-clamp-2">{product.name}</h3>
              <div className="flex items-center space-x-1">
                <span className="text-yellow-400">⭐</span>
                <span className="text-sm text-gray-600">{product.rating}</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 capitalize mb-3">{product.category}</p>
          </div>

          {/* Available Sizes */}
          <div className="flex flex-wrap gap-1">
            {product.sizes.slice(0, 4).map((size, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {size}
              </Badge>
            ))}
            {product.sizes.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{product.sizes.length - 4}
              </Badge>
            )}
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="space-x-2">
              <span className="text-2xl font-bold text-gray-900">${product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
              )}
            </div>
          </div>
        </div>
      </Card>

      {/* Try-On Modal */}
      {showTryOn && (
        <VirtualTryOnModal
          product={product}
          isOpen={showTryOn}
          onClose={() => setShowTryOn(false)}
        />
      )}

      {/* Custom Design Modal */}
      {showCustomDesign && (
        <CustomDesignModal
          product={product}
          isOpen={showCustomDesign}
          onClose={() => setShowCustomDesign(false)}
        />
      )}
    </>
  );
};

export default ProductCard;
