import { headers } from 'next/headers';

interface ServerComponentCopyProps {
  children?: React.ReactNode;
}

export default function ServerComponentCopy({
  children,
}: ServerComponentCopyProps) {
  console.log('Server component COPY');
  console.log(headers());

  return (
    <div>
      <span>Server component COPY</span>
      {children}
    </div>
  );
}
