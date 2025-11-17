import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { useAuth } from '../../hooks/useAuth';

const MainLayout: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-primary text-light">
      {/* The Sidebar is conditionally rendered and handles its own mobile/desktop visibility */}
      {isAuthenticated && <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />}
      
      {/* Main content area */}
      {/* On desktop (md screens and up), a left margin is added to prevent overlap with the fixed sidebar. */}
      {/* On mobile, this margin is removed, allowing content to span the full width. */}
      <div className="flex-1 flex flex-col overflow-hidden md:ml-64">
        <Navbar toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gradient-to-br from-primary via-primary-light to-primary p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
        {!isAuthenticated && <Footer />}
      </div>
    </div>
  );
};

export default MainLayout;