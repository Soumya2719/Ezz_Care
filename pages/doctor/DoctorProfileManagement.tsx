
import React from 'react';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { useAuth } from '../../hooks/useAuth';

const DoctorProfileManagement: React.FC = () => {
    const { user } = useAuth();

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Manage Your Profile</h1>
            <Card>
                <form className="p-6 space-y-6">
                    <div className="flex items-center space-x-6">
                        <img src={user?.avatarUrl} alt="Profile" className="h-24 w-24 rounded-full"/>
                        <Button type="button" variant="ghost">Change Photo</Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input label="Full Name" id="name" defaultValue={user?.name} />
                        <Input label="Email Address" id="email" defaultValue={user?.email} disabled />
                        <Input label="Specialty" id="specialty" defaultValue="Cardiologist" />
                        <Input label="Years of Experience" id="experience" type="number" defaultValue="15" />
                    </div>
                    <div>
                        <label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Biography
                        </label>
                        <textarea 
                            id="bio" 
                            rows={4}
                            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                            defaultValue="Dr. Alice Smith is a board-certified cardiologist with over 15 years of experience in treating heart conditions. She is passionate about preventive care."
                        ></textarea>
                    </div>
                    <div className="text-right">
                        <Button type="submit">Save Changes</Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default DoctorProfileManagement;
