
import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { FaMicrophone, FaMicrophoneSlash, FaVideo, FaVideoSlash, FaPhoneSlash } from 'react-icons/fa';

const VideoConsultationPage: React.FC = () => {
    const { id } = useParams(); // Appointment ID

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Video Consultation</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Appointment ID: {id}</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Video Area */}
                <div className="lg:col-span-2">
                    <Card className="aspect-video relative">
                        {/* Doctor's Video */}
                        <div className="w-full h-full bg-black text-white flex items-center justify-center">
                            <img src="https://picsum.photos/seed/doc-vid/1280/720" className="w-full h-full object-cover" alt="Doctor Video Feed" />
                            <span className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded">Dr. Alice Smith</span>
                        </div>

                        {/* Patient's Video */}
                        <div className="absolute top-4 right-4 w-1/4 h-auto aspect-video border-2 border-white rounded-md overflow-hidden">
                            <img src="https://picsum.photos/seed/pat-vid/320/180" className="w-full h-full object-cover" alt="Patient Video Feed" />
                             <span className="absolute bottom-1 left-1 text-xs bg-black bg-opacity-50 text-white px-1 py-0.5 rounded">You</span>
                        </div>
                    </Card>

                    {/* Controls */}
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 mt-4 flex justify-center items-center space-x-4">
                        <Button variant="secondary" className="rounded-full !p-4"><FaMicrophone className="h-6 w-6" /></Button>
                        <Button variant="secondary" className="rounded-full !p-4"><FaVideo className="h-6 w-6" /></Button>
                        <Button variant="danger" className="rounded-full !p-4"><FaPhoneSlash className="h-6 w-6" /></Button>
                    </div>
                </div>

                {/* Chat/Info Panel */}
                <div className="lg:col-span-1">
                    <Card className="h-full flex flex-col">
                        <div className="p-4 border-b dark:border-gray-700">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Consultation Chat</h2>
                        </div>
                        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                            {/* Chat Messages */}
                            <div className="flex justify-start"><span className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg">Hello, how can I help you today?</span></div>
                            <div className="flex justify-end"><span className="bg-primary-500 text-white p-2 rounded-lg">I've been having a persistent cough.</span></div>
                        </div>
                        <div className="p-4 border-t dark:border-gray-700">
                            <input type="text" placeholder="Type a message..." className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" />
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default VideoConsultationPage;
