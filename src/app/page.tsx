import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          BeeCare · Monitoreo inteligente de colmenas
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Detección temprana de anomalías con audio e IA. Alertas en tiempo real y panel para apicultores.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="#como-funciona" className="px-5 py-3 rounded-xl bg-black text-white">Cómo funciona</a>
          <a href="#contacto" className="px-5 py-3 rounded-xl border">Contacto</a>
        </div>
      </section>

      {/* Beneficios */}
      <section className="px-6 py-12 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {[
          { t: "Monitoreo 24/7", d: "Audio + sensores para conocer el estado de la colmena." },
          { t: "Alertas tempranas", d: "Avisos en tu app ante patrones sospechosos." },
          { t: "Instalación simple", d: "Hardware accesible (ESP32/Arduino/RPi) y app móvil." },
        ].map((b) => (
          <div key={b.t} className="p-6 rounded-2xl border">
            <h3 className="text-xl font-semibold">{b.t}</h3>
            <p className="mt-2 text-gray-600">{b.d}</p>
          </div>
        ))}
      </section>

      {/* Cómo funciona */}
      <section id="como-funciona" className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold">Cómo funciona</h2>
        <ol className="mt-6 space-y-4 text-gray-700 list-decimal list-inside">
          <li>Captura de audio y métricas (temperatura, batería, actividad).</li>
          <li>Conversión a espectrogramas y análisis con modelos ML.</li>
          <li>Detección de eventos y envío de alertas a la app.</li>
          <li>Panel con estado histórico y recomendaciones.</li>
        </ol>
      </section>

      {/* App */}
      <section id="app" className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold">App BeeCare</h2>
        <p className="mt-4 text-gray-700">
          Prototipo en Expo/React Native. Próximamente en tiendas.
        </p>
        <a className="underline" href="/demo">
          Ver demo (próximamente)
        </a>
      </section>

      {/* Contacto */}
      <section id="contacto" className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold">Contacto</h2>
        <p className="mt-2 text-gray-700">¿Quieres probar BeeCare o colaborar?</p>
        <div className="mt-4 flex gap-3">
          <a className="px-5 py-3 rounded-xl bg-black text-white"
            href="https://wa.me/<tu_numero>?text=Hola%20BeeCare%20👋">
            WhatsApp
          </a>
          <a className="px-5 py-3 rounded-xl border"
            href="mailto:contacto@beecare.cl?subject=Interés%20en%20BeeCare">
            Email
          </a>
        </div>
      </section>

      <footer className="px-6 py-8 border-t text-center text-sm text-gray-500">
        © {new Date().getFullYear()} BeeCare
      </footer>
    </main>
  );
}