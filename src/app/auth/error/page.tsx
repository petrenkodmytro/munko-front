'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Spinner from '@/app/loading';

const ErrorPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/?error="server_error"');
  });

  return <Spinner />;
};

export default ErrorPage;
