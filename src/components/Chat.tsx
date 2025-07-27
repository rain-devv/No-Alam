import React, { useState } from 'react';
import { Send, Paperclip, Mic, MicOff, Image, FileText } from 'lucide-react';

interface ChatProps {
  currentUser: string;
  receiverId: string;
}

const Chat: React.FC<ChatProps> = ({ currentUser, receiverId }) => {
  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  // Mock messages for demonstration
  const messages = [
    {
      id: '1',
      senderId: 'patient-1',
      content: 'السلام عليكم دكتور، أريد استشارة بخصوص نتائج التحليل',
      timestamp: new Date('2025-01-20T09:00:00'),
      type: 'text' as const
    },
    {
      id: '2',
      senderId: 'doctor-1',
      content: 'وعليكم السلام، أهلاً بك. تفضل شاركني نتائج التحليل',
      timestamp: new Date('2025-01-20T09:02:00'),
      type: 'text' as const
    },
    {
      id: '3',
      senderId: 'patient-1',
      content: 'تحليل الدم الشامل.pdf',
      timestamp: new Date('2025-01-20T09:05:00'),
      type: 'file' as const,
      fileName: 'تحليل الدم الشامل.pdf'
    },
    {
      id: '4',
      senderId: 'doctor-1',
      content: 'شكراً لك، سأراجع التحليل الآن. النتائج تبدو طبيعية بشكل عام، لكن هناك ارتفاع طفيف في مستوى السكر',
      timestamp: new Date('2025-01-20T09:10:00'),
      type: 'text' as const
    },
    {
      id: '5',
      senderId: 'patient-1',
      content: 'ماذا تنصحني دكتور؟',
      timestamp: new Date('2025-01-20T09:12:00'),
      type: 'text' as const
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // In a real app, this would send the message to the server
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // In a real app, this would handle voice recording
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ar-SA', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => {
          const isCurrentUser = msg.senderId === currentUser;
          
          return (
            <div
              key={msg.id}
              className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                isCurrentUser
                  ? 'bg-blue-500 text-white rounded-br-md'
                  : 'bg-gray-100 text-gray-900 rounded-bl-md'
              }`}>
                {msg.type === 'file' ? (
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <FileText className="h-5 w-5" />
                    <span className="text-sm">{msg.fileName}</span>
                  </div>
                ) : (
                  <p className="text-sm">{msg.content}</p>
                )}
                <p className={`text-xs mt-1 ${
                  isCurrentUser ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {formatTime(msg.timestamp)}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Input Area */}
      <div className="border-t bg-white p-4">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          {/* Attachment Button */}
          <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
            <Paperclip className="h-5 w-5" />
          </button>

          {/* Image Button */}
          <button className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors">
            <Image className="h-5 w-5" />
          </button>

          {/* Message Input */}
          <div className="flex-1 relative">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="اكتب رسالتك هنا..."
              className="w-full resize-none border border-gray-300 rounded-2xl px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={1}
              style={{ minHeight: '40px', maxHeight: '120px' }}
            />
          </div>

          {/* Voice Recording */}
          <button
            onClick={toggleRecording}
            className={`p-2 rounded-full transition-colors ${
              isRecording
                ? 'bg-red-500 text-white'
                : 'text-gray-500 hover:text-red-600 hover:bg-red-50'
            }`}
          >
            {isRecording ? (
              <MicOff className="h-5 w-5" />
            ) : (
              <Mic className="h-5 w-5" />
            )}
          </button>

          {/* Send Button */}
          <button
            onClick={handleSendMessage}
            disabled={!message.trim()}
            className={`p-2 rounded-full transition-colors ${
              message.trim()
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <Send className="h-5 w-5" />
          </button>
        </div>

        {/* Recording Indicator */}
        {isRecording && (
          <div className="mt-2 flex items-center justify-center space-x-2 rtl:space-x-reverse text-red-600">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
            <span className="text-sm">جاري التسجيل...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;