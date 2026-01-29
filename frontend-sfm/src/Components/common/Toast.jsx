'use client';

import React, { useState, useEffect } from 'react';
import { toast } from '../../utils/toast';
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimesCircle } from 'react-icons/fa';

const Toast = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const unsubscribe = toast.subscribe(setToasts);
    return unsubscribe;
  }, []);

  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <FaCheckCircle className="text-green-500" />;
      case 'error':
        return <FaTimesCircle className="text-red-500" />;
      case 'warning':
        return <FaExclamationCircle className="text-yellow-500" />;
      default:
        return <FaInfoCircle className="text-blue-500" />;
    }
  };

  const getBackgroundColor = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200';
      case 'error':
        return 'bg-red-50 border-red-200';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200';
      default:
        return 'bg-blue-50 border-blue-200';
    }
  };

  return (
    <div className="fixed top-20 right-4 z-50 space-y-2">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border ${getBackgroundColor(t.type)} animate-slide-in-right min-w-[300px] max-w-md`}
        >
          <div className="text-xl">{getIcon(t.type)}</div>
          <p className="flex-1 text-gray-800 text-sm font-medium">{t.message}</p>
          <button
            onClick={() => toast.remove(t.id)}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <FaTimesCircle />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Toast;

