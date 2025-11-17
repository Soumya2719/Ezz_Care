import React from 'react';
import Card from '../../components/ui/Card';
import { mockPatientFeedback, mockDoctors } from '../../utils/mockData';
import { FaStar } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'} />
        ))}
    </div>
);


const DoctorPatientFeedbackPage: React.FC = () => {
    const { user } = useAuth();
    // Find the doctor profile associated with the current user
    const doctorProfile = mockDoctors.find(d => d.user.id === user?.id);
    const feedback = mockPatientFeedback.filter(f => f.doctorId === doctorProfile?.id);
    
    const averageRating = feedback.reduce((acc, curr) => acc + curr.rating, 0) / feedback.length;

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Patient Feedback</h1>
            <Card className="mb-6">
                <div className="p-6 text-center">
                    <p className="text-lg text-gray-600 dark:text-gray-300">Your Average Rating</p>
                    <div className="flex items-center justify-center space-x-2 mt-2">
                        <p className="text-4xl font-bold text-gray-800 dark:text-white">{averageRating.toFixed(1)}</p>
                        <StarRating rating={Math.round(averageRating)} />
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">based on {feedback.length} reviews</p>
                </div>
            </Card>

            <div className="space-y-4">
                {feedback.map(fb => (
                    <Card key={fb.id}>
                        <div className="p-6">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center space-x-4">
                                    <img src={fb.patient.avatarUrl} alt={fb.patient.name} className="h-12 w-12 rounded-full" />
                                    <div>
                                        <p className="font-bold text-gray-800 dark:text-white">{fb.patient.name}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{new Date(fb.date).toLocaleDateString()}</p>
                                    </div>
                                </div>
                                <StarRating rating={fb.rating} />
                            </div>
                            <p className="mt-4 text-gray-700 dark:text-gray-300">{fb.comment}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default DoctorPatientFeedbackPage;
