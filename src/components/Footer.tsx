import Link from "next/link";
import { Instagram, Facebook, TikTok } from "lucide-react"; // Note: TikTok icon might not be in all Lucide versions, using placeholder
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="py-12 bg-[#080d2f] border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo variant="full" height={32} className="h-8" />
            <p className="text-gray-500 text-center md:text-left">
              Transformando negocios con IA de vanguardia.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link href="https://instagram.com" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Instagram className="w-6 h-6" />
            </Link>
            <Link href="https://facebook.com" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Facebook className="w-6 h-6" />
            </Link>
            {/* TikTok Icon placeholder using Facebook as base or custom div if Lucide doesn't have it */}
            <Link href="https://tiktok.com" className="text-gray-400 hover:text-purple-400 transition-colors">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-6 h-6"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} danIAutoma. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
