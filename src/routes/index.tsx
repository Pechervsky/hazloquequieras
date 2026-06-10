import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect, useRef } from 'react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

/* ───────────────────────────── Navbar ───────────────────────────── */

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      // iOS Safari requires position:fixed to truly prevent background scrolling
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
      document.body.style.overflow = 'hidden'
    } else {
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.overflow = ''
      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY, 10) * -1)
      }
    }
    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const navLinks = [
    { label: 'Inicio', to: '/' },
    { label: 'Formación', to: '/', hash: 'formacion' },
    { label: 'Servicios', to: '/', hash: 'servicios' },
    { label: 'Contacto', to: '/', hash: 'contacto' },
  ]

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 w-full">
          <div className="max-w-[1440px] mx-auto px-8 md:px-12 h-20 flex items-center justify-between">
            <Link to="/" className="text-[14px] font-bold tracking-[0.25em] uppercase text-black">
              HLQQ
            </Link>

            <div className="hidden md:flex items-center gap-10 text-[13px] font-medium tracking-[0.08em] text-black/65">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  hash={link.hash}
                  className="hover:text-black transition-colors duration-300 [&.active]:text-[#e07328] [&.active]:font-semibold"
                  activeOptions={{ exact: link.to === '/' && !link.hash }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile hamburger — larger touch target */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative z-10 flex flex-col justify-center items-center w-11 h-11 -mr-2 touch-manipulation"
              aria-label="Menú"
              aria-expanded={menuOpen}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <span className={`block w-6 h-[2px] bg-black transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-6 h-[2px] bg-black transition-all duration-300 mt-[5px] ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-[2px] bg-black transition-all duration-300 mt-[5px] ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu — outside nav to avoid stacking context from backdrop-blur */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-[60] bg-black/40"
          onClick={() => setMenuOpen(false)}
          style={{ WebkitTapHighlightColor: 'transparent' }}
        />
      )}
      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 left-0 z-[70] bg-white transition-all duration-300 overscroll-contain ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {/* Replicate nav bar at top of menu */}
        <div className="h-20 flex items-center justify-between px-8">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-[14px] font-bold tracking-[0.25em] uppercase text-black"
          >
            HLQQ
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="flex flex-col justify-center items-center w-11 h-11 -mr-2 touch-manipulation"
            aria-label="Cerrar menú"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <span className="block w-6 h-[2px] bg-black rotate-45 translate-y-[7px] transition-all duration-300" />
            <span className="block w-6 h-[2px] bg-black opacity-0 mt-[5px] transition-all duration-300" />
            <span className="block w-6 h-[2px] bg-black -rotate-45 -translate-y-[7px] mt-[5px] transition-all duration-300" />
          </button>
        </div>
        <div className="px-8 pt-8 pb-12 space-y-6 text-[15px] font-medium tracking-[0.08em] border-t border-black/10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              hash={link.hash}
              onClick={() => setMenuOpen(false)}
              className="block text-black py-3 text-lg [&.active]:text-[#e07328]"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

/* ───────────────────────────── Marquee Strip ───────────────────────────── */

function MarqueeStrip() {
  const items = [
    'Imágenes Generadas con IA',
    'Motion Graphics',
    'Dirección Creativa',
    'Postproducción',
  ]

  return (
    <div className="py-6 overflow-hidden border-y border-black/10 my-8 md:my-14 bg-white">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="text-[11px] font-medium uppercase tracking-[0.4em] text-black/40 mx-10">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}


/* ───────────────────────────── Manifiesto ───────────────────────────── */

function Manifiesto() {
  return (
    <section className="py-16 md:py-28 bg-white">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left column — manifesto text */}
          <div className="lg:col-span-7">
            <div className="max-w-4xl">
              <p className="text-[12px] font-medium tracking-[0.3em] uppercase text-[#e07328] mb-4">
                Manifiesto
              </p>
              <h2 className="text-[clamp(1.75rem,3.5vw,3.5rem)] leading-[1.1] tracking-[-0.02em] text-black">
                <span className="font-light text-[#666666]">La fotografía </span>
                <span className="font-extrabold text-black">evolucionó</span><span className="text-[#e07328]">.</span><br />
                <span className="font-light text-[#666666]">Nosotros </span>
                <span className="font-extrabold text-black">también</span><span className="text-[#e07328]">.</span>
              </h2>
              <p className="mt-10 text-[17px] leading-[1.9] max-w-2xl text-neutral-900 font-light">
                Décadas de experiencia en imagen y video, combinadas con dominio avanzado en IA generativa. Convertimos conceptos en recursos visuales listos para usar.
              </p>
            </div>

            {/* ── Tres Revoluciones ── */}
            <div className="mt-16">
              <p className="text-[12px] font-medium tracking-[0.3em] uppercase mb-6 text-[#666666]">
                Tres Revoluciones
              </p>
              <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.02em] mb-16 text-black">
                <span className="font-light text-[#666666]">Del </span>
                <span className="font-extrabold text-black">Click </span>
                <span className="font-light text-[#666666]">al </span>
                <span className="font-extrabold text-[#e07328]">Prompt</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {/* Era Analógica */}
                <div className="relative border-l-2 border-black/10 md:border-l-0 md:border-t-2 pl-8 md:pl-0 md:pt-8 pb-12 md:pb-0 md:pr-10">
                  <div className="absolute -left-[7px] top-0 md:left-0 md:-top-[7px] w-3 h-3 bg-black/20 rounded-full" />
                  <p className="text-[14px] font-bold tracking-[0.15em] uppercase mb-3 text-[#666666]">
                    1989
                  </p>
                  <h4 className="text-xl font-bold mb-3 text-black">
                    La Era Analógica
                  </h4>
                  <p className="text-[15px] leading-[1.8] text-neutral-900 font-light">
                    Cuando cada disparo era una decisión. La planificación y la técnica eran la base del oficio, hasta llegar a la magia del revelado.
                  </p>
                </div>

                {/* Era Digital */}
                <div className="relative border-l-2 border-black/10 md:border-l-0 md:border-t-2 pl-8 md:pl-0 md:pt-8 pb-12 md:pb-0 md:pr-10">
                  <div className="absolute -left-[7px] top-0 md:left-0 md:-top-[7px] w-3 h-3 bg-black/40 rounded-full" />
                  <p className="text-[14px] font-bold tracking-[0.15em] uppercase mb-3 text-[#666666]">
                    1999 – 2022
                  </p>
                  <h4 className="text-xl font-bold mb-3 text-black">
                    La Era Digital
                  </h4>
                  <p className="text-[15px] leading-[1.8] text-neutral-900 font-light">
                    La tecnología acelera el ciclo fotográfico para siempre. Transforma por completo la producción y convierte el consumo visual en una experiencia instantánea.
                  </p>
                </div>

                {/* Era Generativa */}
                <div className="relative border-l-2 border-[#e07328] md:border-l-0 md:border-t-2 md:border-[#e07328] pl-8 md:pl-0 md:pt-8 pb-0 md:pr-10">
                  <div className="absolute -left-[7px] top-0 md:left-0 md:-top-[7px] w-3 h-3 bg-[#e07328] rounded-full" />
                  <p className="text-[14px] font-bold tracking-[0.15em] uppercase text-[#e07328] mb-3">
                    2022 →
                  </p>
                  <h4 className="text-xl font-bold mb-3 text-black">
                    La Era Generativa
                  </h4>
                  <p className="text-[15px] leading-[1.8] text-neutral-900 font-light">
                    Donde la innovación se fusiona con la creatividad. La conceptualización es la nueva técnica y ahora tus textos son los nuevos &ldquo;clicks&rdquo;.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — silhouette image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <img src="/silueta.jpg" alt="Silueta fotógrafo" className="max-w-full h-auto opacity-90 mix-blend-multiply" />
          </div>

        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────── Services + Portfolio ───────────────────────────── */

function Services() {
  const [showAll, setShowAll] = useState(false)

  const galleryImages = [
    { src: '/trabajo-ey-facu.jpeg', alt: 'EY — IA Art Designer: Facu Peche' },
    { src: '/trabajo-cocacola.jpeg', alt: 'Coca-Cola — Campaña con IA' },
    { src: '/trabajo-president-escena.png', alt: 'Président — Spot publicitario' },
    { src: '/trabajo-president-fantasia.png', alt: 'Président — Producción IA generativa' },
    { src: '/portfolio-snowboarder.png', alt: 'Producción IA — Snowboarder' },
    { src: '/portfolio-plano-medio.png', alt: 'Imagen Generativa — Plano Medio' },
    { src: '/portfolio-vino.jpeg', alt: 'Producción IA — Vino Editorial' },
    { src: '/servicios-1.jpeg', alt: 'Producción audiovisual con IA' },
    { src: '/servicios-2.jpeg', alt: 'Soluciones audiovisuales' },
    { src: '/servicios-3.jpeg', alt: 'Inteligencia artificial visual' },
    { src: '/servicios-4.jpeg', alt: 'Producción creativa' },
    { src: '/servicios-5.webp', alt: 'Diseño generativo con IA' },
  ]


  return (
    <section id="servicios" className="relative w-full overflow-hidden bg-[#fff8f4] border-t border-[#e07328]/10 scroll-mt-32">
      {/* ── SEPARATOR TITULO: SERVICIOS ── */}
      <div className="w-full bg-[#fff0e5] border-b border-[#e07328]/10 py-16">
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="text-[14px] font-black tracking-[0.25em] text-[#e07328]">02</span>
            <div className="w-[1px] h-8 bg-gray-300"></div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-[0.15em] text-black uppercase">SERVICIOS</h2>
          </div>
          <span className="text-[12px] tracking-[0.3em] text-gray-400 font-bold uppercase">Producción Audiovisual &amp; IA Generativa</span>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-8 md:px-12 py-16 md:py-28">
        <div className="mb-20">
          <h2 className="text-[clamp(1.75rem,3.5vw,3.5rem)] leading-[1.1] tracking-[-0.02em] mb-10">
            <span className="font-light text-[#666666]">Soluciones </span>
            <span className="font-black text-[#e07328]">audiovisuales</span><br />
            <span className="font-medium text-black/90">potenciadas con </span>
            <span className="font-bold text-black">inteligencia artificial.</span>
          </h2>
          <div className="max-w-2xl space-y-6">
            <p className="text-[15px] text-gray-600 leading-[1.85] tracking-[0.005em] font-light">
              Producimos contenido audiovisual profesional con IA generativa — desde piezas para redes y campañas hasta cortos publicitarios de alto impacto — con identidad visual coherente y entrega lista para publicar.
            </p>
            <p className="text-[15px] text-gray-600 leading-[1.85] tracking-[0.005em] font-light">
              Cada proyecto se adapta a tu marca, del briefing a la entrega final. Desarrollamos avatares hiperrealistas con acabado televisivo, bancos de imágenes exclusivos con modelos IA que reducen costes hasta un 70%, y campañas visuales planificadas para todo el año.
            </p>
            <p className="text-[15px] text-gray-600 leading-[1.85] tracking-[0.005em] font-light">
              Además, acompañamos a tu equipo con consultoría en optimización de prompts y procesos creativos escalables.
            </p>
          </div>
        </div>

        {/* Hero image — 70% de Ahorro — full width */}
        <div className="mb-6 overflow-hidden bg-white border border-[#e07328]/10 rounded-lg shadow-sm">
          <img
            src="/trabajo-ahorro-70.jpg"
            alt="70% de Ahorro en producción audiovisual con IA"
            className="w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-700"
          />
        </div>

        {/* First 4 gallery images — always visible */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {galleryImages.slice(0, 4).map((img, i) => (
            <div key={i} className="overflow-hidden bg-white border border-[#e07328]/10 rounded-xl relative group flex items-center justify-center aspect-[16/10] shadow-sm">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-[12px] font-semibold tracking-wider text-white">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Remaining gallery images — hidden by default */}
        {showAll && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {galleryImages.slice(4).map((img, i) => (
              <div key={i} className="overflow-hidden bg-white border border-[#e07328]/10 rounded-xl relative group flex items-center justify-center aspect-[16/10] shadow-sm">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-[12px] font-semibold tracking-wider text-white">
                    {img.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-block px-8 py-3.5 border border-[#e07328] hover:bg-[#e07328] text-[#e07328] hover:text-white text-[13px] font-bold tracking-[0.1em] uppercase transition-all duration-300 rounded cursor-pointer shadow-sm"
          >
            {showAll ? 'Ver menos ↑' : 'Ver más trabajos ↓'}
          </button>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────── Formación ───────────────────────────── */

function Formacion() {
  const [openBlock, setOpenBlock] = useState<string | null>(null)
  const formacionVideoRef = useRef<HTMLVideoElement>(null)
  const [formacionMuted, setFormacionMuted] = useState(true)

  function toggleFormacionSound() {
    if (formacionVideoRef.current) {
      formacionVideoRef.current.muted = !formacionVideoRef.current.muted
      setFormacionMuted(formacionVideoRef.current.muted)
    }
  }

  return (
    <section id="formacion" className="relative w-full overflow-hidden bg-[#fff8f4] border-t border-[#e07328]/10 scroll-mt-32">
      {/* ── SEPARATOR TITULO: FORMACIÓN ── */}
      <div className="w-full bg-[#fff0e5] border-b border-[#e07328]/10 py-16">
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="text-[14px] font-black tracking-[0.25em] text-[#e07328]">01</span>
            <div className="w-[1px] h-8 bg-gray-300"></div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-[0.15em] text-black uppercase">FORMACIÓN</h2>
          </div>
          <span className="text-[12px] tracking-[0.3em] text-gray-400 font-bold uppercase">Programas, Talleres &amp; Workshops</span>
        </div>
      </div>

      {/* ── Section content ── */}
      <div className="py-16 md:py-28">
        <div className="max-w-[1440px] mx-auto px-8 md:px-12">

          {/* ── Section entry title ── */}
          <div className="mb-16">
            <h2 className="text-[clamp(1.75rem,3.5vw,3.5rem)] leading-[1.1] tracking-[-0.02em] text-black">
              <span className="font-light text-gray-500">Dominá la </span>
              <span className="font-black text-[#e07328]">IA Generativa</span>
              <span className="font-light text-gray-500"> y </span>
              <span className="font-extrabold text-black">reinventá tu carrera.</span>
            </h2>
          </div>

          {/* ── Split Presentation: Text and Video ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
            
            {/* Left Column: Intro details */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[12px] font-semibold tracking-[0.25em] uppercase text-[#e07328]">
                Programa intensivo 2026
              </span>
              <h3 className="text-[clamp(1.5rem,2.8vw,2.4rem)] font-extrabold text-black leading-tight">
                Producción audiovisual con inteligencia artificial
              </h3>
              <p className="text-[16px] text-gray-600 leading-[1.8] font-light">
                Diseñado para creadores independientes, instituciones creativas y organizaciones que buscan liderar la revolución de la IA generativa. Una metodología de aprendizaje progresiva que conecta la técnica fotográfica analógica tradicional con los flujos de trabajo generativos avanzados.
              </p>
              <p className="text-[15px] text-gray-500 leading-[1.8] font-light">
                Aprendé de forma 100% práctica a estructurar prompts de precisión, entrenar tus propios agentes estéticos y automatizar piezas en movimiento de alto impacto.
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {['Presencial u online', 'Individual o grupal', 'Sin experiencia previa', 'Segunda Edición Latam'].map((tag) => (
                  <span key={tag} className="px-3.5 py-1.5 bg-neutral-50 border border-neutral-100 text-neutral-600 text-[12px] font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Video player showcase */}
            <div className="lg:col-span-5 w-full">
              <div className="relative w-full aspect-[16/10] bg-black border border-neutral-200 rounded-xl overflow-hidden shadow-lg group">
                <video
                  ref={formacionVideoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source
                    src="https://res.cloudinary.com/dn6hfsny6/video/upload/v1774052677/IMG_8608_2_wocauh.mp4"
                    type="video/mp4"
                  />
                </video>
                <button
                  onClick={toggleFormacionSound}
                  className="absolute bottom-4 right-4 flex items-center justify-center bg-black/40 hover:bg-black/60 border border-white/20 text-white rounded-full w-10 h-10 cursor-pointer text-sm backdrop-blur-md transition-all duration-300"
                  aria-label={formacionMuted ? 'Activar sonido' : 'Silenciar'}
                >
                  {formacionMuted ? '\u{1F507}' : '\u{1F50A}'}
                </button>
              </div>
              <div className="flex items-center justify-between mt-3 px-1 text-[12px] text-neutral-400">
                <span>Clase práctica en vivo</span>
                <span>Marzo &middot; Junio 2026</span>
              </div>
            </div>

          </div>

          {/* ── Professional Learning Road (3 levels) ── */}
          <div className="border-t border-neutral-100 pt-16 mb-16">
            <div className="mb-12">
              <span className="text-[12px] font-semibold tracking-[0.25em] uppercase text-[#e07328]">
                01.1 &middot; Ruta de Aprendizaje Profesional
              </span>
              <h4 className="text-2xl md:text-3xl font-extrabold text-black mt-2">
                Programas de Formación Progresiva
              </h4>
              <p className="text-[15px] text-gray-500 font-light mt-2 max-w-2xl">
                Seleccioná el nivel de profundidad técnica que mejor se adapte a tus objetivos artísticos o comerciales.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Mentorías Personalizadas Card (Próximo Workshop) */}
              <div className="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full">
                <div className="aspect-[16/10] overflow-hidden bg-neutral-50 flex items-center justify-center border-b border-neutral-100">
                  <img
                    src="/plan-profesional.jpeg"
                    alt="Mentorías Personalizadas — Próximo Workshop"
                    className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2.5 py-0.5 bg-[#e07328] text-white text-[10px] font-extrabold tracking-wider uppercase rounded animate-pulse">PRÓXIMO WORKSHOP</span>
                    <span className="text-neutral-300">|</span>
                    <span className="text-[11px] text-[#e07328] font-bold">Mentoría</span>
                  </div>
                  <h5 className="text-lg font-bold text-black mb-3">
                    Mentorías Personalizadas
                  </h5>
                  <p className="text-[14px] text-gray-600 leading-[1.7] font-light flex-1">
                    Acompañamiento individual de alta intensidad y 100% a medida. Resolvé retos de tu negocio, definí tu propia línea estética de marca y creá un ecosistema de producción a tu medida de la mano de un experto.
                  </p>
                  
                  <button
                    onClick={() => setOpenBlock(openBlock === 'bm' ? null : 'bm')}
                    className="text-[13px] font-bold text-[#e07328] hover:text-[#b85a1c] transition-colors duration-300 cursor-pointer flex items-center gap-1 mt-6 text-left"
                  >
                    {openBlock === 'bm' ? 'Cerrar detalles ↑' : 'Ver competencias y detalles ↓'}
                  </button>
                  
                  {openBlock === 'bm' && (
                    <div className="mt-4 pt-4 border-t border-neutral-100 space-y-4 animate-fadeIn">
                      <p className="text-[12px] font-bold tracking-[0.1em] uppercase text-[#e07328]">Al finalizar lograrás:</p>
                      <ul className="space-y-2 text-[13px] text-neutral-600 leading-[1.6] font-light">
                        <li className="flex gap-2"><span className="text-[#e07328] flex-shrink-0">&mdash;</span>Diseñar un flujo de trabajo optimizado para tus proyectos específicos.</li>
                        <li className="flex gap-2"><span className="text-[#e07328] flex-shrink-0">&mdash;</span>Resolver retos técnicos avanzados y depurar prompts.</li>
                        <li className="flex gap-2"><span className="text-[#e07328] flex-shrink-0">&mdash;</span>Entrenar agentes estéticos propios con guía paso a paso.</li>
                        <li className="flex gap-2"><span className="text-[#e07328] flex-shrink-0">&mdash;</span>Soporte y seguimiento uno a uno para garantizar tu autonomía.</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Level 1 Card */}
              <div className="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full">
                <div className="aspect-[16/10] overflow-hidden bg-neutral-50 flex items-center justify-center border-b border-neutral-100">
                  <img
                    src="/plan-chico-mano.png"
                    alt="Taller Introductorio — IA Generativa"
                    className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="px-2.5 py-0.5 bg-[#e07328]/10 text-[#e07328] text-[11px] font-bold tracking-wider uppercase rounded">Nivel 1</span>
                    <span className="text-neutral-300">|</span>
                    <span className="text-[12px] font-bold tracking-wider uppercase text-neutral-500">5 Horas</span>
                    <span className="text-neutral-300">|</span>
                    <span className="text-[12px] text-neutral-400 font-medium">Taller</span>
                  </div>
                  <h5 className="text-lg font-bold text-black mb-3">
                    Introducción a la IA Generativa
                  </h5>
                  <p className="text-[14px] text-gray-600 leading-[1.7] font-light flex-1">
                    Un primer acercamiento 100% práctico. Los asistentes generarán imágenes de alta calidad desde el primer momento, conectando conceptos con generación de imágenes en plataformas profesionales.
                  </p>
                  
                  <button
                    onClick={() => setOpenBlock(openBlock === 'b1' ? null : 'b1')}
                    className="text-[13px] font-bold text-[#e07328] hover:text-[#b85a1c] transition-colors duration-300 cursor-pointer flex items-center gap-1 mt-6 text-left"
                  >
                    {openBlock === 'b1' ? 'Cerrar detalles ↑' : 'Ver competencias y detalles ↓'}
                  </button>
                  
                  {openBlock === 'b1' && (
                    <div className="mt-4 pt-4 border-t border-neutral-100 space-y-4 animate-fadeIn">
                      <p className="text-[12px] font-bold tracking-[0.1em] uppercase text-[#e07328]">Al finalizar lograrás:</p>
                      <ul className="space-y-2 text-[13px] text-neutral-600 leading-[1.6] font-light">
                        <li className="flex gap-2"><span className="text-[#e07328] flex-shrink-0">&mdash;</span>Armar prompts precisos con visión fotográfica.</li>
                        <li className="flex gap-2"><span className="text-[#e07328] flex-shrink-0">&mdash;</span>Controlar el estilo para mantener la coherencia visual.</li>
                        <li className="flex gap-2"><span className="text-[#e07328] flex-shrink-0">&mdash;</span>Iniciar tu propio banco de imágenes generadas con IA.</li>
                        <li className="flex gap-2"><span className="text-[#e07328] flex-shrink-0">&mdash;</span>Dar el primer paso para entrenar tu &ldquo;agente fotográfico personalizado&rdquo;.</li>
                      </ul>
                      <div className="p-3 bg-neutral-50 border-l-2 border-[#e07328] rounded">
                        <p className="text-[12px] text-neutral-600 italic leading-[1.6] font-light">
                          &ldquo;Tu agente memoriza tu identidad visual, aplicando automáticamente estilo, iluminación y lentes sin configurarlos de cero.&rdquo;
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Level 2 Card */}
              <div className="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full">
                <div className="aspect-[16/10] overflow-hidden bg-neutral-50 flex items-center justify-center border-b border-neutral-100">
                  <img
                    src="/plan-direccion-foto.jpeg"
                    alt="Dirección de Fotografía con IA"
                    className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="px-2.5 py-0.5 bg-[#e07328]/10 text-[#e07328] text-[11px] font-bold tracking-wider uppercase rounded">Nivel 2</span>
                    <span className="text-neutral-300">|</span>
                    <span className="text-[12px] font-bold tracking-wider uppercase text-neutral-500">8 Horas</span>
                    <span className="text-neutral-300">|</span>
                    <span className="text-[12px] text-neutral-400 font-medium">Formación</span>
                  </div>
                  <h5 className="text-lg font-bold text-black mb-1">
                    Dirección de Fotografía con IA
                  </h5>
                  <p className="text-[11px] text-neutral-400 font-medium mb-3">Incluye contenidos del Nivel 1</p>
                  <p className="text-[14px] text-gray-600 leading-[1.7] font-light flex-1">
                    Control exacto sobre la composición, luz y narrativa visual. Los participantes avanzan de la imagen estática hacia proyectos dinámicos incorporando herramientas profesionales de video y animación.
                  </p>
                  
                  <button
                    onClick={() => setOpenBlock(openBlock === 'b2' ? null : 'b2')}
                    className="text-[13px] font-bold text-[#e07328] hover:text-[#b85a1c] transition-colors duration-300 cursor-pointer flex items-center gap-1 mt-6 text-left"
                  >
                    {openBlock === 'b2' ? 'Cerrar detalles ↑' : 'Ver competencias y detalles ↓'}
                  </button>
                  
                  {openBlock === 'b2' && (
                    <div className="mt-4 pt-4 border-t border-neutral-100 space-y-4 animate-fadeIn">
                      <p className="text-[12px] font-bold tracking-[0.1em] uppercase text-[#e07328]">Al finalizar lograrás:</p>
                      <ul className="space-y-2 text-[13px] text-neutral-600 leading-[1.6] font-light">
                        <li className="flex gap-2"><span className="text-[#e07328] flex-shrink-0">&mdash;</span>Aplicar un estándar profesional y mantener coherencia estética en vídeo.</li>
                        <li className="flex gap-2"><span className="text-[#e07328] flex-shrink-0">&mdash;</span>Finalizar el ajuste y entrenamiento de tu agente fotográfico.</li>
                        <li className="flex gap-2"><span className="text-[#e07328] flex-shrink-0">&mdash;</span>Establecer un flujo de trabajo ágil y automatizado diario.</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Level 3 Card */}
              <div className="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full">
                <div className="aspect-[16/10] overflow-hidden bg-neutral-50 flex items-center justify-center border-b border-neutral-100">
                  <img
                    src="/plan-intro.jpeg"
                    alt="Especialización Profesional en IA Generativa"
                    className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="px-2.5 py-0.5 bg-[#e07328]/10 text-[#e07328] text-[11px] font-bold tracking-wider uppercase rounded">Nivel 3</span>
                    <span className="text-neutral-300">|</span>
                    <span className="text-[12px] font-bold tracking-wider uppercase text-neutral-500">16 Horas</span>
                    <span className="text-neutral-300">|</span>
                    <span className="text-[12px] text-neutral-400 font-medium">Completo</span>
                  </div>
                  <h5 className="text-lg font-bold text-black mb-3">
                    Especialización Profesional
                  </h5>
                  <p className="text-[14px] text-gray-600 leading-[1.7] font-light flex-1">
                    Análisis de casos industriales y técnicas de alto nivel. Construcción de un ecosistema completo de producción a gran escala, abarcando desde la concepción hasta piezas cinematográficas unificadas.
                  </p>
                  
                  <button
                    onClick={() => setOpenBlock(openBlock === 'b3' ? null : 'b3')}
                    className="text-[13px] font-bold text-[#e07328] hover:text-[#b85a1c] transition-colors duration-300 cursor-pointer flex items-center gap-1 mt-6 text-left"
                  >
                    {openBlock === 'b3' ? 'Cerrar detalles ↑' : 'Ver competencias y detalles ↓'}
                  </button>
                  
                  {openBlock === 'b3' && (
                    <div className="mt-4 pt-4 border-t border-neutral-100 space-y-4 animate-fadeIn">
                      <p className="text-[12px] font-bold tracking-[0.1em] uppercase text-[#e07328]">Al finalizar lograrás:</p>
                      <ul className="space-y-2 text-[13px] text-neutral-600 leading-[1.6] font-light">
                        <li className="flex gap-2"><span className="text-[#e07328] flex-shrink-0">&mdash;</span>Diseñar y operar un pipeline audiovisual completo e integral.</li>
                        <li className="flex gap-2"><span className="text-[#e07328] flex-shrink-0">&mdash;</span>Liderazgo técnico en la implementación de IA para marcas y productoras.</li>
                        <li className="flex gap-2"><span className="text-[#e07328] flex-shrink-0">&mdash;</span>Gestionar proyectos híbridos complejos con máximo criterio estético humano.</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* ── Corporate Spotlight Section (CREA con IA) ── */}
          <div className="mt-20 bg-neutral-50 border border-neutral-200/80 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Corporate details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#e07328]/10 text-[#e07328] text-[11px] font-bold tracking-[0.15em] uppercase rounded-full">
                    Workshop para Empresas
                  </span>
                  <h4 className="text-2xl md:text-3xl font-extrabold text-neutral-900">
                    CREA con IA &middot; Team Building
                  </h4>
                </div>
                <p className="text-[15px] text-gray-600 leading-[1.8] font-light">
                  Una experiencia inmersiva diseñada específicamente para equipos corporativos y agencias de comunicación. Sin necesidad de conocimientos técnicos previos, los participantes dominan el flujo de trabajo de la IA generativa aplicada a la identidad de la marca.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px]">
                  <div className="p-4 bg-white border border-neutral-100 rounded-lg shadow-xs">
                    <h6 className="font-bold text-neutral-900 mb-1">Reto &ldquo;Agencia por un día&rdquo;</h6>
                    <p className="text-gray-500 text-[13px] font-light leading-relaxed">Diseño colaborativo de una campaña visual real para la empresa, fomentando la integración creativa y técnica.</p>
                  </div>
                  <div className="p-4 bg-white border border-neutral-100 rounded-lg shadow-xs">
                    <h6 className="font-bold text-neutral-900 mb-1">Entregable de alto impacto</h6>
                    <p className="text-gray-500 text-[13px] font-light leading-relaxed">Creación de un banco visual corporativo (20-30 imágenes) 100% alineado a la guía de marca y listo para publicar.</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 text-[13px] text-gray-500 font-semibold pt-2">
                  <span>⚡ Duración: 8 Horas</span>
                  <span>&middot;</span>
                  <span>👥 Dinámica: 100% Práctica</span>
                  <span>&middot;</span>
                  <span>🏢 In-company u Online</span>
                </div>
              </div>

              {/* Image display */}
              <div className="lg:col-span-5 w-full">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white border border-neutral-200 shadow-md">
                  <img
                    src="/plan-team-building.jpg"
                    alt="CREA con IA — Workshop corporativo y Team Building"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* ── Consolidated Methodology, Objectives, Materials Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-24 pt-16 border-t border-neutral-100">
            
            {/* Column 1: Metodología & Pilares */}
            <div className="space-y-6">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#e07328]">01.2 &middot; Pilares del Método</span>
              <h4 className="text-xl font-bold text-black">Metodología de Alto Rendimiento</h4>
              <p className="text-[14px] text-gray-600 leading-[1.7] font-light">
                Nuestro enfoque traduce la técnica fotográfica analógica tradicional al lenguaje del prompt generativo para asegurar un control estético total.
              </p>
              <div className="space-y-4 pt-2">
                <div className="border-l-2 border-[#e07328] pl-4">
                  <h5 className="text-[14px] font-bold text-black">Fotografía Aplicada a la IA</h5>
                  <p className="text-[13px] text-gray-500 font-light mt-0.5">Control de iluminación, óptica y composición para eliminar el azar en la generación.</p>
                </div>
                <div className="border-l-2 border-[#e07328] pl-4">
                  <h5 className="text-[14px] font-bold text-black">Ingeniería de Prompt Visual</h5>
                  <p className="text-[13px] text-gray-500 font-light mt-0.5">Traducción de ideas abstractas en parámetros estructurados y predecibles.</p>
                </div>
                <div className="border-l-2 border-[#e07328] pl-4">
                  <h5 className="text-[14px] font-bold text-black">Agente Personalizado</h5>
                  <p className="text-[13px] text-gray-500 font-light mt-0.5">Entrenamiento de una base de conocimiento que almacena y replica tu línea estética.</p>
                </div>
              </div>
            </div>

            {/* Column 2: Objetivos / Qué vas a lograr */}
            <div className="space-y-6">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#e07328]">01.3 &middot; Objetivos del Programa</span>
              <h4 className="text-xl font-bold text-black">¿Qué vas a lograr?</h4>
              <p className="text-[14px] text-gray-600 leading-[1.7] font-light">
                Desarrollarás competencias avanzadas para operar de manera autónoma en entornos de producción con inteligencia artificial.
              </p>
              <ul className="space-y-3 pt-2 text-[14px] text-gray-600 font-light">
                {[
                  'Transformar ideas en imágenes de calidad profesional en minutos.',
                  'Reducir tiempos de producción manteniendo los estándares creativos.',
                  'Construir prompts efectivos, estructurados y reutilizables.',
                  'Implementar un workflow híbrido de producción: criterio humano + IA.',
                  'Crear un banco de recursos visuales propio y escalable.',
                ].map((obj) => (
                  <li key={obj} className="flex gap-2.5">
                    <span className="text-[#e07328] font-bold flex-shrink-0">&mdash;</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Materiales & Audiencia */}
            <div className="space-y-6">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#e07328]">01.4 &middot; Recursos Incluidos</span>
              <h4 className="text-xl font-bold text-black">Qué te llevas del taller</h4>
              <p className="text-[14px] text-gray-600 leading-[1.7] font-light">
                Además de las horas de formación presencial, recibirás materiales exclusivos para tu consulta diaria.
              </p>
              <div className="space-y-4 pt-2">
                {[
                  { title: 'Libro del Método', desc: 'Material clave para aprender a estructurar tu propio agente fotográfico.' },
                  { title: 'Guía práctica de prompts', desc: 'Documento de consulta para la construcción de instrucciones efectivas aplicables a diversos temas.' },
                  { title: 'Resumen de contenidos (PDF)', desc: 'Esquema claro de aplicación directa.' },
                  { title: 'Soporte continuo', desc: 'Grupo abierto de consultas por WhatsApp, activo tras finalizar el taller.' },
                ].map((mat) => (
                  <div key={mat.title} className="bg-neutral-50 p-3.5 border border-neutral-200/50 rounded-lg">
                    <h5 className="text-[13px] font-bold text-black">{mat.title}</h5>
                    <p className="text-[12px] text-gray-500 font-light mt-0.5 leading-relaxed">{mat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── Editorial Profile: El Formador ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-24 pt-16 border-t border-neutral-100">
            <div className="lg:col-span-3">
              <div className="aspect-[4/5] overflow-hidden border border-neutral-200 rounded-xl bg-neutral-100 shadow-sm max-w-[240px]">
                <img
                  src="/formador.jpg"
                  alt="Facundo Pechervsky"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-9 space-y-4">
              <div>
                <span className="text-[12px] font-semibold tracking-[0.25em] uppercase text-[#e07328]">
                  El Formador
                </span>
                <h4 className="text-2xl font-black text-black mt-1">Facundo Pechervsky</h4>
                <p className="text-[13px] tracking-[0.08em] uppercase text-[#e07328] font-bold mt-1">
                  Fotógrafo profesional &middot; Consultor en IA Generativa &middot; Formador
                </p>
              </div>
              <p className="text-[15px] text-gray-600 leading-[1.8] font-light max-w-4xl">
                Fotógrafo argentino radicado en Madrid desde 2000. Más de 35 años de trayectoria en fotoperiodismo, fotografía corporativa y publicidad en España, Italia y Reino Unido. Autor de <em>Warnes Autorretratos</em> y <em>Vértigo Madrid</em>. Creador de la metodología <em>Desafía tu mirada</em>. Cofundador de EIA Labs, especializada en traducir conocimiento fotográfico al lenguaje de la IA. IA Art Designer en <em>Futuro en Construcción</em>. Colaborador en <em>La Nación</em>. Campañas recientes: Coca-Cola UK &middot; Repsol &middot; Verisure.
              </p>
              <div className="border-l-2 border-[#e07328] pl-5 mt-4">
                <p className="text-[14px] text-gray-500 italic leading-[1.7] font-light max-w-3xl">
                  &ldquo;Desde el cuarto oscuro hasta la IA generativa. Mi trayectoria refleja la constante adaptación del sector audiovisual, transformando cada avance tecnológico en una nueva oportunidad creativa.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* ── Gira 2026 ── */}
          <div className="border-t border-neutral-100 pt-16 mt-24 text-center space-y-6">
            <span className="text-[12px] font-semibold tracking-[0.25em] uppercase text-[#e07328]">
              Gira 2026 Latam &middot; Segunda Edición
            </span>
            <h3 className="text-xl md:text-3xl font-extrabold text-neutral-900 leading-snug">
              Buenos Aires &middot; Rosario &middot; Mendoza &middot; Asunción &middot; Montevideo
            </h3>
            <p className="text-[14px] text-gray-400 font-medium tracking-wide">
              Marzo &middot; Abril &middot; Mayo &middot; Junio 2026
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <a
                href="#contacto"
                className="inline-block px-8 py-4 bg-[#e07328] hover:bg-[#c86520] text-white text-[13px] font-bold tracking-[0.1em] transition-colors duration-300 rounded shadow-md uppercase"
              >
                Consultar disponibilidad
              </a>
              <Link
                to="/cursos"
                className="inline-block px-8 py-4 border border-[#e07328] text-[#e07328] hover:bg-[#e07328]/5 text-[13px] font-bold tracking-[0.1em] transition-colors duration-300 rounded shadow-sm uppercase cursor-pointer"
              >
                Ver todos los programas →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────── Contact ───────────────────────────── */

function ContactSection() {
  return (
    <section id="contacto" className="relative w-full overflow-hidden bg-[#fff8f4] border-t border-[#e07328]/10 scroll-mt-32">
      {/* ── SEPARATOR TITULO: CONTACTO ── */}
      <div className="w-full bg-[#fff0e5] border-b border-[#e07328]/10 py-16">
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="text-[14px] font-black tracking-[0.25em] text-[#e07328]">03</span>
            <div className="w-[1px] h-8 bg-gray-300"></div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-[0.15em] text-black uppercase">CONTACTO</h2>
          </div>
          <span className="text-[12px] tracking-[0.3em] text-gray-400 font-bold uppercase">Consultas, Presupuestos &amp; Gira 2026</span>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-8 md:px-12 py-16 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <h2 className="text-[clamp(1.75rem,3.5vw,3.5rem)] leading-[1.1] tracking-[-0.02em]">
              <span className="font-light text-gray-500">Hablemos de</span><br />
              <span className="font-extrabold text-black">tu proyecto</span>
            </h2>
            <p className="mt-8 text-[16px] text-gray-600 leading-[1.9] font-light">
              Escríbenos directamente por WhatsApp. Respondemos de forma rápida y sin compromiso para coordinar tu propuesta, taller o consultoría.
            </p>
          </div>

          <div className="md:col-span-6 md:col-start-7 space-y-10">
            <div>
              <p className="text-[13px] tracking-[0.2em] uppercase text-gray-400 font-semibold mb-2">Ubicación</p>
              <p className="text-[16px] font-medium text-black">Madrid — Buenos Aires</p>
            </div>
            <div>
              <p className="text-[13px] tracking-[0.2em] uppercase text-gray-400 font-semibold mb-3">WhatsApp Directo</p>
              <div className="bg-white border border-[#25D366]/25 p-6 rounded-lg shadow-sm space-y-4 max-w-md">
                <p className="text-[12px] tracking-[0.1em] text-gray-600 font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block animate-pulse"></span>
                  Respuesta rápida por chat
                </p>
                <a 
                  href="https://wa.me/34645014166" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#25D366] text-white text-[14px] font-bold tracking-[0.05em] hover:bg-[#20ba5a] transition-all duration-300 shadow-sm rounded-md uppercase w-full text-center"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.739-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.381 9.805-9.771.002-2.612-1.012-5.066-2.857-6.912C16.356 2.079 13.907.822 11.3.822 5.899.822 1.5 5.205 1.497 10.593c-.001 1.516.418 3.001 1.21 4.316l-.994 3.633 3.737-.978zm11.724-4.55c-.262-.13-1.554-.767-1.793-.852-.24-.087-.413-.13-.588.13-.175.26-.677.852-.83 1.02-.152.172-.306.193-.568.063-.261-.13-1.103-.407-2.102-1.298-.778-.694-1.303-1.552-1.455-1.813-.153-.262-.017-.404.114-.533.118-.117.262-.305.393-.457.13-.153.175-.261.262-.435.088-.174.044-.326-.021-.456-.066-.13-.588-1.416-.807-1.943-.213-.512-.446-.441-.609-.449-.158-.008-.34-.01-.522-.01s-.48.067-.73.34c-.25.27-1.011.987-1.011 2.404s.718 2.787.818 2.92c.1.133 1.411 2.155 3.418 3.021.478.206.85.33 1.142.423.481.152.919.13 1.265.067.385-.069 1.18-.483 1.346-.949.166-.465.166-.864.117-.949-.049-.085-.18-.13-.441-.26z" />
                  </svg>
                  Escribir por WhatsApp
                </a>
                <p className="text-[15px] font-bold text-black tracking-wide text-center">
                  +34 645 014 166
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────── Footer ───────────────────────────── */

export function Footer() {
  return (
    <footer className="bg-gray-50 text-black py-20 md:py-28 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <p className="text-[clamp(1.5rem,2.5vw,2.5rem)] tracking-tight leading-tight">
              <span className="font-light text-gray-500">HAZ LO QUE</span><br />
              <span className="font-extrabold text-black">QUIERAS</span>
            </p>
            <p className="text-[15px] text-gray-500 mt-4 leading-[1.8] max-w-sm font-light">
              Estudio de producción audiovisual con IA generativa.<br />Madrid — Buenos Aires.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <p className="text-[12px] font-semibold tracking-[0.3em] uppercase text-gray-400 mb-6">Nav</p>
            <div className="space-y-3">
              {['Inicio', 'Formación', 'Servicios', 'Contacto'].map((item) => {
                const hash = item.toLowerCase().replace('ó', 'o').replace(' ia', '')
                return (
                  <Link
                    key={item}
                    to="/"
                    hash={hash}
                    className="block text-[14px] text-gray-600 hover:text-black transition-colors duration-300 [&.active]:text-[#e07328]"
                  >
                    {item}
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-[12px] font-semibold tracking-[0.3em] uppercase text-gray-400 mb-6">Formación</p>
            <div className="space-y-3">
              {['Del Negativo al Prompt', 'CREA con IA', 'Talleres IA', 'Gira 2026'].map((item) => (
                <p key={item} className="text-[14px] text-gray-600 font-light">{item}</p>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-[12px] font-semibold tracking-[0.3em] uppercase text-gray-400 mb-6">Servicios</p>
            <div className="space-y-3">
              {['Proyectos a Medida', 'Noticias Internas TV', 'Banco de Imágenes', 'Redes Sociales', 'Consultoría'].map((item) => (
                <p key={item} className="text-[14px] text-gray-600 font-light">{item}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-gray-400 tracking-wide font-light">
            &copy; {new Date().getFullYear()} Haz Lo Que Quieras
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <a href="https://wa.me/34645014166" target="_blank" rel="noopener noreferrer" className="text-[12px] text-gray-400 tracking-wide hover:text-[#e07328] transition-colors duration-300 font-light">
              WhatsApp: +34 645 014 166
            </a>
            <span className="hidden sm:inline text-gray-300">|</span>
            <p className="text-[12px] text-gray-400 tracking-wide font-light">
              Madrid, España — Buenos Aires, Argentina
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ───────────────────────────── Hero ───────────────────────────── */

export function Hero() {
  return (
    <section className="max-w-[1440px] mx-auto px-8 md:px-12 pt-12 md:pt-20 pb-4">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-7 text-[12px] font-medium tracking-[0.25em] uppercase">
            <span className="text-[#666666]">Producción Audiovisual</span>
            <span className="text-black/20">·</span>
            <span className="text-[#666666]">IA Generativa</span>
            <span className="text-black/20">·</span>
            <Link
              to="/"
              hash="formacion"
              className="text-[#e07328] font-extrabold border-b-2 border-[#e07328]/40 hover:border-[#e07328] transition-colors duration-300"
            >
              Formación
            </Link>
          </div>
          <h1 className="font-sans leading-[0.84] tracking-[-0.035em] text-[clamp(1.7rem,6.5vw,5rem)]">
            <span className="block font-extrabold text-black">HAZ</span>
            <span className="block font-light text-[#666666]">LO</span>
            <span className="block font-light text-[#666666]">QUE</span>
            <span className="block font-extrabold text-[#e07328]">QUIERAS</span>
          </h1>
        </div>
        <div className="lg:max-w-sm lg:pb-3">
          <p className="text-[16px] md:text-[17px] leading-[1.8] text-neutral-700 font-light">
            Imágenes que aún no existen.<br />Hasta que las describes.
          </p>

          {/* Banner próximo taller */}
          <a
            href="https://instagram.com/facu_peche"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 block relative overflow-hidden rounded-xl border border-[#e07328]/25 hover:border-[#e07328] hover:shadow-[0_14px_34px_-18px_rgba(224,115,40,0.65)] transition-all duration-300"
          >
            <div className="relative w-full overflow-hidden bg-neutral-950" style={{ aspectRatio: '4/3' }}>
              <img
                src="/clases-presenciales-01.jpg"
                alt="Flyer del próximo taller — Del Negativo al Prompt"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#e07328] text-white text-[10px] tracking-[0.22em] uppercase font-extrabold rounded shadow-lg">
                Próximo taller
              </span>
            </div>
            <div className="flex items-center justify-between bg-neutral-950 px-4 py-3">
              <span className="text-[14px] font-bold text-white leading-tight">
                + info en <span className="text-[#e07328]">@FACU_PECHE</span>
              </span>
              <span className="text-white text-xl group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </div>
          </a>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/"
              hash="servicios"
              className="inline-flex items-center px-6 py-3 bg-black text-white text-[12px] font-bold tracking-[0.1em] uppercase rounded-full hover:bg-[#e07328] transition-colors duration-300 cursor-pointer"
            >
              Ver trabajos
            </Link>
            <Link
              to="/"
              hash="contacto"
              className="inline-flex items-center px-6 py-3 border border-black/15 text-black text-[12px] font-bold tracking-[0.1em] uppercase rounded-full hover:border-[#e07328] hover:text-[#e07328] transition-colors duration-300 cursor-pointer"
            >
              Hablemos
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────── OjosSection ───────────────────────────── */

export function OjosSection() {
  return (
    <section className="mt-12 md:mt-16">
      <div className="relative w-full overflow-hidden bg-black">
        <img
          src="/galeria-ojo-macro.png"
          alt="Primer plano — ojos"
          className="w-full h-auto object-cover opacity-80"
          style={{ aspectRatio: '21/8', minHeight: '320px' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <div className="max-w-[1440px] mx-auto px-8 md:px-12 pb-8 md:pb-12">
            <p className="text-[11px] font-medium tracking-[0.4em] uppercase text-white/70">
              Mirar diferente &middot; Crear sin límites
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────── Main ───────────────────────────── */

function HomePage() {
  return (
    <div className="site-shell">
      <Navbar />
      <div id="inicio" className="h-20" />
      <Hero />
      <OjosSection />
      <MarqueeStrip />
      <Manifiesto />
      <Formacion />
      <Services />
      <ContactSection />
      <Footer />
    </div>
  )
}
