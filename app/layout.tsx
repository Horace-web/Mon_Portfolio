import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import './globals.css'
import RevealInit from "@/app/components/RevealInit";
import BackgroundAnimation from "@/app/components/BackgroundAnimation";
import Navbar from "@/app/components/Navbar"; // <-- Importation
import Footer from "@/app/components/Footer"; // <-- Importation

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
      <body className="antialiased">
        <RevealInit />
        <BackgroundAnimation />
        
        {/* Navbar fixe au dessus de tout */}
        <Navbar />

        {/* Wrapper pour le contenu principal */}
        <div style={{ position: "relative", zIndex: 1 }}>
          {children}
          
          {/* Footer en bas de chaque page */}
          <Footer />
        </div>
      </body>
    </html>
  )
}