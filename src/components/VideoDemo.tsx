import { cn } from "@/lib/utils";

export function VideoDemo() {
    return (
        <section className="py-20 bg-background/50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    Mira cómo funciona un asistente automatizado
                </h2>

                <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/10">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
                        title="Daniautoma Demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
