import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import VideoDemo from "@/components/VideoDemo";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080d2f] text-white">
      <Hero />
      <ProblemSection />
      <VideoDemo />
      <Services />
      <Industries />
      <Process />
      <Benefits />
      <CTASection />
      <section id="contacto" className="py-20 bg-gradient-to-t from-[#0a0e33] to-[#080d2f]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Listo para transformar tu negocio?</h2>
            <p className="text-xl text-gray-400">Déjanos tus datos y nos pondremos en contacto contigo para una consultoría gratuita.</p>
          </div>
          <LeadForm />
        </div>
      </section>
    </main>
  );
}
