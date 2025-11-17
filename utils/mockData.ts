import { User, Doctor, Appointment, Role, Prescription, MedicalRecord, PharmacyItem, PatientFeedback, Earning } from '../types';

export const mockUsers: User[] = [
  { id: 'u1', name: 'John Doe', email: 'patient@medconnect.com', role: Role.PATIENT, avatarUrl: 'https://picsum.photos/seed/u1/200' },
  { id: 'u2', name: 'Dr. Alice Smith', email: 'doctor@medconnect.com', role: Role.DOCTOR, avatarUrl: 'https://picsum.photos/seed/u2/200' },
  { id: 'u3', name: 'Admin User', email: 'admin@medconnect.com', role: Role.ADMIN, avatarUrl: 'https://picsum.photos/seed/u3/200' },
  { id: 'u4', name: 'Jane Roe', email: 'patient2@medconnect.com', role: Role.PATIENT, avatarUrl: 'https://picsum.photos/seed/u4/200' },
  { id: 'u5', name: 'Dr. Bob Johnson', email: 'doctor2@medconnect.com', role: Role.DOCTOR, avatarUrl: 'https://picsum.photos/seed/u5/200' },
];

export const mockDoctors: Doctor[] = [
  {
    id: 'd1',
    user: mockUsers[1],
    specialty: 'Cardiologist',
    rating: 4.8,
    bio: 'Dr. Alice Smith is a board-certified cardiologist with over 15 years of experience in treating heart conditions. She is passionate about preventive care.',
    availability: {
      '2024-08-01': ['09:00', '10:00', '11:00'],
      '2024-08-02': ['14:00', '15:00'],
    },
    verified: true,
  },
  {
    id: 'd2',
    user: mockUsers[4],
    specialty: 'Dermatologist',
    rating: 4.9,
    bio: 'Dr. Bob Johnson specializes in skin care and cosmetic dermatology. He is known for his patient-centric approach and excellent results.',
    availability: {
      '2024-08-01': ['10:00', '11:00'],
      '2024-08-03': ['09:00', '10:00', '14:00', '15:00'],
    },
    verified: true,
  },
  {
    id: 'd3',
    user: { id: 'u6', name: 'Dr. Carol White', email: 'doctor3@medconnect.com', role: Role.DOCTOR, avatarUrl: 'https://picsum.photos/seed/u6/200' },
    specialty: 'Pediatrician',
    rating: 4.5,
    bio: 'Dr. Carol White has a friendly and gentle approach, making children feel comfortable during their visits. She has 10 years of experience.',
    availability: {},
    verified: false,
  },
];

export const mockAppointments: Appointment[] = [
  { id: 'a1', patient: mockUsers[0], doctor: mockDoctors[0], date: '2024-08-01', time: '10:00', status: 'upcoming', consultationType: 'video' },
  { id: 'a2', patient: mockUsers[0], doctor: mockDoctors[1], date: '2024-07-20', time: '14:00', status: 'completed', consultationType: 'chat' },
  { id: 'a3', patient: mockUsers[3], doctor: mockDoctors[0], date: '2024-07-22', time: '09:00', status: 'cancelled', consultationType: 'video' },
  { id: 'a4', patient: mockUsers[0], doctor: mockDoctors[0], date: '2024-06-15', time: '11:00', status: 'completed', consultationType: 'video' },
];

export const mockPrescriptions: Prescription[] = [
    { id: 'p1', appointmentId: 'a2', patient: mockUsers[0], doctor: mockDoctors[1], date: '2024-07-20', medication: 'Tretinoin Cream 0.05%', dosage: 'Apply a pea-sized amount nightly', instructions: 'Avoid sun exposure. Use moisturizer.' },
    { id: 'p2', appointmentId: 'a4', patient: mockUsers[0], doctor: mockDoctors[0], date: '2024-06-15', medication: 'Atorvastatin 20mg', dosage: 'One tablet daily', instructions: 'Take in the evening with or without food.' },
];

export const mockMedicalRecords: MedicalRecord[] = [
    { id: 'mr1', patientId: 'u1', date: '2024-07-20', type: 'consultation', title: 'Dermatology Follow-up', details: 'Patient discussed skin irritation. Prescribed Tretinoin.', doctor: mockDoctors[1] },
    { id: 'mr2', patientId: 'u1', date: '2024-07-20', type: 'prescription', title: 'Tretinoin Cream 0.05%', details: 'For acne and skin texture.', doctor: mockDoctors[1] },
    { id: 'mr3', patientId: 'u1', date: '2024-06-15', type: 'consultation', title: 'Annual Check-up', details: 'Routine blood work discussed. Cholesterol levels slightly elevated.', doctor: mockDoctors[0] },
    { id: 'mr4', patientId: 'u1', date: '2024-06-15', type: 'prescription', title: 'Atorvastatin 20mg', details: 'For managing cholesterol.', doctor: mockDoctors[0] },
];

export const mockPharmacyItems: PharmacyItem[] = [
    { id: 'ph1', name: 'Paracetamol 500mg', price: 5.99, imageUrl: 'https://picsum.photos/seed/ph1/300', description: 'For mild to moderate pain and fever.', category: 'Pain Relief', requiresPrescription: false },
    { id: 'ph2', name: 'Amoxicillin 250mg', price: 15.49, imageUrl: 'https://picsum.photos/seed/ph2/300', description: 'Antibiotic for bacterial infections.', category: 'Antibiotics', requiresPrescription: true },
    { id: 'ph3', name: 'Cetirizine 10mg', price: 8.99, imageUrl: 'https://picsum.photos/seed/ph3/300', description: 'Antihistamine for allergy relief.', category: 'Allergies', requiresPrescription: false },
    { id: 'ph4', name: 'Vitamin D3 1000 IU', price: 12.00, imageUrl: 'https://picsum.photos/seed/ph4/300', description: 'Dietary supplement for bone health.', category: 'Vitamins', requiresPrescription: false },
];

export const mockPatientFeedback: PatientFeedback[] = [
    { id: 'f1', doctorId: 'd1', patient: mockUsers[0], rating: 5, comment: 'Dr. Smith was incredibly thorough and reassuring. Highly recommend!', date: '2024-06-16' },
    { id: 'f2', doctorId: 'd1', patient: mockUsers[3], rating: 4, comment: 'Good consultation, but the wait time was a bit long.', date: '2024-07-15' },
    { id: 'f3', doctorId: 'd2', patient: mockUsers[0], rating: 5, comment: 'Dr. Johnson is fantastic! My skin has never looked better.', date: '2024-07-21' },
];

export const mockEarnings: Earning[] = [
    { month: 'March', revenue: 4500, appointments: 40 },
    { month: 'April', revenue: 5200, appointments: 48 },
    { month: 'May', revenue: 6100, appointments: 55 },
    { month: 'June', revenue: 5800, appointments: 52 },
];
