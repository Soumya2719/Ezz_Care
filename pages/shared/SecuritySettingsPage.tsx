import React from 'react';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const SecuritySettingsPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Security Settings</h1>
      <div className="space-y-6">
        {/* Change Password */}
        <Card>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Change Password</h2>
            <form className="space-y-4">
              <Input label="Current Password" type="password" />
              <Input label="New Password" type="password" />
              <Input label="Confirm New Password" type="password" />
              <div className="text-right">
                <Button type="submit">Update Password</Button>
              </div>
            </form>
          </div>
        </Card>

        {/* Two-Factor Authentication */}
        <Card>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Two-Factor Authentication (2FA)</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Add an extra layer of security to your account.
            </p>
            <div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
                <span>Status: <span className="font-semibold text-green-600">Enabled</span></span>
                <Button variant="danger" size="sm">Disable 2FA</Button>
            </div>
          </div>
        </Card>
        
        {/* Session History */}
        <Card>
           <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Active Sessions</h2>
             <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                <li className="py-3 flex justify-between items-center">
                    <div>
                        <p className="font-semibold">Chrome on macOS</p>
                        <p className="text-sm text-gray-500">New York, USA - Current session</p>
                    </div>
                    <Button variant="ghost" size="sm">Log out</Button>
                </li>
                 <li className="py-3 flex justify-between items-center">
                    <div>
                        <p className="font-semibold">Safari on iPhone</p>
                        <p className="text-sm text-gray-500">New York, USA - 2 hours ago</p>
                    </div>
                     <Button variant="ghost" size="sm">Log out</Button>
                </li>
             </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SecuritySettingsPage;
