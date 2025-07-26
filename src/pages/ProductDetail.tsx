import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingBag, Minus, Plus } from 'lucide-react';
import { useFavorites } from '../hooks/useFavorites';
import { useCart } from '../hooks/useCart';
import { useToast } from '@/hooks/use-toast';
import VirtualTryOnModal from '../components/VirtualTryOnModal';

const ProductDetail = () => {
  const { id } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [showTryOn, setShowTryOn] = useState(false);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const { addItem } = useCart();
  const { toast } = useToast();

  // Product database with all products
  const allProducts = [
    {
      id: 1,
      name: "Premium Cotton Shirt",
      category: "Men's Formal",
      price: 89.99,
      originalPrice: 129.99,
      description: "Experience premium comfort with our carefully crafted cotton shirt. Made from 100% organic cotton, this shirt offers superior breathability and a luxurious feel. Perfect for both professional and casual settings.",
      images: [
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Blue", "White", "Black", "Gray"],
      rating: 4.8,
      reviews: 152,
      brand: "SRK Premium",
      features: [
        "100% Organic Cotton",
        "Machine Washable",
        "Wrinkle Resistant",
        "Premium Quality Buttons",
        "Tailored Fit"
      ]
    },
    {
      id: 2,
      name: "Designer Blazer",
      category: "Men's Formal",
      price: 249.99,
      originalPrice: 329.99,
      description: "Elevate your professional wardrobe with this sophisticated designer blazer. Crafted from premium wool blend fabric, featuring contemporary styling and impeccable tailoring for the modern gentleman.",
      images: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      sizes: ["M", "L", "XL", "XXL"],
      colors: ["Black", "Navy", "Charcoal"],
      rating: 4.9,
      reviews: 89,
      brand: "SRK Elite",
      features: [
        "Premium Wool Blend",
        "Dry Clean Only",
        "Contemporary Fit",
        "Fully Lined",
        "Professional Styling"
      ]
    },
    {
      id: 3,
      name: "Casual Polo Shirt",
      category: "Men's Casual",
      price: 49.99,
      originalPrice: 69.99,
      description: "Comfortable and versatile polo shirt perfect for casual outings. Made from soft cotton blend fabric with moisture-wicking properties to keep you cool and comfortable all day long.",
      images: [
        "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Navy", "White", "Green"],
      rating: 4.6,
      reviews: 203,
      brand: "SRK Casual",
      features: [
        "Cotton Blend Fabric",
        "Moisture Wicking",
        "Comfortable Fit",
        "Easy Care",
        "Versatile Style"
      ]
    },
    {
      id: 4,
      name: "Sports Track Pants",
      category: "Men's Sports",
      price: 79.99,
      originalPrice: 99.99,
      description: "High-performance track pants designed for active lifestyle. Features advanced moisture-wicking technology and flexible fabric that moves with you during workouts and sports activities.",
      images: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      sizes: ["M", "L", "XL"],
      colors: ["Black", "Gray", "Navy"],
      rating: 4.7,
      reviews: 134,
      brand: "SRK Sports",
      features: [
        "Moisture Wicking Technology",
        "Flexible Fabric",
        "Drawstring Waist",
        "Side Pockets",
        "Athletic Fit"
      ]
    },
    {
      id: 5,
      name: "Elegant Maxi Dress",
      category: "Women's Party",
      price: 159.99,
      originalPrice: 199.99,
      description: "Stunning maxi dress perfect for special occasions. Features flowing silhouette, premium fabric, and elegant design that makes you feel confident and beautiful at any event.",
      images: [
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      sizes: ["XS", "S", "M", "L"],
      colors: ["Red", "Navy", "Emerald"],
      rating: 4.9,
      reviews: 98,
      brand: "SRK Elegance",
      features: [
        "Premium Fabric",
        "Flowing Silhouette",
        "Hand Wash Only",
        "Elegant Design",
        "Special Occasion"
      ]
    },
    {
      id: 6,
      name: "Professional Blazer",
      category: "Women's Formal",
      price: 189.99,
      originalPrice: 249.99,
      description: "Professional blazer designed for the modern working woman. Combines style and comfort with tailored fit and premium materials for a confident professional appearance.",
      images: [
        "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Navy", "Gray"],
      rating: 4.8,
      reviews: 156,
      brand: "SRK Professional",
      features: [
        "Tailored Fit",
        "Premium Materials",
        "Professional Design",
        "Versatile Styling",
        "Quality Construction"
      ]
    },
    {
      id: 7,
      name: "Casual Summer Top",
      category: "Women's Casual",
      price: 39.99,
      originalPrice: 59.99,
      description: "Light and breezy summer top perfect for warm weather. Made from breathable fabric with comfortable fit and stylish design for casual everyday wear.",
      images: [
        "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      sizes: ["XS", "S", "M", "L"],
      colors: ["White", "Pink", "Blue"],
      rating: 4.7,
      reviews: 267,
      brand: "SRK Casual",
      features: [
        "Breathable Fabric",
        "Comfortable Fit",
        "Summer Collection",
        "Easy Care",
        "Stylish Design"
      ]
    },
    {
      id: 8,
      name: "Traditional Kurti",
      category: "Women's Ethnic",
      price: 89.99,
      originalPrice: 119.99,
      description: "Beautiful traditional kurti with intricate designs and premium cotton fabric. Perfect for cultural events and traditional occasions with modern comfort.",
      images: [
        "https://images.unsplash.com/photo-1583391733956-6c78276477e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Blue", "Pink", "Yellow"],
      rating: 4.6,
      reviews: 143,
      brand: "SRK Traditional",
      features: [
        "Intricate Designs",
        "Premium Cotton",
        "Traditional Style",
        "Modern Comfort",
        "Cultural Events"
      ]
    },
    {
      id: 9,
      name: "Kids Rainbow T-Shirt",
      category: "Children's Casual",
      price: 29.99,
      originalPrice: 39.99,
      description: "Fun and colorful t-shirt designed for active kids. Made from soft, comfortable cotton that's perfect for play time and everyday adventures.",
      images: [
        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1503919005314-30d93d07d823?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      sizes: ["2-3Y", "4-5Y", "6-7Y"],
      colors: ["Multi", "Blue", "Pink"],
      rating: 4.7,
      reviews: 189,
      brand: "SRK Kids",
      features: [
        "Soft Cotton",
        "Colorful Design",
        "Kid-Friendly",
        "Comfortable Fit",
        "Easy Wash"
      ]
    },
    {
      id: 10,
      name: "School Uniform Set",
      category: "Children's School",
      price: 59.99,
      originalPrice: 79.99,
      description: "Complete school uniform set designed for comfort and durability. Includes shirt and pants/skirt made from quality fabric that withstands daily wear.",
      images: [
        "https://images.unsplash.com/photo-1503919005314-30d93d07d823?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      sizes: ["6-7Y", "8-9Y", "10-11Y", "12-13Y"],
      colors: ["Navy", "White", "Gray"],
      rating: 4.8,
      reviews: 234,
      brand: "SRK School",
      features: [
        "Complete Set",
        "Durable Fabric",
        "School Approved",
        "Comfortable Wear",
        "Quality Construction"
      ]
    },
    {
      id: 11,
      name: "Party Dress",
      category: "Children's Party",
      price: 79.99,
      originalPrice: 99.99,
      description: "Adorable party dress perfect for special celebrations. Features beautiful design, comfortable fit, and quality materials that make your little one shine at any event.",
      images: [
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1503919005314-30d93d07d823?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
      colors: ["Pink", "Purple", "Blue"],
      rating: 4.9,
      reviews: 167,
      brand: "SRK Party",
      features: [
        "Beautiful Design",
        "Special Occasions",
        "Comfortable Fit",
        "Quality Materials",
        "Party Perfect"
      ]
    },
    {
      id: 12,
      name: "Comfort Joggers",
      category: "Children's Playwear",
      price: 34.99,
      originalPrice: 49.99,
      description: "Comfortable joggers designed for active kids. Made from soft, stretchy fabric that allows free movement during play and sports activities.",
      images: [
        "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
      colors: ["Gray", "Black", "Navy"],
      rating: 4.6,
      reviews: 198,
      brand: "SRK Comfort",
      features: [
        "Soft Fabric",
        "Stretchy Material",
        "Active Wear",
        "Comfortable Fit",
        "Durable Construction"
      ]
    }
  ];

  // Find the specific product based on ID
  const product = allProducts.find(p => p.id === parseInt(id || '1')) || allProducts[0];
  const isProductFavorite = isFavorite(product.id);

  const handleFavoriteToggle = () => {
    if (isProductFavorite) {
      removeFavorite(product.id);
      toast({
        title: "Removed from favorites",
        description: `${product.name} has been removed from your favorites.`,
      });
    } else {
      addFavorite({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.images[0],
        category: product.category,
        rating: product.rating,
        brand: product.brand,
        sizes: product.sizes,
        colors: product.colors
      });
      toast({
        title: "Added to favorites",
        description: `${product.name} has been added to your favorites.`,
      });
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast({
        title: "Please select options",
        description: "Please select both size and color before adding to cart.",
        variant: "destructive",
      });
      return;
    }

    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
      brand: product.brand
    };

    addItem(cartItem);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={product.images[0]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-80 transition-opacity">
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-slate-800 text-white">
                {product.brand}
              </Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-4">{product.category}</p>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-400">⭐</span>
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-gray-500">({product.reviews} reviews)</span>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Size *</label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                    className="min-w-12"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Color *</label>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color ? 'border-gray-900' : 'border-gray-300'
                    } hover:scale-110 transition-transform`}
                    style={{ backgroundColor: color.toLowerCase() === 'multi' ? '#ff6b6b' : color.toLowerCase() }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Quantity</label>
              <div className="flex items-center space-x-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="font-medium min-w-8 text-center">{quantity}</span>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <Button 
                  className="flex-1 bg-gradient-to-r from-blue-600 to-slate-800 hover:from-blue-700 hover:to-slate-900"
                  size="lg"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={handleFavoriteToggle}
                  className={isProductFavorite ? 'border-red-500 text-red-500' : ''}
                >
                  <Heart className={`w-5 h-5 ${isProductFavorite ? 'fill-current' : ''}`} />
                </Button>
              </div>
              
              <Button 
                onClick={() => setShowTryOn(true)}
                variant="outline"
                size="lg"
                className="w-full"
              >
                Virtual Try-On
              </Button>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Try-On Modal */}
      {showTryOn && (
        <VirtualTryOnModal
          product={product}
          isOpen={showTryOn}
          onClose={() => setShowTryOn(false)}
        />
      )}

      <Footer />
    </div>
  );
};

export default ProductDetail;
