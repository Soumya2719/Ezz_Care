import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Role } from '../../types';
import { FaTachometerAlt, FaUserMd, FaCalendarCheck, FaUserCog, FaUsers, FaClipboardList, FaNotesMedical, FaPills } from 'react-icons/fa';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const patientLinks = [
  { to: '/patient/dashboard', icon: FaTachometerAlt, label: 'Dashboard' },
  { to: '/patient/find-doctor', icon: FaUserMd, label: 'Find a Doctor' },
  { to: '/patient/appointments', icon: FaCalendarCheck, label: 'My Appointments' },
  { to: '/patient/records', icon: FaNotesMedical, label: 'Medical Records' },
  { to: '/patient/pharmacy', icon: FaPills, label: 'Pharmacy' },
];

const doctorLinks = [
  { to: '/doctor/dashboard', icon: FaTachometerAlt, label: 'Dashboard' },
  { to: '/doctor/availability', icon: FaCalendarCheck, label: 'Availability' },
  { to: '/doctor/patients', icon: FaUsers, label: 'My Patients' },
  { to: '/doctor/profile', icon: FaUserCog, label: 'Profile' },
];

const adminLinks = [
  { to: '/admin/dashboard', icon: FaTachometerAlt, label: 'Dashboard' },
  { to: '/admin/users', icon: FaUsers, label: 'User Management' },
  { to: '/admin/verify-doctors', icon: FaClipboardList, label: 'Verify Doctors' },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const { user } = useAuth();
  
  let links = [];
  if (user?.role === Role.PATIENT) links = patientLinks;
  else if (user?.role === Role.DOCTOR) links = doctorLinks;
  else if (user?.role === Role.ADMIN) links = adminLinks;

  const NavItem: React.FC<{ to: string, icon: React.ElementType, label: string }> = ({ to, icon: Icon, label }) => (
    <NavLink
      to={to}
      // STYLING LOGIC:
      // - A flex container to align icon and text.
      // - `transition-colors` for smooth hover effects.
      // - `rounded-lg` for modern aesthetics.
      // - `hover:bg-white/10 hover:text-white` for a clear, accessible hover state.
      // - `isActive` prop from NavLink is used to apply distinct styles for the active page link.
      className={({ isActive }) =>
        `relative flex items-center px-4 py-3 my-2 text-gray-300 transition-colors duration-300 transform rounded-lg hover:bg-white/10 hover:text-white ${
          // ACTIVE STATE: A semi-transparent accent background and bright white text make it stand out.
          isActive ? 'bg-accent/20 text-white shadow-lg' : ''
        }`
      }
      onClick={() => setIsOpen(false)}
    >
      {({ isActive }) => (
        <>
          {/* ACTIVE INDICATOR: A glowing bar on the left provides a clear visual cue for the active link. */}
          {isActive && <div className="absolute left-0 top-0 h-full w-1 bg-secondary rounded-r-full shadow-glow-sm"></div>}
          <Icon className="w-5 h-5" />
          <span className="mx-4 font-medium">{label}</span>
        </>
      )}
    </NavLink>
  );

  return (
    <>
      {/* Sidebar Navigation */}
      {/* On desktop (md+), it's a fixed panel. On mobile, it's a sliding overlay controlled by `isOpen`. */}
      {/* A high z-index (z-50) ensures it appears above all other content on mobile. */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 px-4 py-5 overflow-y-auto bg-glass backdrop-blur-xl border-r border-white/10 md:translate-x-0 transform ${isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'} transition-transform duration-300`}>
        <nav>
          {links.map((link) => (
            <NavItem key={link.to} {...link} />
          ))}
        </nav>
      </div>
      
      {/* Backdrop for mobile overlay */}
      {/* This appears only on mobile when the sidebar is open, providing a clickable area to close it. */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black opacity-50 md:hidden" onClick={() => setIsOpen(false)}></div>
      )}
    </>
  );
};

export default Sidebar;