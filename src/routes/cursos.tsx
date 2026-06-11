import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Navbar, Footer } from './index'

export const Route = createFileRoute('/cursos')({
  component: CursosPage,
})

function CursosPage() {
  const [marqueeItems] = useState([
    'Imágenes generadas con IA',
    'Motion graphics',
    'Dirección creativa',
    'Postproducción',
    'Narrativa visual',
  ])

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="site-shell bg-white text-black min-h-screen">
      <Navbar />
      <div className="h-20" /> {/* Spacer for fixed navbar */}

      {/* ── Hero ── */}
      <section id="formacion-hero" className="max-w-[1440px] mx-auto px-8 md:px-12 pt-16 md:pt-24 pb-12 md:pb-16">
        <p className="text-[12px] font-semibold tracking-[0.3em] uppercase text-[#e07328] mb-6">
          Formación &middot; 2.ª Edición Latam
        </p>
        <h1 className="font-sans text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.98] tracking-[-0.03em] max-w-5xl">
          <span className="font-light text-[#333333]">Dominá la </span>
          <span className="font-extrabold text-[#e07328]">IA generativa</span>
          <br />
          <span className="font-light text-[#333333]">y </span>
          <span className="font-extrabold text-black">reinventá tu carrera.</span>
        </h1>
        <p className="mt-9 text-[18px] md:text-[20px] leading-[1.8] max-w-2xl text-neutral-700 font-light">
          Programas, talleres y mentorías que conectan la técnica fotográfica tradicional con los flujos de trabajo generativos avanzados. Para creadores, instituciones y equipos que quieren liderar la revolución visual.
        </p>
      </section>

      {/* ── Marquee ── */}
      <div className="py-5 overflow-hidden border-y border-black/10 bg-white">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="text-[12px] font-semibold tracking-[0.3em] uppercase text-black/35 mx-9">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Section header band ── */}
      <div className="w-full bg-white border-b border-[#e07328]/10 py-14">
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="text-[14px] font-black tracking-[0.25em] text-[#e07328]">01</span>
            <div className="w-[1px] h-8 bg-gray-300" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[0.08em] sm:tracking-[0.12em] text-black uppercase">
              Programas
            </h2>
          </div>
          <span className="text-[12px] font-semibold tracking-[0.3em] uppercase text-[#333333]">
            Recorridos de 3 meses &middot; Niveles 1 a 3
          </span>
        </div>
      </div>

      {/* ── Course grid ── */}
      <section className="bg-white py-16 md:py-24 border-b border-[#e07328]/10">
        <div className="max-w-[1440px] mx-auto px-8 md:px-12">
          
          {/* Featured course */}
          <Link
            to="/cursos/narrativas-visuales"
            className="group block bg-white border border-black/8 rounded-2xl overflow-hidden mb-12 shadow-[0_2px_0_rgba(0,0,0,0.02)] hover:shadow-[0_30px_70px_-40px_rgba(0,0,0,0.35)] transition-all duration-500"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative overflow-hidden min-h-[340px] bg-neutral-100">
                <img
                  src="/galeria-consciencia-creativa.png"
                  alt="Narrativas Visuales y Expresión"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
                <span className="absolute top-5 left-5 px-3.5 py-1.5 bg-[#e07328] text-white text-[11px] font-bold tracking-[0.15em] uppercase rounded-full">
                  Destacado
                </span>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-5 text-[12px] font-semibold tracking-[0.1em] text-black/55">
                    <span className="text-[#e07328]">⬗</span>
                    <span>Programa</span>
                    <span className="text-black/20">&middot;</span>
                    <span>Expresión</span>
                  </div>
                  <h3 className="text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-black mb-4 group-hover:text-[#e07328] transition-colors duration-300">
                    Narrativas Visuales y Expresión
                  </h3>
                  <p className="text-[16px] leading-[1.8] text-[#333333] font-light max-w-lg mb-8">
                    Un recorrido en tres etapas —despertar, explorar y construir— para crear una obra visual propia, integrando fotografía, escritura, archivo personal e IA.
                  </p>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-[#333333] font-medium pb-6 border-b border-black/8">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e07328]" />
                      Presencial u online
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e07328]" />
                      3 meses &middot; 12 clases
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e07328]" />
                      Nivel intermedio
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-6">
                    <div>
                      <span className="text-[12px] text-[#333333] font-light">Desde</span>
                      <p className="text-[22px] font-extrabold text-black leading-none">$448.000</p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.08em] uppercase text-[#e07328] group-hover:gap-3 transition-all duration-300">
                      Ver programa &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Grid of standard cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Nivel 1 */}
            <Link
              to="/cursos/narrativas-visuales"
              className="group flex flex-col bg-white border border-black/8 rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_30px_70px_-45px_rgba(0,0,0,0.4)] transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-[16/11] bg-neutral-50">
                <img
                  src="/galeria-nino-argentino.png"
                  alt="Introducción a la IA Generativa"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-[#e07328] text-sm">⬗</span>
                  <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-black/45">
                    Nivel 1 &middot; Workshop
                  </span>
                </div>
                <h4 className="text-[20px] font-extrabold leading-tight text-black mb-2.5 group-hover:text-[#e07328] transition-colors duration-300">
                  Introducción a la IA Generativa
                </h4>
                <p className="text-[14px] leading-[1.7] text-[#333333] font-light flex-1">
                  Un primer acercamiento 100% práctico con visión fotográfica.
                </p>
                <div className="mt-6 pt-5 border-t border-black/8 flex items-center justify-between">
                  <span className="text-[12px] text-[#333333] font-medium">Presencial &middot; 12 hs</span>
                  <span className="text-[12px] font-bold tracking-[0.06em] uppercase text-[#e07328] group-hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-1">
                    Ver + &rarr;
                  </span>
                </div>
              </div>
            </Link>

            {/* Nivel 2 */}
            <Link
              to="/cursos/narrativas-visuales"
              className="group flex flex-col bg-white border border-black/8 rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_30px_70px_-45px_rgba(0,0,0,0.4)] transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-[16/11] bg-neutral-50">
                <img
                  src="/plan-direccion-foto.jpeg"
                  alt="Dirección de Fotografía con IA"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-[#e07328] text-sm">⬗</span>
                  <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-black/45">
                    Nivel 2 &middot; Programa
                  </span>
                </div>
                <h4 className="text-[20px] font-extrabold leading-tight text-black mb-2.5 group-hover:text-[#e07328] transition-colors duration-300">
                  Dirección de Fotografía con IA
                </h4>
                <p className="text-[14px] leading-[1.7] text-[#333333] font-light flex-1">
                  Control exacto sobre composición, luz y narrativa en movimiento.
                </p>
                <div className="mt-6 pt-5 border-t border-black/8 flex items-center justify-between">
                  <span className="text-[12px] text-[#333333] font-medium">Presencial &middot; 12 hs</span>
                  <span className="text-[12px] font-bold tracking-[0.06em] uppercase text-[#e07328] group-hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-1">
                    Ver + &rarr;
                  </span>
                </div>
              </div>
            </Link>

            {/* Nivel 3 */}
            <Link
              to="/cursos/narrativas-visuales"
              className="group flex flex-col bg-white border border-black/8 rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_30px_70px_-45px_rgba(0,0,0,0.4)] transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-[16/11] bg-neutral-50">
                <img
                  src="/plan-intro.jpeg"
                  alt="Especialización Profesional"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-[#e07328] text-sm">⬗</span>
                  <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-black/45">
                    Nivel 3 &middot; Programa
                  </span>
                </div>
                <h4 className="text-[20px] font-extrabold leading-tight text-black mb-2.5 group-hover:text-[#e07328] transition-colors duration-300">
                  Especialización Profesional
                </h4>
                <p className="text-[14px] leading-[1.7] text-[#333333] font-light flex-1">
                  Construcción de un ecosistema completo de producción a gran escala.
                </p>
                <div className="mt-6 pt-5 border-t border-black/8 flex items-center justify-between">
                  <span className="text-[12px] text-[#333333] font-medium">Presencial &middot; 12 hs</span>
                  <span className="text-[12px] font-bold tracking-[0.06em] uppercase text-[#e07328] group-hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-1">
                    Ver + &rarr;
                  </span>
                </div>
              </div>
            </Link>

            {/* WS Narrativas Visuales */}
            <Link
              to="/cursos/narrativas-visuales"
              className="group flex flex-col bg-white border border-black/8 rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_30px_70px_-45px_rgba(0,0,0,0.4)] transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-[16/11] bg-neutral-50">
                <img
                  src="/plan-team-building.jpg"
                  alt="WS Narrativas Visuales"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-[#e07328] text-sm">⬗</span>
                  <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-black/45">
                    Workshop &middot; Taller
                  </span>
                </div>
                <h4 className="text-[20px] font-extrabold leading-tight text-black mb-2.5 group-hover:text-[#e07328] transition-colors duration-300">
                  WS Narrativas Visuales
                </h4>
                <p className="text-[14px] leading-[1.7] text-[#333333] font-light flex-1">
                  Intensivo de storytelling visual: serie, ensayo y bitácora de proceso.
                </p>
                <div className="mt-6 pt-5 border-t border-black/8 flex items-center justify-between">
                  <span className="text-[12px] text-[#333333] font-medium">Presencial &middot; 12 hs</span>
                  <span className="text-[12px] font-bold tracking-[0.06em] uppercase text-[#e07328] group-hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-1">
                    Ver + &rarr;
                  </span>
                </div>
              </div>
            </Link>

            {/* Laboratorio AI */}
            <Link
              to="/cursos/narrativas-visuales"
              className="group flex flex-col bg-white border border-black/8 rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_30px_70px_-45px_rgba(0,0,0,0.4)] transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-[16/11] bg-neutral-50">
                <img
                  src="/galeria-drone-auto.png"
                  alt="Laboratorio AI"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-[#e07328] text-sm">⬗</span>
                  <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-black/45">
                    Masterclass &middot; Taller
                  </span>
                </div>
                <h4 className="text-[20px] font-extrabold leading-tight text-black mb-2.5 group-hover:text-[#e07328] transition-colors duration-300">
                  Laboratorio AI
                </h4>
                <p className="text-[14px] leading-[1.7] text-[#333333] font-light flex-1">
                  Experimentación con modelos de imagen y video de última generación.
                </p>
                <div className="mt-6 pt-5 border-t border-black/8 flex items-center justify-between">
                  <span className="text-[12px] text-[#333333] font-medium">Presencial &middot; 12 hs</span>
                  <span className="text-[12px] font-bold tracking-[0.06em] uppercase text-[#e07328] group-hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-1">
                    Ver + &rarr;
                  </span>
                </div>
              </div>
            </Link>

            {/* Mentoría — dark accent card */}
            <Link
              to="/cursos/narrativas-visuales"
              className="group flex flex-col bg-neutral-950 text-white rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_30px_70px_-45px_rgba(224,115,40,0.6)] transition-all duration-500 border border-neutral-900"
            >
              <div className="relative overflow-hidden aspect-[16/11] bg-neutral-900">
                <img
                  src="/plan-profesional.jpeg"
                  alt="Mentorías Personalizadas"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-[#e07328] text-sm">⬗</span>
                  <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/45">
                    A medida
                  </span>
                </div>
                <h4 className="text-[20px] font-extrabold leading-tight text-white mb-2.5 group-hover:text-[#e07328] transition-colors duration-300">
                  Mentorías Personalizadas
                </h4>
                <p className="text-[14px] leading-[1.7] text-white/55 font-light flex-1">
                  Acompañamiento individual de alta intensidad, 100% a tu medida.
                </p>
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[12px] text-white/45 font-medium">1:1 &middot; Flexible</span>
                  <span className="text-[12px] font-bold tracking-[0.06em] uppercase text-[#e07328] group-hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-1">
                    Ver + &rarr;
                  </span>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section id="cursos-contacto-cta" className="bg-neutral-950 text-white border-b border-[#e07328]/10">
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 py-20 md:py-28 text-center space-y-6">
          <p className="text-[12px] font-semibold tracking-[0.3em] uppercase text-[#e07328]">
            ¿No sabés por dónde empezar?
          </p>
          <h2 className="text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.05] tracking-[-0.02em] max-w-3xl mx-auto font-light text-white/55">
            Te ayudamos a elegir el <span className="font-extrabold text-white">recorrido ideal.</span>
          </h2>
          <div className="pt-4">
            <a
              href="https://wa.me/34645014166"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#25D366] text-white text-[14px] font-bold tracking-[0.05em] uppercase rounded-full hover:bg-[#20ba5a] transition-all duration-300 shadow-md cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.739-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.381 9.805-9.771.002-2.612-1.012-5.066-2.857-6.912C16.356 2.079 13.907.822 11.3.822 5.899.822 1.5 5.205 1.497 10.593c-.001 1.516.418 3.001 1.21 4.316l-.994 3.633 3.737-.978zm11.724-4.55c-.262-.13-1.554-.767-1.793-.852-.24-.087-.413-.13-.588.13-.175.26-.677.852-.83 1.02-.152.172-.306.193-.568.063-.261-.13-1.103-.407-2.102-1.298-.778-.694-1.303-1.552-1.455-1.813-.153-.262-.017-.404.114-.533.118-.117.262-.305.393-.457.13-.153.175-.261.262-.435.088-.174.044-.326-.021-.456-.066-.13-.588-1.416-.807-1.943-.213-.512-.446-.441-.609-.449-.158-.008-.34-.01-.522-.01s-.48.067-.73.34c-.25.27-1.011.987-1.011 2.404s.718 2.787.818 2.92c.1.133 1.411 2.155 3.418 3.021.478.206.85.33 1.142.423.481.152.919.13 1.265.067.385-.069 1.18-.483 1.346-.949.166-.465.166-.864.117-.949-.049-.085-.18-.13-.441-.26z" />
              </svg>
              Escribinos por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
