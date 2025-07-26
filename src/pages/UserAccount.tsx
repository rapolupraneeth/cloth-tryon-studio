import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, ShoppingBag, Heart, LogOut, Settings, Package, Palette } from 'lucide-react';

const UserAccount = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('profile');

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    joinedDate: "January 2024",
    totalOrders: 12,
    totalSpent: 1450.99
  };

  const recentOrders = [
    {
      id: "ORD-001",
      date: "2024-12-15",
      status: "Delivered",
      total: 89.99,
      items: 2
    },
    {
      id: "ORD-002", 
      date: "2024-12-10",
      status: "Shipped",
      total: 159.99,
      items: 1
    },
    {
      id: "ORD-003",
      date: "2024-12-05",
      status: "Processing",
      total: 249.99,
      items: 3
    }
  ];

  const customDesigns = [
    {
      id: "CD-001",
      name: "Custom Wedding Suit",
      status: "In Production",
      orderDate: "2024-12-10",
      expectedDate: "2024-12-20",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "CD-002",
      name: "Personalized T-Shirt",
      status: "Completed",
      orderDate: "2024-11-25",
      expectedDate: "2024-12-05",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'designs', label: 'My Designs', icon: Palette },
    { id: 'favorites', label: 'Favorites', icon: Heart },
    { id: 'cart', label: 'Cart', icon: ShoppingBag },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Account</h1>
          <p className="text-xl text-gray-600">Manage your profile and orders</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">{user.name}</h3>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-sm text-gray-500 mt-2">Member since {user.joinedDate}</p>
              </div>

              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <Button
                      key={tab.id}
                      variant={activeTab === tab.id ? "default" : "ghost"}
                      onClick={() => setActiveTab(tab.id)}
                      className="w-full justify-start"
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {tab.label}
                    </Button>
                  );
                })}
                
                <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </nav>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'profile' && (
              <Card className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Profile Overview</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-2">Total Orders</h3>
                    <p className="text-3xl font-bold text-blue-600">{user.totalOrders}</p>
                  </div>
                  <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-2">Total Spent</h3>
                    <p className="text-3xl font-bold text-slate-600">${user.totalSpent}</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-2">Member Status</h3>
                    <p className="text-lg font-semibold text-blue-600">Premium</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    {recentOrders.slice(0, 3).map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">Order {order.id}</p>
                          <p className="text-sm text-gray-600">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant={order.status === 'Delivered' ? 'default' : 'outline'}>
                            {order.status}
                          </Badge>
                          <p className="text-sm font-medium text-gray-900 mt-1">${order.total}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            )}

            {activeTab === 'orders' && (
              <Card className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Order History</h2>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-gray-900">Order {order.id}</h3>
                          <p className="text-gray-600">Placed on {order.date}</p>
                          <p className="text-sm text-gray-500">{order.items} items</p>
                        </div>
                        <div className="text-right">
                          <Badge variant={order.status === 'Delivered' ? 'default' : 'outline'}>
                            {order.status}
                          </Badge>
                          <p className="text-xl font-bold text-gray-900 mt-2">${order.total}</p>
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <Button variant="outline" size="sm">View Details</Button>
                        <Button variant="outline" size="sm">Track Order</Button>
                        {order.status === 'Delivered' && (
                          <Button variant="outline" size="sm">Reorder</Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {activeTab === 'designs' && (
              <Card className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">My Custom Designs</h2>
                <div className="space-y-6">
                  {customDesigns.map((design) => (
                    <div key={design.id} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start space-x-4">
                        <img 
                          src={design.image} 
                          alt={design.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-gray-900">{design.name}</h3>
                            <Badge variant={design.status === 'Completed' ? 'default' : 'outline'}>
                              {design.status}
                            </Badge>
                          </div>
                          <p className="text-gray-600 text-sm mb-1">Order ID: {design.id}</p>
                          <p className="text-gray-600 text-sm mb-1">Ordered: {design.orderDate}</p>
                          <p className="text-gray-600 text-sm">Expected: {design.expectedDate}</p>
                        </div>
                      </div>
                      <div className="flex space-x-3 mt-4">
                        <Button variant="outline" size="sm">View Design</Button>
                        <Button variant="outline" size="sm">Download Files</Button>
                        {design.status === 'Completed' && (
                          <Button variant="outline" size="sm">Reorder</Button>
                        )}
                      </div>
                    </div>
                  ))}
                  
                  {customDesigns.length === 0 && (
                    <div className="text-center py-12">
                      <Palette className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-600 mb-2">No custom designs yet</h3>
                      <p className="text-gray-500 mb-4">Start creating your personalized designs</p>
                      <Button className="bg-gradient-to-r from-orange-500 to-pink-500">
                        Create Custom Design
                      </Button>
                    </div>
                  )}
                </div>
              </Card>
            )}

            {activeTab === 'favorites' && (
              <Card className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">My Favorites</h2>
                <div className="text-center py-12">
                  <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No favorites yet</h3>
                  <p className="text-gray-500 mb-4">Start adding products to your favorites to see them here</p>
                  <Button className="bg-gradient-to-r from-blue-600 to-slate-800">
                    Browse Products
                  </Button>
                </div>
              </Card>
            )}

            {activeTab === 'cart' && (
              <Card className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Shopping Cart</h2>
                <div className="text-center py-12">
                  <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">Your cart is empty</h3>
                  <p className="text-gray-500 mb-4">Add some products to get started</p>
                  <Button className="bg-gradient-to-r from-blue-600 to-slate-800">
                    Start Shopping
                  </Button>
                </div>
              </Card>
            )}

            {activeTab === 'settings' && (
              <Card className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Account Settings</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input 
                          type="text" 
                          value={user.name}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input 
                          type="email" 
                          value={user.email}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Button className="bg-gradient-to-r from-blue-600 to-slate-800">
                      Save Changes
                    </Button>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserAccount;
