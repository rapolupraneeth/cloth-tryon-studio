
import { useState } from 'react';
import { useFavorites } from '../hooks/useFavorites';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingBag, Eye, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const { state, removeFavorite, clearFavorites } = useFavorites();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="p-2 hover:bg-slate-100 transition-colors duration-300 relative">
          <Heart className="w-5 h-5 text-gray-700" />
          {state.count > 0 && (
            <Badge className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center p-0">
              {state.count}
            </Badge>
          )}
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>My Favorites ({state.count} items)</span>
            {state.items.length > 0 && (
              <Button variant="ghost" size="sm" onClick={clearFavorites}>
                Clear All
              </Button>
            )}
          </DialogTitle>
        </DialogHeader>

        {state.items.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-700 mb-2">No favorites yet</h3>
            <p className="text-gray-500">Heart some items to save them here!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {state.items.map((item) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative h-48">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 p-2 bg-white/80 hover:bg-white rounded-full"
                    onClick={() => removeFavorite(item.id)}
                  >
                    <X className="w-4 h-4 text-red-500" />
                  </Button>
                  <Badge className="absolute top-2 left-2 bg-gradient-to-r from-blue-600 to-slate-800 text-white">
                    {item.brand}
                  </Badge>
                </div>

                <div className="p-4 space-y-3">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-medium text-gray-900 text-sm line-clamp-2">{item.name}</h3>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-xs text-gray-600">{item.rating}</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 capitalize">{item.category}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-x-1">
                      <span className="font-bold text-gray-900">${item.price}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Link to={`/product/${item.id}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        <Eye className="w-3 h-3 mr-1" />
                        View
                      </Button>
                    </Link>
                    <Button size="sm" className="bg-gradient-to-r from-slate-600 to-blue-700 hover:from-slate-700 hover:to-blue-800">
                      <ShoppingBag className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default FavoritesList;
