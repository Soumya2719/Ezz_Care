import React from 'react';
import { useCart } from '../../hooks/useCart';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Link, useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

const PharmacyCartPage: React.FC = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Shopping Cart</h1>
            {cart.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <Card>
                             <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                                {cart.map(item => (
                                    <li key={item.id} className="p-4 flex items-center space-x-4">
                                        <img src={item.imageUrl} alt={item.name} className="h-20 w-20 rounded-md object-cover" />
                                        <div className="flex-grow">
                                            <h3 className="font-bold text-gray-800 dark:text-white">{item.name}</h3>
                                            <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <input 
                                                type="number" 
                                                value={item.quantity}
                                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                                className="w-16 p-1 border rounded-md dark:bg-gray-700 dark:border-gray-600 text-center"
                                                min="1"
                                            />
                                            <button onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-red-600 p-2"><FaTrash /></button>
                                        </div>
                                        <p className="font-bold w-20 text-right">${(item.price * item.quantity).toFixed(2)}</p>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                                <div className="flex justify-between mb-2">
                                    <span>Subtotal</span>
                                    <span>${cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Shipping</span>
                                    <span>$5.00</span>
                                </div>
                                <div className="border-t my-2 dark:border-gray-700"></div>
                                <div className="flex justify-between font-bold text-lg">
                                    <span>Total</span>
                                    <span>${(cartTotal + 5).toFixed(2)}</span>
                                </div>
                                <Button onClick={() => navigate('/patient/pharmacy/checkout')} className="w-full mt-6">
                                    Proceed to Checkout
                                </Button>
                                 <Button onClick={clearCart} variant="danger" className="w-full mt-2">
                                    Clear Cart
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            ) : (
                <Card className="text-center p-8">
                    <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">Looks like you haven't added anything to your cart yet.</p>
                    <Link to="/patient/pharmacy">
                        <Button>Continue Shopping</Button>
                    </Link>
                </Card>
            )}
        </div>
    );
};

export default PharmacyCartPage;
