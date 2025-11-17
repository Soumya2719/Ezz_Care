import React from 'react';
import Card from '../../components/ui/Card';
import { FaCalendarCheck, FaCommentDots, FaBell } from 'react-icons/fa';

const notifications = [
    { id: 1, type: 'appointment', text: 'Your appointment with Dr. Smith is confirmed for tomorrow at 10:00 AM.', time: '1 day ago', read: false },
    { id: 2, type: 'message', text: 'Dr. Johnson sent you a new message regarding your prescription.', time: '3 days ago', read: false },
    { id: 3, type: 'general', text: 'Welcome to MedConnect! Complete your profile to get started.', time: '1 week ago', read: true },
];

const NotificationIcon = ({ type }: { type: string }) => {
    const iconMap: { [key: string]: React.ReactElement } = {
        appointment: <FaCalendarCheck className="text-primary-500" />,
        message: <FaCommentDots className="text-secondary" />,
        general: <FaBell className="text-yellow-500" />,
    };
    return <div className="h-10 w-10 flex-shrink-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full">{iconMap[type]}</div>;
};

const NotificationsPage: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Notifications</h1>
            <Card>
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {notifications.map(notification => (
                        <li key={notification.id} className={`p-4 flex items-start space-x-4 ${!notification.read ? 'bg-primary-50 dark:bg-primary-900/20' : ''}`}>
                            <NotificationIcon type={notification.type} />
                            <div className="flex-grow">
                                <p className="text-gray-800 dark:text-white">{notification.text}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{notification.time}</p>
                            </div>
                            {!notification.read && <div className="h-3 w-3 bg-primary-500 rounded-full flex-shrink-0 mt-1"></div>}
                        </li>
                    ))}
                </ul>
            </Card>
        </div>
    );
};

export default NotificationsPage;
