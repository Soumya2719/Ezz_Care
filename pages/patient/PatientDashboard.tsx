import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { FaUserMd, FaCalendarPlus, FaNotesMedical, FaClock } from 'react-icons/fa';
import { mockAppointments } from '../../utils/mockData';
import { useNavigate } from 'react-router-dom';

const PatientDashboard: React.FC = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const upcomingAppointments = mockAppointments.filter(
        (a) => a.patient.id === user?.id && a.status === 'upcoming'
    ).slice(0, 2);

    return (
        <div>
            <h1 className="text-4xl font-bold text-white mb-2 uppercase tracking-wider">Dashboard</h1>
            <p className="text-lg text-gray-300 mb-8">Welcome back, {user?.name}!</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="p-6 group hover:bg-accent/20 transition-colors duration-300">
                    <FaUserMd className="h-12 w-12 text-accent group-hover:text-white transition-colors duration-300 mb-4" />
                    <h3 className="text-xl font-bold text-white">Find a Doctor</h3>
                    <p className="text-gray-400 text-sm mb-4 h-10">Search our network of certified specialists.</p>
                    <Button onClick={() => navigate('/patient/find-doctor')} size="sm">Search Now</Button>
                </Card>
                <Card className="p-6 group hover:bg-accent/20 transition-colors duration-300">
                    <FaCalendarPlus className="h-12 w-12 text-accent group-hover:text-white transition-colors duration-300 mb-4" />
                    <h3 className="text-xl font-bold text-white">New Appointment</h3>
                    <p className="text-gray-400 text-sm mb-4 h-10">Book a new video or chat consultation.</p>
                    <Button onClick={() => navigate('/patient/find-doctor')} size="sm">Book Now</Button>
                </Card>
                 <Card className="p-6 group hover:bg-accent/20 transition-colors duration-300">
                    <FaNotesMedical className="h-12 w-12 text-accent group-hover:text-white transition-colors duration-300 mb-4" />
                    <h3 className="text-xl font-bold text-white">View Records</h3>
                    <p className="text-gray-400 text-sm mb-4 h-10">Access your medical history and prescriptions.</p>
                    <Button onClick={() => navigate('/patient/records')} size="sm">View Now</Button>
                </Card>
                 <Card className="p-6 group hover:bg-accent/20 transition-colors duration-300">
                    <FaClock className="h-12 w-12 text-accent group-hover:text-white transition-colors duration-300 mb-4" />
                    <h3 className="text-xl font-bold text-white">Appointments</h3>
                    <p className="text-gray-400 text-sm mb-4 h-10">Check your appointment history.</p>
                    <Button onClick={() => navigate('/patient/appointments')} size="sm">View History</Button>
                </Card>
            </div>

            <Card>
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-white mb-4">Upcoming Appointments</h2>
                    {upcomingAppointments.length > 0 ? (
                        <ul className="divide-y divide-white/10">
                            {upcomingAppointments.map(app => (
                                <li key={app.id} className="py-4 flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <img src={app.doctor.user.avatarUrl} className="h-12 w-12 rounded-full border-2 border-accent" alt={app.doctor.user.name} />
                                        <div>
                                            <p className="text-lg font-semibold text-white">Dr. {app.doctor.user.name}</p>
                                            <p className="text-sm text-gray-400">{app.doctor.specialty}</p>
                                            <p className="text-sm text-gray-400 mt-1">{new Date(app.date).toDateString()} at {app.time}</p>
                                        </div>
                                    </div>
                                    <Button onClick={() => navigate(`/consultation/video/${app.id}`)} size="sm">Join Call</Button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-400">You have no upcoming appointments.</p>
                    )}
                </div>
            </Card>
        </div>
    );
};

export default PatientDashboard;