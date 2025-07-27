import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Clock,
  User,
  Heart,
  AlertTriangle,
  Zap,
  Car,
  Shield,
  Activity
} from 'lucide-react';

const SOSPage: React.FC = () => {
  const [emergencyType, setEmergencyType] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const emergencyTypes = [
    {
      id: 'heart',
      label: 'قلبية',
      icon: Heart,
      color: 'red',
      description: 'ألم في الصدر، ضيق تنفس'
    },
    {
      id: 'stroke',
      label: 'جلطة',
      icon: Brain,
      color: 'purple',
      description: 'دوار، فقدان توازن، تنميل'
    },
    {
      id: 'accident',
      label: 'حادث',
      icon: Car,
      color: 'orange',
      description: 'إصابة، نزيف، كسور'
    },
    {
      id: 'breathing',
      label: 'تنفسية',
      icon: Activity,
      color: 'blue',
      description: 'صعوبة تنفس، اختناق'
    },
    {
      id: 'other',
      label: 'أخرى',
      icon: AlertTriangle,
      color: 'gray',
      description: 'حالة طوارئ أخرى'
    }
  ];

  const nearbyHospitals = [
    {
      name: 'مستشفى الملك فيصل',
      distance: '2.3 كم',
      eta: '5 دقائق',
      phone: '920000123',
      specialties: ['طوارئ', 'قلب', 'جراحة']
    },
    {
      name: 'المستشفى السعودي الألماني',
      distance: '3.7 كم',
      eta: '8 دقائق',
      phone: '920000456',
      specialties: ['طوارئ', 'أعصاب', 'عظام']
    },
    {
      name: 'مستشفى دله',
      distance: '4.1 كم',
      eta: '10 دقائق',
      phone: '920000789',
      specialties: ['طوارئ', 'باطنة', 'نساء']
    }
  ];

  const handleEmergencyCall = (type: string) => {
    setEmergencyType(type);
    setIsConnecting(true);
    
    // Simulate connection process
    setTimeout(() => {
      setIsConnecting(false);
      setIsConnected(true);
    }, 3000);
  };

  const handleDirectCall = (phone: string) => {
    // In a real app, this would initiate a phone call
    console.log(`Calling ${phone}`);
  };

  if (isConnected) {
    return (
      <div className="min-h-screen bg-red-50 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="bg-green-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <Shield className="h-12 w-12 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">تم الاتصال بنجاح</h1>
            <p className="text-xl text-gray-600 mb-8">
              تم التواصل مع مركز الطوارئ. فريق الإسعاف في الطريق إليك.
            </p>
            
            <div className="bg-blue-50 rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse mb-4">
                <Car className="h-8 w-8 text-blue-600" />
                <span className="text-2xl font-bold text-blue-600">5 دقائق</span>
              </div>
              <p className="text-blue-800">الوقت المتوقع للوصول</p>
            </div>
            
            <div className="space-y-4 text-right">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <MapPin className="h-5 w-5 text-gray-500" />
                <span className="text-gray-700">تم تحديد موقعك: الرياض، حي الملك فهد</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <User className="h-5 w-5 text-gray-500" />
                <span className="text-gray-700">تم إرسال ملفك الطبي للفريق الطبي</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="h-5 w-5 text-gray-500" />
                <span className="text-gray-700">سيتم التواصل معك خلال دقائق</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
              <h3 className="font-bold text-yellow-800 mb-2">نصائح مهمة:</h3>
              <ul className="text-right text-yellow-700 space-y-1">
                <li>• ابق في مكانك وحافظ على الهدوء</li>
                <li>• تأكد من أن الطريق واضح للإسعاف</li>
                <li>• احتفظ بهاتفك مشحوناً ومعك</li>
                <li>• إذا كان لديك أدوية طوارئ، احتفظ بها معك</li>
              </ul>
            </div>
            
            <button
              onClick={() => {
                setIsConnected(false);
                setEmergencyType(null);
              }}
              className="mt-6 bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
            >
              إنهاء المكالمة
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isConnecting) {
    return (
      <div className="min-h-screen bg-red-50 p-4 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center max-w-md w-full">
          <div className="bg-red-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <Phone className="h-12 w-12 text-red-600 animate-pulse" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">جاري الاتصال...</h2>
          <p className="text-gray-600 mb-6">يتم توصيلك بمركز الطوارئ الأقرب إليك</p>
          
          <div className="flex justify-center space-x-2 rtl:space-x-reverse">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
          
          <p className="text-sm text-gray-500 mt-6">
            لا تغلق التطبيق أثناء الاتصال
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-red-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-red-500 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center animate-pulse">
            <Zap className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-red-600 mb-2">حالة طوارئ</h1>
          <p className="text-xl text-gray-700">اختر نوع الطوارئ للحصول على المساعدة الفورية</p>
        </div>

        {/* Emergency Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {emergencyTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => handleEmergencyCall(type.id)}
              className={`bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all hover:scale-105 border-2 border-transparent hover:border-${type.color}-200`}
            >
              <div className={`bg-${type.color}-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center`}>
                <type.icon className={`h-10 w-10 text-${type.color}-600`} />
              </div>
              
              <h3 className={`text-xl font-bold text-${type.color}-600 mb-2`}>
                حالة طوارئ {type.label}
              </h3>
              <p className="text-gray-600 text-sm">{type.description}</p>
              
              <div className="mt-4 flex items-center justify-center space-x-2 rtl:space-x-reverse">
                <Phone className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-500">اتصال فوري</span>
              </div>
            </button>
          ))}
        </div>

        {/* Emergency Contacts */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3 rtl:space-x-reverse">
            <Phone className="h-6 w-6 text-red-500" />
            <span>أرقام الطوارئ</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => handleDirectCall('997')}
              className="bg-red-500 hover:bg-red-600 text-white p-6 rounded-xl text-center transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">الإسعاف</h3>
              <p className="text-3xl font-bold">997</p>
            </button>
            
            <button
              onClick={() => handleDirectCall('999')}
              className="bg-blue-500 hover:bg-blue-600 text-white p-6 rounded-xl text-center transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">الشرطة</h3>
              <p className="text-3xl font-bold">999</p>
            </button>
            
            <button
              onClick={() => handleDirectCall('998')}
              className="bg-orange-500 hover:bg-orange-600 text-white p-6 rounded-xl text-center transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">الدفاع المدني</h3>
              <p className="text-3xl font-bold">998</p>
            </button>
          </div>
        </div>

        {/* Nearby Hospitals */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3 rtl:space-x-reverse">
            <MapPin className="h-6 w-6 text-green-500" />
            <span>أقرب المستشفيات</span>
          </h2>
          
          <div className="space-y-4">
            {nearbyHospitals.map((hospital, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{hospital.name}</h3>
                    <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-gray-600 mt-2">
                      <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <MapPin className="h-4 w-4" />
                        <span>{hospital.distance}</span>
                      </div>
                      <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <Clock className="h-4 w-4" />
                        <span>{hospital.eta}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleDirectCall(hospital.phone)}
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center space-x-2 rtl:space-x-reverse"
                  >
                    <Phone className="h-5 w-5" />
                    <span>اتصال</span>
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {hospital.specialties.map((specialty, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <div className="flex items-start space-x-3 rtl:space-x-reverse">
            <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-yellow-800 mb-2">تنبيه مهم:</h3>
              <p className="text-yellow-700">
                هذه واجهة تجريبية لأغراض العرض فقط. في حالة الطوارئ الحقيقية، 
                اتصل مباشرة بالرقم 997 للإسعاف أو 999 للشرطة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Import Brain icon for stroke emergency type
const Brain = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default SOSPage;