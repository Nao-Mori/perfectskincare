import clsx from 'clsx';

const colorMap: Record<number, string> = {
  1: 'from-blue-50 to-blue-200',
  2: 'from-red-50 to-red-200',
  3: 'from-green-50 to-green-200',
};

const textColorMap: Record<number, string> = {
  1: 'text-blue-500 border-blue-300',
  2: 'text-red-500 border-red-300',
  3: 'text-green-500 border-green-300',
};

export default function SelectorCard({
  step,
  title,
  children,
}: {
  step: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        `rounded-2xl p-4 shadow-lg flex flex-col min-h-[300px] w-[300px] relative m-2 bg-gradient-to-br`,
        colorMap[step]
      )}
    >
      <div
        className={clsx(
          `absolute -top-4 left-1/2 transform -translate-x-1/2
      bg-white font-bold text-lg w-10 h-10 flex items-center
      justify-center rounded-full shadow-md border-2 font-bold`,
          textColorMap[step]
        )}
      >
        {step}
      </div>

      <p className="text-center text-lg font-medium my-3">{title}</p>

      {children}
    </div>
  );
}
