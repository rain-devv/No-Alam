export interface User {
  id: string;
  name: string;
  email: string;
  role: 'patient' | 'doctor';
  avatar?: string;
  specialization?: string; // for doctors
  phone?: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  type: 'text' | 'file' | 'audio';
  fileUrl?: string;
  fileName?: string;
}

export interface MedicalFile {
  id: string;
  patientId: string;
  fileName: string;
  fileType: 'pdf' | 'image' | 'report';
  uploadDate: Date;
  fileUrl: string;
  category: 'analysis' | 'prescription' | 'xray' | 'other';
  notes?: string;
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  time: string[];
  duration: string;
  notes?: string;
}

export interface NutritionPlan {
  id: string;
  patientId: string;
  condition: 'diabetes' | 'hypertension' | 'heart' | 'general';
  meals: {
    breakfast: string[];
    lunch: string[];
    dinner: string[];
    snacks: string[];
  };
  restrictions: string[];
  recommendations: string[];
}

export interface Review {
  id: string;
  reviewerId: string;
  revieweeId: string;
  rating: number;
  comment: string;
  date: Date;
}