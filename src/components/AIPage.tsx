import React, { useState } from 'react';
import {
  Brain,
  Upload,
  FileText,
  Image,
  Loader,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Activity,
  Zap,
  Target,
  Eye
} from 'lucide-react';

const AIPage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeTab, setActiveTab] = useState('upload');

  // Mock analysis results for demonstration
  const mockResults = {
    bloodTest: {
      title: 'تحليل الدم الشامل',
      overview: 'النتائج تظهر حالة صحية جيدة بشكل عام مع بعض النقاط التي تحتاج انتباه',
      status: 'good',
      findings: [
        {
          parameter: 'مستوى السكر',
          value: '95 mg/dL',
          status: 'normal',
          range: '70-100 mg/dL',
          note: 'ضمن المعدل الطبيعي'
        },
        {
          parameter: 'الكوليسترول الكلي',
          value: '210 mg/dL',
          status: 'warning',
          range: '< 200 mg/dL',
          note: 'مرتفع قليلاً، يُنصح بتعديل النظام الغذائي'
        },
        {
          parameter: 'كريات الدم البيضاء',
          value: '7,200/μL',
          status: 'normal',
          range: '4,000-11,000/μL',
          note: 'طبيعي، لا توجد علامات عدوى'
        },
        {
          parameter: 'الهيموجلوبين',
          value: '14.2 g/dL',
          status: 'normal',
          range: '12.0-15.5 g/dL',
          note: 'مستوى ممتاز'
        }
      ],
      recommendations: [
        'تقليل تناول الأطعمة الغنية بالكوليسترول',
        'زيادة النشاط البدني لمدة 30 دقيقة يومياً',
        'تناول المزيد من الألياف والخضروات',
        'إعادة الفحص خلال 3 أشهر'
      ],
      riskFactors: [
        'ارتفاع طفيف في الكوليسترول قد يؤدي لمشاكل قلبية',
        'التاريخ العائلي لأمراض القلب يتطلب متابعة دورية'
      ]
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedFile) return;

    setIsAnalyzing(true);
    
    // Simulate AI analysis delay
    setTimeout(() => {
      setAnalysisResult(mockResults.bloodTest);
      setIsAnalyzing(false);
      setActiveTab('results');
    }, 3000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'normal':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'critical':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      default:
        return <Activity className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'warning':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'critical':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const tabs = [
    { id: 'upload', label: 'رفع الملف', icon: Upload },
    { id: 'results', label: 'النتائج', icon: Activity },
    { id: 'history', label: 'السجل', icon: FileText }
  ];

  const renderUploadTab = () => (
    <div className="space-y-6">
      {/* AI Features Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 rounded-2xl p-6 text-center">
          <Brain className="h-12 w-12 text-blue-500 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-blue-900 mb-2">تحليل ذكي</h3>
          <p className="text-blue-700 text-sm">تحليل دقيق للتحاليل الطبية باستخدام الذكاء الاصطناعي</p>
        </div>
        
        <div className="bg-green-50 rounded-2xl p-6 text-center">
          <Target className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-green-900 mb-2">تشخيص دقيق</h3>
          <p className="text-green-700 text-sm">كشف المؤشرات الصحية وتقييم النتائج</p>
        </div>
        
        <div className="bg-purple-50 rounded-2xl p-6 text-center sm:col-span-2 md:col-span-1">
          <Zap className="h-12 w-12 text-purple-500 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-purple-900 mb-2">نصائح مخصصة</h3>
          <p className="text-purple-700 text-sm">توصيات علاجية وغذائية حسب حالتك</p>
        </div>
      </div>

      {/* Upload Section */}
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8">
        <div className="text-center mb-8">
          <Brain className="h-16 w-16 text-blue-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">التحليل الذكي للحالة الصحية</h2>
          <p className="text-gray-600">ارفع تحليلك الطبي للحصول على تحليل ذكي وتوصيات مخصصة</p>
        </div>

        <div className="border-2 border-dashed border-blue-300 rounded-2xl p-6 sm:p-12 text-center hover:border-blue-400 transition-colors">
          {selectedFile ? (
            <div className="space-y-4">
              <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto">
                {selectedFile.type.includes('image') ? (
                  <Image className="h-8 w-8 text-blue-600" />
                ) : (
                  <FileText className="h-8 w-8 text-blue-600" />
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 break-all">{selectedFile.name}</h3>
                <p className="text-gray-600">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white px-8 py-3 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader className="h-5 w-5 animate-spin" />
                      <span>جاري التحليل...</span>
                    </>
                  ) : (
                    <>
                      <Brain className="h-5 w-5" />
                      <span>تحليل بالذكاء الاصطناعي</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => setSelectedFile(null)}
                  className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-xl font-medium transition-colors"
                >
                  إلغاء
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <Upload className="h-16 w-16 text-blue-500 mx-auto" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">ارفع ملف التحليل</h3>
                <p className="text-gray-600 mb-6">يدعم PDF, JPG, PNG (الحد الأقصى: 10 MB)</p>
                <label className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-medium transition-colors cursor-pointer inline-block">
                  اختيار الملف
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Supported Types */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <FileText className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-900">تحاليل الدم</h4>
            <p className="text-sm text-gray-600">CBC, السكر, الكوليسترول</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <Image className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-900">الأشعة</h4>
            <p className="text-sm text-gray-600">أشعة سينية, مقطعية</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 text-center sm:col-span-2 md:col-span-1">
            <Activity className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-900">تقارير طبية</h4>
            <p className="text-sm text-gray-600">تقارير شاملة, فحوصات</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderResultsTab = () => {
    if (!analysisResult) {
      return (
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
          <Brain className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">لا توجد نتائج</h3>
          <p className="text-gray-600">قم برفع ملف للحصول على نتائج التحليل الذكي</p>
          <button
            onClick={() => setActiveTab('upload')}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl font-medium transition-colors"
          >
            رفع ملف جديد
          </button>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        {/* Analysis Overview */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
            <div className="bg-blue-100 p-3 rounded-full">
              <Brain className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{analysisResult.title}</h2>
              <p className="text-gray-600">{analysisResult.overview}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-green-50 rounded-xl p-4 text-center">
              <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <h3 className="font-semibold text-green-900">المؤشرات الطبيعية</h3>
              <p className="text-2xl font-bold text-green-600">
                {analysisResult.findings.filter((f: any) => f.status === 'normal').length}
              </p>
            </div>
            
            <div className="bg-yellow-50 rounded-xl p-4 text-center">
              <AlertTriangle className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <h3 className="font-semibold text-yellow-900">تحتاج انتباه</h3>
              <p className="text-2xl font-bold text-yellow-600">
                {analysisResult.findings.filter((f: any) => f.status === 'warning').length}
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <TrendingUp className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <h3 className="font-semibold text-blue-900">الحالة العامة</h3>
              <p className="text-lg font-bold text-blue-600">جيدة</p>
            </div>
          </div>
        </div>

        {/* Detailed Findings */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">تفاصيل النتائج</h3>
          <div className="space-y-4">
            {analysisResult.findings.map((finding: any, index: number) => (
              <div
                key={index}
                className={`border-2 rounded-xl p-4 ${getStatusColor(finding.status)}`}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse mb-2 sm:mb-0">
                    {getStatusIcon(finding.status)}
                    <h4 className="font-semibold">{finding.parameter}</h4>
                  </div>
                  <span className="font-bold text-lg">{finding.value}</span>
                </div>
                <div className="text-sm opacity-75 mb-2">
                  المعدل الطبيعي: {finding.range}
                </div>
                <p className="text-sm">{finding.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">التوصيات العلاجية</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-900 mb-4 flex items-center space-x-2 rtl:space-x-reverse">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>ما يجب فعله:</span>
              </h4>
              <ul className="space-y-2">
                {analysisResult.recommendations.map((rec: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2 rtl:space-x-reverse">
                    <span className="text-green-500 mt-1">•</span>
                    <span className="text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-red-900 mb-4 flex items-center space-x-2 rtl:space-x-reverse">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                <span>عوامل الخطر:</span>
              </h4>
              <ul className="space-y-2">
                {analysisResult.riskFactors.map((risk: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2 rtl:space-x-reverse">
                    <span className="text-red-500 mt-1">•</span>
                    <span className="text-gray-700">{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse">
              <FileText className="h-5 w-5" />
              <span>تحميل التقرير</span>
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse">
              <Target className="h-5 w-5" />
              <span>مشاركة مع الطبيب</span>
            </button>
            <button
              onClick={() => {
                setSelectedFile(null);
                setAnalysisResult(null);
                setActiveTab('upload');
              }}
              className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <Upload className="h-5 w-5" />
              <span>تحليل جديد</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderHistoryTab = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">سجل التحليلات</h3>
      <div className="space-y-4">
        {[
          { date: '2025-01-15', type: 'تحليل دم شامل', status: 'مكتمل', score: '85%' },
          { date: '2025-01-10', type: 'أشعة صدر', status: 'مكتمل', score: '92%' },
          { date: '2025-01-05', type: 'تحليل بول', status: 'مكتمل', score: '78%' }
        ].map((item, index) => (
          <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="bg-blue-100 p-3 rounded-lg">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{item.type}</h4>
                <p className="text-sm text-gray-600">{item.date}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <span className="text-lg font-bold text-green-600">{item.score}</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                {item.status}
              </span>
              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                <Eye className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'results':
        return renderResultsTab();
      case 'history':
        return renderHistoryTab();
      default:
        return renderUploadTab();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">التحليل الذكي</h1>
          <p className="text-gray-600">تحليل التقارير الطبية بالذكاء الاصطناعي</p>
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
      </div>
    </div>
  );
};

export default AIPage;