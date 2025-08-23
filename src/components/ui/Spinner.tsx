import { Loader } from 'lucide-react';

export default function Spinner() {
  return (
    <div className="flex justify-center items-center py-8">
      <Loader className="h-6 w-6 animate-spin text-gray-600" />
    </div>
  );
}