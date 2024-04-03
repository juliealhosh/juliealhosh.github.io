import 'css/tailwind.css'

// import { SearchProvider, SearchConfig } from 'pliny/search'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from './theme-providers'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  // alternates: {
  //   canonical: './',
  //   types: {
  //     'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
  //   },
  // },
  // robots: {
  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     'max-video-preview': -1,
  //     'max-image-preview': 'large',
  //     'max-snippet': -1,
  //   },
  // },
  // twitter: {
  //   title: siteMetadata.title,
  //   card: 'summary_large_image',
  //   images: [siteMetadata.socialBanner],
  // },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={siteMetadata.language} className={`scroll-smooth`} suppressHydrationWarning>
      <ThemeProviders>
        <link rel="icon" href="/static/favicons/favicon.ico" />
        <body className="bg-gray-50 dark:bg-gray-950 text-text antialiased">
          <SectionContainer>
            <div className="flex h-screen flex-col justify-between font-sans">
              <Header />
              <main className="mb-auto">{children}</main>
              <Footer />
            </div>
          </SectionContainer>
        </body>
      </ThemeProviders>
    </html>
  )
}
