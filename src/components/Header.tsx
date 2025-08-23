import { useTranslations } from 'next-intl';

export default function Header() {
    const t = useTranslations();
    
    return (
        <header className="w-full max-w-4xl flex justify-between items-center mb-10">
        <h1 className="text-xl font-bold">SkinMatch.AI</h1>
        <button className="bg-accent hover:bg-accent-light px-4 py-2 rounded-md text-sm shadow">
            Sign in
        </button>
        </header>
    );
}