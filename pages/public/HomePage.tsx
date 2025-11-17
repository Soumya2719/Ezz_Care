import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Role } from '../../types';
import Button from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { FaHeartbeat, FaUserMd, FaShieldAlt, FaCalendarCheck } from 'react-icons/fa';
import Card from '../../components/ui/Card';

const HomePage: React.FC = () => {
    const { user, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const getDashboardPath = () => {
        if (!user) return "/";
        switch (user.role) {
            case Role.PATIENT: return "/patient/dashboard";
            case Role.DOCTOR: return "/doctor/dashboard";
            case Role.ADMIN: return "/admin/dashboard";
            default: return "/";
        }
    };
    
    return (
        <div className="w-full">
            <div className="text-center py-20 md:py-32">
                <FaHeartbeat className="mx-auto h-20 w-20 text-secondary mb-6 animate-pulse" />
                <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight uppercase">
                    The Future of Healthcare
                </h1>
                <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary tracking-tight uppercase">
                    Is Here.
                </h2>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
                    Seamlessly connect with top-tier medical professionals. Experience intelligent, personalized healthcare from anywhere, anytime.
                </p>
                {isAuthenticated ? (
                    <div className="mt-10">
                        <p className="text-xl text-gray-200">Welcome back, {user?.name}!</p>
                        <Button onClick={() => navigate(getDashboardPath())} className="mt-4" size="lg">
                            Go to Your Dashboard
                        </Button>
                    </div>
                ) : (
                    <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <Button onClick={() => navigate('/register')} size="lg">
                            Get Started Now
                        </Button>
                        <Button onClick={() => navigate('/login')} size="lg" variant="ghost">
                           Provider Login
                        </Button>
                    </div>
                )}
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <Card className="p-8 transform hover:-translate-y-2 transition-transform duration-300">
                    <FaUserMd className="h-12 w-12 text-accent mb-4"/>
                    <h3 className="text-2xl font-bold text-white">Expert Doctors</h3>
                    <p className="mt-2 text-gray-300">Connect with board-certified specialists across various fields, available for you 24/7.</p>
                </Card>
                <Card className="p-8 transform hover:-translate-y-2 transition-transform duration-300">
                    <FaShieldAlt className="h-12 w-12 text-accent mb-4"/>
                    <h3 className="text-2xl font-bold text-white">Secure & Private</h3>
                    <p className="mt-2 text-gray-300">Your data is protected with end-to-end encryption, ensuring full compliance with privacy standards.</p>
                </Card>
                <Card className="p-8 transform hover:-translate-y-2 transition-transform duration-300">
                    <FaCalendarCheck className="h-12 w-12 text-accent mb-4"/>
                    <h3 className="text-2xl font-bold text-white">Intelligent Scheduling</h3>
                    <p className="mt-2 text-gray-300">Our AI-powered system helps you book and manage appointments effortlessly.</p>
                </Card>
            </div>
        </div>
    );
};

export default HomePage;