export enum Role {
  PATIENT = 'PATIENT',
  DOCTOR = 'DOCTOR',
  ADMIN = 'ADMIN',
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatarUrl?: string;
}

export interface Doctor {
  id: string;
  user: User;
  specialty: string;
  rating: number;
  bio: string;
  availability: Record<string, string[]>; // e.g. { "2024-07-29": ["09:00", "10:00"] }
  verified: boolean;
}

export interface Appointment {
  id: string;
  patient: User;
  doctor: Doctor;
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  consultationType: 'video' | 'chat';
}

export interface Prescription {
    id: string;
    appointmentId: string;
    patient: User;
    doctor: Doctor;
    date: string;
    medication: string;
    dosage: string;
    instructions: string;
}

export interface MedicalRecord {
    id: string;
    patientId: string;
    date: string;
    type: 'consultation' | 'prescription' | 'lab_result';
    title: string;
    details: string;
    doctor: Doctor;
}

export interface PharmacyItem {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
    category: string;
    requiresPrescription: boolean;
}

export interface PatientFeedback {
    id: string;
    doctorId: string;
    patient: User;
    rating: number;
    comment: string;
    date: string;
}

export interface Earning {
    month: string;
    revenue: number;
    appointments: number;
}
