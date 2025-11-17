import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { mockMedicalRecords } from '../../utils/mockData';
import Card from '../../components/ui/Card';
import { FaNotesMedical, FaPrescriptionBottle, FaStethoscope } from 'react-icons/fa';

const MedicalRecordsPage: React.FC = () => {
  const { user } = useAuth();
  const records = mockMedicalRecords.filter(r => r.patientId === user?.id)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const getIcon = (type: 'consultation' | 'prescription' | 'lab_result') => {
    switch (type) {
      case 'consultation':
        return <FaStethoscope className="h-6 w-6 text-white" />;
      case 'prescription':
        return <FaPrescriptionBottle className="h-6 w-6 text-white" />;
      case 'lab_result':
        return <FaNotesMedical className="h-6 w-6 text-white" />;
      default:
        return null;
    }
  };
  
  const getIconBgColor = (type: 'consultation' | 'prescription' | 'lab_result') => {
    switch (type) {
      case 'consultation': return 'bg-primary-500';
      case 'prescription': return 'bg-secondary';
      case 'lab_result': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Medical Records</h1>
      <div className="relative pl-8">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

        {records.map(record => (
          <div key={record.id} className="mb-8 relative">
            <div className={`absolute -left-1.5 top-1 w-10 h-10 rounded-full flex items-center justify-center ${getIconBgColor(record.type)}`}>
              {getIcon(record.type)}
            </div>
            <div className="ml-12">
              <Card>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{new Date(record.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                      <h2 className="text-xl font-bold text-gray-800 dark:text-white">{record.title}</h2>
                      <p className="text-sm text-gray-600 dark:text-gray-300">with Dr. {record.doctor.user.name} ({record.doctor.specialty})</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full capitalize ${record.type === 'consultation' ? 'bg-primary-100 text-primary-800' : 'bg-green-100 text-green-800'}`}>
                      {record.type.replace('_', ' ')}
                    </span>
                  </div>
                  <p className="mt-4 text-gray-700 dark:text-gray-400">{record.details}</p>
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalRecordsPage;
