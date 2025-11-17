import React, { useState } from 'react';
import { mockUsers } from '../../utils/mockData';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { Role } from '../../types';

const DoctorPatientListPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // In a real app, this would be a list of patients assigned to the current doctor
  const patients = mockUsers.filter(u => u.role === Role.PATIENT && u.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">My Patients</h1>
      <Card>
        <div className="p-4 border-b dark:border-gray-700">
            <Input 
                placeholder="Search patients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Last Appointment</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {patients.map(patient => (
                <tr key={patient.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src={patient.avatarUrl} alt={patient.name} />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{patient.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{patient.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    July 20, 2024
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Button size="sm" variant="ghost">View Records</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default DoctorPatientListPage;
