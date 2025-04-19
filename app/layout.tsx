import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body data-new-gr-c-s-check-loaded="14.1232.0" 
      data-gr-ext-installed=""
      >{children}</body>
    </html>
  )
}
