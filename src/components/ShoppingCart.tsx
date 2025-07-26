
import { useState } from 'react';
import { useCart } from '../hooks/useCart';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const ShoppingCart = () => {
  const { state, removeItem, updateQuantity, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const handleQuantityChange = (index: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(index);
    } else {
      updateQuantity(index, newQuantity);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-100 transition-colors duration-300 relative">
          <ShoppingBag className="w-5 h-5 text-gray-700" />
          {state.itemCount > 0 && (
            <Badge className="absolute -top-1 -right-1 bg-slate-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center p-0">
              {state.itemCount}
            </Badge>
          )}
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Shopping Cart ({state.itemCount} items)</span>
            {state.items.length > 0 && (
              <Button variant="ghost" size="sm" onClick={clearCart}>
                Clear All
              </Button>
            )}
          </DialogTitle>
        </DialogHeader>

        {state.items.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-700 mb-2">Your cart is empty</h3>
            <p className="text-gray-500">Add some items to get started!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {state.items.map((item, index) => (
              <Card key={`${item.id}-${item.size}-${item.color}`} className="p-4">
                <div className="flex items-center space-x-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.brand}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        Size: {item.size}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Color: {item.color}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuantityChange(index, item.quantity - 1)}
                    >
                      <Minus className="w-3 h-3" />
                    </Button>
                    <span className="font-medium min-w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuantityChange(index, item.quantity + 1)}
                    >
                      <Plus className="w-3 h-3" />
                    </Button>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    <p className="text-sm text-gray-500">${item.price} each</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeItem(index)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}

            <div className="border-t pt-4">
              <div className="flex items-center justify-between text-xl font-bold">
                <span>Total: ${state.total.toFixed(2)}</span>
              </div>
              <div className="flex space-x-4 mt-4">
                <Button 
                  className="flex-1 bg-gradient-to-r from-blue-600 to-slate-800 hover:from-blue-700 hover:to-slate-900"
                  onClick={() => {
                    setIsOpen(false);
                    window.location.href = '/checkout';
                  }}
                >
                  Checkout
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setIsOpen(false)}
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ShoppingCart;
