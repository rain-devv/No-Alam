import React, { useState } from 'react';
import {
  Upload,
  MessageCircle,
  Calendar,
  Pill,
  FileText,
  User,
  Phone,
  Mail,
  Clock,
  Star,
  Activity
} from 'lucide-react';
import Chat from './Chat';

const PatientPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showChat, setShowChat] = useState(false);

  const [medications, setMedications] = useState([
    {
      id: '1',
      name: 'ميتفورمين',
      dosage: '500 مج',
      frequency: 'مرتين يومياً',
      time: ['08:00', '20:00'],
      nextDose: '20:00'
    },
    {
      id: '2',
      name: 'أسبرين',
      dosage: '75 مج',
      frequency: 'مرة يومياً',
      time: ['08:00'],
      nextDose: 'تم تناوله'
    }
  ]);

  const [newMedication, setNewMedication] = useState({
    name: '',
    dosage: '',
    frequency: '',
    time: '',
  });

  const handleAddMedication = () => {
    if (newMedication.name && newMedication.dosage && newMedication.frequency && newMedication.time) {
      const newId = (medications.length + 1).toString();
      setMedications([
        ...medications,
        {
          id: newId,
          name: newMedication.name,
          dosage: newMedication.dosage,
          frequency: newMedication.frequency,
          time: newMedication.time.split(',').map(t => t.trim()),
          nextDose: 'غير محدد' // Default for new medications
        },
      ]);
      setNewMedication({ name: '', dosage: '', frequency: '', time: '' });
    }
  };

  const handleDeleteMedication = (id: string) => {
    setMedications(medications.filter(med => med.id !== id));
  };

  const [editingMedication, setEditingMedication] = useState<any | null>(null);

  const handleEditMedication = (med: any) => {
    setEditingMedication({ ...med, time: med.time.join(', ') });
  };

  const handleSaveEdit = () => {
    if (editingMedication) {
      setMedications(medications.map(med =>
        med.id === editingMedication.id
          ? { ...editingMedication, time: editingMedication.time.split(',').map((t: string) => t.trim()) }
          : med
      ));
      setEditingMedication(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingMedication(null);
  };

  const appointments = [
    {
      id: '1',
      doctor: 'د. أحمد سالم',
      specialization: 'أمراض باطنة',
      date: '2025-01-20',
      time: '10:00',
      status: 'مؤكد'
    },
    {
      id: '2',
      doctor: 'د. فاطمة محمد',
      specialization: 'أمراض قلب',
      date: '2025-01-25',
      time: '14:30',
      status: 'في الانتظار'
    }
  ];

  const recentFiles = [
    {
      id: '1',
      name: 'تحليل الدم الشامل',
      date: '2025-01-15',
      type: 'تحليل',
      doctor: 'د. أحمد سالم'
    },
    {
      id: '2',
      name: 'أشعة الصدر',
      date: '2025-01-10',
      type: 'أشعة',
      doctor: 'د. سارة أحمد'
    }
  ];

  const tabs = [
    { id: 'overview', label: 'نظرة عامة', icon: Activity },
    { id: 'medications', label: 'الأدوية', icon: Pill },
    { id: 'appointments', label: 'المواعيد', icon: Calendar },
    { id: 'symptoms', label: 'الأعراض', icon: FileText }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Patient Profile Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
          <div className="bg-blue-100 p-4 rounded-full">
            <User className="h-8 w-8 text-blue-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">ماجد ماجد</h2>
            <p className="text-gray-600">العمر: 45 سنة | الجنس: ذكر</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Phone className="h-5 w-5 text-gray-400" />
            <span className="text-gray-700">+966 00000000</span>
          </div>
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Mail className="h-5 w-5 text-gray-400" />
            <span className="text-gray-700">onehelx@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Calendar className="h-5 w-5 text-gray-400" />
            <span className="text-gray-700">تاريخ التسجيل: 2024-12-01</span>
          </div>
        </div>
      </div>

      {/* Health Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-blue-50 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-blue-900">ضغط الدم</h3>
            <Activity className="h-6 w-6 text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-blue-600">120/80</p>
          <p className="text-sm text-blue-700">طبيعي</p>
        </div>
        
        <div className="bg-green-50 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-green-900">السكر</h3>
            <Activity className="h-6 w-6 text-green-600" />
          </div>
          <p className="text-2xl font-bold text-green-600">95</p>
          <p className="text-sm text-green-700">طبيعي</p>
        </div>
        
        <div className="bg-purple-50 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-purple-900">الوزن</h3>
            <Activity className="h-6 w-6 text-purple-600" />
          </div>
          <p className="text-2xl font-bold text-purple-600">75 كج</p>
          <p className="text-sm text-purple-700">مثالي</p>
        </div>
        
        <div className="bg-orange-50 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-orange-900">آخر زيارة</h3>
            <Calendar className="h-6 w-6 text-orange-600" />
          </div>
          <p className="text-lg font-bold text-orange-600">15 يناير</p>
          <p className="text-sm text-orange-700">د. أحمد سالم</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">إجراءات سريعة</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button
            onClick={() => setShowChat(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-xl transition-colors flex flex-col items-center space-y-2"
          >
            <MessageCircle className="h-8 w-8" />
            <span>محادثة الطبيب</span>
          </button>
          
          <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-xl transition-colors flex flex-col items-center space-y-2">
            <Upload className="h-8 w-8" />
            <span>رفع تحليل</span>
          </button>
          
          <button className="bg-purple-500 hover:bg-purple-600 text-white p-4 rounded-xl transition-colors flex flex-col items-center space-y-2">
            <Calendar className="h-8 w-8" />
            <span>حجز موعد</span>
          </button>
          
          <button className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-xl transition-colors flex flex-col items-center space-y-2">
            <Pill className="h-8 w-8" />
            <span>تذكير دواء</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderMedications = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">جدول الأدوية</h3>

      {/* Add New Medication Form */}
      <div className="mb-8 p-4 border border-blue-200 rounded-xl bg-blue-50">
        <h4 className="text-lg font-semibold text-blue-800 mb-4">إضافة دواء جديد</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="اسم الدواء"
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            value={newMedication.name}
            onChange={(e) => setNewMedication({ ...newMedication, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="الجرعة (مثال: 500 مج)"
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            value={newMedication.dosage}
            onChange={(e) => setNewMedication({ ...newMedication, dosage: e.target.value })}
          />
          <input
            type="text"
            placeholder="التكرار (مثال: مرتين يومياً)"
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            value={newMedication.frequency}
            onChange={(e) => setNewMedication({ ...newMedication, frequency: e.target.value })}
          />
          <input
            type="text"
            placeholder="أوقات التناول (مثال: 08:00, 20:00)"
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            value={newMedication.time}
            onChange={(e) => setNewMedication({ ...newMedication, time: e.target.value })}
          />
        </div>
        <button
          onClick={handleAddMedication}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-medium transition-colors"
        >
          إضافة دواء
        </button>
      </div>

      {/* Medications List */}
      <div className="space-y-4">
        {medications.map((med) => (
          <div
            key={med.id}
            className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{med.name}</h4>
                <p className="text-gray-600">{med.dosage} - {med.frequency}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                med.nextDose === 'تم تناوله' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-orange-100 text-orange-700'
              }`}>
                {med.nextDose === 'تم تناوله' ? 'تم التناول' : `الجرعة التالية: ${med.nextDose}`}
              </span>
            </div>
            <div className="flex items-center space-x-4 rtl:space-x-reverse mb-3">
              <Clock className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">
                أوقات التناول: {Array.isArray(med.time) ? med.time.join(' - ') : med.time}
              </span>
            </div>
            <div className="flex justify-end space-x-2 rtl:space-x-reverse">
              <button
                onClick={() => handleEditMedication(med)}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                تعديل
              </button>
              <button
                onClick={() => handleDeleteMedication(med.id)}
                className="text-red-600 hover:text-red-800 text-sm font-medium"
              >
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Medication Modal */}
      {editingMedication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">تعدي�� الدواء</h3>
            <div className="space-y-4 mb-6">
              <input
                type="text"
                placeholder="اسم الدواء"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                value={editingMedication.name}
                onChange={(e) => setEditingMedication({ ...editingMedication, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="الجرعة (مثال: 500 مج)"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                value={editingMedication.dosage}
                onChange={(e) => setEditingMedication({ ...editingMedication, dosage: e.target.value })}
              />
              <input
                type="text"
                placeholder="التكرار (مثال: مرتين يومياً)"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                value={editingMedication.frequency}
                onChange={(e) => setEditingMedication({ ...editingMedication, frequency: e.target.value })}
              />
              <input
                type="text"
                placeholder="أوقات التناول (مثال: 08:00, 20:00)"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                value={editingMedication.time}
                onChange={(e) => setEditingMedication({ ...editingMedication, time: e.target.value })}
              />
            </div>
            <div className="flex justify-end space-x-4 rtl:space-x-reverse">
              <button
                onClick={handleCancelEdit}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                إلغاء
              </button>
              <button
                onClick={handleSaveEdit}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
              >
                حفظ التعديلات
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderAppointments = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">مواعيدي القادمة</h3>
      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{appointment.doctor}</h4>
                <p className="text-gray-600">{appointment.specialization}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                appointment.status === 'مؤكد' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-yellow-100 text-yellow-700'
              }`}>
                {appointment.status}
              </span>
            </div>
            <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-gray-600">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Calendar className="h-4 w-4" />
                <span>{appointment.date}</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Clock className="h-4 w-4" />
                <span>{appointment.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSymptoms = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">تسجيل الأعراض</h3>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            اكتب أعراضك الحالية
          </label>
          <textarea
            className="w-full h-32 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="اشرح الأعراض التي تشعر بها بالتفصيل..."
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            شدة الألم (1-10)
          </label>
          <input
            type="range"
            min="1"
            max="10"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1 - خفيف</span>
            <span>10 - شديد جداً</span>
          </div>
        </div>
        
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-medium transition-colors">
          إرسال للطبيب
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'medications':
        return renderMedications();
      case 'appointments':
        return renderAppointments();
      case 'symptoms':
        return renderSymptoms();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">ملفي الطبي</h1>
          <p className="text-gray-600">إدارة معلوماتك الصحية ومتابعة العلاج</p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 rtl:space-x-reverse">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 rtl:space-x-reverse py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        {renderContent()}

        {/* Recent Files */}
        {activeTab === 'overview' && (
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">الملفات الحديثة</h3>
            <div className="space-y-4">
              {recentFiles.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{file.name}</h4>
                      <p className="text-sm text-gray-600">
                        {file.date} - {file.doctor}
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {file.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Chat Modal */}
        {showChat && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full h-[600px] flex flex-col">
              <div className="flex items-center justify-between p-6 border-b">
                <h3 className="text-xl font-bold">محادثة مع الطبيب</h3>
                <button
                  onClick={() => setShowChat(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="flex-1">
                <Chat currentUser="patient-1" receiverId="doctor-1" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientPage;