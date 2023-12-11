import type { Metadata } from 'next'
import { Overpass } from 'next/font/google'
import './globals.css'

const overpass = Overpass({ subsets: ["latin"], weight: ["400","700"] })

export const metadata: Metadata = {
  title: 'Interactive Rating Component',
  description: 'Frontend Mentor Challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={overpass.className}>{children}</body>
    </html>
  )
}
