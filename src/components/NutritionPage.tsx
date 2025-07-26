import React, { useState, useEffect } from 'react';
import {
  Apple,
  Clock,
  CheckCircle,
  AlertTriangle,
  Heart,
  Zap,
  Calendar,
  Plus,
  Edit,
  Trash2,
  Info,
  BookOpen,
  MapPin,
  Save,
  X
} from 'lucide-react';

// Initial data structure for nutrition plans
const initialNutritionPlans = {
  diabetes: {
    title: 'نظام غذائي لمرضى السكري',
    description: 'نظام متوازن للتحكم في مستوى السكر في الدم',
    calories: '1800-2000',
    meals: {
      breakfast: ['شوفان مع المكسرات', 'بيضتان مسلوقتان', 'خضار ورقية'],
      lunch: ['سلمون مشوي (150جم)', 'أرز بني (كوب واحد)', 'سلطة خضراء'],
      dinner: ['دجاج مشوي', 'خضار مشكلة', 'خبز أسمر'],
      snacks: ['حفنة من اللوز', 'تفاحة متوسطة']
    },
    restrictions: ['تجنب السكريات المكررة', 'قلل من الكربوهيدرات البسيطة'],
    recommendations: ['وجبات صغيرة متكررة', 'مراقبة مستوى السكر']
  },
  hypertension: {
    title: 'نظام غذائي لضغط الدم',
    description: 'نظام قليل الصوديوم للتحكم في ضغط الدم',
    calories: '1600-1800',
    meals: {
      breakfast: ['دقيق الشوفان مع الموز', 'كوب حليب قليل الدسم'],
      lunch: ['دجاج مشوي بالأعشاب', 'كينوا مطبوخة'],
      dinner: ['سمك مشوي', 'بطاطا حلوة مشوية'],
      snacks: ['موز', 'عين الجمل']
    },
    restrictions: ['قلل الملح والصوديوم', 'تجنب الأطعمة المعلبة'],
    recommendations: ['أكثر من البوتاسيوم', 'تناول الحبوب الكاملة']
  },
  'moral-sense': {
    title: 'نظام غذائي لتعزيز الاحساس الخلقي',
    description: 'نظام غذائي لدعم الصحة النفسية والذهنية',
    calories: '1900-2100',
    meals: {
      breakfast: ['زبادي يوناني مع التوت والجوز', 'شاي البابونج'],
      lunch: ['سلطة غنية بالخضروات الورقية', 'صدر دجاج مشوي'],
      dinner: ['عدس مطبوخ مع الكركم', 'أرز أسمر'],
      snacks: ['شوكولاتة داكنة', 'شاي أخضر']
    },
    restrictions: ['تجنب الأطعمة المصنعة', 'التقليل من السكر المضاف'],
    recommendations: ['تناول أطعمة غنية بالأوميغا-3', 'الحصول على قسط كافٍ من النوم']
  }
};

const CipaInfo: React.FC = () => (
  <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
    <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
      <div className="bg-purple-100 p-3 rounded-full">
        <Info className="h-6 w-6 text-purple-600" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900">عدم الإحساس الخلقي بالألم (الاحساس الخلقي)</h2>
    </div>
    <p className="text-gray-600 mb-6 leading-relaxed">
      هو اضطراب وراثي نادر جدًا يُعرف طبيًا باسم "الاعتلال العصبي الحسي والذاتي من النوع الرابع (HSAN IV)". يولد المصابون به غير قادرين على الشعور بالألم أو الحرارة، بالإضافة إلى عدم قدرتهم على التعرق بشكل طبيعي، مما يعرضهم لمخاطر صحية جسيمة مثل الحمى المتكررة والإصابات الخطيرة دون أن يشعروا بها.
    </p>
  </div>
);

