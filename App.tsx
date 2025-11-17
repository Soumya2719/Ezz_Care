import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { LanguageProvider } from './contexts/LanguageContext';

import MainLayout from './components/layout/MainLayout';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { Role } from './types';

// Page Imports
import HomePage from './pages/public/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import OtpPage from './pages/auth/OtpPage';
import NotFoundPage from './pages/errors/NotFoundPage';

// Patient Pages
import PatientDashboard from './pages/patient/PatientDashboard';
import FindDoctorPage from './pages/patient/FindDoctorPage';
import DoctorProfilePage from './pages/patient/DoctorProfilePage';
import MyAppointmentsPage from './pages/patient/MyAppointmentsPage';
import MedicalRecordsPage from './pages/patient/MedicalRecordsPage';
import PatientWellnessDashboard from './pages/patient/PatientWellnessDashboard';
import SymptomCheckerPage from './pages/patient/SymptomCheckerPage';
import PharmacyPage from './pages/patient/PharmacyPage';
import PharmacyCartPage from './pages/patient/PharmacyCartPage';
import PharmacyCheckoutPage from './pages/patient/PharmacyCheckoutPage';

// Doctor Pages
import DoctorDashboard from './pages/doctor/DoctorDashboard';
import DoctorProfileManagement from './pages/doctor/DoctorProfileManagement';
import DoctorAvailabilityPage from './pages/doctor/DoctorAvailabilityPage';
import DoctorPatientListPage from './pages/doctor/DoctorPatientListPage';
import DoctorEarningsDashboard from './pages/doctor/DoctorEarningsDashboard';
import DoctorPatientFeedbackPage from './pages/doctor/DoctorPatientFeedbackPage';


// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUserManagement from './pages/admin/AdminUserManagement';
import AdminDoctorVerification from './pages/admin/AdminDoctorVerification';
import AdminReportsPage from './pages/admin/AdminReportsPage';

// Shared Pages
import VideoConsultationPage from './pages/shared/VideoConsultationPage';
import NotificationsPage from './pages/shared/NotificationsPage';
import SecuritySettingsPage from './pages/shared/SecuritySettingsPage';
import PrivacyAndDataPage from './pages/shared/PrivacyAndDataPage';


function App() {
  return (
    <HashRouter>
      <LanguageProvider>
        <AuthProvider>
          <CartProvider>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/verify-otp" element={<OtpPage />} />

              <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                
                {/* Patient Routes */}
                <Route element={<ProtectedRoute allowedRoles={[Role.PATIENT]} />}>
                  <Route path="/patient/dashboard" element={<PatientDashboard />} />
                  <Route path="/patient/find-doctor" element={<FindDoctorPage />} />
                  <Route path="/patient/doctor/:id" element={<DoctorProfilePage />} />
                  <Route path="/patient/appointments" element={<MyAppointmentsPage />} />
                  <Route path="/patient/records" element={<MedicalRecordsPage />} />
                  <Route path="/patient/wellness" element={<PatientWellnessDashboard />} />
                  <Route path="/patient/symptom-checker" element={<SymptomCheckerPage />} />
                  <Route path="/patient/pharmacy" element={<PharmacyPage />} />
                  <Route path="/patient/pharmacy/cart" element={<PharmacyCartPage />} />
                  <Route path="/patient/pharmacy/checkout" element={<PharmacyCheckoutPage />} />
                </Route>
                
                {/* Doctor Routes */}
                <Route element={<ProtectedRoute allowedRoles={[Role.DOCTOR]} />}>
                  <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
                  <Route path="/doctor/profile" element={<DoctorProfileManagement />} />
                  <Route path="/doctor/availability" element={<DoctorAvailabilityPage />} />
                  <Route path="/doctor/patients" element={<DoctorPatientListPage />} />
                  <Route path="/doctor/earnings" element={<DoctorEarningsDashboard />} />
                  <Route path="/doctor/feedback" element={<DoctorPatientFeedbackPage />} />
                </Route>

                {/* Admin Routes */}
                <Route element={<ProtectedRoute allowedRoles={[Role.ADMIN]} />}>
                  <Route path="/admin/dashboard" element={<AdminDashboard />} />
                  <Route path="/admin/users" element={<AdminUserManagement />} />
                  <Route path="/admin/verify-doctors" element={<AdminDoctorVerification />} />
                  <Route path="/admin/reports" element={<AdminReportsPage />} />
                </Route>

                {/* Shared Routes */}
                 <Route element={<ProtectedRoute allowedRoles={[Role.PATIENT, Role.DOCTOR, Role.ADMIN]} />}>
                    <Route path="/consultation/video/:id" element={<VideoConsultationPage />} />
                    <Route path="/notifications" element={<NotificationsPage />} />
                    <Route path="/security" element={<SecuritySettingsPage />} />
                    <Route path="/privacy" element={<PrivacyAndDataPage />} />
                 </Route>

                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </CartProvider>
        </AuthProvider>
      </LanguageProvider>
    </HashRouter>
  );
}

export default App;
