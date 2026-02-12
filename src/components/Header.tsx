import { cn } from "@/lib/utils";
import Link from "next/link";
import Logo from "./Logo";

const navigation = [
  { name: "Servicios", href: "#servicios" },
  { name: "Proceso", href: "#proceso" },
  { name: "Contacto", href: "#contacto" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#080d2f]/80 backdrop-blur-md border-b border-white/5">
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Logo variant="full" height={40} className="md:h-10 h-8" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="#contacto"
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-all"
          >
            Empezar
          </Link>
        </div>

        {/* Mobile Toggle Placeholder */}
        <button className="md:hidden text-white p-2">
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </nav>
    </header>
  );
}
