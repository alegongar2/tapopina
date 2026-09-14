import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import StepsConnector from "@/components/StepsConnector";
import TapCard from "@/components/TapCard";
import {
  ZapIcon,
  SmartphoneIcon,
  TrendingUpIcon,
  MapPinIcon,
  WhatsAppIcon,
  InstagramIcon,
  MailIcon,
  ArrowUpRightIcon,
} from "@/components/icons";

const WHATSAPP = "[WHATSAPP]";
const INSTAGRAM = "[INSTAGRAM]";
const EMAIL = "[EMAIL]";
const PRECIO = "[PRECIO]";

const pasos = [
  {
    numero: "01",
    titulo: "Coloca la tarjeta en tu negocio",
    texto:
      "La instalamos en el mostrador, la mesa o la entrada. Sin cables, sin obras, sin conexión a internet necesaria.",
  },
  {
    numero: "02",
    titulo: "El cliente acerca el móvil",
    texto:
      "Con un simple toque (NFC), sin descargar ninguna aplicación ni escanear nada manualmente.",
  },
  {
    numero: "03",
    titulo: "Aterriza directo en tu reseña de Google",
    texto:
      "El formulario de valoración se abre al instante, ya posicionado en 5 estrellas para reducir la fricción.",
  },
];

const beneficios = [
  {
    titulo: "Cero fricción",
    texto:
      "Nada de apps, códigos QR torpes ni enlaces que copiar. Un toque y listo.",
    Icon: ZapIcon,
  },
  {
    titulo: "Compatible con cualquier móvil moderno",
    texto: "Funciona con iPhone y Android sin configuración previa.",
    Icon: SmartphoneIcon,
  },
  {
    titulo: "Más reseñas, más rápido",
    texto:
      "Reducir los pasos entre la visita y la reseña multiplica la tasa de respuesta de tus clientes.",
    Icon: TrendingUpIcon,
  },
  {
    titulo: "Mejor posicionamiento local",
    texto:
      "Más reseñas recientes y mejor valoradas ayudan a que tu negocio aparezca antes en Google Maps.",
    Icon: MapPinIcon,
  },
];

const gestionReputacion = [
  "Revisión periódica de tus reseñas en Google",
  "Apoyo para responder a valoraciones, buenas y malas",
  "Aviso ante reseñas negativas para actuar a tiempo",
  "Informe mensual de evolución de tu reputación online",
];

