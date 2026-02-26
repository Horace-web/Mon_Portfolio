import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import './globals.css'
import RevealInit from "@/app/components/RevealInit";
import BackgroundAnimation from "@/app/components/BackgroundAnimation";

// Configuration des polices avec next/font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Portfolio | Développeur Full Stack',
  description: 'Portfolio de développeur full stack - Projets innovants',
  authors: [{ name: 'ODOUNLAMI Horace' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${firaCode.variable}`}>
      <body>
        <RevealInit />
        <BackgroundAnimation />
        <div style={{ position: "relative", zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  )
}