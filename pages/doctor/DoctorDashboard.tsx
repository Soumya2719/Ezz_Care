
import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import Card from '../../components/ui/Card';
import { FaUserInjured, FaCalendarDay, FaClock, FaCheckCircle } from 'react-icons/fa';
import { mockAppointments } from '../../utils/mockData';

const DoctorDashboard: React.FC = () => {
    const { user } = useAuth();
    // Assuming doctor's user id matches the logged-in user's id
    const myAppointments = mockAppointments.filter(app => app.doctor.user.id === user?.id);
    const upcomingAppointments = myAppointments.filter(app => app.status === 'upcoming');

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Doctor's Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="p-6 flex items-center space-x-4">
                    <FaCalendarDay className="h-10 w-10 text-primary-500" />
                    <div>
                        <p className="text-sm text-gray-500">Today's Appointments</p>
                        <p className="text-2xl font-bold text-gray-800 dark:text-white">{upcomingAppointments.length}</p>
                    </div>
                </Card>
                 <Card className="p-6 flex items-center space-x-4">
                    <FaUserInjured className="h-10 w-10 text-secondary" />
                    <div>
                        <p className="text-sm text-gray-500">Total Patients</p>
                        <p className="text-2xl font-bold text-gray-800 dark:text-white">124</p>
                    </div>
                </Card>
                 <Card className="p-6 flex items-center space-x-4">
                    <FaCheckCircle className="h-10 w-10 text-green-500" />
                    <div>
                        <p className="text-sm text-gray-500">Completed This Month</p>
                        <p className="text-2xl font-bold text-gray-800 dark:text-white">32</p>
                    </div>
                </Card>
                 <Card className="p-6 flex items-center space-x-4">
                    <FaClock className="h-10 w-10 text-yellow-500" />
                    <div>
                        <p className="text-sm text-gray-500">Avg. Consultation</p>
                        <p className="text-2xl font-bold text-gray-800 dark:text-white">18 min</p>
                    </div>
                </Card>
            </div>

            <Card>
                <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Upcoming Appointments</h2>
                    {upcomingAppointments.length > 0 ? (
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                            {upcomingAppointments.slice(0, 5).map(app => (
                                <li key={app.id} className="py-4 flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <img src={app.patient.avatarUrl} alt={app.patient.name} className="h-10 w-10 rounded-full" />
                                        <div>
                                            <p className="text-md font-semibold text-gray-800 dark:text-white">{app.patient.name}</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{app.time}</p>
                                        </div>
                                    </div>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">{new Date(app.date).toDateString()}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-600 dark:text-gray-400">No upcoming appointments today.</p>
                    )}
                </div>
            </Card>
        </div>
    );
};

export default DoctorDashboard;
