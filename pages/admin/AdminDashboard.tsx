
import React from 'react';
import Card from '../../components/ui/Card';
import { FaUsers, FaUserMd, FaCalendarCheck, FaStethoscope } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const userGrowthData = [
  { name: 'Jan', users: 400 },
  { name: 'Feb', users: 300 },
  { name: 'Mar', users: 500 },
  { name: 'Apr', users: 780 },
  { name: 'May', users: 650 },
  { name: 'Jun', users: 800 },
];

const appointmentsData = [
  { name: 'Cardiology', count: 120 },
  { name: 'Dermatology', count: 98 },
  { name: 'Pediatrics', count: 75 },
  { name: 'Neurology', count: 50 },
  { name: 'Orthopedics', count: 85 },
];

const AdminDashboard: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Admin Dashboard</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="p-6 flex items-center space-x-4">
                    <FaUsers className="h-10 w-10 text-primary-500" />
                    <div>
                        <p className="text-sm text-gray-500">Total Users</p>
                        <p className="text-2xl font-bold text-gray-800 dark:text-white">1,250</p>
                    </div>
                </Card>
                <Card className="p-6 flex items-center space-x-4">
                    <FaUserMd className="h-10 w-10 text-secondary" />
                    <div>
                        <p className="text-sm text-gray-500">Total Doctors</p>
                        <p className="text-2xl font-bold text-gray-800 dark:text-white">85</p>
                    </div>
                </Card>
                <Card className="p-6 flex items-center space-x-4">
                    <FaCalendarCheck className="h-10 w-10 text-yellow-500" />
                    <div>
                        <p className="text-sm text-gray-500">Appointments Today</p>
                        <p className="text-2xl font-bold text-gray-800 dark:text-white">72</p>
                    </div>
                </Card>
                 <Card className="p-6 flex items-center space-x-4">
                    <FaStethoscope className="h-10 w-10 text-red-500" />
                    <div>
                        <p className="text-sm text-gray-500">Pending Verifications</p>
                        <p className="text-2xl font-bold text-gray-800 dark:text-white">3</p>
                    </div>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <div className="p-6">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">User Growth</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={userGrowthData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="users" stroke="#3b82f6" activeDot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </Card>
                <Card>
                    <div className="p-6">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Appointments by Specialty</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={appointmentsData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="count" fill="#10b981" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default AdminDashboard;
