import React from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { FaFilePdf, FaFileCsv, FaChartLine, FaUserFriends, FaRegMoneyBillAlt } from 'react-icons/fa';

const AdminReportsPage: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Reports & Analytics</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* User Activity Report */}
                <Card>
                    <div className="p-6">
                        <FaUserFriends className="h-10 w-10 text-primary-500 mb-3" />
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white">User Activity Report</h2>
                        <p className="text-gray-600 dark:text-gray-400 mt-2 mb-4">Detailed report on user sign-ups, logins, and platform engagement.</p>
                        <div className="flex space-x-2">
                            <Button size="sm"><FaFilePdf className="mr-2" /> PDF</Button>
                            <Button size="sm" variant="secondary"><FaFileCsv className="mr-2" /> CSV</Button>
                        </div>
                    </div>
                </Card>

                {/* Appointment Analytics */}
                 <Card>
                    <div className="p-6">
                        <FaChartLine className="h-10 w-10 text-secondary mb-3" />
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Appointment Analytics</h2>
                        <p className="text-gray-600 dark:text-gray-400 mt-2 mb-4">Analysis of appointment trends, peak hours, and popular specialties.</p>
                        <div className="flex space-x-2">
                            <Button size="sm"><FaFilePdf className="mr-2" /> PDF</Button>
                            <Button size="sm" variant="secondary"><FaFileCsv className="mr-2" /> CSV</Button>
                        </div>
                    </div>
                </Card>

                {/* Financial Report */}
                 <Card>
                    <div className="p-6">
                        <FaRegMoneyBillAlt className="h-10 w-10 text-yellow-500 mb-3" />
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Financial Report</h2>
                        <p className="text-gray-600 dark:text-gray-400 mt-2 mb-4">Summary of platform revenue, doctor payouts, and transaction fees.</p>
                         <div className="flex space-x-2">
                            <Button size="sm"><FaFilePdf className="mr-2" /> PDF</Button>
                            <Button size="sm" variant="secondary"><FaFileCsv className="mr-2" /> CSV</Button>
                        </div>
                    </div>
                </Card>

            </div>
        </div>
    );
};

export default AdminReportsPage;
