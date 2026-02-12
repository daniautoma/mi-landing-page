export default function VideoDemo() {
  return (
    <section className="py-20 bg-[#0a0e33]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Mira cómo funciona un asistente automatizado</h2>
          
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/10 border border-white/10 group">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          
          <p className="mt-8 text-center text-gray-400">Implementamos sistemas que trabajan 24/7 atendiendo a tus clientes.</p>
        </div>
      </div>
    </section>
  );
}
