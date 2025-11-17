import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const SymptomCheckerPage: React.FC = () => {
  const [symptoms, setSymptoms] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);

    // Simulate API call to an AI model
    setTimeout(() => {
      setIsLoading(false);
      setResult("Based on your symptoms, possible conditions include the common cold or mild allergies. This is not a medical diagnosis. Please consult a doctor for an accurate assessment. We can help you find a specialist.");
    }, 2000);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">AI Symptom Checker</h1>
      <Card>
        <form onSubmit={handleSubmit} className="p-6">
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Describe your symptoms in detail. This tool provides preliminary information and is not a substitute for professional medical advice.
          </p>
          <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Your Symptoms
          </label>
          <textarea
            id="symptoms"
            rows={5}
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            placeholder="e.g., I have a sore throat, a runny nose, and a slight fever..."
            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          ></textarea>
          <Button type="submit" isLoading={isLoading} className="mt-4">
            Analyze Symptoms
          </Button>
        </form>
      </Card>
      {result && (
        <Card className="mt-6">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Preliminary Analysis</h2>
            <p className="text-gray-700 dark:text-gray-300">{result}</p>
            <div className="mt-4">
                <Button>Find a Doctor</Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default SymptomCheckerPage;
