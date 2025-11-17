
import React from 'react';
import { mockDoctors } from '../../utils/mockData';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const AdminDoctorVerification: React.FC = () => {
    const pendingDoctors = mockDoctors.filter(d => !d.verified);

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Doctor Verification</h1>
            <Card>
                <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Pending Applications</h2>
                    {pendingDoctors.length > 0 ? (
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                            {pendingDoctors.map(doctor => (
                                <li key={doctor.id} className="py-4 flex flex-col md:flex-row items-start md:items-center justify-between">
                                    <div className="flex items-center mb-4 md:mb-0">
                                        <img src={doctor.user.avatarUrl} alt="" className="h-12 w-12 rounded-full" />
                                        <div className="ml-4">
                                            <p className="text-lg font-semibold text-gray-800 dark:text-white">Dr. {doctor.user.name}</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{doctor.specialty}</p>
                                            <a href="#" className="text-sm text-primary-600 hover:underline">View Credentials</a>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2 flex-shrink-0">
                                        <Button size="sm" variant="secondary">Approve</Button>
                                        <Button size="sm" variant="danger">Reject</Button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-600 dark:text-gray-400">No pending doctor verifications.</p>
                    )}
                </div>
            </Card>
        </div>
    );
};

export default AdminDoctorVerification;
