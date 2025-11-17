import React from 'react';
import Card from '../../components/ui/Card';
import { mockEarnings } from '../../utils/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { FaDollarSign, FaCalendarCheck, FaFileInvoiceDollar } from 'react-icons/fa';

const DoctorEarningsDashboard: React.FC = () => {
    const totalRevenue = mockEarnings.reduce((acc, curr) => acc + curr.revenue, 0);
    const totalAppointments = mockEarnings.reduce((acc, curr) => acc + curr.appointments, 0);

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Earnings & Analytics</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="p-6 flex items-center space-x-4">
                    <FaDollarSign className="h-10 w-10 text-green-500" />
                    <div>
                        <p className="text-sm text-gray-500">Total Revenue (YTD)</p>
                        <p className="text-2xl font-bold text-gray-800 dark:text-white">${totalRevenue.toLocaleString()}</p>
                    </div>
                </Card>
                <Card className="p-6 flex items-center space-x-4">
                    <FaCalendarCheck className="h-10 w-10 text-primary-500" />
                    <div>
                        <p className="text-sm text-gray-500">Total Appointments (YTD)</p>
                        <p className="text-2xl font-bold text-gray-800 dark:text-white">{totalAppointments}</p>
                    </div>
                </Card>
                <Card className="p-6 flex items-center space-x-4">
                    <FaFileInvoiceDollar className="h-10 w-10 text-yellow-500" />
                    <div>
                        <p className="text-sm text-gray-500">Next Payout</p>
                        <p className="text-2xl font-bold text-gray-800 dark:text-white">$1,450.00</p>
                    </div>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <div className="p-6">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Monthly Revenue</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={mockEarnings}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis tickFormatter={(value) => `$${value/1000}k`} />
                                <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
                                <Legend />
                                <Bar dataKey="revenue" fill="#10b981" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Card>
                 <Card>
                    <div className="p-6">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Appointments per Month</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={mockEarnings}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="appointments" stroke="#3b82f6" activeDot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default DoctorEarningsDashboard;
