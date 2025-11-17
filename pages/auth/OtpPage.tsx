import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { FaShieldAlt } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';

const OtpPage: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const { verifyOtp, isLoading, error: apiError } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  
  useEffect(() => {
    if (!email) {
      // If there's no email, the user shouldn't be on this page.
      alert("No email provided for verification. Redirecting to register.");
      navigate('/register');
    } else {
        inputsRef.current[0]?.focus();
    }
  }, [email, navigate]);

  const handleChange = (element: HTMLInputElement, index: number) => {
    // Only allow numeric input
    if (element.value === "" || /^[0-9]$/.test(element.value)) {
        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        // Focus next input
        if (element.value !== "" && index < 5) {
            inputsRef.current[index + 1]?.focus();
        }
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpCode = otp.join('');
    if (otpCode.length !== 6) {
      alert("Please enter the full 6-digit code.");
      return;
    }
    
    const success = await verifyOtp(email, otpCode);

    if (success) {
      alert('Account verified successfully! Please log in.');
      navigate('/login');
    }
    // API error will be shown from the context
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-light to-primary text-light flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <FaShieldAlt className="mx-auto h-12 w-auto text-accent" />
        <h2 className="mt-6 text-2xl font-bold text-white">Verify your email</h2>
        <p className="mt-2 text-sm text-gray-400">We've sent a 6-digit code to <span className="font-medium text-accent">{email}</span>.</p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="p-8 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-8">
             {apiError && <p className="text-center text-sm text-red-400 bg-red-500/10 p-3 rounded-md">{apiError}</p>}
            <div className="flex justify-center space-x-2 md:space-x-4">
              {otp.map((data, index) => {
                return (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    className="w-12 h-14 md:w-14 md:h-16 text-center text-2xl font-semibold bg-primary-light/50 border-2 border-white/20 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none transition"
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => { inputsRef.current[index] = el; }}
                  />
                );
              })}
            </div>
            <Button type="submit" className="w-full" size="lg" isLoading={isLoading}>
              Verify Account
            </Button>
            <div className="text-center">
                <button type="button" className="text-sm font-medium text-accent hover:text-secondary">
                    Didn't receive a code? Resend
                </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default OtpPage;