export default function Home() {
  return (
    <>
      <Header />

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-20 md:grid-cols-2 md:py-28">
          <div
            className="[animation:var(--animate-fade-up)]"
            style={{ animationDelay: "0ms" }}
          >
            <p className="mb-4 inline-flex items-center rounded-full border border-gold-soft bg-gold-soft/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy">
              Tarjetas NFC para negocios locales
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-navy sm:text-5xl">
              Convierte cada visita en una reseña de 5 estrellas
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
              TapOpina es una tarjeta NFC que lleva a tus clientes directos a
              dejar una reseña de Google con un solo toque. Sin apps, sin
              códigos QR, sin excusas.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-soft hover:shadow-lg hover:shadow-navy/20"
              >
                Solicitar mi tarjeta
              </a>
              <a
                href="#como-funciona"
                className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-navy hover:shadow-md"
              >
                Ver cómo funciona
              </a>
            </div>
          </div>

          {/* Visual mockup */}
          <TapCard />
        </section>

        {/* Cómo funciona */}
        <section id="como-funciona" className="border-t border-line bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <Reveal>
              <h2 className="font-serif text-3xl font-semibold text-navy">
                Cómo funciona
              </h2>
              <p className="mt-3 max-w-xl text-ink-soft">
                Tres pasos, menos de diez segundos, ningún esfuerzo extra para
                tu cliente.
              </p>
            </Reveal>
            <div className="relative mt-12 grid gap-10 md:grid-cols-3">
              <StepsConnector />
              {pasos.map((paso, i) => (
                <Reveal key={paso.numero} delay={i * 120} className="relative bg-white">
                  <span className="font-serif text-3xl font-semibold text-gold">
                    {paso.numero}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-navy">
                    {paso.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {paso.texto}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section id="beneficios" className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <h2 className="font-serif text-3xl font-semibold text-navy">
              Por qué funciona
            </h2>
            <p className="mt-3 max-w-xl text-ink-soft">
              Pensado para negocios locales que quieren resultados, no otra
              aplicación más que gestionar.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {beneficios.map((b, i) => (
              <Reveal key={b.titulo} delay={i * 100}>
                <div className="group h-full rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-navy/20 hover:shadow-lg hover:shadow-navy/5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-soft/40 text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-gold-soft">
                    <b.Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-navy">
                    {b.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {b.texto}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Gestión de reputación */}
        <section
          id="reputacion"
          className="relative overflow-hidden border-t border-line bg-navy text-paper"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-soft/10 blur-3xl"
          />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
            <Reveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gold-soft">
                Servicio opcional
              </p>
              <h2 className="font-serif text-3xl font-semibold">
                No es solo una tarjeta: es gestión de tu reputación
              </h2>
              <p className="mt-4 max-w-md text-paper/75">
                Además de la tarjeta física, ofrecemos un servicio continuo
                para que las reseñas que consigas trabajen a tu favor mes
                tras mes.
              </p>
              <a
                href="#contacto"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-paper/30 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-paper hover:bg-paper/5"
              >
                Consultar disponibilidad
              </a>
            </Reveal>
            <Reveal delay={150}>
              <ul className="space-y-4">
                {gestionReputacion.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gold-soft/20 text-gold-soft">
                      ✓
                    </span>
                    <span className="text-sm leading-relaxed text-paper/85">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Precio */}
        <section id="precio" className="mx-auto max-w-6xl px-6 py-20">
          <Reveal className="mx-auto max-w-md">
            <div className="rounded-3xl border border-line bg-white p-10 text-center shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-navy/5">
              <h2 className="font-serif text-2xl font-semibold text-navy">
                Tarjeta TapOpina
              </h2>
              <p className="mt-2 text-sm text-ink-soft">
                Pago único, sin permanencia, instalación incluida
              </p>
              <p className="mt-6 font-serif text-5xl font-semibold text-navy">
                {PRECIO}
              </p>
              <ul className="mt-8 space-y-3 text-left text-sm text-ink-soft">
                <li>Tarjeta NFC física personalizada</li>
                <li>Configuración con el enlace de reseñas de tu negocio</li>
                <li>Instalación en el momento</li>
                <li>Soporte directo, sin tickets ni esperas</li>
              </ul>
              <a
                href="#contacto"
                className="mt-8 block w-full rounded-full bg-navy px-6 py-3 text-sm font-semibold text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-soft hover:shadow-lg hover:shadow-navy/20"
              >
                Solicitar mi tarjeta
              </a>
            </div>
          </Reveal>
        </section>

        {/* Contacto */}
        <section id="contacto" className="border-t border-line bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="grid gap-12 md:grid-cols-2">
              <Reveal>
                <h2 className="font-serif text-3xl font-semibold text-navy">
                  Hablemos de tu negocio
                </h2>
                <p className="mt-4 max-w-md text-ink-soft">
                  Cuéntanos dónde está tu negocio y te preparamos la tarjeta
                  lista para instalar. Respuesta rápida, sin compromisos.
                </p>
              </Reveal>
              <Reveal delay={120} className="space-y-4">
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  className="group flex items-center justify-between rounded-2xl border border-line px-6 py-4 text-sm font-medium text-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-navy hover:shadow-md"
                >
                  <span className="flex items-center gap-3">
                    <WhatsAppIcon className="h-5 w-5 text-gold" />
                    WhatsApp
                  </span>
                  <span className="flex items-center gap-2 text-ink-soft">
                    {WHATSAPP}
                    <ArrowUpRightIcon className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </span>
                </a>
                <a
                  href={`https://instagram.com/${INSTAGRAM}`}
                  className="group flex items-center justify-between rounded-2xl border border-line px-6 py-4 text-sm font-medium text-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-navy hover:shadow-md"
                >
                  <span className="flex items-center gap-3">
                    <InstagramIcon className="h-5 w-5 text-gold" />
                    Instagram
                  </span>
                  <span className="flex items-center gap-2 text-ink-soft">
                    {INSTAGRAM}
                    <ArrowUpRightIcon className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </span>
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex items-center justify-between rounded-2xl border border-line px-6 py-4 text-sm font-medium text-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-navy hover:shadow-md"
                >
                  <span className="flex items-center gap-3">
                    <MailIcon className="h-5 w-5 text-gold" />
                    Email
                  </span>
                  <span className="flex items-center gap-2 text-ink-soft">
                    {EMAIL}
                    <ArrowUpRightIcon className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </span>
                </a>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-line bg-paper">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-ink-soft sm:flex-row">
          <span className="font-serif text-base font-semibold text-navy">
            TapOpina
          </span>
          <span>© {new Date().getFullYear()} TapOpina. Todos los derechos reservados.</span>
        </div>
      </footer>
    </>
  );
}
