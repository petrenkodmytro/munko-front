'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Spinner from '@/components/loading/loading';

const ErrorPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/?error="server_error"');
  });

  return <Spinner />;
};

export default ErrorPage;
