import { createFileRoute, Link } from '@tanstack/react-router'
import { Volume2, VolumeX } from 'lucide-react'
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
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 h-20 flex items-center justify-between">
            <Link to="/" className="text-[14px] font-bold tracking-[0.25em] uppercase text-black">
              HLQQ
            </Link>

            <div className="hidden md:flex items-center gap-10 text-[13px] font-medium tracking-[0.08em] text-[#111111]">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  hash={link.hash}
                  className="hover:text-[#2872e0] transition-colors duration-300 [&.active]:text-[#2872e0] [&.active]:font-semibold"
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
        <div className="h-20 flex items-center justify-between px-5 sm:px-8">
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
        <div className="px-5 sm:px-8 pt-8 pb-12 space-y-6 text-[15px] font-medium tracking-[0.08em] border-t border-black/10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              hash={link.hash}
              onClick={() => setMenuOpen(false)}
              className="block text-[#111111] py-3 text-lg hover:text-[#2872e0] transition-colors duration-300 [&.active]:text-[#2872e0]"
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

/* ───────────────────── Separador: Mirar Diferente ───────────────────── */

function SeparadorMirar() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-[#111111]/10">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
          <span className="h-[2px] flex-1 bg-[#111111]" />
          <h2 className="text-center text-[clamp(1rem,3vw,2.25rem)] font-extrabold uppercase tracking-[0.06em] sm:tracking-[0.08em] leading-tight text-[#111111]">
            MIRAR DIFERENTE <span className="text-[#2872e0]">·</span> CREAR SIN LÍMITES
          </h2>
          <span className="h-[2px] flex-1 bg-[#111111]" />
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────── Services + Portfolio ───────────────────────────── */

function Services() {
  return (
    <section id="servicios" className="relative w-full overflow-hidden bg-white border-t border-[#2872e0]/10 scroll-mt-32">
      {/* ── Franja separadora azul (Pantone 285 C · #2A66BC) ── */}
      <div aria-hidden="true" className="w-full h-2 bg-[#2A66BC]" />
      {/* ── SEPARATOR TITULO: SERVICIOS ── */}
      <div className="w-full bg-white border-b border-[#2872e0]/10 py-16">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="text-[14px] font-black tracking-[0.25em] text-[#2872e0]">02</span>
            <div className="w-[1px] h-8 bg-gray-300"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[0.08em] sm:tracking-[0.15em] text-[#111111] uppercase">SERVICIOS DE PRODUCCIÓN</h2>
          </div>
          <span className="text-[12px] tracking-[0.3em] text-[#333333] font-bold uppercase">Producción Audiovisual &amp; IA Generativa</span>
        </div>
      </div>

      {/* ── La fotografía evolucionó + Del Click al Prompt ── */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 pt-16 md:pt-28">
        <div className="max-w-5xl">
          <h3 className="text-[clamp(1.5rem,3vw,2.75rem)] leading-[1.15] tracking-[-0.02em] text-black">
            <span className="font-light text-[#333333]">La fotografía </span>
            <span className="font-extrabold text-black">evolucionó</span><span className="text-[#2872e0]">.</span>{' '}
            <span className="font-light text-[#333333]">Nosotros </span>
            <span className="font-extrabold text-black">también</span><span className="text-[#2872e0]">.</span>
          </h3>
          <p className="mt-8 text-[17px] leading-[1.9] max-w-2xl text-[#333333]">
            Décadas de experiencia en imagen y video, combinadas con dominio avanzado en IA generativa. Convertimos conceptos en recursos visuales listos para usar.
          </p>
        </div>

        {/* ── Tres Revoluciones ── */}
        <div className="mt-20 md:mt-28">
          <p className="text-[12px] font-semibold tracking-[0.3em] uppercase mb-6 text-[#333333]">
            Tres Revoluciones
          </p>
          <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.02em] mb-14 text-black">
            <span className="font-light text-[#333333]">Del </span>
            <span className="font-extrabold text-black">Click </span>
            <span className="font-light text-[#333333]">al </span>
            <span className="font-extrabold text-[#2872e0]">Prompt</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {/* Era Analógica */}
            <div className="border border-[#e0e0e0] p-8">
              <p className="text-[14px] font-bold tracking-[0.15em] uppercase mb-3 text-[#2872e0]">
                1989
              </p>
              <h4 className="text-xl font-bold mb-3 text-black">
                La Era Analógica
              </h4>
              <p className="text-[15px] leading-[1.8] text-[#333333]">
                Cuando cada disparo era una decisión. La planificación y la técnica eran la base del oficio, hasta llegar a la magia del revelado.
              </p>
            </div>

            {/* Era Digital */}
            <div className="border border-[#e0e0e0] p-8">
              <p className="text-[14px] font-bold tracking-[0.15em] uppercase mb-3 text-[#2872e0]">
                1999 – 2022
              </p>
              <h4 className="text-xl font-bold mb-3 text-black">
                La Era Digital
              </h4>
              <p className="text-[15px] leading-[1.8] text-[#333333]">
                La tecnología acelera el ciclo fotográfico para siempre. Transforma por completo la producción y convierte el consumo visual en una experiencia instantánea.
              </p>
            </div>

            {/* Era Generativa */}
            <div className="border border-[#e0e0e0] p-8">
              <p className="text-[14px] font-bold tracking-[0.15em] uppercase mb-3 text-[#2872e0]">
                2022 →
              </p>
              <h4 className="text-xl font-bold mb-3 text-black">
                La Era Generativa
              </h4>
              <p className="text-[15px] leading-[1.8] text-[#333333]">
                Donde la innovación se fusiona con la creatividad. La conceptualización es la nueva técnica y ahora tus textos son los nuevos &ldquo;clicks&rdquo;.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 py-16 md:py-28">
        {/* ── Soluciones Audiovisuales — encabezado ── */}
        <div className="mb-12 md:mb-16 max-w-3xl">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold tracking-[-0.02em] text-black leading-[1.05]">
            Soluciones Audiovisuales
          </h2>
          <p className="mt-5 text-[clamp(1.05rem,1.6vw,1.35rem)] text-[#333333] leading-[1.55]">
            Producción visual para marcas, instituciones y creadores independientes — del briefing a la entrega lista para publicar.
          </p>
        </div>

        {/* ── Servicios — grilla de cajas minimalistas ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1px] bg-[#e6e6e6] border border-[#e6e6e6]">
          {[
            {
              n: '01',
              title: 'Contenido para redes y campañas',
              desc: 'Piezas audiovisuales profesionales con IA generativa, con identidad visual coherente y entrega lista para publicar.',
            },
            {
              n: '02',
              title: 'Cortos publicitarios',
              desc: 'Producciones de alto impacto pensadas a medida de tu marca, del concepto a la pieza final.',
            },
            {
              n: '03',
              title: 'Avatares hiperrealistas',
              desc: 'Presentadores y portavoces virtuales con acabado televisivo, listos para campañas y comunicación de marca.',
            },
            {
              n: '04',
              title: 'Bancos de imágenes exclusivos',
              desc: 'Modelos IA propios que reducen los costes de producción hasta un 70% sin sacrificar calidad visual.',
            },
            {
              n: '05',
              title: 'Campañas visuales anuales',
              desc: 'Planificación y producción de contenido para todo el año, coherente en estilo y mensaje.',
            },
            {
              n: '06',
              title: 'Consultoría creativa',
              desc: 'Optimización de prompts y procesos creativos escalables para acompañar a tu equipo.',
            },
          ].map((s) => (
            <div
              key={s.n}
              className="group bg-white p-8 md:p-9 transition-colors duration-300 hover:bg-[#fafbff]"
            >
              <span className="text-[12px] font-bold tracking-[0.2em] text-[#2872e0]">
                {s.n}
              </span>
              <h3 className="mt-5 text-[17px] font-bold text-black leading-[1.3]">
                {s.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.7] text-[#555555] font-light">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────── Galería de Trabajos ───────────────────────────── */

function GaleriaTrabajos() {
  // 9 trabajos para clientes — trabajo- / portfolio- / servicios- (sin repetir con participantes)
  const trabajos = [
    { src: '/trabajo-cocacola.jpeg', alt: 'Coca-Cola — Campaña con IA' },
    { src: '/trabajo-ey-facu.jpeg', alt: 'EY — IA Art Designer' },
    { src: '/trabajo-president-escena.png', alt: 'Producción — escena publicitaria' },
    { src: '/trabajo-president-fantasia.png', alt: 'Producción — fantasía publicitaria' },
    { src: '/portfolio-snowboarder.png', alt: 'Producción IA — Snowboarder' },
    { src: '/portfolio-plano-medio.png', alt: 'Imagen generativa — Plano medio' },
    { src: '/portfolio-vino.jpeg', alt: 'Producción IA — Vino editorial' },
    { src: '/servicios-1.jpeg', alt: 'Producción audiovisual con IA' },
    { src: '/servicios-2.jpeg', alt: 'Soluciones audiovisuales con IA' },
  ]

  const featured = trabajos[0]

  return (
    <section className="relative w-full overflow-hidden bg-white border-t border-[#2872e0]/10">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 py-20 md:py-32">

        {/* ── Encabezado — jerarquía suave, sin negritas agresivas ── */}
        <div className="mb-10 text-center">
          <span className="text-[12px] font-medium tracking-[0.25em] uppercase text-[#2872e0]">
            Portfolio
          </span>
          <h2 className="text-2xl md:text-3xl font-medium text-[#111111] mt-3">
            Producción para clientes
          </h2>

          {/* ── Explicación de ahorro ── */}
          <p className="text-[16px] md:text-[18px] font-normal text-[#666666] leading-[1.6] max-w-[800px] mx-auto mt-6">
            Reducimos costes de producción hasta un 70% con IA generativa,
            sin sacrificar calidad visual. Menos tiempo, menos recursos,
            mismos resultados profesionales.
          </p>
        </div>

        {/* ── Imagen destacada — Coca-Cola, centrada, sin recortes ── */}
        <div className="w-full md:w-4/5 mx-auto mb-12 overflow-hidden bg-white">
          <img
            src={featured.src}
            alt={featured.alt}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* ── Grilla — 3x3 (2 columnas en móvil), gap 4px, mismo orden ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-[4px]">
          {trabajos.map((img, i) => (
            <div key={i} className="aspect-[3/2] overflow-hidden bg-white">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
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
    <section id="formacion" className="relative w-full overflow-hidden bg-white border-t border-[#2872e0]/10 scroll-mt-32">
      {/* ── Franja separadora azul (Pantone 285 C · #2A66BC) ── */}
      <div aria-hidden="true" className="w-full h-2 bg-[#2A66BC]" />
      {/* ── SEPARATOR TITULO: FORMACIÓN ── */}
      <div className="w-full bg-white border-b border-[#2872e0]/10 py-16">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="text-[14px] font-black tracking-[0.25em] text-[#2872e0]">01</span>
            <div className="w-[1px] h-8 bg-gray-300"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[0.08em] sm:tracking-[0.15em] text-black uppercase">FORMACIÓN</h2>
          </div>
          <span className="text-[12px] tracking-[0.3em] text-[#333333] font-bold uppercase">Programas, Talleres &amp; Workshops</span>
        </div>
      </div>

      {/* ── Section content ── */}
      <div className="py-16 md:py-28">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">

          {/* ── Section entry title ── */}
          <div className="mb-16">
            <h2 className="text-[clamp(1.75rem,3.5vw,3.5rem)] leading-[1.1] tracking-[-0.02em] text-black">
              <span className="font-light text-[#333333]">Dominá la </span>
              <span className="font-black text-[#2872e0]">IA Generativa</span>
              <span className="font-light text-[#333333]"> y </span>
              <span className="font-extrabold text-black">reinventá tu carrera.</span>
            </h2>
          </div>

          {/* ── Split Presentation: Text and Video ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-12 lg:gap-16 items-start mb-24">

            {/* Left Column: Intro details */}
            <div className="space-y-6">
              <span className="text-[12px] font-semibold tracking-[0.25em] uppercase text-[#2872e0]">
                Programa intensivo 2026
              </span>
              <h3 className="text-[clamp(1.5rem,2.8vw,2.4rem)] font-extrabold text-black leading-tight">
                Producción audiovisual con inteligencia artificial
              </h3>
              <p className="text-[16px] text-[#333333] leading-[1.8] font-light">
                Diseñado para creadores independientes, instituciones creativas y organizaciones que buscan liderar la revolución de la IA generativa. Una metodología de aprendizaje progresiva que conecta la técnica fotográfica analógica tradicional con los flujos de trabajo generativos avanzados.
              </p>
              <p className="text-[15px] text-[#333333] leading-[1.8] font-light">
                Aprendé de forma 100% práctica a estructurar prompts de precisión, entrenar tus propios agentes estéticos y automatizar piezas en movimiento de alto impacto.
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {['Presencial u online', 'Individual o grupal', 'Sin experiencia previa', 'Segunda Edición Latam'].map((tag) => (
                  <span key={tag} className="px-3.5 py-1.5 bg-white border border-neutral-200 text-[#333333] text-[12px] font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Video player showcase */}
            <div className="w-full">
              <div className="relative w-full aspect-[16/10] bg-black border border-neutral-200 overflow-hidden shadow-lg group">
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
              <div className="flex items-center justify-between mt-3 px-1 text-[12px] text-[#333333]">
                <span>Clase práctica en vivo</span>
                <span>Marzo &middot; Junio 2026</span>
              </div>
            </div>

          </div>

          {/* ── Professional Learning Road (3 levels) ── */}
          <div className="border-t border-neutral-100 pt-16 mb-16">
            <div className="mb-12">
              <span className="text-[12px] font-semibold tracking-[0.25em] uppercase text-[#2872e0]">
                01.1 &middot; Ruta de Aprendizaje Profesional
              </span>
              <h4 className="text-2xl md:text-3xl font-extrabold text-black mt-2">
                Programas de Formación Progresiva
              </h4>
              <p className="text-[16px] text-[#333333] leading-[1.7] mt-3 max-w-2xl">
                Seleccioná el nivel de profundidad técnica que mejor se adapte a tus objetivos artísticos o comerciales.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Mentorías Personalizadas Card (Próximo Workshop) */}
              <div id="workshop" className="bg-white border border-neutral-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full scroll-mt-32">
                <div className="aspect-[16/10] overflow-hidden bg-white flex items-center justify-center border-b border-neutral-100">
                  <img
                    src="/plan-profesional.jpeg"
                    alt="Mentorías Personalizadas — Próximo Workshop"
                    className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2.5 py-0.5 bg-[#2872e0] text-white text-[10px] font-extrabold tracking-wider uppercase animate-pulse">PRÓXIMO WORKSHOP</span>
                    <span className="text-[#333333]">|</span>
                    <span className="text-[11px] text-[#2872e0] font-bold">Mentoría</span>
                  </div>
                  <h5 className="text-lg font-bold text-black mb-3">
                    Mentorías Personalizadas
                  </h5>
                  <p className="text-[14px] text-[#333333] leading-[1.7] font-light flex-1">
                    Acompañamiento individual de alta intensidad y 100% a medida. Resolvé retos de tu negocio, definí tu propia línea estética de marca y creá un ecosistema de producción a tu medida de la mano de un experto.
                  </p>
                  
                  <button
                    onClick={() => setOpenBlock(openBlock === 'bm' ? null : 'bm')}
                    className="text-[13px] font-bold text-[#2872e0] hover:text-[#b85a1c] transition-colors duration-300 cursor-pointer flex items-center gap-1 mt-6 text-left"
                  >
                    {openBlock === 'bm' ? 'Cerrar detalles ↑' : 'Ver competencias y detalles ↓'}
                  </button>
                  
                  {openBlock === 'bm' && (
                    <div className="mt-4 pt-4 border-t border-neutral-100 space-y-4 animate-fadeIn">
                      <p className="text-[12px] font-bold tracking-[0.1em] uppercase text-[#2872e0]">Al finalizar lograrás:</p>
                      <ul className="space-y-2 text-[13px] text-[#333333] leading-[1.6] font-light">
                        <li className="flex gap-2"><span className="text-[#2872e0] flex-shrink-0">&mdash;</span>Diseñar un flujo de trabajo optimizado para tus proyectos específicos.</li>
                        <li className="flex gap-2"><span className="text-[#2872e0] flex-shrink-0">&mdash;</span>Resolver retos técnicos avanzados y depurar prompts.</li>
                        <li className="flex gap-2"><span className="text-[#2872e0] flex-shrink-0">&mdash;</span>Entrenar agentes estéticos propios con guía paso a paso.</li>
                        <li className="flex gap-2"><span className="text-[#2872e0] flex-shrink-0">&mdash;</span>Soporte y seguimiento uno a uno para garantizar tu autonomía.</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Level 1 Card */}
              <div className="bg-white border border-neutral-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full">
                <div className="aspect-[16/10] overflow-hidden bg-white flex items-center justify-center border-b border-neutral-100">
                  <img
                    src="/galeria-nino-argentino.png"
                    alt="Taller Introductorio — IA Generativa"
                    className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="px-2.5 py-0.5 bg-[#2872e0]/10 text-[#2872e0] text-[11px] font-bold tracking-wider uppercase">Nivel 1</span>
                    <span className="text-[#333333]">|</span>
                    <span className="text-[12px] font-bold tracking-wider uppercase text-[#333333]">5 Horas</span>
                    <span className="text-[#333333]">|</span>
                    <span className="text-[12px] text-[#333333] font-medium">Taller</span>
                  </div>
                  <h5 className="text-lg font-bold text-black mb-3">
                    Introducción a la IA Generativa
                  </h5>
                  <p className="text-[14px] text-[#333333] leading-[1.7] font-light flex-1">
                    Un primer acercamiento 100% práctico. Los asistentes generarán imágenes de alta calidad desde el primer momento, conectando conceptos con generación de imágenes en plataformas profesionales.
                  </p>
                  
                  <button
                    onClick={() => setOpenBlock(openBlock === 'b1' ? null : 'b1')}
                    className="text-[13px] font-bold text-[#2872e0] hover:text-[#b85a1c] transition-colors duration-300 cursor-pointer flex items-center gap-1 mt-6 text-left"
                  >
                    {openBlock === 'b1' ? 'Cerrar detalles ↑' : 'Ver competencias y detalles ↓'}
                  </button>
                  
                  {openBlock === 'b1' && (
                    <div className="mt-4 pt-4 border-t border-neutral-100 space-y-4 animate-fadeIn">
                      <p className="text-[12px] font-bold tracking-[0.1em] uppercase text-[#2872e0]">Al finalizar lograrás:</p>
                      <ul className="space-y-2 text-[13px] text-[#333333] leading-[1.6] font-light">
                        <li className="flex gap-2"><span className="text-[#2872e0] flex-shrink-0">&mdash;</span>Armar prompts precisos con visión fotográfica.</li>
                        <li className="flex gap-2"><span className="text-[#2872e0] flex-shrink-0">&mdash;</span>Controlar el estilo para mantener la coherencia visual.</li>
                        <li className="flex gap-2"><span className="text-[#2872e0] flex-shrink-0">&mdash;</span>Iniciar tu propio banco de imágenes generadas con IA.</li>
                        <li className="flex gap-2"><span className="text-[#2872e0] flex-shrink-0">&mdash;</span>Dar el primer paso para entrenar tu &ldquo;agente fotográfico personalizado&rdquo;.</li>
                      </ul>
                      <div className="p-3 bg-white border-l-2 border-[#2872e0]">
                        <p className="text-[12px] text-[#333333] leading-[1.6] font-light">
                          &ldquo;Tu agente memoriza tu identidad visual, aplicando automáticamente estilo, iluminación y lentes sin configurarlos de cero.&rdquo;
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Level 2 Card */}
              <div className="bg-white border border-neutral-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full">
                <div className="aspect-[16/10] overflow-hidden bg-white flex items-center justify-center border-b border-neutral-100">
                  <img
                    src="/plan-direccion-foto.jpeg"
                    alt="Dirección de Fotografía con IA"
                    className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="px-2.5 py-0.5 bg-[#2872e0]/10 text-[#2872e0] text-[11px] font-bold tracking-wider uppercase">Nivel 2</span>
                    <span className="text-[#333333]">|</span>
                    <span className="text-[12px] font-bold tracking-wider uppercase text-[#333333]">8 Horas</span>
                    <span className="text-[#333333]">|</span>
                    <span className="text-[12px] text-[#333333] font-medium">Formación</span>
                  </div>
                  <h5 className="text-lg font-bold text-black mb-1">
                    Dirección de Fotografía con IA
                  </h5>
                  <p className="text-[11px] text-[#333333] font-medium mb-3">Incluye contenidos del Nivel 1</p>
                  <p className="text-[14px] text-[#333333] leading-[1.7] font-light flex-1">
                    Control exacto sobre la composición, luz y narrativa visual. Los participantes avanzan de la imagen estática hacia proyectos dinámicos incorporando herramientas profesionales de video y animación.
                  </p>
                  
                  <button
                    onClick={() => setOpenBlock(openBlock === 'b2' ? null : 'b2')}
                    className="text-[13px] font-bold text-[#2872e0] hover:text-[#b85a1c] transition-colors duration-300 cursor-pointer flex items-center gap-1 mt-6 text-left"
                  >
                    {openBlock === 'b2' ? 'Cerrar detalles ↑' : 'Ver competencias y detalles ↓'}
                  </button>
                  
                  {openBlock === 'b2' && (
                    <div className="mt-4 pt-4 border-t border-neutral-100 space-y-4 animate-fadeIn">
                      <p className="text-[12px] font-bold tracking-[0.1em] uppercase text-[#2872e0]">Al finalizar lograrás:</p>
                      <ul className="space-y-2 text-[13px] text-[#333333] leading-[1.6] font-light">
                        <li className="flex gap-2"><span className="text-[#2872e0] flex-shrink-0">&mdash;</span>Aplicar un estándar profesional y mantener coherencia estética en vídeo.</li>
                        <li className="flex gap-2"><span className="text-[#2872e0] flex-shrink-0">&mdash;</span>Finalizar el ajuste y entrenamiento de tu agente fotográfico.</li>
                        <li className="flex gap-2"><span className="text-[#2872e0] flex-shrink-0">&mdash;</span>Establecer un flujo de trabajo ágil y automatizado diario.</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Level 3 Card */}
              <div className="bg-white border border-neutral-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full">
                <div className="aspect-[16/10] overflow-hidden bg-white flex items-center justify-center border-b border-neutral-100">
                  <img
                    src="/plan-intro.jpeg"
                    alt="Especialización Profesional en IA Generativa"
                    className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="px-2.5 py-0.5 bg-[#2872e0]/10 text-[#2872e0] text-[11px] font-bold tracking-wider uppercase">Nivel 3</span>
                    <span className="text-[#333333]">|</span>
                    <span className="text-[12px] font-bold tracking-wider uppercase text-[#333333]">16 Horas</span>
                    <span className="text-[#333333]">|</span>
                    <span className="text-[12px] text-[#333333] font-medium">Completo</span>
                  </div>
                  <h5 className="text-lg font-bold text-black mb-3">
                    Especialización Profesional
                  </h5>
                  <p className="text-[14px] text-[#333333] leading-[1.7] font-light flex-1">
                    Análisis de casos industriales y técnicas de alto nivel. Construcción de un ecosistema completo de producción a gran escala, abarcando desde la concepción hasta piezas cinematográficas unificadas.
                  </p>
                  
                  <button
                    onClick={() => setOpenBlock(openBlock === 'b3' ? null : 'b3')}
                    className="text-[13px] font-bold text-[#2872e0] hover:text-[#b85a1c] transition-colors duration-300 cursor-pointer flex items-center gap-1 mt-6 text-left"
                  >
                    {openBlock === 'b3' ? 'Cerrar detalles ↑' : 'Ver competencias y detalles ↓'}
                  </button>
                  
                  {openBlock === 'b3' && (
                    <div className="mt-4 pt-4 border-t border-neutral-100 space-y-4 animate-fadeIn">
                      <p className="text-[12px] font-bold tracking-[0.1em] uppercase text-[#2872e0]">Al finalizar lograrás:</p>
                      <ul className="space-y-2 text-[13px] text-[#333333] leading-[1.6] font-light">
                        <li className="flex gap-2"><span className="text-[#2872e0] flex-shrink-0">&mdash;</span>Diseñar y operar un pipeline audiovisual completo e integral.</li>
                        <li className="flex gap-2"><span className="text-[#2872e0] flex-shrink-0">&mdash;</span>Liderazgo técnico en la implementación de IA para marcas y productoras.</li>
                        <li className="flex gap-2"><span className="text-[#2872e0] flex-shrink-0">&mdash;</span>Gestionar proyectos híbridos complejos con máximo criterio estético humano.</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* ── WhatsApp CTA — debajo de los programas de formación ── */}
            <div className="mt-12 bg-white border border-[#25D366]/25 p-8 md:p-10 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-2">
                <p className="text-[12px] tracking-[0.1em] text-[#333333] font-medium flex items-center gap-2 uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block animate-pulse"></span>
                  ¿Dudas sobre qué programa elegir?
                </p>
                <h5 className="text-xl md:text-2xl font-bold text-black">
                  Escribinos por WhatsApp y te asesoramos
                </h5>
                <p className="text-[14px] text-[#333333] leading-[1.7] font-light max-w-xl">
                  Te ayudamos a elegir el nivel ideal según tus objetivos. Respuesta rápida y sin compromiso.
                </p>
              </div>
              <a
                href="https://wa.me/34645014166"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#25D366] text-white text-[14px] font-bold tracking-[0.05em] hover:bg-[#20ba5a] transition-all duration-300 shadow-sm uppercase text-center flex-shrink-0 w-full md:w-auto"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.739-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.381 9.805-9.771.002-2.612-1.012-5.066-2.857-6.912C16.356 2.079 13.907.822 11.3.822 5.899.822 1.5 5.205 1.497 10.593c-.001 1.516.418 3.001 1.21 4.316l-.994 3.633 3.737-.978zm11.724-4.55c-.262-.13-1.554-.767-1.793-.852-.24-.087-.413-.13-.588.13-.175.26-.677.852-.83 1.02-.152.172-.306.193-.568.063-.261-.13-1.103-.407-2.102-1.298-.778-.694-1.303-1.552-1.455-1.813-.153-.262-.017-.404.114-.533.118-.117.262-.305.393-.457.13-.153.175-.261.262-.435.088-.174.044-.326-.021-.456-.066-.13-.588-1.416-.807-1.943-.213-.512-.446-.441-.609-.449-.158-.008-.34-.01-.522-.01s-.48.067-.73.34c-.25.27-1.011.987-1.011 2.404s.718 2.787.818 2.92c.1.133 1.411 2.155 3.418 3.021.478.206.85.33 1.142.423.481.152.919.13 1.265.067.385-.069 1.18-.483 1.346-.949.166-.465.166-.864.117-.949-.049-.085-.18-.13-.441-.26z" />
                </svg>
                Escribir por WhatsApp
              </a>
            </div>
          </div>

          {/* ── Corporate Spotlight Section (CREA con IA) ── */}
          <div className="mt-20 bg-white border border-neutral-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Corporate details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#2872e0]/10 text-[#2872e0] text-[11px] font-bold tracking-[0.15em] uppercase">
                    Workshop para Empresas
                  </span>
                  <h4 className="text-2xl md:text-3xl font-extrabold text-neutral-900">
                    CREA con IA &middot; Team Building
                  </h4>
                </div>
                <p className="text-[15px] text-[#333333] leading-[1.8] font-light">
                  Una experiencia inmersiva diseñada específicamente para equipos corporativos y agencias de comunicación. Sin necesidad de conocimientos técnicos previos, los participantes dominan el flujo de trabajo de la IA generativa aplicada a la identidad de la marca.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px]">
                  <div className="p-4 bg-white border border-neutral-200 shadow-xs">
                    <h6 className="font-bold text-neutral-900 mb-1">Reto &ldquo;Agencia por un día&rdquo;</h6>
                    <p className="text-[#333333] text-[13px] font-light leading-relaxed">Diseño colaborativo de una campaña visual real para la empresa, fomentando la integración creativa y técnica.</p>
                  </div>
                  <div className="p-4 bg-white border border-neutral-200 shadow-xs">
                    <h6 className="font-bold text-neutral-900 mb-1">Entregable de alto impacto</h6>
                    <p className="text-[#333333] text-[13px] font-light leading-relaxed">Creación de un banco visual corporativo (20-30 imágenes) 100% alineado a la guía de marca y listo para publicar.</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 text-[13px] text-[#333333] font-semibold pt-2">
                  <span>Duración: 8 Horas</span>
                  <span>&middot;</span>
                  <span>Dinámica: 100% Práctica</span>
                  <span>&middot;</span>
                  <span>In-company u Online</span>
                </div>
              </div>

              {/* Image display */}
              <div className="lg:col-span-5 w-full">
                <div className="overflow-hidden bg-white border border-neutral-200">
                  <img
                    src="/plan-team-building.jpg"
                    alt="CREA con IA — Workshop corporativo y Team Building"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* ── Consolidated Methodology, Objectives, Materials Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-24 pt-16 border-t border-neutral-100">
            
            {/* Column 1: Metodología & Pilares */}
            <div className="space-y-6 bg-white border border-[#e0e0e0] p-8">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#2872e0]">01.2 &middot; Pilares del Método</span>
              <h4 className="text-3xl font-bold text-black leading-tight">Metodología de Alto Rendimiento</h4>
              <p className="text-[14px] text-[#333333] leading-[1.7]">
                Nuestro enfoque traduce la técnica fotográfica analógica tradicional al lenguaje del prompt generativo para asegurar un control estético total.
              </p>
              <div className="space-y-4 pt-2">
                <div className="border-l-2 border-[#2872e0] pl-4">
                  <h5 className="text-[14px] font-bold text-black">Fotografía Aplicada a la IA</h5>
                  <p className="text-[13px] text-[#333333] mt-0.5">Control de iluminación, óptica y composición para eliminar el azar en la generación.</p>
                </div>
                <div className="border-l-2 border-[#2872e0] pl-4">
                  <h5 className="text-[14px] font-bold text-black">Ingeniería de Prompt Visual</h5>
                  <p className="text-[13px] text-[#333333] mt-0.5">Traducción de ideas abstractas en parámetros estructurados y predecibles.</p>
                </div>
                <div className="border-l-2 border-[#2872e0] pl-4">
                  <h5 className="text-[14px] font-bold text-black">Agente Personalizado</h5>
                  <p className="text-[13px] text-[#333333] mt-0.5">Entrenamiento de una base de conocimiento que almacena y replica tu línea estética.</p>
                </div>
              </div>
            </div>

            {/* Column 2: Objetivos / Qué vas a lograr */}
            <div className="space-y-6 bg-white border border-[#e0e0e0] p-8">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#2872e0]">01.3 &middot; Objetivos del Programa</span>
              <h4 className="text-3xl font-bold text-black leading-tight">¿Qué vas a lograr?</h4>
              <p className="text-[14px] text-[#333333] leading-[1.7]">
                Desarrollarás competencias avanzadas para operar de manera autónoma en entornos de producción con inteligencia artificial.
              </p>
              <ul className="space-y-4 pt-2 text-[15px] text-[#333333]">
                {[
                  'Transformar ideas en imágenes de calidad profesional en minutos.',
                  'Reducir tiempos de producción manteniendo los estándares creativos.',
                  'Construir prompts efectivos, estructurados y reutilizables.',
                  'Implementar un workflow híbrido de producción: criterio humano + IA.',
                  'Crear un banco de recursos visuales propio y escalable.',
                ].map((obj) => (
                  <li key={obj} className="flex gap-3 leading-[1.6]">
                    <span className="text-[#2872e0] font-bold flex-shrink-0">&mdash;</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Materiales & Audiencia */}
            <div className="space-y-6 bg-white border border-[#e0e0e0] p-8">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#2872e0]">01.4 &middot; Recursos Incluidos</span>
              <h4 className="text-3xl font-bold text-black leading-tight">Qué te llevas del taller</h4>
              <p className="text-[14px] text-[#333333] leading-[1.7]">
                Además de las horas de formación presencial, recibirás materiales exclusivos para tu consulta diaria.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  { title: 'Libro del Método', desc: 'Material clave para aprender a estructurar tu propio agente fotográfico.' },
                  { title: 'Guía práctica de prompts', desc: 'Documento de consulta para la construcción de instrucciones efectivas aplicables a diversos temas.' },
                  { title: 'Resumen de contenidos (PDF)', desc: 'Esquema claro de aplicación directa.' },
                  { title: 'Soporte continuo', desc: 'Grupo abierto de consultas por WhatsApp, activo tras finalizar el taller.' },
                ].map((mat) => (
                  <div key={mat.title} className="bg-white border border-neutral-200 p-4">
                    <h5 className="text-[14px] font-bold text-black">{mat.title}</h5>
                    <p className="text-[12px] text-[#333333] mt-1 leading-relaxed">{mat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────── El Formador ───────────────────────────── */

function ElFormador() {
  return (
    <section className="relative w-full overflow-hidden bg-white border-t border-[#2872e0]/10">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 py-16 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-3">
            <div className="aspect-[4/5] overflow-hidden border border-neutral-200 bg-white shadow-sm max-w-[240px]">
              <img
                src="/formador.jpg"
                alt="Facundo Pechervsky"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-9 space-y-4">
            <div>
              <span className="text-[12px] font-semibold tracking-[0.25em] uppercase text-[#2872e0]">
                El Formador
              </span>
              <h4 className="text-2xl font-black text-black mt-1">Facundo Pechervsky</h4>
              <p className="text-[13px] tracking-[0.08em] uppercase text-[#2872e0] font-bold mt-1">
                Fotógrafo profesional &middot; Consultor en IA Generativa &middot; Formador
              </p>
            </div>
            <p className="text-[15px] text-[#222222] leading-[1.8] font-light max-w-4xl">
              Fotógrafo argentino radicado en Madrid desde 2000. Más de 35 años de trayectoria en fotoperiodismo, fotografía corporativa y publicidad en España, Italia y Reino Unido. Autor de <em>Warnes Autorretratos</em> y <em>Vértigo Madrid</em>. Creador de la metodología <em>Desafía tu mirada</em>. Cofundador de EIA Labs, especializada en traducir conocimiento fotográfico al lenguaje de la IA. IA Art Designer en <em>Futuro en Construcción</em>. Colaborador en <em>La Nación</em>. Campañas recientes: Coca-Cola UK &middot; Repsol &middot; Verisure.
            </p>
            <div className="border-l-2 border-[#2872e0] pl-5 mt-4">
              <p className="text-[14px] text-[#222222] leading-[1.7] font-light max-w-3xl">
                &ldquo;Desde el cuarto oscuro hasta la IA generativa. Mi trayectoria refleja la constante adaptación del sector audiovisual, transformando cada avance tecnológico en una nueva oportunidad creativa.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────────── Galería ───────────────────────────── */

function Galeria() {
  // Máximo 12 imágenes horizontales — galeria-participante + clases-presenciales
  const creaciones = [
    { src: '/galeria-participante-01.jpeg', alt: 'Creación generada por participante' },
    { src: '/galeria-participante-02.jpeg', alt: 'Creación generada por participante' },
    { src: '/galeria-participante-03.jpeg', alt: 'Creación generada por participante' },
    { src: '/galeria-participante-04.jpg', alt: 'Creación generada por participante' },
    { src: '/galeria-participante-05.jpeg', alt: 'Creación generada por participante' },
    { src: '/galeria-participante-06.jpeg', alt: 'Creación generada por participante' },
    { src: '/galeria-participante-07.png', alt: 'Creación generada por participante' },
    { src: '/galeria-participante-08.png', alt: 'Creación generada por participante' },
    { src: '/galeria-participante-09.jpg', alt: 'Creación generada por participante' },
    { src: '/clases-presenciales-01.jpg', alt: 'Clase presencial — participantes en acción' },
    { src: '/clases-presenciales-05.jpg', alt: 'Workshop presencial en grupo' },
    { src: '/clases-presenciales-10.jpg', alt: 'Dinámica grupal en el taller' },
  ]

  return (
    <section className="relative w-full overflow-hidden bg-white border-t border-[#2872e0]/10">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 py-16 md:py-28">

        {/* ── Encabezado ── */}
        <div className="mb-10">
          <span className="text-[12px] font-semibold tracking-[0.25em] uppercase text-[#2872e0]">
            Galería
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111111] mt-2">
            Creaciones generadas por los participantes
          </h2>
          <p className="text-[15px] text-[#333333] leading-[1.8] mt-2 max-w-2xl">
            Momentos reales de nuestras clases presenciales y talleres: equipos y creadores aprendiendo a producir con IA generativa.
          </p>
        </div>

        {/* ── Grilla — 3 columnas, gap 4px, proporción 3:2, sin bordes redondeados ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-[4px]">
          {creaciones.map((img, i) => (
            <div key={i} className="aspect-[3/2] overflow-hidden bg-white">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

/* ───────────────────────────── Contact ───────────────────────────── */

function ContactSection() {
  return (
    <section id="contacto" className="relative w-full overflow-hidden bg-white border-t border-[#2872e0]/10 scroll-mt-32">
      {/* ── Franja separadora azul (Pantone 285 C · #2A66BC) ── */}
      <div aria-hidden="true" className="w-full h-2 bg-[#2A66BC]" />
      {/* ── SEPARATOR TITULO: CONTACTO ── */}
      <div className="w-full bg-white border-b border-[#2872e0]/10 py-16">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="text-[14px] font-black tracking-[0.25em] text-[#2872e0]">03</span>
            <div className="w-[1px] h-8 bg-gray-300"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[0.08em] sm:tracking-[0.15em] text-black uppercase">CONTACTO</h2>
          </div>
          <span className="text-[12px] tracking-[0.3em] text-[#333333] font-bold uppercase">Consultas, Presupuestos &amp; Gira 2026</span>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 py-16 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <h2 className="text-[clamp(1.75rem,3.5vw,3.5rem)] leading-[1.1] tracking-[-0.02em]">
              <span className="font-light text-[#333333]">Hablemos de</span><br />
              <span className="font-extrabold text-black">tu proyecto</span>
            </h2>
            <p className="mt-8 text-[16px] text-[#333333] leading-[1.9] font-light">
              Escríbenos directamente por WhatsApp. Respondemos de forma rápida y sin compromiso para coordinar tu propuesta, taller o consultoría.
            </p>
          </div>

          <div className="md:col-span-6 md:col-start-7 space-y-10">
            <div>
              <p className="text-[13px] tracking-[0.2em] uppercase text-[#333333] font-semibold mb-2">Ubicación</p>
              <p className="text-[16px] font-medium text-black">Madrid — Buenos Aires</p>
            </div>
            <div>
              <p className="text-[13px] tracking-[0.2em] uppercase text-[#333333] font-semibold mb-3">WhatsApp Directo</p>
              <div className="bg-white border border-[#25D366]/25 p-6 shadow-sm space-y-4 max-w-md">
                <p className="text-[12px] tracking-[0.1em] text-[#333333] font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block animate-pulse"></span>
                  Respuesta rápida por chat
                </p>
                <a 
                  href="https://wa.me/34645014166" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#25D366] text-white text-[14px] font-bold tracking-[0.05em] hover:bg-[#20ba5a] transition-all duration-300 shadow-sm uppercase w-full text-center"
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
    <footer className="bg-white text-black py-20 md:py-28 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <p className="text-[clamp(1.5rem,2.5vw,2.5rem)] tracking-tight leading-tight">
              <span className="font-light text-[#333333]">HAZ LO QUE</span><br />
              <span className="font-extrabold text-black">QUIERAS</span>
            </p>
            <p className="text-[15px] text-[#333333] mt-4 leading-[1.8] max-w-sm font-light">
              Estudio de producción audiovisual con IA generativa.<br />Madrid — Buenos Aires.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <p className="text-[12px] font-semibold tracking-[0.3em] uppercase text-[#333333] mb-6">Nav</p>
            <div className="space-y-3">
              {['Inicio', 'Formación', 'Servicios', 'Contacto'].map((item) => {
                const hash = item.toLowerCase().replace('ó', 'o').replace(' ia', '')
                return (
                  <Link
                    key={item}
                    to="/"
                    hash={hash}
                    className="block text-[14px] text-[#333333] hover:text-black transition-colors duration-300 [&.active]:text-[#2872e0]"
                  >
                    {item}
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-[12px] font-semibold tracking-[0.3em] uppercase text-[#333333] mb-6">Formación</p>
            <div className="space-y-3">
              {['Del Negativo al Prompt', 'CREA con IA', 'Talleres IA', 'Gira 2026'].map((item) => (
                <p key={item} className="text-[14px] text-[#333333] font-light">{item}</p>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-[12px] font-semibold tracking-[0.3em] uppercase text-[#333333] mb-6">Servicios</p>
            <div className="space-y-3">
              {['Proyectos a Medida', 'Noticias Internas TV', 'Banco de Imágenes', 'Redes Sociales', 'Consultoría'].map((item) => (
                <p key={item} className="text-[14px] text-[#333333] font-light">{item}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-[#333333] tracking-wide font-light">
            &copy; {new Date().getFullYear()} Haz Lo Que Quieras
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <a href="https://wa.me/34645014166" target="_blank" rel="noopener noreferrer" className="text-[12px] text-[#333333] tracking-wide hover:text-[#2872e0] transition-colors duration-300 font-light">
              WhatsApp: +34 645 014 166
            </a>
            <span className="hidden sm:inline text-[#333333]">|</span>
            <p className="text-[12px] text-[#333333] tracking-wide font-light">
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
  const heroVideoRef = useRef<HTMLVideoElement>(null)
  const [heroMuted, setHeroMuted] = useState(true)

  const toggleHeroAudio = () => {
    const video = heroVideoRef.current
    if (!video) return

    video.muted = !video.muted
    if (!video.muted) {
      video.volume = 1
      void video.play()
    }
    setHeroMuted(video.muted)
  }

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* ── Video full-bleed — de lado a lado, sin recortes (object-contain) ── */}
      <video
        ref={heroVideoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero-mama-bebe.jpg"
        className="block w-full h-auto object-contain bg-black"
      >
        <source src="/hero-clip.mov" type="video/mp4" />
        <source src="/hero-clip.mov" type="video/quicktime" />
      </video>

      <button
        type="button"
        onClick={toggleHeroAudio}
        className="absolute right-5 top-24 z-10 inline-flex h-12 w-12 items-center justify-center border border-white/70 bg-black/55 text-white backdrop-blur-sm transition-colors duration-300 hover:bg-black/75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black sm:right-8 md:right-12 md:top-28"
        aria-label={heroMuted ? 'Activar audio del video de portada' : 'Silenciar video de portada'}
        aria-pressed={!heroMuted}
        title={heroMuted ? 'Activar audio' : 'Silenciar audio'}
      >
        {heroMuted ? <VolumeX className="h-5 w-5" aria-hidden="true" /> : <Volume2 className="h-5 w-5" aria-hidden="true" />}
      </button>

      <div className="relative w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 py-16 sm:py-24 md:py-36">
        {/* ── Hero solo texto — fondo blanco, sin imágenes ── */}
        <div className="max-w-4xl text-left">
          {/* Título de marca dominante — una palabra por línea, "QUIERAS" en naranja */}
          <h1 className="font-sans font-extrabold tracking-[-0.03em] leading-[0.9] text-[clamp(3rem,15vw,7rem)] text-[#111111]">
            <span className="block">HAZ</span>
            <span className="block">LO</span>
            <span className="block">QUE</span>
            <span className="block text-[#2872e0]">QUIERAS</span>
          </h1>

          {/* Frase secundaria — legible, gris oscuro */}
          <p className="mt-6 sm:mt-8 font-sans font-medium text-[#333333] leading-[1.25] tracking-[-0.01em] text-[clamp(1.15rem,2.6vw,1.9rem)] max-w-xl">
            Imágenes que aún no existen.
            <span className="block">Hasta que las describes.</span>
          </p>

          {/* Acciones — Formación · Próximo Workshop · Servicios */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-start gap-3 sm:gap-4">
            {/* Botón 1 — Formación */}
            <Link
              to="/"
              hash="formacion"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-[#2872e0] text-white text-[12px] font-bold tracking-[0.12em] uppercase hover:bg-[#c86520] transition-colors duration-300 cursor-pointer"
            >
              Formación
            </Link>

            {/* Botón 2 — Próximo Workshop */}
            <Link
              to="/"
              hash="workshop"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 border border-neutral-300 text-[#111111] text-[12px] font-bold tracking-[0.12em] uppercase hover:border-[#2872e0] hover:text-[#2872e0] transition-colors duration-300 cursor-pointer"
            >
              Próximo Workshop
            </Link>

            {/* Botón 3 — Servicios */}
            <Link
              to="/"
              hash="servicios"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 border border-neutral-300 text-[#111111] text-[12px] font-bold tracking-[0.12em] uppercase hover:border-[#2872e0] hover:text-[#2872e0] transition-colors duration-300 cursor-pointer"
            >
              Servicios
            </Link>
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
      {/* ── Frase introductoria antes de Formación ── */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
          <p className="text-center text-[clamp(1rem,3vw,2.25rem)] font-extrabold uppercase tracking-[0.06em] sm:tracking-[0.08em] leading-tight text-[#111111]">
            Mirar diferente<span className="text-[#2872e0]">,</span> crear sin límites
          </p>
        </div>
      </section>
      <Formacion />
      <ElFormador />
      <Galeria />
      <SeparadorMirar />
      <Services />
      <GaleriaTrabajos />
      <ContactSection />
      <Footer />
    </div>
  )
}
