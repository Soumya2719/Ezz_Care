import React from 'react';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { FaUser, FaTruck, FaLock, FaCreditCard } from 'react-icons/fa';

const PharmacyCheckoutPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Shipping Information */}
          <Card>
            <div className="p-6">
              <h2 className="text-xl font-bold flex items-center mb-4"><FaTruck className="mr-3" />Shipping Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Full Name" />
                <Input label="Address" />
                <Input label="City" />
                <Input label="State / Province" />
                <Input label="Zip / Postal Code" />
                <Input label="Country" />
              </div>
            </div>
          </Card>

          {/* Prescription Upload */}
          <Card>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Prescription Upload</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">If your order contains prescription items, please upload a valid prescription from your doctor.</p>
              <input type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"/>
            </div>
          </Card>

          {/* Payment Details */}
          <Card>
            <div className="p-6">
              <h2 className="text-xl font-bold flex items-center mb-4"><FaCreditCard className="mr-3" />Payment Details</h2>
              <div className="space-y-4">
                <Input label="Card Number" placeholder="**** **** **** ****" />
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Expiry Date" placeholder="MM/YY" />
                  <Input label="CVC" placeholder="123" />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-20">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              {/* This would be populated from the cart context */}
              <div className="flex justify-between py-2 border-b dark:border-gray-700">
                <span>Paracetamol 500mg x 1</span>
                <span>$5.99</span>
              </div>
              <div className="flex justify-between py-2 border-b dark:border-gray-700">
                <span>Vitamin D3 x 2</span>
                <span>$24.00</span>
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$29.99</span>
                </div>
                 <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>$5.00</span>
                </div>
                <div className="flex justify-between font-bold text-lg mt-2">
                  <span>Total</span>
                  <span>$34.99</span>
                </div>
              </div>
              <Button className="w-full mt-6">
                <FaLock className="mr-2" /> Place Order
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PharmacyCheckoutPage;
