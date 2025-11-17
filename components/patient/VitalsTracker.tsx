import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { FaHeartbeat, FaTint, FaThermometerHalf, FaPlus } from 'react-icons/fa';

const VitalsTracker: React.FC = () => {
  return (
    <Card>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Track Your Vitals</h3>
            <Button size="sm"><FaPlus className="mr-2" /> Log Vitals</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-primary-50 dark:bg-primary-900/50 p-4 rounded-lg">
                <FaHeartbeat className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <p className="font-bold text-xl text-gray-800 dark:text-white">80 bpm</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Heart Rate</p>
            </div>
             <div className="bg-blue-50 dark:bg-blue-900/50 p-4 rounded-lg">
                <FaTint className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <p className="font-bold text-xl text-gray-800 dark:text-white">120/80</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Blood Pressure</p>
            </div>
             <div className="bg-yellow-50 dark:bg-yellow-900/50 p-4 rounded-lg">
                <FaThermometerHalf className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <p className="font-bold text-xl text-gray-800 dark:text-white">36.6 °C</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Temperature</p>
            </div>
        </div>
      </div>
    </Card>
  );
};

export default VitalsTracker;
