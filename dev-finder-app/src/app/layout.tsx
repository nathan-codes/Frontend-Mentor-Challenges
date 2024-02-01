import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Space_Mono } from 'next/font/google'
import './globals.css'

const space_Mono = Space_Mono({ subsets:["latin"],weight: ["400", "700"] })

export const metadata: Metadata = {
  title: 'Dev-Finder-App',
  description: 'Frontend Mentor Challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={space_Mono.className}>{children}</body>
    </html>
  )
}
