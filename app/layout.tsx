import type { Metadata } from 'next'
import { Newsreader, Manrope } from 'next/font/google'
import './globals.css'
import ProjectCursor from '@/components/ProjectCursor'

const newsreader = Newsreader({ 
  subsets: ['latin'],
  variable: '--font-newsreader',
  style: ['normal', 'italic']
})

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: 'Deborah Ojo | The Digital Curator',
  description: 'High-End Editorial Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${newsreader.variable} ${manrope.variable} font-sans bg-background text-onSurface antialiased`}>
        <ProjectCursor />
        {children}
      </body>
    </html>
  )
}