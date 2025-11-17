import React, { useState, useMemo } from 'react';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Button from '../ui/Button';

const BMICalculator: React.FC = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const bmiResult = useMemo(() => {
    const h = parseFloat(height) / 100; // in meters
    const w = parseFloat(weight); // in kg
    if (h > 0 && w > 0) {
      const bmi = w / (h * h);
      let category = '';
      let color = '';
      if (bmi < 18.5) {
        category = 'Underweight';
        color = 'text-blue-500';
      } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
        color = 'text-green-500';
      } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
        color = 'text-yellow-500';
      } else {
        category = 'Obesity';
        color = 'text-red-500';
      }
      return { value: bmi.toFixed(1), category, color };
    }
    return null;
  }, [height, weight]);

  return (
    <Card>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">BMI Calculator</h3>
        <div className="grid grid-cols-2 gap-4">
          <Input 
            label="Height (cm)" 
            type="number" 
            placeholder="e.g., 175"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <Input 
            label="Weight (kg)" 
            type="number" 
            placeholder="e.g., 70"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        {bmiResult && (
          <div className="mt-6 text-center bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
            <p className="text-gray-600 dark:text-gray-300">Your BMI is</p>
            <p className={`text-4xl font-bold ${bmiResult.color}`}>{bmiResult.value}</p>
            <p className={`font-semibold ${bmiResult.color}`}>{bmiResult.category}</p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default BMICalculator;
