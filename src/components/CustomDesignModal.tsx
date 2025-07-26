
import { useState, useCallback } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Upload, Image, FileText, Palette, Sparkles, Download } from 'lucide-react';

interface Product {
  image: string;
  name: string;
  price: number;
}

interface CustomDesignModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const CustomDesignModal = ({ product, isOpen, onClose }: CustomDesignModalProps) => {
  const [designType, setDesignType] = useState('upload');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [designNotes, setDesignNotes] = useState('');
  const [selectedPlacement, setSelectedPlacement] = useState('front');

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  }, []);

  const designPlacements = [
    { value: 'front', label: 'Front', icon: '👔' },
    { value: 'back', label: 'Back', icon: '🔄' },
    { value: 'sleeve', label: 'Sleeves', icon: '💪' },
    { value: 'pocket', label: 'Pocket', icon: '🔳' }
  ];

  const designTemplates = [
    { name: 'Floral Pattern', icon: '🌸', preview: '🌺🌸🌼' },
    { name: 'Geometric', icon: '🔶', preview: '◆◇▲' },
    { name: 'Abstract Art', icon: '🎨', preview: '🎭🖼️' },
    { name: 'Typography', icon: '🔤', preview: 'ABC' },
    { name: 'Custom Logo', icon: '⭐', preview: '✨🌟' },
    { name: 'Vintage Style', icon: '📿', preview: '🕰️📜' }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent text-center w-full">
              Custom Design Studio
            </DialogTitle>
          </DialogHeader>

        <div className="grid lg:grid-cols-3 gap-6 mt-6">
          {/* Design Canvas */}
          <div className="lg:col-span-2">
            <Card className="p-6 bg-gradient-to-br from-gray-50 to-white">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Design Preview</h3>
                <div className="flex space-x-2">
                  {designPlacements.map((placement) => (
                    <Button
                      key={placement.value}
                      variant={selectedPlacement === placement.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedPlacement(placement.value)}
                      className="flex items-center space-x-1"
                    >
                      <span>{placement.icon}</span>
                      <span className="hidden sm:inline">{placement.label}</span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Product Canvas */}
              <div className="bg-white rounded-lg shadow-inner min-h-[400px] flex items-center justify-center relative border-2 border-dashed border-gray-200">
                <div className="text-center">
                  <img src={product?.image} alt={product?.name} className="mx-auto mb-4 max-h-64 object-contain" />
                  <p className="text-lg font-medium text-gray-700">{product?.name}</p>
                  <p className="text-sm text-gray-500">Click to add your design on the {selectedPlacement}</p>
                  
                  {/* Design Overlay Area */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg border-2 border-dashed border-purple-300">
                    {uploadedFiles.length > 0 ? (
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-purple-700">Your Design Preview</p>
                        <div className="flex justify-center space-x-2">
                          {uploadedFiles.slice(0, 3).map((file, index) => (
                            <div key={index} className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border">
                              <span className="text-2xl">🎨</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="text-purple-600">
                        <Sparkles className="w-8 h-8 mx-auto mb-2" />
                        <p className="text-sm">Your custom design will appear here</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Canvas Tools */}
              <div className="flex justify-center space-x-4 mt-4">
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export Design
                </Button>
                <Button variant="outline" size="sm">
                  <Palette className="w-4 h-4 mr-2" />
                  Color Adjust
                </Button>
              </div>
            </Card>
          </div>

          {/* Design Tools Panel */}
          <div className="space-y-6">
            {/* Upload Section */}
            <Card className="p-4">
              <h4 className="font-semibold mb-3 flex items-center">
                <Upload className="w-4 h-4 mr-2" />
                Upload Your Design
              </h4>
              
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors cursor-pointer">
                  <input
                    type="file"
                    multiple
                    accept="image/*,.pdf"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="design-upload"
                  />
                  <label htmlFor="design-upload" className="cursor-pointer">
                    <div className="space-y-2">
                      <div className="flex justify-center space-x-2">
                        <Image className="w-8 h-8 text-gray-400" />
                        <FileText className="w-8 h-8 text-gray-400" />
                      </div>
                      <p className="text-sm text-gray-600">
                        Drop files here or click to browse
                      </p>
                      <p className="text-xs text-gray-500">
                        Supports: JPG, PNG, PDF, SVG
                      </p>
                    </div>
                  </label>
                </div>

                {uploadedFiles.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Uploaded Files:</p>
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span className="text-sm truncate">{file.name}</span>
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                          ✕
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Card>

            {/* Design Templates */}
            <Card className="p-4">
              <h4 className="font-semibold mb-3">Design Templates</h4>
              <div className="grid grid-cols-2 gap-3">
                {designTemplates.map((template, index) => (
                  <div
                    key={index}
                    className="p-3 border rounded-lg cursor-pointer hover:border-purple-400 hover:bg-purple-50 transition-all text-center"
                  >
                    <div className="text-2xl mb-1">{template.icon}</div>
                    <p className="text-xs font-medium">{template.name}</p>
                    <p className="text-xs text-gray-500">{template.preview}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Design Notes */}
            <Card className="p-4">
              <h4 className="font-semibold mb-3">Design Instructions</h4>
              <Textarea
                placeholder="Add any special instructions for your custom design..."
                value={designNotes}
                onChange={(e) => setDesignNotes(e.target.value)}
                className="min-h-[100px]"
              />
              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Design Complexity:</span>
                  <span className="text-green-600 font-medium">Simple (+$0)</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Color Count:</span>
                  <select className="text-sm border rounded px-2 py-1">
                    <option>1 Color (+$0)</option>
                    <option>2-3 Colors (+$5)</option>
                    <option>4+ Colors (+$10)</option>
                  </select>
                </div>
              </div>
            </Card>

            {/* Pricing & Order */}
            <Card className="p-4 bg-gradient-to-br from-orange-50 to-pink-50">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Base Product:</span>
                  <span>${product?.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Custom Design:</span>
                  <span>+$15.00</span>
                </div>
                <hr />
                <div className="flex justify-between items-center font-bold">
                  <span>Total:</span>
                  <span>${(product?.price + 15).toFixed(2)}</span>
                </div>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white">
                  Order Custom Design
                </Button>
                <p className="text-xs text-gray-600 text-center">
                  Custom orders take 5-7 business days
                </p>
              </div>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDesignModal;
