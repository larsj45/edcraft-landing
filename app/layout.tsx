import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EdCraft | Where EdTech Meets Excellence',
  description: 'Elite EdTech development powered by world-class Brazilian talent. We don\'t just build EdTech - we craft digital experiences that transform education.',
  keywords: 'EdTech development, educational technology, Brazilian developers, AI detection, exam proctoring, LMS hosting',
  openGraph: {
    title: 'EdCraft | Where EdTech Meets Excellence',
    description: 'Elite EdTech development powered by world-class Brazilian talent.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}