import clsx from 'clsx';
import { Loader } from 'lucide-react';

export default function Spinner({ size }: { size: "sm" | "lg" }) {
  return (
    <div className="flex justify-center items-center py-8">
      <Loader className={clsx("animate-spin text-gray-600", size === "sm" ? "h-2 w-2" : "h-6 w-6")} />
    </div>
  );
}