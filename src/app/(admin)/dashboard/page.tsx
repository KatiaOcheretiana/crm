import MagicButton from '@/app/components/magic-button';

interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <main>
      <h1 className="text-xl">Dashboard page</h1>
      <MagicButton />
    </main>
  );
}
