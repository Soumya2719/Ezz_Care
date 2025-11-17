import React from 'react';
import BMICalculator from '../../components/patient/BMICalculator';
import VitalsTracker from '../../components/patient/VitalsTracker';
import Card from '../../components/ui/Card';
import { FaDumbbell, FaAppleAlt, FaBed } from 'react-icons/fa';

const PatientWellnessDashboard: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Wellness Dashboard</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                    <BMICalculator />
                    <VitalsTracker />
                </div>
                
                {/* Right Column */}
                <div className="space-y-6">
                    <Card>
                        <div className="p-6">
                             <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Health Goals</h3>
                             <ul className="space-y-3">
                                <li className="flex items-center">
                                    <FaDumbbell className="h-6 w-6 text-secondary mr-3"/>
                                    <span>Exercise 3 times a week</span>
                                </li>
                                <li className="flex items-center">
                                    <FaAppleAlt className="h-6 w-6 text-red-500 mr-3"/>
                                    <span>Eat 5 servings of fruit/veg daily</span>
                                </li>
                                <li className="flex items-center">
                                    <FaBed className="h-6 w-6 text-blue-500 mr-3"/>
                                    <span>Get 8 hours of sleep per night</span>
                                </li>
                             </ul>
                        </div>
                    </Card>
                     <Card>
                        <div className="p-6">
                             <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Recent Activity</h3>
                             <p className="text-gray-600 dark:text-gray-400">
                                This is a placeholder for a feed of recent health activities, like logged workouts, meals, or vital signs readings.
                             </p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default PatientWellnessDashboard;
