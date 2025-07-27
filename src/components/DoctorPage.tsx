import React, { useState } from 'react';
import {
  Users,
  Calendar,
  FileText,
  MessageCircle,
  Star,
  Clock,
  Phone,
  Video,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import Chat from './Chat';

const DoctorPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('patients');
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null);
  const [showChat, setShowChat] = useState(false);

  const patients = [
    {
      id: '1',
      name: 'ماجد المالكي',
      age: 20,
      condition: 'مريض احساس خلقي',
      lastVisit: '2025-01-15',
      status: 'مستقر',
      priority: 'normal',
      avatar: '👨'
    },
    {
      id: '2',
      name: 'فاطمة علي',
      age: 21,
      condition: 'ارتفاع ضغط الدم',
      lastVisit: '2025-01-12',
      status: 'يحتاج متابعة',
      priority: 'high',
      avatar: '👩'
    },
    {
      id: '3',
      name: 'عبدالله محمد',
      age: 25,
      condition: 'مريض احساس خلقي',
      lastVisit: '2025-01-10',
      status: 'تحسن',
      priority: 'low',
      avatar: '👨'
    },
    {
      id: '4',
      name: 'منار احمد',
      age: 20,
      condition: 'مريض احساس خلقي',
      lastVisit: '2025-07-27',
      status: 'جديد',
      priority: 'normal',
      avatar: '👩'
    }
  ];

  const appointments = [
    {
      id: '1',
      patient: 'سارة أحمد',
      time: '09:00',
      duration: '30 دقيقة',
      type: 'فحص دوري',
      status: 'مؤكد'
    },
    {
      id: '2',
      patient: 'خالد سالم',
      time: '10:30',
      duration: '45 دقيقة',
      type: 'استشارة',
      status: 'في الانتظار'
    },
    {
      id: '3',
      patient: 'نور محمد',
      time: '14:00',
      duration: '30 دقيقة',
      type: 'متابعة',
      status: 'مؤكد'
    }
  ];

  const recentMessages = [
    {
      id: '1',
      patient: 'محمد أحمد',
      message: 'أشعر بدوار خفيف اليوم',
      time: 'منذ 10 دقائق',
      unread: true
    },
    {
      id: '2',
      patient: 'فاطمة علي',
      message: 'شكراً لك على الوصفة الجديدة',
      time: 'منذ ساعة',
      unread: false
    }
  ];

  const tabs = [
    { id: 'patients', label: 'المرضى', icon: Users },
    { id: 'appointments', label: 'المواعيد', icon: Calendar },
    { id: 'messages', label: 'الرسائل', icon: MessageCircle },
    { id: 'reports', label: 'التقارير', icon: FileText }
  ];

  const renderPatients = () => (
    <div className="space-y-6">
      {/* Patient Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-blue-50 rounded-2xl p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-md sm:text-lg font-semibold text-blue-900">إجمالي المرضى</h3>
            <Users className="h-6 w-6 text-blue-600" />
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-blue-600">156</p>
        </div>
        
        <div className="bg-green-50 rounded-2xl p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-md sm:text-lg font-semibold text-green-900">حالات مستقرة</h3>
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-green-600">142</p>
        </div>
        
        <div className="bg-orange-50 rounded-2xl p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-md sm:text-lg font-semibold text-orange-900">تحتاج متابعة</h3>
            <AlertCircle className="h-6 w-6 text-orange-600" />
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-orange-600">14</p>
        </div>
        
        <div className="bg-purple-50 rounded-2xl p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-md sm:text-lg font-semibold text-purple-900">مرضى جدد</h3>
            <Users className="h-6 w-6 text-purple-600" />
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-purple-600">8</p>
        </div>
      </div>

      {/* Patients List */}
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">قائمة المرضى</h3>
        <div className="space-y-4">
          {patients.map((patient) => (
            <div
              key={patient.id}
              className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedPatient(patient.id)}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4 sm:mb-0 w-full sm:w-auto">
                  <div className="text-3xl">{patient.avatar}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{patient.name}</h4>
                    <p className="text-gray-600 text-sm">{patient.condition}</p>
                    <p className="text-sm text-gray-500">العمر: {patient.age} سنة</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-stretch sm:items-center sm:flex-row sm:space-x-4 rtl:space-x-reverse w-full sm:w-auto">
                  <div className="flex justify-between items-center mb-2 sm:mb-0">
                    <div className="text-right">
                      <p className="text-sm text-gray-600">آخر زيارة</p>
                      <p className="text-sm font-medium">{patient.lastVisit}</p>
                    </div>
                    
                    <span className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
                      patient.priority === 'high' 
                        ? 'bg-red-100 text-red-700'
                        : patient.priority === 'low'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {patient.status}
                    </span>
                  </div>
                  
                  <div className="flex justify-around sm:justify-start space-x-2 rtl:space-x-reverse border-t sm:border-none pt-2 sm:pt-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowChat(true);
                      }}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="محادثة"
                    >
                      <MessageCircle className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="اتصال">
                      <Phone className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors" title="جلسة فيديو">
                      <Video className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAppointments = () => (
    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 sm:mb-0">مواعيد اليوم</h3>
        <span className="text-sm text-gray-600">الثلاثاء، 20 يناير 2025</span>
      </div>
      
      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4 sm:mb-0">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{appointment.patient}</h4>
                  <p className="text-gray-600 text-sm">{appointment.type}</p>
                  <p className="text-sm text-gray-500">المدة: {appointment.duration}</p>
                </div>
              </div>
              
              <div className="flex flex-col items-stretch sm:items-center sm:flex-row sm:space-x-4 rtl:space-x-reverse w-full sm:w-auto">
                <div className="flex justify-between items-center mb-2 sm:mb-0 text-center">
                  <p className="text-lg font-bold text-blue-600">{appointment.time}</p>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    appointment.status === 'مؤكد' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {appointment.status}
                  </span>
                </div>
                
                <div className="flex justify-around sm:justify-start space-x-2 rtl:space-x-reverse border-t sm:border-none pt-2 sm:pt-0">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition-colors flex-1 sm:flex-none">
                    بدء الجلسة
                  </button>
                  <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm transition-colors flex-1 sm:flex-none">
                    تأجيل
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMessages = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">الرسائل الحديثة</h3>
      <div className="space-y-4">
        {recentMessages.map((message) => (
          <div
            key={message.id}
            className={`border rounded-xl p-4 hover:shadow-md transition-shadow cursor-pointer ${
              message.unread ? 'border-blue-200 bg-blue-50' : 'border-gray-200'
            }`}
            onClick={() => setShowChat(true)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <MessageCircle className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{message.patient}</h4>
                  <p className="text-gray-600">{message.message}</p>
                  <p className="text-sm text-gray-500">{message.time}</p>
                </div>
              </div>
              
              {message.unread && (
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">التقارير والإحصائيات</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <h4 className="text-lg font-semibold mb-2">معدل الرضا</h4>
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Star className="h-6 w-6 text-yellow-300 fill-current" />
            <span className="text-2xl font-bold">4.8</span>
            <span className="text-blue-100">من 5</span>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
          <h4 className="text-lg font-semibold mb-2">الاستشارات الشهرية</h4>
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Calendar className="h-6 w-6" />
            <span className="text-2xl font-bold">124</span>
            <span className="text-green-100">استشارة</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-900">التقارير الأسبوعية</h4>
        {[
          { title: 'تقرير المرضى الجدد', date: '15-21 يناير', status: 'جاهز' },
          { title: 'تحليل الحالات المعقدة', date: '8-14 يناير', status: 'جاهز' },
          { title: 'إحصائيات الأدوية', date: '1-7 يناير', status: 'قيد الإعداد' }
        ].map((report, index) => (
          <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
            <div>
              <h5 className="font-semibold text-gray-900">{report.title}</h5>
              <p className="text-sm text-gray-600">{report.date}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm ${
              report.status === 'جاهز' 
                ? 'bg-green-100 text-green-700' 
                : 'bg-yellow-100 text-yellow-700'
            }`}>
              {report.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'appointments':
        return renderAppointments();
      case 'messages':
        return renderMessages();
      case 'reports':
        return renderReports();
      default:
        return renderPatients();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Doctor Profile Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-6 rtl:space-x-reverse">
            <div className="bg-blue-100 p-4 rounded-full mb-4 sm:mb-0">
              <Users className="h-12 w-12 text-blue-600" />
            </div>
            <div className="text-center sm:text-right">
              <h1 className="text-3xl font-bold text-gray-900">د. أحمد سالم</h1>
              <p className="text-xl text-gray-600">استشاري احساس خلقي</p>
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-4 gap-y-2 mt-2">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-600 mr-2">(4.8)</span>
                </div>
                <span className="text-sm text-gray-600">15 سنة خبرة</span>
                <span className="text-sm text-gray-600">مستشفى الملك فيصل</span>
              </div>
            </div>
          </div>
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

        {/* Chat Modal */}
        {showChat && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full h-[600px] flex flex-col">
              <div className="flex items-center justify-between p-6 border-b">
                <h3 className="text-xl font-bold">محادثة مع المريض</h3>
                <button
                  onClick={() => setShowChat(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="flex-1">
                <Chat currentUser="doctor-1" receiverId="patient-1" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorPage;