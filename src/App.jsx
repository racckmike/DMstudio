import { useState, useEffect, useRef } from 'react'

/* ============================================================
   DM STUDIOS — Landing page
   Productora: Danni Moreno · Producción musical & Audiovisual
   Contenido basado en la presentación oficial (PDF).
   Paleta EXACTA del logo: terracota #9E4A33 / terracota profundo #73331F /
   terracota claro #B05A41 / dorado #C49A5A / champán #E6C88E · #F3E6CB
   ============================================================ */

/* ----------------------------------------------------------------
   Iconos SVG de línea (sin emojis)
---------------------------------------------------------------- */
function MicIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="9" y="2" width="6" height="11" rx="3" />
      <path d="M5 10a7 7 0 0 0 14 0" strokeLinecap="round" />
      <line x1="12" y1="17" x2="12" y2="21" strokeLinecap="round" />
      <line x1="8" y1="21" x2="16" y2="21" strokeLinecap="round" />
    </svg>
  )
}

function PhoneIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MailIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function InstagramIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" strokeLinecap="round" strokeWidth="2.2" />
    </svg>
  )
}

function WhatsAppIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zM6.597 20.13c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.207zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  )
}

/* Enlace de WhatsApp con número y mensaje pre-cargado (México +52) */
const WHATSAPP_URL =
  'https://wa.me/525545746263?text=' +
  encodeURIComponent('¡Hola DM Studios! Me gustaría más información sobre sus servicios.')

/* ----------------------------------------------------------------
   Utilidad: Reveal — fade-in al entrar al viewport (Intersection Observer)
---------------------------------------------------------------- */
function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

/* ----------------------------------------------------------------
   Logo: imagen oficial (chip redondo enfocando el isotipo) + wordmark
---------------------------------------------------------------- */
function Logo({ light = false }) {
  return (
    <div className="flex items-center gap-2.5">
      <img
        src="/dm-studios-logo.jpg"
        alt="DM Studios — Audio & Video Production"
        className="w-11 h-11 rounded-full object-cover ring-1 ring-gold/40 shadow-sm"
        style={{ objectPosition: 'center 32%' }}
      />
      <span className="font-serif text-xl font-bold tracking-wide text-champagne">
        DM <span className={light ? 'text-goldlight' : 'text-gold'}>Studios</span>
      </span>
    </div>
  )
}

/* ----------------------------------------------------------------
   Onda decorativa SVG (formas orgánicas del branding)
---------------------------------------------------------------- */
function WaveDivider({ flip = false, color = '#73331F', className = '' }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className={`w-full h-[60px] md:h-[90px] ${flip ? 'rotate-180' : ''}`}>
        <path
          fill={color}
          d="M0,64 C240,120 480,0 720,32 C960,64 1200,120 1440,72 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  )
}

