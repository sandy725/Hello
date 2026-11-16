import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://sandeepstudio.in'),
  title: 'Sandeep Kumar — Web Developer & UI/UX Designer',
  description: 'Sandeep Kumar designs and develops thoughtful Shopify, WordPress, and custom websites for ambitious brands.',
  keywords: ['Sandeep Kumar', 'web developer', 'UI/UX designer', 'Shopify developer', 'WordPress developer', 'ecommerce website designer'],
  authors: [{ name: 'Sandeep Kumar', url: 'https://linkedin.com/in/sandeep-kumar-5026b527' }],
  alternates: { canonical: 'https://sandeepstudio.in' },
  openGraph: {
    title: 'Sandeep Kumar — Web Developer & UI/UX Designer',
    description: 'Thoughtful Shopify, WordPress, and custom websites for ambitious brands.',
    url: 'https://sandeepstudio.in',
    siteName: 'Sandeep Kumar',
    type: 'website',
    images: [{ url: '/images/sandeep-kumar.png', width: 1024, height: 1024, alt: 'Sandeep Kumar' }],
  },
  twitter: { card: 'summary_large_image', title: 'Sandeep Kumar — Web Developer & UI/UX Designer', description: 'Thoughtful Shopify, WordPress, and custom websites for ambitious brands.', images: ['/images/sandeep-kumar.png'] },
  generator: 'v0.app',
  robots: { index: true, follow: true },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Sandeep Kumar',
          jobTitle: 'Web Developer and UI/UX Designer',
          url: 'https://sandeepstudio.in/',
          sameAs: ['https://linkedin.com/in/sandeep-kumar-5026b527'],
          knowsAbout: ['Shopify', 'WordPress', 'UI/UX design', 'ecommerce development', 'front-end development'],
        }) }} />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
