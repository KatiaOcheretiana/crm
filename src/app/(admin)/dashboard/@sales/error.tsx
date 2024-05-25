'use client';

import Button from '@/app/components/button';

interface ErrorComponentProps {
  error: Error;
  reset: () => void;
}

export default function ErrorComponent({ error, reset }: ErrorComponentProps) {
  return (
    <div>
      <p>Something went wrong in slot sales</p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
