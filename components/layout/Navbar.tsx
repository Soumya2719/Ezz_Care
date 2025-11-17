import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { FaUserCircle, FaBell, FaSignOutAlt, FaBars, FaStethoscope } from 'react-icons/fa';
import Button from '../ui/Button';
import SOSButton from '../common/SOSButton';
import { Role } from '../../types';
import LanguageSelector from '../common/LanguageSelector';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="bg-glass backdrop-blur-md sticky top-0 z-40 border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            {isAuthenticated && (
              <button
                onClick={toggleSidebar}
                className="text-gray-300 hover:text-white focus:outline-none md:hidden mr-4"
              >
                <FaBars className="h-6 w-6" />
              </button>
            )}
            <Link to="/" className="flex items-center">
              <FaStethoscope className="h-8 w-8 text-accent animate-pulse" />
              <span className="ml-3 text-2xl font-bold text-white tracking-wider">
                MedConnect
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4 md:space-x-6">
                {user?.role === Role.PATIENT && <SOSButton />}
                <LanguageSelector />
                <button className="relative p-2 text-gray-300 hover:text-white">
                  <FaBell className="h-6 w-6" />
                  <span className="absolute top-1.5 right-1.5 block h-2.5 w-2.5 rounded-full bg-secondary ring-2 ring-primary-light"></span>
                </button>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    {user?.avatarUrl ? (
                        <img src={user.avatarUrl} alt="User Avatar" className="h-10 w-10 rounded-full border-2 border-accent" />
                    ) : (
                        <FaUserCircle className="h-10 w-10 text-gray-400" />
                    )}
                    <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-secondary ring-2 ring-primary-light" title="Online"></span>
                  </div>
                  <span className="hidden md:inline text-gray-200 font-medium">{user?.name}</span>
                </div>
                <button
                  onClick={logout}
                  className="p-2 text-gray-300 hover:text-red-500"
                  title="Logout"
                >
                  <FaSignOutAlt className="h-6 w-6" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                 <LanguageSelector />
                <Button variant="ghost" onClick={() => navigate('/login')} size="md">Login</Button>
                <Button onClick={() => navigate('/register')} size="md">Register</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;