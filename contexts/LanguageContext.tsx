import React, { createContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

// In a real app, you would use a library like i18next
const translations = {
    en: { welcome: "Welcome to MedConnect" },
    es: { welcome: "Bienvenido a MedConnect" },
    fr: { welcome: "Bienvenue à MedConnect" },
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // This is a simplified translation function. 
  // A real implementation would be more robust.
  const t = (key: keyof typeof translations.en) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
