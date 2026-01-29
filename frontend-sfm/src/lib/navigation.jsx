'use client';

// Navigation adapters for Next.js migration
// This file helps transition from React Router to Next.js router

import { useRouter as useNextRouter, usePathname } from 'next/navigation';
import NextLink from 'next/link';
import React from 'react';

// Custom Link component that accepts both 'to' (React Router style) and 'href' (Next.js style)
export function Link({ to, href, children, className, onClick, ...props }) {
  const linkHref = href || to;
  
  return (
    <NextLink href={linkHref} className={className} onClick={onClick} {...props}>
      {children}
    </NextLink>
  );
}

// Export useNavigate hook compatible with React Router
export function useNavigate() {
  const router = useNextRouter();
  
  return (to, options = {}) => {
    if (typeof to === 'string') {
      router.push(to);
    } else if (to && typeof to === 'object' && to.pathname) {
      router.push(to.pathname);
    }
  };
}

// Export useLocation hook
export function useLocation() {
  const pathname = usePathname();
  
  return {
    pathname,
    search: '',
    hash: '',
    state: null,
    key: 'default',
  };
}

// Export useParams - this is already available in Next.js
export { useParams } from 'next/navigation';

// Export useRouter for direct access
export function useRouter() {
  return useNextRouter();
}
