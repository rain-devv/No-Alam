import React from 'react';
import { Heart, Bell, User, Menu } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  userRole: 'patient' | 'doctor';
}

const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange, userRole }) => {
  const navigationItems = [
    { id: 'home', label: 'الرئيسية', icon: '🏠' },
    { id: userRole, label: userRole === 'patient' ? 'ملفي الطبي' : 'المرضى', icon: '👤' },
    { id: 'files', label: 'الملفات', icon: '📁' },
    { id: 'nutrition', label: 'التغذية', icon: '🥗' },
    { id: 'ai', label: 'التحليل الذكي', icon: '🤖' },
  ];

  return (
    <header className="bg-white shadow-md border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-36 md:h-40">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-blue-500 p-4 rounded-full">
              <Heart className="h-12 w-12 text-white" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4 rtl:space-x-reverse">
            {/* SOS Button */}
            <button
              onClick={() => onPageChange('sos')}
              className="bg-red-500 hover:bg-red-600 text-white px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center space-x-2 rtl:space-x-reverse"
            >
              <span className="hidden sm:inline">🚨</span>
              <span>طوارئ</span>
            </button>

            {/* Notifications */}
            <button className="relative p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Profile */}
            <button className="hidden sm:flex items-center space-x-2 rtl:space-x-reverse p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
              <User className="h-5 w-5" />
            </button>

            {/* Mobile Menu */}
            <button className="md:hidden p-2 text-gray-600 hover:text-blue-600">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-gray-200 py-2">
          <div className="flex overflow-x-auto space-x-2 rtl:space-x-reverse px-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`flex-shrink-0 flex flex-col items-center p-3 rounded-lg text-xs transition-colors ${
                  currentPage === item.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <span className="text-lg mb-1">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;