import React from 'react';
import { 
  Heart, 
  Users, 
  FileText, 
  MessageCircle, 
  Brain, 
  Shield,
  CheckCircle,
  Star
} from 'lucide-react';

interface HomePageProps {
  onPageChange: (page: string) => void;
  onRoleSelect: (role: 'patient' | 'doctor') => void;
}

const HomePage: React.FC<HomePageProps> = ({ onPageChange, onRoleSelect }) => {
  const features = [
    {
      icon: Brain,
      title: 'تحليل ذكي للحالة الصحية',
      description: 'نظام ذكي يحلل التحاليل والتقارير الطبية ويقدم ملاحظات أولية'
    },
    {
      icon: FileText,
      title: 'ملف صحي رقمي شامل',
      description: 'حفظ آمن لجميع التحاليل والمواعيد والوصفات الطبية'
    },
    {
      icon: MessageCircle,
      title: 'تواصل مباشر مع الأطباء',
      description: 'محادثة فورية تدعم النص، الصوت، والملفات'
    },
    {
      icon: Users,
      title: 'شبكة أطباء متخصصين',
      description: 'وصول سريع لأفضل الأطباء في جميع التخصصات'
    }
  ];

  const stats = [
    { number: '1000+', label: 'طبيب متخصص' },
    { number: '5000+', label: 'مريض راضي' },
    { number: '10000+', label: 'استشارة طبية' },
    { number: '99%', label: 'معدل الرضا' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-500 p-4 rounded-full">
                <Heart className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              بلا ألم
            </h1>
            
            <p className="text-2xl text-blue-600 mb-4 font-semibold">
              الرابط الذكي بين الطبيب والمريض
            </p>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              منصة صحية رقمية متطورة تسهل التواصل بين الأطباء والمرضى، 
              وتقدم خدمات صحية ذكية لرعاية صحية أفضل
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => {
                  onRoleSelect('patient');
                  onPageChange('patient');
                }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg flex items-center space-x-2 rtl:space-x-reverse"
              >
                <span>ابدأ كمريض</span>
                <Heart className="h-5 w-5" />
              </button>
              
              <button
                onClick={() => {
                  onRoleSelect('doctor');
                  onPageChange('doctor');
                }}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg flex items-center space-x-2 rtl:space-x-reverse"
              >
                <span>ابدأ كطبيب</span>
                <Users className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              مميزات المنصة
            </h2>
            <p className="text-xl text-gray-600">
              تقنيات متطورة لرعاية صحية شاملة
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="bg-white p-3 rounded-full w-fit mb-6 shadow-md">
                  <feature.icon className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                لماذا تختار بلا ألم؟
              </h2>
              
              <div className="space-y-6">
                {[
                  'أمان عالي لبياناتك الطبية',
                  'تشخيص دقيق بالذكاء الاصطناعي',
                  'متابعة مستمرة لحالتك الصحية',
                  'خطط غذائية مخصصة',
                  'تذكيرات ذكية للأدوية',
                  'استشارات طبية فورية'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-lg italic mb-4">
                  "منصة رائعة سهلت علي التواصل مع طبيبي ومتابعة حالتي الصحية. 
                  التحليل الذكي للتقارير يوفر وقتي كثيراً."
                </p>
                <div className="text-sm text-gray-500">
                  أحمد محمد - مريض سكري
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Shield className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">
            ابدأ رحلتك الصحية اليوم
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            انضم إلى آلاف المرضى والأطباء الذين يثقون في بلا ألم
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                onRoleSelect('patient');
                onPageChange('patient');
              }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
            >
              تسجيل كمريض
            </button>
            <button
              onClick={() => {
                onRoleSelect('doctor');
                onPageChange('doctor');
              }}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              انضم كطبيب
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;