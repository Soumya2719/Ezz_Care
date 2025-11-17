import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { FaGlobe } from 'react-icons/fa';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative">
      <FaGlobe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as 'en' | 'es' | 'fr')}
        className="pl-9 pr-4 py-2 text-sm border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 appearance-none"
      >
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
