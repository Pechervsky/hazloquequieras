import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Navbar, Footer } from './index'

export const Route = createFileRoute('/cursos/narrativas-visuales')({
  component: NarrativasVisualesPage,
})

function NarrativasVisualesPage() {
  const [promo, setPromo] = useState<'promo1' | 'promo2'>('promo1')
  const [modalidad, setModalidad] = useState('Presencial')
  const [diaHora, setDiaHora] = useState('Martes 18:00 – 21:00')

  const marqueeItems = [
    'Fotografía',
    'Imagen intervenida',
    'Escritura creativa',
    'Bitácora',
    'Collage',
    'IA generativa',
    'Análisis de obras',
    'Archivo personal',
  ]

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0)
  }, [])

  // Build the dynamic WhatsApp URL
  const baseWaText = `Hola! Quiero inscribirme en Narrativas Visuales y Expresión.
- Modalidad: ${modalidad}
- Horario: ${diaHora}
- Inversión/Pago: ${promo === 'promo1' ? 'Promo 1 (Cuotas sin interés - $560.000)' : 'Promo 2 (Pago único 20% OFF - $448.000)'}`

  const whatsappUrl = `https://wa.me/34645014166?text=${encodeURIComponent(baseWaText)}`

  return (
    <div className="site-shell bg-white text-black min-h-screen">
      <Navbar />
      <div className="h-20" /> {/* Spacer for fixed navbar */}

      {/* ── Breadcrumb ── */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 pt-10">
        <div className="flex items-center gap-2 text-[12px] tracking-[0.08em] text-black/40 font-medium uppercase">
          <Link to="/cursos" className="hover:text-[#2872e0] transition-colors duration-300">
            Formación
          </Link>
          <span>/</span>
          <span>Programas</span>
          <span>/</span>
          <span className="text-black/70">Narrativas Visuales y Expresión</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 pt-8 md:pt-12 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left column — Title & details */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2.5 mb-7">
              <span className="px-3.5 py-1.5 bg-[#2872e0] text-white text-[11px] font-bold tracking-[0.18em] uppercase rounded-full">
                Programa
              </span>
              <span className="px-3.5 py-1.5 border border-black/12 text-black/60 text-[11px] font-semibold tracking-[0.12em] uppercase rounded-full">
                Nivel Intermedio
              </span>
              <span className="px-3.5 py-1.5 border border-black/12 text-black/60 text-[11px] font-semibold tracking-[0.12em] uppercase rounded-full">
                2.ª Edición Latam
              </span>
            </div>

            <h1 className="font-sans text-[clamp(2.4rem,5.5vw,4.6rem)] leading-[1.02] tracking-[-0.025em]">
              <span className="font-light text-[#333333]">Narrativas </span>
              <span className="font-extrabold text-black">visuales</span>
              <br />
              <span className="font-light text-[#333333]">y </span>
              <span className="font-extrabold text-[#2872e0]">
                expresión<span className="text-black">.</span>
              </span>
            </h1>

            <p className="mt-9 text-[18px] md:text-[19px] leading-[1.85] max-w-2xl text-neutral-800 font-light">
              Un recorrido formativo en narrativas visuales a través de las artes combinadas y múltiples medios de expresión. Tres etapas —
              <span className="text-black font-semibold">despertar</span>,{' '}
              <span className="text-black font-semibold">explorar</span> y{' '}
              <span className="text-black font-semibold">construir</span>— que culminan en una obra visual propia, exhibida en una muestra colectiva final.
            </p>

            {/* Quick facts */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px bg-black/8 border border-black/8 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-white p-5">
                <p className="text-[12px] font-semibold tracking-[0.3em] uppercase text-[#2872e0] mb-2">
                  Duración
                </p>
                <p className="text-[17px] font-extrabold text-black">3 meses</p>
              </div>
              <div className="bg-white p-5">
                <p className="text-[12px] font-semibold tracking-[0.3em] uppercase text-[#2872e0] mb-2">
                  Encuentros
                </p>
                <p className="text-[17px] font-extrabold text-black">12 clases</p>
              </div>
              <div className="bg-white p-5">
                <p className="text-[12px] font-semibold tracking-[0.3em] uppercase text-[#2872e0] mb-2">
                  Modalidad
                </p>
                <p className="text-[17px] font-extrabold text-black">Presencial</p>
              </div>
              <div className="bg-white p-5">
                <p className="text-[12px] font-semibold tracking-[0.3em] uppercase text-[#2872e0] mb-2">
                  Formato
                </p>
                <p className="text-[17px] font-extrabold text-black">Teórico-práctico</p>
              </div>
            </div>
          </div>

          {/* Right column — Image & Teacher */}
          <div className="lg:col-span-5 space-y-6">
            <div className="overflow-hidden bg-white border border-black/8 rounded-2xl shadow-md">
              <img
                src="/galeria-consciencia-creativa.png"
                alt="Imagen del programa Narrativas Visuales"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
            <div className="flex items-center gap-4 px-1">
              <div className="w-[52px] h-[52px] rounded-full overflow-hidden border border-black/8 bg-neutral-100 flex-shrink-0">
                <img
                  src="/galeria-participante-07.png"
                  alt="Priscila Borra Bisserier"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.18em] uppercase text-black/40 font-bold">
                  Profesora
                </p>
                <p className="text-[16px] font-extrabold text-black">Priscila Borra Bisserier</p>
              </div>
            </div>
          </div>

        </div>
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

      {/* ── Propuesta General (P.01) ── */}
      <section className="bg-white border-b border-[#2872e0]/10">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-5 sticky top-28">
                <span className="text-[13px] font-black tracking-[0.25em] text-[#2872e0]">P.01</span>
                <div className="w-10 h-px bg-black/20" />
                <h2 className="text-[22px] md:text-[26px] font-extrabold tracking-[-0.01em] text-black">
                  Propuesta general
                </h2>
              </div>
            </div>
            <div className="lg:col-span-8 space-y-7 max-w-3xl">
              <p className="text-[18px] leading-[1.9] text-neutral-800 font-light">
                El curso propone un recorrido formativo en narrativas visuales a través de la{' '}
                <span className="font-semibold text-black">exploración de las artes combinadas</span> y múltiples medios de expresión.
              </p>
              <p className="text-[17px] leading-[1.9] text-neutral-700 font-light">
                Se trabaja con fotografía, imagen intervenida, archivo personal, escritura creativa, bitácora, collage, IA y análisis de obras. La propuesta se organiza en tres etapas —despertar, explorar y construir— replicando la estructura clásica de una narrativa:{' '}
                <span className="italic font-medium text-black">introducción, nudo y desenlace.</span>
              </p>
              <p className="text-[17px] leading-[1.9] text-neutral-700 font-light">
                El recorrido culmina con la creación y exhibición de una obra visual propia, con la posibilidad de ser presentada en una muestra colectiva final.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Objetivos & Destinatarios ── */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">
          
          {/* Objetivos */}
          <div>
            <div className="flex items-center gap-5 mb-10">
              <span className="text-[13px] font-black tracking-[0.25em] text-[#2872e0]">P.02</span>
              <div className="w-10 h-px bg-black/20" />
              <h2 className="text-[22px] md:text-[26px] font-extrabold tracking-[-0.01em] text-black">
                Objetivos
              </h2>
            </div>
            <ul className="space-y-0">
              {[
                'Comprender los fundamentos de la narrativa visual.',
                'Identificar estructuras narrativas aplicables a proyectos fotográficos autorales y comerciales.',
                'Desarrollar un cuerpo de trabajo con coherencia conceptual y formal.',
                'Aprender a editar como acto central de construcción de sentido.',
                'Integrar imagen y texto de manera estratégica.',
                'Finalizar con una obra visual propia, exhibible y argumentada.',
              ].map((obj, index) => (
                <li
                  key={index}
                  className="flex gap-5 py-5 border-t border-black/10 last:border-b last:border-black/10 group hover:bg-neutral-50/50 transition-colors duration-300"
                >
                  <span className="text-[12px] font-black text-[#2872e0] pt-1 tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-[16px] leading-[1.65] text-neutral-800 font-light group-hover:text-black transition-colors">
                    {obj}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinatarios */}
          <div>
            <div className="flex items-center gap-5 mb-10">
              <span className="text-[13px] font-black tracking-[0.25em] text-[#2872e0]">P.03</span>
              <div className="w-10 h-px bg-black/20" />
              <h2 className="text-[22px] md:text-[26px] font-extrabold tracking-[-0.01em] text-black">
                ¿Para quién es?
              </h2>
            </div>
            <div className="space-y-4">
              {[
                <span>Personas con interés en expresarse a través de <span className="font-semibold text-black">imágenes y textos.</span></span>,
                'Quienes buscan explorar creatividad, identidad y narrativa visual.',
                'Estudiantes de fotografía con conocimientos básicos.',
                'Artistas, escritores, creadores de contenido y amantes de la imagen.',
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 bg-white rounded-xl border border-[#2872e0]/10 shadow-xs hover:border-[#2872e0]/35 transition-all duration-300"
                >
                  <span className="text-[#2872e0] text-lg leading-none mt-0.5">&rarr;</span>
                  <p className="text-[16px] leading-[1.6] text-neutral-800 font-light">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-start gap-3 p-5 border border-dashed border-black/15 rounded-xl bg-neutral-50/50">
              <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-black/40 mt-0.5 whitespace-nowrap">
                Requisitos
              </span>
              <p className="text-[15px] leading-[1.6] text-neutral-700 font-light">
                Conocimientos previos de fotografía y contar con cámara o celular.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── Contenidos / Timeline 3 etapas (Dark Section) ── */}
      <section className="bg-neutral-950 text-white border-y border-[#2872e0]/10">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 py-20 md:py-28">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
            <div>
              <p className="text-[12px] font-semibold tracking-[0.3em] uppercase text-[#2872e0] mb-4">
                Contenidos
              </p>
              <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] leading-[1.05] tracking-[-0.02em]">
                <span className="font-light text-white/55">Tres etapas, </span>
                <span className="font-extrabold text-white">una obra.</span>
              </h2>
            </div>
            <p className="text-[15px] text-white/45 font-light max-w-xs md:text-right leading-relaxed">
              Estructura narrativa clásica aplicada al recorrido: introducción &rarr; nudo &rarr; desenlace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            
            {/* Etapa 1 */}
            <div className="relative border-l-2 border-white/15 md:border-l-0 md:border-t-2 md:border-white/15 pl-8 md:pl-0 md:pt-10 pb-4 md:pb-0 md:pr-6 group">
              <div className="absolute -left-[7px] top-0 md:left-0 md:-top-[7px] w-3 h-3 bg-white/40 rounded-full group-hover:bg-[#2872e0] transition-colors duration-300" />
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-[13px] font-bold tracking-[0.15em] uppercase text-white/45">
                  Mes 1
                </span>
                <span className="text-[12px] text-white/30">&middot; 4 clases</span>
              </div>
              <h3 className="text-[22px] md:text-[26px] font-extrabold mb-2 leading-tight text-white group-hover:text-[#2872e0] transition-colors duration-300">
                Despertar
              </h3>
              <p className="text-[14px] text-[#2872e0] font-semibold mb-6 tracking-[0.01em]">
                La mirada y la voz narrativa
              </p>
              <ul className="space-y-4 text-[14.5px] leading-[1.7] text-white/70 font-light">
                <li className="flex gap-3">
                  <span className="text-[#2872e0] font-bold">&middot;</span>
                  Creatividad y expresión: el acto comunicacional y la imagen como lenguaje.
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2872e0] font-bold">&middot;</span>
                  Introducción al storytelling visual y el proyecto fotográfico personal.
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2872e0] font-bold">&middot;</span>
                  La bitácora como herramienta de proceso. Técnicas de freewriting con imágenes.
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2872e0] font-bold">&middot;</span>
                  Análisis de autores clave y ejercicios de exploración expresiva.
                </li>
              </ul>
              <p className="mt-8 pt-5 border-t border-white/10 text-[13.5px] text-white/55 font-light italic leading-relaxed">
                Objetivo: desarrollar una mirada consciente y comenzar a identificar una voz propia.
              </p>
            </div>

            {/* Etapa 2 */}
            <div className="relative border-l-2 border-white/15 md:border-l-0 md:border-t-2 md:border-white/15 pl-8 md:pl-0 md:pt-10 pb-4 md:pb-0 md:px-6 group">
              <div className="absolute -left-[7px] top-0 md:left-0 md:-top-[7px] w-3 h-3 bg-white/60 rounded-full group-hover:bg-[#2872e0] transition-colors duration-300" />
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-[13px] font-bold tracking-[0.15em] uppercase text-white/45">
                  Mes 2
                </span>
                <span className="text-[12px] text-white/30">&middot; 4 clases</span>
              </div>
              <h3 className="text-[22px] md:text-[26px] font-extrabold mb-2 leading-tight text-white group-hover:text-[#2872e0] transition-colors duration-300">
                Explorar
              </h3>
              <p className="text-[14px] text-[#2872e0] font-semibold mb-6 tracking-[0.01em]">
                El adentro y el afuera
              </p>
              <ul className="space-y-4 text-[14.5px] leading-[1.7] text-white/70 font-light">
                <li className="flex gap-3">
                  <span className="text-[#2872e0] font-bold">&middot;</span>
                  Narrativas de identidad: el yo y el otro. Lo autorreferencial.
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2872e0] font-bold">&middot;</span>
                  Retrato, autorretrato y escritura de identidad. El archivo familiar como material.
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2872e0] font-bold">&middot;</span>
                  Storyboard y guion visual. Materialización de la obra: soportes y espacio.
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2872e0] font-bold">&middot;</span>
                  Producción narrativa en estudio o exterior. Revisión de proyectos.
                </li>
              </ul>
              <p className="mt-8 pt-5 border-t border-white/10 text-[13.5px] text-white/55 font-light italic leading-relaxed">
                Objetivo: generar material, ampliar la mirada y consolidar un territorio narrativo personal.
              </p>
            </div>

            {/* Etapa 3 */}
            <div className="relative border-l-2 border-[#2872e0] md:border-l-0 md:border-t-2 md:border-[#2872e0] pl-8 md:pl-0 md:pt-10 md:pl-6 group">
              <div className="absolute -left-[7px] top-0 md:left-0 md:-top-[7px] w-3 h-3 bg-[#2872e0] rounded-full" />
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-[13px] font-bold tracking-[0.15em] uppercase text-[#2872e0]">
                  Mes 3
                </span>
                <span className="text-[12px] text-white/30">&middot; 4 clases</span>
              </div>
              <h3 className="text-[22px] md:text-[26px] font-extrabold mb-2 leading-tight text-white group-hover:text-[#2872e0] transition-colors duration-300">
                Construir &amp; exhibir
              </h3>
              <p className="text-[14px] text-[#2872e0] font-semibold mb-6 tracking-[0.01em]">
                De la idea a la obra materializada
              </p>
              <ul className="space-y-4 text-[14.5px] leading-[1.7] text-white/70 font-light">
                <li className="flex gap-3">
                  <span className="text-[#2872e0] font-bold">&middot;</span>
                  Salida de campo para aplicar lo aprendido. Artistas visuales contemporáneos.
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2872e0] font-bold">&middot;</span>
                  Trabajo intensivo sobre proyectos finales. Edición, ritmo y secuencia.
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2872e0] font-bold">&middot;</span>
                  Curaduría, coherencia narrativa y desarrollo del statement de artista.
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2872e0] font-bold">&middot;</span>
                  Cierre con muestra colectiva final. Posibilidad de invitar familiares y amigos.
                </li>
              </ul>
              <p className="mt-8 pt-5 border-t border-white/10 text-[13.5px] text-white/55 font-light italic leading-relaxed">
                Objetivo: editar, curar y montar la obra final para su exhibición.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Qué incluye la cursada ── */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 py-16 md:py-24">
        <p className="text-[12px] font-semibold tracking-[0.3em] uppercase text-[#2872e0] mb-8">
          La cursada incluye
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-black/8 border border-black/8 rounded-2xl overflow-hidden shadow-sm">
          <div className="bg-white p-8 md:p-10 hover:bg-neutral-50/50 transition-colors duration-300">
            <p className="text-[40px] font-extrabold text-[#2872e0] leading-none mb-4">01</p>
            <h4 className="text-[18px] font-bold text-black mb-2">Producción con narrativa</h4>
            <p className="text-[15px] leading-[1.7] text-[#333333] font-light">
              Una pieza propia desarrollada de principio a fin con acompañamiento.
            </p>
          </div>
          <div className="bg-white p-8 md:p-10 hover:bg-neutral-50/50 transition-colors duration-300">
            <p className="text-[40px] font-extrabold text-[#2872e0] leading-none mb-4">02</p>
            <h4 className="text-[18px] font-bold text-black mb-2">Salida de campo</h4>
            <p className="text-[15px] leading-[1.7] text-[#333333] font-light">
              Jornada práctica para aplicar los recursos explorados en contexto real.
            </p>
          </div>
          <div className="bg-white p-8 md:p-10 hover:bg-neutral-50/50 transition-colors duration-300">
            <p className="text-[40px] font-extrabold text-[#2872e0] leading-none mb-4">&infin;</p>
            <h4 className="text-[18px] font-bold text-black mb-2">Muestra colectiva final</h4>
            <p className="text-[15px] leading-[1.7] text-[#333333] font-light">
              Exhibición de la obra en la escuela, abierta a familiares y amigos.
            </p>
          </div>
        </div>
      </section>

      {/* ── Inscripción / Pricing Interactive Card ── */}
      <section id="inscripcion" className="bg-white border-y border-[#2872e0]/10">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5">
              <div className="flex items-center gap-5 mb-8">
                <span className="text-[14px] font-black tracking-[0.25em] text-[#2872e0]">04</span>
                <div className="w-10 h-px bg-black/20" />
                <h2 className="text-[22px] md:text-[26px] font-extrabold tracking-[-0.01em] text-black uppercase">
                  Inscripción
                </h2>
              </div>
              <h3 className="text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.1] tracking-[-0.02em] mb-6">
                <span className="font-light text-[#333333]">Reservá tu lugar en la </span>
                <span className="font-extrabold text-black">2.ª edición.</span>
              </h3>
              <p className="text-[16px] leading-[1.85] text-neutral-700 font-light max-w-md mb-8">
                Coordinamos día, horario y modalidad de pago por WhatsApp. Respondemos rápido para confirmar tu cupo.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Presencial u online', 'Individual o grupal', 'Cupos limitados'].map((t) => (
                  <span
                    key={t}
                    className="px-3.5 py-1.5 bg-white border border-black/8 text-[#333333] text-[12px] font-medium rounded-full shadow-2xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Pricing card */}
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="bg-white border border-black/8 rounded-2xl shadow-[0_24px_60px_-30px_rgba(0,0,0,0.25)] overflow-hidden">
                
                <div className="p-8 md:p-10 border-b border-black/8 bg-neutral-50/20">
                  <div className="flex items-end justify-between flex-wrap gap-4">
                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-black/40 mb-2">
                        Inversión total
                      </p>
                      <p className="text-[40px] md:text-[44px] font-extrabold text-black leading-none tracking-[-0.02em]">
                        {promo === 'promo1' ? '$560.000' : '$448.000'}
                        <span className="text-[20px] text-black/40 font-light">,00</span>
                      </p>
                    </div>
                    <span className="px-3.5 py-1.5 bg-[#2872e0]/10 text-[#2872e0] text-[12px] font-bold rounded-full border border-[#2872e0]/5">
                      + 2.º curso 100% bonificado
                    </span>
                  </div>
                </div>

                {/* Promos Selector */}
                <div className="p-8 md:p-10 space-y-4">
                  
                  {/* Promo 1 Card */}
                  <div
                    onClick={() => setPromo('promo1')}
                    className={`group flex items-center gap-4 p-5 border-2 rounded-xl cursor-pointer transition-all duration-300 ${promo === 'promo1' ? 'border-[#2872e0] bg-[#2872e0]/[0.03]' : 'border-black/10 bg-white hover:border-[#2872e0]/40'}`}
                  >
                    <input
                      type="radio"
                      name="promo"
                      checked={promo === 'promo1'}
                      onChange={() => setPromo('promo1')}
                      className="accent-[#2872e0] w-4 h-4 cursor-pointer"
                    />
                    <div className="flex-1">
                      <p className="text-[15px] font-bold text-black">Promo 1 &middot; Cuotas sin interés</p>
                      <p className="text-[13px] text-[#333333] font-light">3 cuotas sin interés</p>
                    </div>
                    <p className="text-[18px] font-extrabold text-black">$560.000</p>
                  </div>

                  {/* Promo 2 Card */}
                  <div
                    onClick={() => setPromo('promo2')}
                    className={`group flex items-center gap-4 p-5 border-2 rounded-xl cursor-pointer transition-all duration-300 ${promo === 'promo2' ? 'border-[#2872e0] bg-[#2872e0]/[0.03]' : 'border-black/10 bg-white hover:border-[#2872e0]/40'}`}
                  >
                    <input
                      type="radio"
                      name="promo"
                      checked={promo === 'promo2'}
                      onChange={() => setPromo('promo2')}
                      className="accent-[#2872e0] w-4 h-4 cursor-pointer"
                    />
                    <div className="flex-1">
                      <p className="text-[15px] font-bold text-black">Promo 2 &middot; Cupón MOTI20OFF</p>
                      <p className="text-[13px] text-[#333333] font-light">20% OFF abonando en 1 pago</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[13px] text-black/35 line-through font-light">$560.000</p>
                      <p className="text-[18px] font-extrabold text-[#2872e0]">$448.000</p>
                    </div>
                  </div>

                  {/* Dropdowns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-[11px] font-bold tracking-[0.15em] uppercase text-black/40 mb-2">
                        Modalidad
                      </label>
                      <select
                        value={modalidad}
                        onChange={(e) => setModalidad(e.target.value)}
                        className="w-full px-4 py-3 border border-black/12 rounded-lg text-[14px] text-neutral-700 bg-white focus:border-[#2872e0] focus:outline-none cursor-pointer shadow-2xs"
                      >
                        <option value="Presencial">Presencial</option>
                        <option value="Online en vivo">Online en vivo</option>
                        <option value="Individual">Individual</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold tracking-[0.15em] uppercase text-black/40 mb-2">
                        Día y hora
                      </label>
                      <select
                        value={diaHora}
                        onChange={(e) => setDiaHora(e.target.value)}
                        className="w-full px-4 py-3 border border-black/12 rounded-lg text-[14px] text-neutral-700 bg-white focus:border-[#2872e0] focus:outline-none cursor-pointer shadow-2xs"
                      >
                        <option value="Elegí una opción">Elegí una opción</option>
                        <option value="Martes 18:00 – 21:00">Martes 18:00 – 21:00</option>
                        <option value="Sábados 10:00 – 13:00">Sábados 10:00 – 13:00</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2.5 px-6 py-4 bg-[#25D366] text-white text-[14px] font-bold tracking-[0.05em] uppercase rounded-xl hover:bg-[#20ba5a] transition-all duration-300 shadow-md cursor-pointer text-center"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.739-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.381 9.805-9.771.002-2.612-1.012-5.066-2.857-6.912C16.356 2.079 13.907.822 11.3.822 5.899.822 1.5 5.205 1.497 10.593c-.001 1.516.418 3.001 1.21 4.316l-.994 3.633 3.737-.978zm11.724-4.55c-.262-.13-1.554-.767-1.793-.852-.24-.087-.413-.13-.588.13-.175.26-.677.852-.83 1.02-.152.172-.306.193-.568.063-.261-.13-1.103-.407-2.102-1.298-.778-.694-1.303-1.552-1.455-1.813-.153-.262-.017-.404.114-.533.118-.117.262-.305.393-.457.13-.153.175-.261.262-.435.088-.174.044-.326-.021-.456-.066-.13-.588-1.416-.807-1.943-.213-.512-.446-.441-.609-.449-.158-.008-.34-.01-.522-.01s-.48.067-.73.34c-.25.27-1.011.987-1.011 2.404s.718 2.787.818 2.92c.1.133 1.411 2.155 3.418 3.021.478.206.85.33 1.142.423.481.152.919.13 1.265.067.385-.069 1.18-.483 1.346-.949.166-.465.166-.864.117-.949-.049-.085-.18-.13-.441-.26z" />
                      </svg>
                      Inscribirme por WhatsApp
                    </a>
                  </div>

                  <p className="text-center text-[13px] text-[#333333] font-light">
                    <a href="https://wa.me/34645014166" target="_blank" rel="noopener noreferrer" className="text-[#2872e0] font-semibold hover:underline">
                      ¿Necesitás consultar?
                    </a>{' '}
                    +34 645 014 166
                  </p>
                  <p className="text-center text-[11px] text-[#333333] font-light pt-1">
                    Ambas promociones incluyen un segundo curso 100% bonificado.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Otros programas ── */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 py-16 md:py-24 bg-white">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end justify-between mb-10">
          <h2 className="text-[clamp(1.4rem,3vw,2.2rem)] font-extrabold tracking-[-0.01em] text-black">
            Seguí explorando
          </h2>
          <Link
            to="/cursos"
            className="text-[13px] font-bold tracking-[0.08em] uppercase text-[#2872e0] hover:gap-3 inline-flex items-center gap-2 transition-all duration-300"
          >
            Toda la formación &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <Link to="/cursos" className="group block space-y-4">
            <div className="overflow-hidden rounded-xl bg-neutral-50 aspect-[16/11] border border-black/5 shadow-2xs">
              <img
                src="/galeria-nino-argentino.png"
                alt="Introducción a la IA"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <p className="text-[11px] tracking-[0.18em] uppercase text-[#2872e0] font-bold">
                Programa
              </p>
              <h4 className="mt-1 text-[19px] font-extrabold text-black group-hover:text-[#2872e0] transition-colors duration-300">
                Introducción a la IA Generativa
              </h4>
            </div>
          </Link>

          <Link to="/cursos" className="group block space-y-4">
            <div className="overflow-hidden rounded-xl bg-neutral-50 aspect-[16/11] border border-black/5 shadow-2xs">
              <img
                src="/plan-direccion-foto.jpeg"
                alt="Dirección de Fotografía con IA"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <p className="text-[11px] tracking-[0.18em] uppercase text-[#2872e0] font-bold">
                Programa
              </p>
              <h4 className="mt-1 text-[19px] font-extrabold text-black group-hover:text-[#2872e0] transition-colors duration-300">
                Dirección de Fotografía con IA
              </h4>
            </div>
          </Link>

          <Link to="/cursos" className="group block space-y-4">
            <div className="overflow-hidden rounded-xl bg-neutral-50 aspect-[16/11] border border-black/5 shadow-2xs">
              <img
                src="/plan-intro.jpeg"
                alt="Especialización Profesional"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <p className="text-[11px] tracking-[0.18em] uppercase text-[#2872e0] font-bold">
                Mentoría
              </p>
              <h4 className="mt-1 text-[19px] font-extrabold text-black group-hover:text-[#2872e0] transition-colors duration-300">
                Especialización Profesional
              </h4>
            </div>
          </Link>

        </div>
      </section>

      <Footer />
    </div>
  )
}
