
import React, { useState } from 'react';
import { mockDoctors } from '../../utils/mockData';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { FaStar, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const DoctorCard: React.FC<{ doctor: typeof mockDoctors[0] }> = ({ doctor }) => {
    const navigate = useNavigate();
    return (
        <Card className="transform hover:scale-105 transition-transform duration-200">
            <img className="h-48 w-full object-cover" src={doctor.user.avatarUrl} alt={`Dr. ${doctor.user.name}`} />
            <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">Dr. {doctor.user.name}</h3>
                <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold">{doctor.specialty}</p>
                <div className="flex items-center mt-2">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className="text-gray-700 dark:text-gray-300 font-bold">{doctor.rating}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 h-16 overflow-hidden">{doctor.bio.substring(0, 100)}...</p>
                <Button onClick={() => navigate(`/patient/doctor/${doctor.id}`)} className="w-full mt-4">
                    View Profile
                </Button>
            </div>
        </Card>
    );
}

const FindDoctorPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [specialty, setSpecialty] = useState('');

    const filteredDoctors = mockDoctors.filter(doctor =>
        doctor.verified &&
        doctor.user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (specialty === '' || doctor.specialty === specialty)
    );

    const specialties = [...new Set(mockDoctors.map(d => d.specialty))];

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Find a Doctor</h1>

            <Card className="p-4 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                    <Input
                        label="Search by name"
                        placeholder="e.g., Dr. Smith"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                     <div>
                        <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Filter by specialty</label>
                        <select
                            id="specialty"
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                            value={specialty}
                            onChange={(e) => setSpecialty(e.target.value)}
                        >
                            <option value="">All Specialties</option>
                            {specialties.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>
                    <Button>
                        <FaSearch className="mr-2" /> Search
                    </Button>
                </div>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredDoctors.map(doctor => (
                    <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
            </div>
        </div>
    );
};

export default FindDoctorPage;
