import React, { useState } from 'react';
import { mockPharmacyItems } from '../../utils/mockData';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { useCart } from '../../hooks/useCart';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch, FaTag } from 'react-icons/fa';
import { PharmacyItem } from '../../types';

const ProductCard: React.FC<{ item: PharmacyItem }> = ({ item }) => {
    const { addToCart } = useCart();
    return (
        <Card className="flex flex-col">
            <img src={item.imageUrl} alt={item.name} className="h-48 w-full object-cover" />
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">{item.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.category}</p>
                <p className="text-gray-600 dark:text-gray-300 my-2 flex-grow">{item.description}</p>
                 {item.requiresPrescription && (
                    <span className="text-xs font-semibold text-red-600 mb-2">Requires Prescription</span>
                )}
                <div className="flex justify-between items-center mt-auto">
                    <p className="text-xl font-bold text-primary-600">${item.price.toFixed(2)}</p>
                    <Button onClick={() => addToCart(item)} size="sm">Add to Cart</Button>
                </div>
            </div>
        </Card>
    );
};


const PharmacyPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { cartCount } = useCart();

    const filteredItems = mockPharmacyItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Pharmacy</h1>
                <Link to="/patient/pharmacy/cart">
                    <Button variant="ghost">
                        <FaShoppingCart className="mr-2" />
                        View Cart ({cartCount})
                    </Button>
                </Link>
            </div>

            <Card className="p-4 mb-6">
                <div className="flex items-center space-x-4">
                    <div className="relative flex-grow">
                        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <Input 
                            placeholder="Search for medications..."
                            className="pl-10"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    {/* Add filters for category, etc. here if needed */}
                </div>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map(item => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default PharmacyPage;
