import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen pt-16">{/* compensa header fijo (h-16) */}
      <Header />

      {/* HERO */}
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

      {/* Título y subtítulo */}
      <section className="px-6 pt-6 md:pt-8 pb-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-bee-primary">
          Monitoreo inteligente de colmenas con audio e IA.
        </h1>
        {/*<p className="mt-2 md:mt-3 text-base md:text-lg text-slate-700">
          Monitoreo inteligente de colmenas con audio e IA.
        </p>*/}
      </section>

      {/* BENEFICIOS (intro) */}
      <section id="caracteristicas" className="scroll-mt-24 px-6 py-12 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {[
          { t: "Monitoreo 24/7", d: "Audio + sensores para conocer el estado de la colmena." },
          { t: "Alertas tempranas", d: "Avisos en tu app ante patrones sospechosos." },
          { t: "Instalación simple", d: "Hardware accesible (ESP32/Arduino/RPi) y app móvil." },
        ].map((b) => (
          <div key={b.t} className="p-6 rounded-2xl border bg-white/90">
            <h3 className="text-xl font-semibold text-bee-primary">{b.t}</h3>
            <p className="mt-2 text-slate-700">{b.d}</p>
          </div>
        ))}
      </section>

      {/* CÓMO FUNCIONA */}
      <section id="como-funciona" className="scroll-mt-24 px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-bee-primary">Cómo funciona</h2>
        <ol className="mt-6 space-y-4 text-slate-700 list-decimal list-inside">
          <li>Captura de audio y métricas (temperatura, batería, actividad).</li>
          <li>Conversión a espectrogramas y análisis con modelos ML.</li>
          <li>Detección de eventos y envío de alertas a la app.</li>
          <li>Panel con estado histórico y recomendaciones.</li>
        </ol>
      </section>

      {/* POR QUÉ BEECARE */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-bee-primary">Por qué BeeCare</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border p-6 bg-white">
            <h3 className="font-semibold text-lg text-bee-primary">El problema</h3>
            <p className="mt-2 text-slate-700">
              Se pierden abejas por enfermedades, plagas y enjambrazones.
              El monitoreo suele ser “al ojo”, basado en experiencia con el tiempo.
            </p>
          </div>
          <div className="rounded-2xl border p-6 bg-white">
            <h3 className="font-semibold text-lg text-bee-primary">Nuestra propuesta</h3>
            <p className="mt-2 text-slate-700">
              BeeCare ofrece detección temprana de anomalías basadas en audio e IA,
              con alertas y recomendaciones enviadas a través de una app.
            </p>
          </div>
        </div>
      </section>

      {/* TECNOLOGÍA */}
      <section id="tecnologia" className="scroll-mt-24 px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-bee-primary">Tecnología</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border p-6 bg-white">
            <h3 className="font-semibold text-lg text-bee-primary">Dispositivo</h3>
            <ul className="mt-2 list-disc list-inside text-slate-700 space-y-1">
              <li>ESP32 (opcional Arduino/Raspberry Pi)</li>
              <li>Micrófono INMP441, caja y alimentación</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-6 bg-white">
            <h3 className="font-semibold text-lg text-bee-primary">Modelo</h3>
            <ul className="mt-2 list-disc list-inside text-slate-700 space-y-1">
              <li>Audio → espectrogramas</li>
              <li>Clasificador inicial healthy/sick (en entrenamiento)</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-6 bg-white">
            <h3 className="font-semibold text-lg text-bee-primary">App & Backend</h3>
            <ul className="mt-2 list-disc list-inside text-slate-700 space-y-1">
              <li>App Expo/React Native</li>
              <li>Firebase (Auth, Firestore, Storage / Functions)</li>
              <li>Landing estática (Vercel)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section id="beneficios" className="scroll-mt-24 px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-bee-primary">Beneficios</h2>
        <ul className="mt-6 grid md:grid-cols-2 gap-4 text-slate-700">
          <li className="rounded-xl border bg-white p-4">Detección temprana de comportamientos fuera de lo común.</li>
          <li className="rounded-xl border bg-white p-4">Notificaciones en cualquier lugar con conexión a internet.</li>
          <li className="rounded-xl border bg-white p-4">Decisiones basadas en datos entrenados por el modelo de IA.</li>
          <li className="rounded-xl border bg-white p-4">Reducción de pérdidas de abejas.</li>
        </ul>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-bee-primary">Preguntas frecuentes</h2>
        <div className="mt-6 space-y-3">
          <details className="rounded-xl border bg-white p-4">
            <summary className="font-medium text-bee-primary cursor-pointer">¿Necesito internet en el apiario?</summary>
            <p className="mt-2 text-slate-700">Lo ideal es que sí: para enviar audios y estado de la colmena necesitamos conexión.</p>
          </details>
          <details className="rounded-xl border bg-white p-4">
            <summary className="font-medium text-bee-primary cursor-pointer">¿La instalación es invasiva?</summary>
            <p className="mt-2 text-slate-700">No. Buscamos ser lo menos invasivos posible con las abejas; el micro va al exterior.</p>
          </details>
          <details className="rounded-xl border bg-white p-4">
            <summary className="font-medium text-bee-primary cursor-pointer">¿Cómo se alimenta el dispositivo?</summary>
            <p className="mt-2 text-slate-700">Batería con opción de panel solar o red eléctrica.</p>
          </details>
          <details className="rounded-xl border bg-white p-4">
            <summary className="font-medium text-bee-primary cursor-pointer">¿Cuánto cuesta?</summary>
            <p className="mt-2 text-slate-700">En desarrollo; estimación por kit de hardware y/o suscripción al servicio.</p>
          </details>
          <details className="rounded-xl border bg-white p-4">
            <summary className="font-medium text-bee-primary cursor-pointer">¿Qué pasa si no hay internet?</summary>
            <p className="mt-2 text-slate-700">Se puede bufferizar localmente y sincronizar cuando vuelva la conexión (según configuración).</p>
          </details>
          <details className="rounded-xl border bg-white p-4">
            <summary className="font-medium text-bee-primary cursor-pointer">¿Qué datos se recolectan?</summary>
            <p className="mt-2 text-slate-700">Principalmente audio de la colmena y eventos derivados; la app guarda usuario y colmenas asociadas.</p>
          </details>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="scroll-mt-24 px-6 py-16 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-bee-primary">¿Te interesa BeeCare?</h2>
        <p className="mt-2 text-slate-700">Escríbenos y conversemos un piloto.</p>
        <div className="mt-4 inline-flex gap-3">
          <a className="px-5 py-3 rounded-xl bg-bee-primary text-white"
            href="https://wa.me/56930687262?text=Hola%20BeeCare%20%F0%9F%91%8B%20Quiero%20saber%20m%C3%A1s">
            WhatsApp
          </a>
          <a className="px-5 py-3 rounded-xl border border-bee-primary text-bee-primary"
            href="mailto:beecarechile@gmail.com?subject=Inter%C3%A9s%20en%20BeeCare&body=Hola%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20BeeCare.">
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