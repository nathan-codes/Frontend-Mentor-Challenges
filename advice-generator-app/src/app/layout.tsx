import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Manrope } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const manrope = Manrope({subsets: ["latin"], weight: ["800"]})

export const metadata: Metadata = {
  title: 'Advice Generator App',
  description: 'Frontend Mentor Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
