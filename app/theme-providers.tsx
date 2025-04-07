'use client'

import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  // Ensures this runs only on the client
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <>{children}</> // Render children initially until mounted

  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      {children}
    </ThemeProvider>
  )
}
