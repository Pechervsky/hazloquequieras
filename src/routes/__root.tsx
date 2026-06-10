import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'HAZ LO QUE QUIERAS — Estudio de Producción Audiovisual e IA Generativa',
      },
      {
        name: 'description',
        content: 'Estudio de producción audiovisual e IA generativa en Madrid y Buenos Aires. Proyectos a medida, bancos de imágenes exclusivos, campañas para redes y formación profesional.',
      },
    ],
    links: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap',
      },
    ],
    scripts: [],
  }),
  component: RootLayout,
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
        <script src="https://unpkg.com/@elevenlabs/convai-widget-embed" type="text/javascript"></script>
      </body>
    </html>
  )
}

function RootLayout() {
  return <Outlet />
}
