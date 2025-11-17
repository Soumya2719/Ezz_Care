import React, { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import Modal from '../ui/Modal';
import Button from '../ui/Button';

const SOSButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSOS = () => {
    // In a real app, this would trigger an emergency protocol
    // e.g., an API call to alert staff, call emergency services, etc.
    alert('Emergency alert sent! Help is on the way.');
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center justify-center h-10 w-10 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 animate-pulse"
        title="Emergency SOS"
      >
        <FaPhoneAlt className="h-5 w-5" />
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Confirm Emergency"
      >
        <p className="text-gray-700 dark:text-gray-300">
          Are you sure you want to send an emergency alert? This will immediately notify our emergency response team and may contact local emergency services.
        </p>
        <div className="mt-4 text-center">
            <p className="font-bold text-lg text-red-600">Only use this in a genuine emergency.</p>
        </div>
        <div className="mt-6 flex justify-end space-x-4">
            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button variant="danger" onClick={handleSOS}>Yes, I need help</Button>
        </div>
      </Modal>
    </>
  );
};

export default SOSButton;
