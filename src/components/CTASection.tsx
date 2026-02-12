import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-[#080d2f]">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-r from-purple-900 to-indigo-900 p-12 md:p-24 text-center">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Deja de perder clientes por falta de respuesta
            </h2>
            <p className="text-xl md:text-2xl text-purple-100/70 mb-12">
              Únete a las empresas que ya escalan su operación con inteligencia artificial.
            </p>
            <Link 
              href="#contacto"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-purple-900 rounded-full font-bold text-xl hover:bg-purple-50 hover:scale-105 transition-all shadow-xl shadow-black/20"
            >
              Empezar Ahora <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
