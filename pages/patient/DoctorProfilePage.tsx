
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockDoctors } from '../../utils/mockData';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { FaStar, FaCalendarAlt } from 'react-icons/fa';
import NotFoundPage from '../errors/NotFoundPage';

const DoctorProfilePage: React.FC = () => {
    const { id } = useParams();
    const doctor = mockDoctors.find(d => d.id === id);
    
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    if (!doctor) {
        return <NotFoundPage />;
    }

    const handleBooking = () => {
        if (selectedDate && selectedTime) {
            alert(`Appointment booked with Dr. ${doctor.user.name} on ${selectedDate} at ${selectedTime}`);
            // Here you would typically call an API to save the appointment
        } else {
            alert("Please select a date and time.");
        }
    };

    return (
        <div className="container mx-auto">
            <Card className="overflow-visible">
                <div className="h-48 bg-primary-500 rounded-t-lg"></div>
                <div className="flex flex-col md:flex-row p-6 -mt-24">
                    <div className="md:w-1/3 text-center">
                        <img 
                            src={doctor.user.avatarUrl} 
                            alt={`Dr. ${doctor.user.name}`}
                            className="w-48 h-48 rounded-full mx-auto border-4 border-white shadow-lg"
                        />
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mt-4">Dr. {doctor.user.name}</h1>
                        <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold">{doctor.specialty}</p>
                        <div className="flex items-center justify-center mt-2">
                            <FaStar className="text-yellow-400 mr-1" />
                            <span className="text-gray-700 dark:text-gray-300 font-bold">{doctor.rating}</span>
                        </div>
                    </div>
                    <div className="md:w-2/3 mt-6 md:mt-0 md:pl-8">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">About</h2>
                            <p className="text-gray-600 dark:text-gray-400">{doctor.bio}</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center"><FaCalendarAlt className="mr-3" />Book an Appointment</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">1. Select a Date</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {Object.keys(doctor.availability).map(date => (
                                            <button key={date} onClick={() => { setSelectedDate(date); setSelectedTime(null); }}
                                                className={`px-4 py-2 rounded-md border ${selectedDate === date ? 'bg-primary-600 text-white border-primary-600' : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600'}`}
                                            >
                                                {new Date(date).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                {selectedDate && (
                                    <div>
                                        <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">2. Select a Time</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {doctor.availability[selectedDate].map(time => (
                                                <button key={time} onClick={() => setSelectedTime(time)}
                                                    className={`px-4 py-2 rounded-md border ${selectedTime === time ? 'bg-primary-600 text-white border-primary-600' : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600'}`}
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                <Button onClick={handleBooking} disabled={!selectedDate || !selectedTime} className="w-full md:w-auto">
                                    Confirm Appointment
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default DoctorProfilePage;
