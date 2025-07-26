import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const Checkout: React.FC = () => {
  const { state: cartState } = useCart();
  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    navigate('/payment');
  };

  React.useEffect(() => {
    if (cartState.items.length === 0) {
      navigate('/');
    }
  }, [cartState.items.length, navigate]);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      {cartState.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="w-full border-collapse mb-6">
            <thead>
              <tr>
                <th className="border p-2 text-left">Product</th>
                <th className="border p-2 text-left">Size</th>
                <th className="border p-2 text-left">Color</th>
                <th className="border p-2 text-left">Quantity</th>
                <th className="border p-2 text-left">Price</th>
                <th className="border p-2 text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartState.items.map((item, index) => (
                <tr key={index}>
                  <td className="border p-2 flex items-center gap-2">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                    <span>{item.name}</span>
                  </td>
                  <td className="border p-2">{item.size}</td>
                  <td className="border p-2">{item.color}</td>
                  <td className="border p-2">{item.quantity}</td>
                  <td className="border p-2">${item.price.toFixed(2)}</td>
                  <td className="border p-2">${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={5} className="border p-2 font-bold text-right">Total:</td>
                <td className="border p-2 font-bold">${cartState.total.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
          <button
            onClick={handleProceedToPayment}
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
          >
            Proceed to Payment
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
