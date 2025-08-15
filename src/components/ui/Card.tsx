import clsx from "clsx";

const colorMap:Record<number, string> = {
    1: "blue", 2: "red", 3: "green"
};

export default function Card({
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
        className={
            clsx(`rounded-2xl p-6 shadow-lg flex flex-col min-h-[300px] w-[300px] relative m-2 bg-gradient-to-br`, 
            `from-${colorMap[step]}-50 to-${colorMap[step]}-200`
        )}
        >
        <div
            className={clsx(`absolute -top-4 left-1/2 transform -translate-x-1/2
            bg-white font-bold text-lg w-10 h-10 flex items-center
            justify-center rounded-full shadow-md border-2 font-bold`, `text-${colorMap[step]}-500 border-${colorMap[step]}-300`)}
        >
            {step}
        </div>

        <p className="text-center text-lg font-medium mb-3">
            {title}
        </p>

        {children}
        </div>
    );
}