const NutritionPage: React.FC = () => {
  const [selectedCondition, setSelectedCondition] = useState('diabetes');
  const [plans, setPlans] = useState(initialNutritionPlans);
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState('');

  const currentPlan = plans[selectedCondition as keyof typeof plans] || plans.diabetes;

  const handleEditClick = (type: 'meal' | 'restriction' | 'recommendation', mealType: string, index: number, text: string) => {
    setEditingItemId(`${type}-${mealType}-${index}`);
    setEditingText(text);
  };

  const handleSaveClick = (type: 'meal' | 'restriction' | 'recommendation', mealType: string, index: number) => {
    const newPlans = { ...plans };
    const planToUpdate = newPlans[selectedCondition as keyof typeof plans];

    if (type === 'meal') {
      (planToUpdate.meals[mealType as keyof typeof planToUpdate.meals] as string[])[index] = editingText;
    } else if (type === 'restriction') {
      planToUpdate.restrictions[index] = editingText;
    } else if (type === 'recommendation') {
      planToUpdate.recommendations[index] = editingText;
    }

    setPlans(newPlans);
    setEditingItemId(null);
    setEditingText('');
  };

  const handleCancelClick = () => {
    setEditingItemId(null);
    setEditingText('');
  };

  const handleDeleteClick = (type: 'meal' | 'restriction' | 'recommendation', mealType: string, index: number) => {
    const newPlans = { ...plans };
    const planToUpdate = newPlans[selectedCondition as keyof typeof plans];

    if (type === 'meal') {
      (planToUpdate.meals[mealType as keyof typeof planToUpdate.meals] as string[]).splice(index, 1);
    } else if (type === 'restriction') {
      planToUpdate.restrictions.splice(index, 1);
    } else if (type === 'recommendation') {
      planToUpdate.recommendations.splice(index, 1);
    }

    setPlans(newPlans);
  };

  const handleAddItem = (type: 'meal' | 'restriction' | 'recommendation', mealType?: string) => {
    const newItem = prompt(`أدخل العنصر الجديد:`);
    if (newItem) {
      const newPlans = { ...plans };
      const planToUpdate = newPlans[selectedCondition as keyof typeof plans];
      
      if (type === 'meal' && mealType) {
        (planToUpdate.meals[mealType as keyof typeof planToUpdate.meals] as string[]).push(newItem);
      } else if (type === 'restriction') {
        planToUpdate.restrictions.push(newItem);
      } else if (type === 'recommendation') {
        planToUpdate.recommendations.push(newItem);
      }
      
      setPlans(newPlans);
    }
  };

  const conditions = [
    { id: 'cipa', label: 'الاحساس الخلقي', icon: '🧠', color: 'purple' },
    { id: 'diabetes', label: 'السكري', icon: '🩺', color: 'blue' },
    { id: 'hypertension', label: 'ضغط الدم', icon: '💓', color: 'red' },
    { id: 'heart', label: 'القلب', icon: '❤️', color: 'pink' },
    { id: 'general', label: 'عام', icon: '🌟', color: 'green' }
  ];

  const renderEditableListItem = (
    text: string,
    type: 'meal' | 'restriction' | 'recommendation',
    mealType: string,
    index: number
  ) => {
    const isEditing = editingItemId === `${type}-${mealType}-${index}`;
    const itemClass = type === 'restriction' ? 'text-red-700' : 'text-green-700';
    const itemIcon = type === 'restriction' ? <span className="text-red-500 mt-1">•</span> : <span className="text-green-500 mt-1">•</span>;

    return (
      <li key={index} className="flex items-center justify-between space-x-2 rtl:space-x-reverse">
        {isEditing ? (
          <input
            type="text"
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
            className="flex-grow p-1 border rounded-md"
          />
        ) : (
          <div className={`flex items-start space-x-2 rtl:space-x-reverse ${itemClass}`}>
            {itemIcon}
            <span>{text}</span>
          </div>
        )}
        <div className="flex items-center space-x-1 rtl:space-x-reverse">
          {isEditing ? (
            <>
              <button onClick={() => handleSaveClick(type, mealType, index)} className="p-1 text-green-600 hover:text-green-800"><Save size={16} /></button>
              <button onClick={handleCancelClick} className="p-1 text-gray-600 hover:text-gray-800"><X size={16} /></button>
            </>
          ) : (
            <button onClick={() => handleEditClick(type, mealType, index, text)} className="p-1 text-blue-600 hover:text-blue-800"><Edit size={16} /></button>
          )}
          <button onClick={() => handleDeleteClick(type, mealType, index)} className="p-1 text-red-600 hover:text-red-800"><Trash2 size={16} /></button>
        </div>
      </li>
    );
  };

  const renderContent = () => {
    if (selectedCondition === 'cipa') {
      return <div className="lg:col-span-3"><CipaInfo /></div>;
    }

    return (
      <div className="lg:col-span-2">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">{currentPlan.title}</h2>
            <p className="text-gray-600">{currentPlan.description}</p>
          </div>

          {/* Meals */}
          <div className="space-y-6">
            {Object.entries(currentPlan.meals).map(([mealType, items]) => (
              <div key={mealType} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{mealType}</h3>
                  <button onClick={() => handleAddItem('meal', mealType)} className="p-2 text-green-600 hover:bg-green-50 rounded-lg"><Plus className="h-4 w-4" /></button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {(items as string[]).map((item, index) => {
                    const isEditing = editingItemId === `meal-${mealType}-${index}`;
                    return (
                      <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                        {isEditing ? (
                          <input type="text" value={editingText} onChange={(e) => setEditingText(e.target.value)} className="flex-grow p-1 border rounded-md"/>
                        ) : (
                          <span className="text-gray-700">{item}</span>
                        )}
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                          {isEditing ? (
                            <>
                              <button onClick={() => handleSaveClick('meal', mealType, index)} className="p-1 text-green-600"><Save size={16} /></button>
                              <button onClick={handleCancelClick} className="p-1 text-gray-600"><X size={16} /></button>
                            </>
                          ) : (
                            <button onClick={() => handleEditClick('meal', mealType, index, item)} className="p-1 text-blue-600"><Edit size={16} /></button>
                          )}
                          <button onClick={() => handleDeleteClick('meal', mealType, index)} className="p-1 text-red-600"><Trash2 size={16} /></button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Restrictions and Recommendations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-red-50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-red-900">تجنب</h3>
                <button onClick={() => handleAddItem('restriction')} className="p-2 text-red-600 hover:bg-red-100 rounded-lg"><Plus className="h-4 w-4" /></button>
              </div>
              <ul className="space-y-2">
                {currentPlan.restrictions.map((restriction, index) => renderEditableListItem(restriction, 'restriction', 'none', index))}
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-green-900">نصائح</h3>
                <button onClick={() => handleAddItem('recommendation')} className="p-2 text-green-600 hover:bg-green-100 rounded-lg"><Plus className="h-4 w-4" /></button>
              </div>
              <ul className="space-y-2">
                {currentPlan.recommendations.map((recommendation, index) => renderEditableListItem(recommendation, 'recommendation', 'none', index))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">خطة التغذية والمعلومات الصحية</h1>
          <p className="text-gray-600">اختر حالة لعرض الخطة الغذائية أو المعلومات المرتبطة بها</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">اختر حالتك الصحية</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {conditions.map((condition) => (
              <button
                key={condition.id}
                onClick={() => {
                  setSelectedCondition(condition.id);
                  setEditingItemId(null); // Reset editing state on condition change
                }}
                className={`p-4 rounded-xl text-center transition-all hover:scale-105 ${
                  selectedCondition === condition.id
                    ? `bg-${condition.color}-100 border-2 border-${condition.color}-500`
                    : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                }`}
              >
                <div className="text-3xl mb-2">{condition.icon}</div>
                <div className={`font-semibold text-sm ${
                  selectedCondition === condition.id
                    ? `text-${condition.color}-700`
                    : 'text-gray-700'
                }`}>
                  {condition.label}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* This is a placeholder for the left-side content, which you might want to keep or remove */}
          <div className="lg:col-span-1">
             {/* You can put back the Today's Schedule and Stats here if you want */}
          </div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default NutritionPage;