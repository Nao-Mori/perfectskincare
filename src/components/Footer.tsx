import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-100 via-blue-100 to-purple-100 text-gray-700 text-sm mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-2">SkinMatch.AI</h4>
          <p>Your gentle skincare matchmaker 🤍</p>
        </div>

        <div>
          <h4 className="text-md font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link href="/find-by-concern" className="hover:underline">Find by Concern</Link></li>
            <li><Link href="/find-by-ingredient" className="hover:underline">Find by Ingredient</Link></li>
            <li><Link href="/talk-to-ai" className="hover:underline">Talk to AI</Link></li>
            <li><Link href="/product-check" className="hover:underline">Product Check</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-md font-semibold mb-2">Connect</h4>
          <p className="mb-1">contact.naomori@gmail.com</p>
          <p className="mb-1">Instagram: soon..? lol</p>
          <p>Made with 💙 by Nao Mori</p>
        </div>
      </div>

      <div className="text-center py-4 border-t border-gray-300 text-xs">
        &copy; {new Date().getFullYear()} SkinMatch.AI – All rights reserved.
      </div>
    </footer>
  );
}