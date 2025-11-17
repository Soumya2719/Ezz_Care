import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { FaStethoscope } from 'react-icons/fa';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('patient@medconnect.com');
  const [password, setPassword] = useState('password123');
  const { login, isLoading, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-light to-primary text-light flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Link to="/" className="inline-flex items-center">
            <FaStethoscope className="h-12 w-auto text-accent animate-pulse" />
            <span className="ml-3 text-3xl font-bold text-white tracking-wider">
                MedConnect
            </span>
        </Link>
        <h2 className="mt-6 text-2xl font-bold text-white">
          Sign in to your account
        </h2>
        <p className="mt-2 text-sm text-gray-400">
          Or{' '}
          <Link to="/register" className="font-medium text-accent hover:text-secondary">
            create a new account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="p-8 sm:p-10">
          <form className="space-y-8" onSubmit={handleSubmit}>
            {error && <p className="text-center text-sm text-red-400 bg-red-500/10 p-3 rounded-md">{error}</p>}
            <Input 
              label="Email address"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder=" " // required for floating label
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input 
              label="Password"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder=" " // required for floating label
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
            <div className="flex items-center justify-end">
              <div className="text-sm">
                <a href="#" className="font-medium text-accent hover:text-secondary">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <Button type="submit" className="w-full" size="lg" isLoading={isLoading}>
                Sign in
              </Button>
            </div>
            <div className="text-center text-sm text-gray-400 p-4 border border-white/10 rounded-lg bg-primary-light/50 space-y-2">
                <p className="font-bold text-light">Demo Credentials (pw: password123)</p>
                <div className="text-left text-xs">
                    <p><span className="font-semibold">Patient:</span> patient@medconnect.com</p>
                    <p><span className="font-semibold">Doctor:</span> doctor@medconnect.com</p>
                    <p><span className="font-semibold">Admin:</span> admin@medconnect.com</p>
                </div>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;