/* ================================================================
   NAVEGACIÓN
================================================================ */
const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#proceso', label: '¿Cómo trabajamos?' },
  { href: '#contacto', label: 'Contacto' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-terra/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        <a href="#inicio" aria-label="DM Studios — inicio">
          <Logo />
        </a>

        {/* Links desktop */}
        <ul className="hidden lg:flex items-center gap-7 font-sans text-sm font-medium text-champagne">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-goldlight transition-colors duration-300">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contacto"
              className="px-4 py-2 rounded-full bg-gold text-terradeep font-semibold hover:bg-goldlight transition-colors duration-300"
            >
              Contáctanos
            </a>
          </li>
        </ul>

        {/* Botón hamburguesa mobile */}
        <button
          className="lg:hidden text-champagne"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Menú mobile desplegable */}
      {menuOpen && (
        <ul className="lg:hidden mt-2 mx-4 p-4 rounded-2xl bg-terradeep shadow-lg flex flex-col gap-4 font-sans text-champagne">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block hover:text-goldlight transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

/* ================================================================
   HERO
================================================================ */
function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32 px-5">
      {/* Fondo gradiente + formas orgánicas decorativas */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-terra via-terra to-terradeep" aria-hidden="true" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-terrasoft/40 blur-3xl -z-10" aria-hidden="true" />
      <div className="absolute top-40 -left-24 w-80 h-80 rounded-full bg-gold/20 blur-3xl -z-10" aria-hidden="true" />

      <div className="max-w-4xl mx-auto text-center">
        <Reveal delay={0}>
          <img
            src="/dm-studios-logo.jpg"
            alt="Logo de DM Studios — Audio & Video Production"
            className="w-28 h-28 md:w-32 md:h-32 mx-auto rounded-3xl object-cover shadow-xl ring-1 ring-gold/30"
          />
        </Reveal>

        <Reveal delay={120}>
          <span className="inline-flex items-center gap-2 mt-6 px-4 py-1.5 rounded-full bg-terradeep/60 border border-gold/40 text-xs font-sans font-medium text-champagne uppercase tracking-[0.15em]">
            <MicIcon className="w-4 h-4 text-goldlight" /> Productora · Danni Moreno
          </span>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="font-serif text-6xl md:text-8xl font-extrabold text-champagne mt-6 leading-none">
            DM <span className="text-gold">Studios</span>
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="font-serif italic text-2xl md:text-3xl text-goldlight mt-4">
            Producción musical &amp; Audiovisual
          </p>
        </Reveal>

        <Reveal delay={480}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="#proyectos"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gold text-terradeep font-sans font-semibold shadow-lg hover:bg-goldlight transition-all duration-300 hover:-translate-y-0.5"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border-2 border-gold text-champagne font-sans font-medium hover:bg-gold hover:text-terradeep transition-all duration-300"
            >
              Contáctanos
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ================================================================
   SOBRE DM  (texto exacto del PDF)
================================================================ */
function SobreDM() {
  return (
    <section id="sobre" className="relative py-20 md:py-28 px-5 bg-terradeep">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Columna texto */}
        <Reveal>
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-gold font-semibold">Sobre DM</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-champagne mt-3 mb-6">Sobre DM</h2>
          <p className="font-sans text-champagne/80 text-lg leading-relaxed">
            Somos un estudio creativo especializado en producción musical y audiovisual.
          </p>
          <p className="font-sans text-champagne/80 text-lg leading-relaxed mt-4">
            Desarrollamos sonido e imagen para artistas, marcas y proyectos, enfocándonos en la
            creación de identidades sonoras y visuales.
          </p>
        </Reveal>

        {/* Columna con el logo oficial */}
        <Reveal delay={150}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-terrasoft/50 to-gold/30 rounded-[2.5rem] blur-2xl" aria-hidden="true" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl ring-1 ring-gold/20">
              <img
                src="/dm-studios-logo.jpg"
                alt="Logo de DM Studios — Audio & Video Production"
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ================================================================
   ¿PARA QUIÉN ES?  (texto exacto del PDF)
================================================================ */
function ParaQuien() {
  const items = [
    'Artistas independientes o no independientes',
    'Marcas y negocios',
    'Agencias / proyectos creativos',
    'Empresas que quieren sonar y verse profesionales',
  ]
  return (
    <section id="para-quien" className="py-20 md:py-28 px-5 bg-terra">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-gold font-semibold">Audiencia</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-champagne mt-3">¿Para quién es?</h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <Reveal key={item} delay={i * 100}>
              <div className="h-full rounded-2xl bg-terradeep p-7 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gold/20">
                <span className="font-serif text-3xl font-bold text-gold">{String(i + 1).padStart(2, '0')}</span>
                <p className="font-sans text-champagne font-medium leading-snug mt-4">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   SERVICIOS (tabs interactivos) — listas exactas del PDF
================================================================ */
const SERVICIOS = [
  {
    id: 'produccion-musical',
    label: 'Producción musical',
    items: [
      'Producción musical completa',
      'Beatmaking',
      'Arreglos',
      'Grabación (Voz / Instrumentos)',
      'Edición y mezcla',
      'Dirección artística sonora',
    ],
  },
  {
    id: 'composicion',
    label: 'Composición / Songwriting',
    items: [
      'Composición musical',
      'Escritura de letra',
      'Co-writing',
      'Adaptación de canciones para marcas',
      'Música por concepto o brief',
    ],
  },
  {
    id: 'jingles',
    label: 'Jingles e Identidad Sonora',
    detailed: [
      { n: '01', t: 'Jingles publicitarios', d: 'Creación de piezas musicales memorables que refuerzan el reconocimiento y la personalidad de la marca.' },
      { n: '02', t: 'Música para spots', d: 'Producción musical original diseñada para acompañar campañas publicitarias y contenido promocional.' },
      { n: '03', t: 'Identidad sonora de marca', d: 'Desarrollo de un lenguaje sonoro coherente que representa los valores, tono y esencia de la marca.' },
      { n: '04', t: 'Adaptación para redes sociales', d: 'Versiones musicales optimizadas para distintos formatos y plataformas digitales.' },
    ],
  },
  {
    id: 'contenido',
    label: 'Contenido y Comerciales',
    items: [
      'Música original para comerciales',
      'Música para reels, TikTok, YouTube',
      'Background music',
      'Sound design básico',
    ],
  },
  {
    id: 'audiovisual',
    label: 'Producción audiovisual',
    items: [
      'Concepto creativo',
      'Dirección visual',
      'Producción de contenido',
      'Videos para redes',
    ],
  },
  {
    id: 'fotografia',
    label: 'Fotografía y contenido',
    items: [
      'Fotografía de marca',
      'Fotografía artística',
      'Contenido para redes sociales',
      'Dirección de estilo y estética',
      'Reels / TikTok',
      'Ideas de contenido',
      'Storytelling para lanzamientos',
      'Contenido musical + visual integrado',
    ],
  },
]

function Servicios() {
  const [active, setActive] = useState(SERVICIOS[0].id)
  const current = SERVICIOS.find((s) => s.id === active)

  return (
    <section id="servicios" className="py-20 md:py-28 px-5 bg-terradeep">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-12">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-gold font-semibold">Lo que hacemos</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-champagne mt-3">Servicios</h2>
        </Reveal>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {SERVICIOS.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`px-5 py-2.5 rounded-full font-sans text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                active === s.id
                  ? 'bg-gold text-terradeep shadow-md font-semibold'
                  : 'bg-terra text-champagne hover:bg-terrasoft'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Detalle del servicio (fade al cambiar de tab vía key) */}
        <div key={active} className="animate-fadeInUp">
          <div className="rounded-[2rem] bg-terra p-8 md:p-12 shadow-sm max-w-5xl mx-auto border border-gold/15">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-champagne mb-8">{current.label}</h3>

            {/* Listado detallado (numerado) o simple */}
            {current.detailed ? (
              <div className="grid sm:grid-cols-2 gap-5">
                {current.detailed.map((d) => (
                  <div key={d.n} className="rounded-2xl bg-terradeep p-6 shadow-sm hover:shadow-md transition-shadow">
                    <span className="font-serif text-3xl font-bold text-gold">{d.n}</span>
                    <h4 className="font-sans font-semibold text-champagne mt-2">{d.t}</h4>
                    <p className="font-sans text-sm text-champagne/75 mt-2 leading-relaxed">{d.d}</p>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {current.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-sans text-champagne">
                    <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   PROYECTOS — video showcase (YouTube embeds responsivos 16:9)
================================================================ */
const PROYECTOS = [
  { id: 'l6SfjUvhADw', titulo: 'Proyecto 1 — DM Studios', desc: 'Producción musical completa' },
  { id: 'H4xUCYwmgsM', titulo: 'Proyecto 2 — DM Studios', desc: 'Producción audiovisual' },
  { id: 'bu7VHFFn4t8', titulo: 'Proyecto 3 — DM Studios', desc: 'Identidad sonora y visual' },
]

function Proyectos() {
  return (
    <section id="proyectos" className="py-20 md:py-28 px-5 bg-terra">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-gold font-semibold">Portafolio</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-champagne mt-3">Proyectos</h2>
          <p className="font-sans text-champagne/75 mt-3 max-w-xl mx-auto">
            Producciones musicales y audiovisuales para artistas y marcas
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROYECTOS.map((p, i) => (
            <Reveal key={p.id} delay={i * 120}>
              <article className="rounded-2xl bg-terradeep overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gold/20">
                {/* Wrapper responsivo 16:9 */}
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${p.id}`}
                    title={p.titulo}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-champagne">{p.titulo}</h3>
                  <p className="font-sans text-sm text-champagne/70 mt-1">{p.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   ¿POR QUÉ ESCOGERNOS?  (texto exacto del PDF)
================================================================ */
function PorQue() {
  const items = [
    'Visión artística + comercial',
    'Todo el proceso en un solo lugar',
    'Sonido y visual con la identidad',
    'Experiencia trabajando con artistas y marcas',
    'Enfoque creativo, no genérico',
  ]
  return (
    <section id="por-que" className="py-20 md:py-28 px-5 bg-terradeep">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-champagne">¿Por qué escogernos?</h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((item, i) => (
            <Reveal key={item} delay={i * 90}>
              <div className="h-full rounded-2xl bg-terra p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gold/15">
                <span className="font-serif text-3xl font-bold text-gold">{String(i + 1).padStart(2, '0')}</span>
                <p className="font-sans text-sm font-medium text-champagne mt-4 leading-snug">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   ¿CÓMO TRABAJAMOS?  (5 pasos — nombres exactos del PDF)
================================================================ */
function Proceso() {
  const pasos = ['Brief creativo', 'Concepto', 'Producción', 'Revisión', 'Entrega final']
  return (
    <section id="proceso" className="py-20 md:py-28 px-5 bg-terra">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-gold font-semibold">Metodología</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-champagne mt-3">¿Cómo trabajamos?</h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {pasos.map((paso, i) => (
            <Reveal key={paso} delay={i * 110}>
              <div className="relative h-full rounded-2xl bg-terradeep p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center border border-gold/20">
                <span className="grid place-items-center w-12 h-12 mx-auto rounded-full bg-gold text-terradeep font-serif font-bold text-lg">
                  {i + 1}
                </span>
                <h3 className="font-sans font-semibold text-champagne mt-4">{paso}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   CONTACTO  (datos exactos del PDF — contacto directo por WhatsApp)
================================================================ */
function Contacto() {
  return (
    <section id="contacto" className="py-20 md:py-28 px-5 bg-terradeep">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Info */}
        <Reveal>
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-gold font-semibold">Contacto</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-champagne mt-3">¿Creamos algo juntos?</h2>
          <p className="font-serif italic text-xl text-goldlight mt-3">Producción musical &amp; Audiovisual</p>

          <ul className="mt-8 space-y-4 font-sans text-champagne">
            <li>
              <a href="tel:+525545746263" className="flex items-center gap-3 hover:text-goldlight transition-colors">
                <span className="grid place-items-center w-11 h-11 rounded-full bg-terrasoft text-champagne">
                  <PhoneIcon />
                </span>
                55-45-74-62-63
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-goldlight transition-colors"
              >
                <span className="grid place-items-center w-11 h-11 rounded-full bg-terrasoft text-champagne">
                  <WhatsAppIcon />
                </span>
                Escríbenos por WhatsApp
              </a>
            </li>
            <li>
              <a href="mailto:dannimorenomx@gmail.com" className="flex items-center gap-3 hover:text-goldlight transition-colors">
                <span className="grid place-items-center w-11 h-11 rounded-full bg-terrasoft text-champagne">
                  <MailIcon />
                </span>
                dannimorenomx@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/dmusic_mx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-goldlight transition-colors"
              >
                <span className="grid place-items-center w-11 h-11 rounded-full bg-terrasoft text-champagne">
                  <InstagramIcon />
                </span>
                @dmusic_mx
              </a>
            </li>
          </ul>
        </Reveal>

        {/* Invitación a escribir por WhatsApp */}
        <Reveal delay={150}>
          <div className="rounded-[2rem] bg-terra p-8 md:p-10 shadow-md border border-gold/15 text-center">
            <span className="grid place-items-center w-16 h-16 mx-auto rounded-full bg-gold text-terradeep">
              <WhatsAppIcon className="w-8 h-8" />
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-champagne mt-6">
              Cuéntanos tu proyecto
            </h3>
            <p className="font-sans text-champagne/80 leading-relaxed mt-3">
              Mándanos un mensaje por WhatsApp con la idea de tu proyecto y con gusto te
              respondemos para empezar a trabajar juntos.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 mt-8 w-full sm:w-auto px-8 py-3.5 rounded-full bg-gold text-terradeep font-sans font-semibold shadow-lg hover:bg-goldlight transition-all duration-300 hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Enviar mensaje por WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ================================================================
   FOOTER
================================================================ */
function Footer() {
  return (
    <footer className="bg-terradeep text-champagne pt-16 pb-8 px-5 border-t border-gold/20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Logo + descripción */}
        <div>
          <Logo light />
          <p className="font-sans text-champagne/60 text-sm mt-4 leading-relaxed max-w-xs">
            Estudio creativo de producción musical y audiovisual. Sonido e imagen para artistas, marcas y proyectos.
          </p>
        </div>

        {/* Links rápidos */}
        <div>
          <h4 className="font-serif text-lg font-semibold text-goldlight mb-4">Navegación</h4>
          <ul className="space-y-2 font-sans text-sm text-champagne/70">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-goldlight transition-colors">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Redes */}
        <div>
          <h4 className="font-serif text-lg font-semibold text-goldlight mb-4">Síguenos</h4>
          <a
            href="https://instagram.com/dmusic_mx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm text-champagne/70 hover:text-goldlight transition-colors"
          >
            <InstagramIcon />
            @dmusic_mx
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-champagne/15 text-center">
        <p className="font-sans text-xs text-champagne/50">
          © 2025 DM Studios · Danni Moreno · Producción musical &amp; Audiovisual
        </p>
      </div>
    </footer>
  )
}

/* ================================================================
   BOTÓN FLOTANTE DE WHATSAPP (fijo, visible en toda la página)
================================================================ */
function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir chat de WhatsApp con DM Studios"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-gold text-terradeep shadow-lg hover:bg-goldlight hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
    >
      <WhatsAppIcon className="w-6 h-6" />
      <span className="hidden sm:inline font-sans text-sm font-semibold">WhatsApp</span>
    </a>
  )
}

/* ================================================================
   APP
================================================================ */
export default function App() {
  return (
    <div className="bg-terra min-h-screen font-sans text-champagne overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <WaveDivider color="#73331F" />
        <SobreDM />
        <ParaQuien />
        <Servicios />
        <Proyectos />
        <PorQue />
        <Proceso />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}
