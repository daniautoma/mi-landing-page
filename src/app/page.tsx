import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { VideoDemo } from "@/components/VideoDemo";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { Process } from "@/components/Process";
import { Benefits } from "@/components/Benefits";
import { CTASection } from "@/components/CTASection";
import { LeadForm } from "@/components/LeadForm";
import { FloatingChat } from "@/components/FloatingChat";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen relative selection:bg-primary/30 selection:text-white">
            <Header />

            <Hero />

            <div className="relative z-10 bg-background/50 backdrop-blur-3xl rounded-t-[3rem] border-t border-white/5 mt-[-50px]">
                <ProblemSection />
                <VideoDemo />
                <Services />
                <Industries />
                <Process />
                <Benefits />
                <CTASection />
                <LeadForm />
            </div>

            <Footer />
            <FloatingChat />
        </main>
    );
}
