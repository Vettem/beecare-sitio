import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO — Banner full width, responsive */}
      <section className="relative w-full bg-bee-cream">
        <div className="relative h-[180px] sm:h-[200px] md:h-[320px] lg:h-[380px]">
          <Image
            src="/banner.jpg"
            alt="BeeCare: abejas y flores"
            fill
            priority
            sizes="100vw"
            className="object-contain md:object-cover object-[center_top]"
          />
        </div>
      </section>


      {/* Título y subtítulo debajo del banner */}
      <section className="px-6 pt-6 md:pt-8 pb-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-bee-primary">
          BeeCare
        </h1>
        <p className="mt-2 md:mt-3 text-base md:text-lg text-slate-700">
          Monitoreo inteligente de colmenas con audio e IA.
        </p>
      </section>


      {/* Beneficios */}
      <section className="px-6 py-12 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {[
          { t: "Monitoreo 24/7", d: "Audio + sensores para conocer el estado de la colmena." },
          { t: "Alertas tempranas", d: "Avisos en tu app ante patrones sospechosos." },
          { t: "Instalación simple", d: "Hardware accesible (ESP32/Arduino/RPi) y app móvil." },
        ].map((b) => (
          <div key={b.t} className="p-6 rounded-2xl border bg-white/70">
            <h3 className="text-xl font-semibold text-bee-primary">{b.t}</h3>
            <p className="mt-2 text-slate-700">{b.d}</p>
          </div>
        ))}
      </section>

      {/* Cómo funciona */}
      <section id="como-funciona" className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-bee-primary">Cómo funciona</h2>
        <ol className="mt-6 space-y-4 text-slate-700 list-decimal list-inside">
          <li>Captura de audio y métricas (temperatura, batería, actividad).</li>
          <li>Conversión a espectrogramas y análisis con modelos ML.</li>
          <li>Detección de eventos y envío de alertas a la app.</li>
          <li>Panel con estado histórico y recomendaciones.</li>
        </ol>
      </section>

      {/* Contacto */}
      <section id="contacto" className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-bee-primary">Contacto</h2>
        <p className="mt-2 text-slate-700">¿Quieres probar BeeCare o colaborar?</p>
        <div className="mt-4 flex gap-3">
          <a
            className="px-5 py-3 rounded-xl bg-bee-primary text-white"
            href="https://wa.me/<+56995779815>?text=Hola%20BeeCare%20👋"
          >
            WhatsApp
          </a>
          <a
            className="px-5 py-3 rounded-xl border border-bee-primary text-bee-primary"
            href="mailto:contacto@beecare.cl?subject=Interés%20en%20BeeCare"
          >
            Email
          </a>
        </div>
      </section>

      <footer className="px-6 py-8 border-t text-center text-sm text-slate-500">
        © {new Date().getFullYear()} BeeCare
      </footer>
    </main>
  );
}
