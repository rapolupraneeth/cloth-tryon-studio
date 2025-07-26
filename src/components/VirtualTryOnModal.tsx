
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { RotateCcw, Download, Share2, ShoppingBag } from 'lucide-react';

interface Product {
  sizes: string[];
  colors: string[];
  name: string;
  image: string;
  price: number;
}

interface VirtualTryOnModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const VirtualTryOnModal = ({ product, isOpen, onClose }: VirtualTryOnModalProps) => {
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [avatarPose, setAvatarPose] = useState('front');

  const avatarPoses = [
    { value: 'front', label: 'Front View', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { value: 'side', label: 'Side View', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
    { value: 'back', label: 'Back View', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-slate-800 bg-clip-text text-transparent">
            Virtual Try-On Studio
          </DialogTitle>
        </DialogHeader>

        <div className="grid lg:grid-cols-3 gap-6 mt-6">
          {/* Avatar Area */}
          <div className="lg:col-span-2">
            <Card className="p-6 bg-gradient-to-br from-gray-100 to-gray-200 min-h-[500px]">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Your Virtual Avatar</h3>
                <div className="flex space-x-2">
                  {avatarPoses.map((pose) => (
                    <Button
                      key={pose.value}
                      variant={avatarPose === pose.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => setAvatarPose(pose.value)}
                      className="flex items-center space-x-1"
                    >
                      <img src={pose.image} alt={pose.label} className="w-6 h-6 rounded object-cover" />
                      <span className="hidden sm:inline">{pose.label}</span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Avatar Display Area */}
              <div className="bg-white rounded-lg shadow-inner min-h-[400px] flex items-center justify-center relative overflow-hidden">
                {/* Simulated Avatar */}
                <div className="text-center space-y-4">
                  <div className="w-48 h-64 mx-auto relative">
                    <img 
                      src={avatarPoses.find(pose => pose.value === avatarPose)?.image}
                      alt="Avatar"
                      className="w-full h-full object-cover rounded-lg animate-pulse"
                    />
                  </div>
                  
                  {/* Product Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 border-2 border-dashed border-blue-300">
                      <img 
                        src={product?.image} 
                        alt={product?.name}
                        className="w-16 h-16 object-cover rounded mb-2 mx-auto"
                      />
                      <p className="text-sm text-gray-600">
                        {product?.name} in {selectedColor}
                      </p>
                      <p className="text-xs text-gray-500">Size: {selectedSize}</p>
                    </div>
                  </div>
                </div>

                {/* Loading Overlay */}
                <div className="absolute top-4 right-4 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm animate-pulse">
                  Rendering...
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center space-x-4 mt-4">
                <Button variant="outline" size="sm">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset Pose
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Save Image
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </Card>
          </div>

          {/* Controls Panel */}
          <div className="space-y-6">
            {/* Product Info */}
            <Card className="p-4">
              <h4 className="font-semibold mb-3">{product?.name}</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-2">Size</label>
                  <Select value={selectedSize} onValueChange={setSelectedSize}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {product?.sizes?.map((size: string) => (
                        <SelectItem key={size} value={size}>{size}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Color</label>
                  <Select value={selectedColor} onValueChange={setSelectedColor}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {product?.colors?.map((color: string) => (
                        <SelectItem key={color} value={color}>{color}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg">
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Perfect Fit Analysis:</strong>
                </p>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span>Fit:</span>
                    <span className="text-green-600 font-medium">Excellent (95%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Style Match:</span>
                    <span className="text-blue-600 font-medium">Great (88%)</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Avatar Customization */}
            <Card className="p-4">
              <h4 className="font-semibold mb-3">Avatar Settings</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-2">Body Type</label>
                  <Select defaultValue="regular">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="slim">Slim</SelectItem>
                      <SelectItem value="regular">Regular</SelectItem>
                      <SelectItem value="curvy">Curvy</SelectItem>
                      <SelectItem value="athletic">Athletic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Height</label>
                  <Select defaultValue="medium">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="short">Short (5'0" - 5'4")</SelectItem>
                      <SelectItem value="medium">Medium (5'5" - 5'8")</SelectItem>
                      <SelectItem value="tall">Tall (5'9" - 6'2")</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>

            {/* Purchase Section */}
            <Card className="p-4 bg-gradient-to-br from-blue-50 to-slate-50">
              <div className="text-center space-y-3">
                <div className="text-2xl font-bold text-gray-900">${product?.price}</div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-slate-600 hover:from-blue-600 hover:to-slate-700 text-white">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
                <p className="text-xs text-gray-600">
                  Free shipping on orders over $75
                </p>
              </div>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VirtualTryOnModal;
