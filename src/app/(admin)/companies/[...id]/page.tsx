'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/app/components/header';
import NotFound from './not-found';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  const [isValidId, setIsValidId] = useState(true);

  useEffect(() => {
    const id = Number.parseInt(params.id);
    if (Number.isNaN(id)) {
      setIsValidId(false);
    }
  }, [params.id]);

  if (!isValidId) {
    return <NotFound />;
  }

  return (
    <>
      <Header>Companies ({String(params.id)})</Header>
    </>
  );
}
