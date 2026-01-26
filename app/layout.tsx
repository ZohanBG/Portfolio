import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Evtim Ivanov - Full Stack Developer',
  description: 'Portfolio of Evtim Ivanov - Full Stack Developer specializing in TypeScript, React, Next.js, and Blockchain development',
  keywords: ['Evtim Ivanov', 'Full Stack Developer', 'Web3 Developer', 'TypeScript', 'React', 'Next.js', 'NestJS'],
}

const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  })();
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
