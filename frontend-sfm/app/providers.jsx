'use client';

import React from 'react';
import Toast from '../src/Components/common/Toast';

export default function Providers({ children }) {
  return (
    <>
      <Toast />
      {children}
    </>
  );
}
