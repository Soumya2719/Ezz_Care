import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { FaStethoscope } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';
import { Role } from '../../types';

const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState<Role>(Role.PATIENT);
  const [formError, setFormError] = useState('');

  const { register, isLoading, error: apiError } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    if (password !== confirmPassword) {
      setFormError("Passwords do not match.");
      return;
    }

    const success = await register(name, email, password, role);

    if (success) {
      // Pass email to OTP page so it knows who to verify
      navigate('/verify-otp', { state: { email } });
    }
    // If not successful, the apiError from useAuth will be displayed
  };

  const combinedError = formError || apiError;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-light to-primary text-light flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Link to="/" className="inline-flex items-center">
            <FaStethoscope className="h-12 w-auto text-accent animate-pulse" />
            <span className="ml-3 text-3xl font-bold text-white tracking-wider">
                MedConnect
            </span>
        </Link>
        <h2 className="mt-6 text-2xl font-bold text-white">Create your account</h2>
        <p className="mt-2 text-sm text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-accent hover:text-secondary">
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="p-8 sm:p-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {combinedError && <p className="text-center text-sm text-red-400 bg-red-500/10 p-3 rounded-md">{combinedError}</p>}
            
            <Input label="Full Name" id="name" name="name" type="text" required value={name} onChange={e => setName(e.target.value)} placeholder=" " />
            <Input label="Email address" id="email" name="email" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder=" " />
            <Input label="Password" id="password" name="password" type="password" required value={password} onChange={e => setPassword(e.target.value)} placeholder=" " />
            <Input label="Confirm Password" id="confirm-password" name="confirm-password" type="password" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder=" "/>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2">Register as a</label>
              <select
                id="role"
                name="role"
                className="block w-full px-3 py-3 bg-transparent border-b-2 border-white/20 text-light focus:outline-none focus:border-accent transition-colors appearance-none"
                value={role}
                onChange={(e) => setRole(e.target.value as Role)}
              >
                <option className="bg-primary" value={Role.PATIENT}>Patient</option>
                <option className="bg-primary" value={Role.DOCTOR}>Doctor</option>
              </select>
            </div>

            <div>
              <Button type="submit" className="w-full" size="lg" isLoading={isLoading}>
                Create Account
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;