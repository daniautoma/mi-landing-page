import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { LeadForm } from "@/components/LeadForm";
import { FloatingChat } from "@/components/FloatingChat";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen relative selection:bg-primary/30 selection:text-white">
            <Header />

            <Hero />

            <div className="relative z-10 bg-background/50 backdrop-blur-3xl rounded-t-[3rem] border-t border-white/5 mt-[-50px]">
                <Benefits />
                <LeadForm />
            </div>

            <Footer />
            <FloatingChat />
        </main>
    );
}
