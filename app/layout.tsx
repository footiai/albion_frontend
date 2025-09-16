import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Albion - DevOps & Cloud Solutions',
  description: 'Empowering businesses with cutting-edge DevOps solutions and cloud infrastructure. Your trusted partner for digital transformation.',
  keywords: 'DevOps, Cloud Infrastructure, Digital Transformation, Automation, Security, Performance Optimization',
  authors: [{ name: 'Albion' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={plusJakartaSans.className}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
