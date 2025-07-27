import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import PatientPage from './components/PatientPage';
import DoctorPage from './components/DoctorPage';
import FilesPage from './components/FilesPage';
import NutritionPage from './components/NutritionPage';
import AIPage from './components/AIPage';
import SOSPage from './components/SOSPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [userRole, setUserRole] = useState<'patient' | 'doctor'>('patient');

  const renderPage = () => {
    switch (currentPage) {
      case 'patient':
        return <PatientPage />;
      case 'doctor':
        return <DoctorPage />;
      case 'files':
        return <FilesPage />;
      case 'nutrition':
        return <NutritionPage />;
      case 'ai':
        return <AIPage />;
      case 'sos':
        return <SOSPage />;
      default:
        return <HomePage onPageChange={setCurrentPage} onRoleSelect={setUserRole} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {currentPage !== 'home' && (
        <Header 
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          userRole={userRole}
        />
      )}
      {renderPage()}
    </div>
  );
}

export default App;