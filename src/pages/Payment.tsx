import React, { useState } from 'react';
import { useCart } from '../hooks/useCart';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card } from '@/components/ui/card';

const Payment: React.FC = () => {
  const { state: cartState, clearCart } = useCart();
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit_card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [upiId, setUpiId] = useState('');
  const [message, setMessage] = useState('');

  const handlePlaceOrder = async () => {
    if (!address) {
      setMessage('Please enter your delivery address.');
      return;
    }
    if (paymentMethod === 'credit_card') {
      if (!cardNumber || !cardName || !expiry || !cvv) {
        setMessage('Please fill all credit card details.');
        return;
      }
    }
    if (paymentMethod === 'upi' && !upiId) {
      setMessage('Please enter your UPI ID.');
      return;
    }

    try {
      const response = await fetch('/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cartState.items, address, paymentMethod }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Order placed successfully!');
        clearCart();
      } else {
        setMessage(data.message || 'Order placement failed.');
      }
    } catch (error) {
      setMessage('Error placing order.');
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 mt-10">
      <h1 className="text-3xl font-bold mb-6">Payment</h1>
      {cartState.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
              <textarea
                className="w-full border rounded p-3"
                rows={4}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your delivery address"
              />
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="credit_card" id="credit_card" />
                  <label htmlFor="credit_card">Credit / Debit Card</label>
                </div>
                {paymentMethod === 'credit_card' && (
                  <div className="space-y-3 mt-3">
                    <Input
                      placeholder="Card Number"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      maxLength={16}
                    />
                    <Input
                      placeholder="Name on Card"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                    />
                    <div className="flex space-x-4">
                      <Input
                        placeholder="Expiry (MM/YY)"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        maxLength={5}
                      />
                      <Input
                        placeholder="CVV"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        maxLength={3}
                        type="password"
                      />
                    </div>
                  </div>
                )}

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="upi" id="upi" />
                  <label htmlFor="upi">UPI</label>
                </div>
                {paymentMethod === 'upi' && (
                  <Input
                    placeholder="Enter UPI ID"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    className="mt-2"
                  />
                )}

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="net_banking" id="net_banking" />
                  <label htmlFor="net_banking">Net Banking</label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="wallet" id="wallet" />
                  <label htmlFor="wallet">Wallets</label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cod" id="cod" />
                  <label htmlFor="cod">Cash on Delivery</label>
                </div>
              </RadioGroup>
            </Card>
          </div>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <ul className="divide-y divide-gray-200">
              {cartState.items.map((item, index) => (
                <li key={index} className="py-3 flex justify-between">
                  <span>{item.name} x {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="border-t mt-4 pt-4 font-bold flex justify-between">
              <span>Total</span>
              <span>${cartState.total.toFixed(2)}</span>
            </div>
            <Button
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded"
              onClick={handlePlaceOrder}
            >
              Place Order
            </Button>
            {message && <p className="mt-4 text-center">{message}</p>}
          </Card>
        </div>
      )}
    </div>
  );
};

export default Payment;
