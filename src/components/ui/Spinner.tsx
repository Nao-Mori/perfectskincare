import { Loader } from 'lucide-react';

export default function Spinner({ size }: { size: number }) {
  return (
    <Loader size={size} className="animate-spin text-gray-600" />
  );
}