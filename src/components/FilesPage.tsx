import React, { useState } from 'react';
import {
  Upload,
  FileText,
  Image,
  Download,
  Eye,
  Calendar,
  User,
  Filter,
  Search,
  FolderOpen,
  Trash2
} from 'lucide-react';

const FilesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const files = [
    {
      id: '1',
      name: 'تحليل الدم الشامل',
      fileName: 'blood_test_2025_01_15.pdf',
      category: 'analysis',
      type: 'pdf',
      uploadDate: '2025-01-15',
      doctor: 'د. أحمد سالم',
      size: '2.5 MB',
      status: 'reviewed'
    },
    {
      id: '2',
      name: 'أشعة الصدر',
      fileName: 'chest_xray_2025_01_10.jpg',
      category: 'xray',
      type: 'image',
      uploadDate: '2025-01-10',
      doctor: 'د. سارة أحمد',
      size: '4.1 MB',
      status: 'pending'
    },
    {
      id: '3',
      name: 'وصفة طبية',
      fileName: 'prescription_2025_01_12.pdf',
      category: 'prescription',
      type: 'pdf',
      uploadDate: '2025-01-12',
      doctor: 'د. محمد علي',
      size: '1.2 MB',
      status: 'reviewed'
    },
    {
      id: '4',
      name: 'تقرير القلب',
      fileName: 'heart_report_2025_01_08.pdf',
      category: 'report',
      type: 'pdf',
      uploadDate: '2025-01-08',
      doctor: 'د. فاطمة محمد',
      size: '3.7 MB',
      status: 'reviewed'
    },
    {
      id: '5',
      name: 'تحليل البول',
      fileName: 'urine_test_2025_01_05.pdf',
      category: 'analysis',
      type: 'pdf',
      uploadDate: '2025-01-05',
      doctor: 'د. خالد سالم',
      size: '1.8 MB',
      status: 'reviewed'
    }
  ];

  const categories = [
    { id: 'all', label: 'جميع الملفات', icon: FolderOpen, count: files.length },
    { id: 'analysis', label: 'التحاليل', icon: FileText, count: files.filter(f => f.category === 'analysis').length },
    { id: 'xray', label: 'الأشعة', icon: Image, count: files.filter(f => f.category === 'xray').length },
    { id: 'prescription', label: 'الوصفات', icon: FileText, count: files.filter(f => f.category === 'prescription').length },
    { id: 'report', label: 'التقارير', icon: FileText, count: files.filter(f => f.category === 'report').length }
  ];

  const filteredFiles = files.filter(file => {
    const matchesCategory = activeCategory === 'all' || file.category === activeCategory;
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         file.doctor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleFileUpload = () => {
    // In a real app, this would handle file upload
    console.log('File upload triggered');
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'image':
        return <Image className="h-8 w-8 text-blue-500" />;
      default:
        return <FileText className="h-8 w-8 text-red-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'reviewed':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'reviewed':
        return 'تم المراجعة';
      case 'pending':
        return 'في الانتظار';
      default:
        return 'غير محدد';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">الملفات الطبية</h1>
          <p className="text-gray-600">إدارة وتنظيم ملفاتك الطبية</p>
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="border-2 border-dashed border-blue-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors">
            <Upload className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">رفع ملف جديد</h3>
            <p className="text-gray-600 mb-4">اسحب الملفات هنا أو اضغط لاختيار الملفات</p>
            <button
              onClick={handleFileUpload}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
            >
              اختيار الملفات
            </button>
            <p className="text-sm text-gray-500 mt-2">
              يدعم PDF, JPG, PNG (الحد الأقصى: 10 MB)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">التصنيفات</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-medium transition-colors ${
                      activeCategory === category.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <category.icon className="h-5 w-5" />
                      <span>{category.label}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      activeCategory === category.id
                        ? 'bg-blue-200'
                        : 'bg-gray-200'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Files List */}
          <div className="lg:col-span-3">
            {/* Search and Filter */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="البحث في الملفات..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                  <Filter className="h-5 w-5" />
                  <span>تصفية</span>
                </button>
              </div>
            </div>

            {/* Files Grid */}
            <div className="space-y-4">
              {filteredFiles.map((file) => (
                <div
                  key={file.id}
                  className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4 sm:mb-0">
                      <div className="bg-gray-50 p-3 rounded-xl">
                        {getFileIcon(file.type)}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{file.name}</h4>
                        <p className="text-sm text-gray-600 hidden sm:block">{file.fileName}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 rtl:space-x-reverse mt-2 text-sm text-gray-500">
                          <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            <Calendar className="h-4 w-4" />
                            <span>{file.uploadDate}</span>
                          </div>
                          <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            <User className="h-4 w-4" />
                            <span>{file.doctor}</span>
                          </div>
                          <span className="hidden sm:inline-block">{file.size}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 sm:space-x-4 rtl:space-x-reverse w-full sm:w-auto justify-between">
                      <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(file.status)}`}>
                        {getStatusText(file.status)}
                      </span>
                      
                      <div className="flex space-x-1 sm:space-x-2 rtl:space-x-reverse">
                        <button
                          onClick={() => setSelectedFile(file.id)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="عرض"
                        >
                          <Eye className="h-5 w-5" />
                        </button>
                        <button
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          title="تحميل"
                        >
                          <Download className="h-5 w-5" />
                        </button>
                        <button
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="حذف"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredFiles.length === 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <FolderOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">لا توجد ملفات</h3>
                <p className="text-gray-600">لم يتم العثور على ملفات تطابق البحث</p>
              </div>
            )}
          </div>
        </div>

        {/* File Preview Modal */}
        {selectedFile && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full h-[80vh] flex flex-col">
              <div className="flex items-center justify-between p-6 border-b">
                <h3 className="text-xl font-bold">معاينة الملف</h3>
                <button
                  onClick={() => setSelectedFile(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="flex-1 p-6 bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                  <FileText className="h-24 w-24 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">معاينة الملف غير متاحة في العرض التوضيحي</p>
                  <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl font-medium transition-colors">
                    تحميل الملف
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilesPage;