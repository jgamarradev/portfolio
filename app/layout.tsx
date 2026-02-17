import type { Metadata } from 'next'
import { Libre_Franklin } from 'next/font/google'
import './globals.css'
import { I18nProvider } from '@/lib/i18n/context'
import ExternalStyles from '@/components/ExternalStyles'
import { getAssetPath } from '@/lib/utils/images'

const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  variable: '--font-libre-franklin',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://jgamarradev.github.io/portfolio'),
  title: 'Juan Gamarra - Desarrollador Web Fullstack - Portafolio',
  description: '6 años creando experiencias web memorables. Confía en mi trayectoria y pasión para convertir tu sitio web en una herramienta poderosa para tu negocio.',
  icons: {
    icon: getAssetPath('/img/header_logo.png'),
    shortcut: getAssetPath('/img/header_logo.png'),
    apple: getAssetPath('/img/header_logo.png'),
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Juan Gamarra - Desarrollador Web - Fullstack Portafolio',
    description: '6 años creando experiencias web memorables. Confía en mi trayectoria y pasión para convertir tu sitio web en una herramienta poderosa para tu negocio.',
    url: 'https://jgamarradev.github.io/portfolio/',
    siteName: 'Juan Gamarra - Desarrollador Web Fullstack - Portafolio',
    images: [
      {
        url: getAssetPath('/img/opengraph-web.png'),
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: 'Juan Gamarra - Portafolio',
      },
    ],
    locale: 'es_VE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juan Gamarra - Desarrollador Web Fullstack - Portafolio',
    description: '6 años creando experiencias web memorables. Confía en mi trayectoria y pasión para convertir tu sitio web en una herramienta poderosa para tu negocio.',
    images: [getAssetPath('/img/opengraph-web.png')],
  },
  verification: {
    google: 'zTyColk3VTYRuY_JGlSriM6TO5qWq21kMa63m0lWgJ8',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={libreFranklin.variable} suppressHydrationWarning>
        <ExternalStyles />
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}

