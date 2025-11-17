import React from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const PrivacyAndDataPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Privacy & Data</h1>
      <div className="space-y-6">
        
        {/* Consent Management */}
        <Card>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Consent Management</h2>
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <label htmlFor="marketing" className="text-gray-700 dark:text-gray-300">Receive marketing emails</label>
                    <input type="checkbox" id="marketing" className="form-checkbox h-5 w-5 text-primary-600 rounded" defaultChecked />
                </div>
                 <div className="flex items-center justify-between">
                    <label htmlFor="research" className="text-gray-700 dark:text-gray-300">Participate in anonymized research</label>
                    <input type="checkbox" id="research" className="form-checkbox h-5 w-5 text-primary-600 rounded" />
                </div>
            </div>
            <div className="text-right mt-4">
                <Button>Save Preferences</Button>
            </div>
          </div>
        </Card>
        
        {/* Data Export */}
        <Card>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Export Your Data</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              You can request a copy of all your data stored on MedConnect. We will email you a link to download your data archive.
            </p>
            <Button variant="secondary">Request Data Export</Button>
          </div>
        </Card>

        {/* Account Deletion */}
        <Card>
          <div className="p-6 border-l-4 border-red-500">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Delete Your Account</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This action is permanent and cannot be undone. All your personal data, medical records, and appointment history will be permanently erased.
            </p>
            <Button variant="danger">Request Account Deletion</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyAndDataPage;
