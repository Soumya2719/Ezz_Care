
import React from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const timeSlots = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'];

const DoctorAvailabilityPage: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Manage Availability</h1>
            <Card>
                <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Weekly Schedule</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    {days.map(day => (
                                        <th key={day} className="py-2 px-4 text-center border-b-2 dark:border-gray-700 font-semibold">{day}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {timeSlots.map(time => (
                                    <tr key={time}>
                                        {days.map(day => (
                                            <td key={`${day}-${time}`} className="border dark:border-gray-700 p-2 text-center">
                                                <label className="flex items-center justify-center cursor-pointer">
                                                    <input type="checkbox" className="form-checkbox h-5 w-5 text-primary-600 rounded" />
                                                    <span className="ml-2 text-gray-700 dark:text-gray-300">{time}</span>
                                                </label>
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-6 text-right">
                        <Button>Update Schedule</Button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default DoctorAvailabilityPage;
