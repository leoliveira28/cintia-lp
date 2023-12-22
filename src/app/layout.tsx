import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const inter = Poppins({ subsets: ['latin'], weight: ["300", "500", "600", "700"] })

export const metadata: Metadata = {
  title: 'Advocacia para adoção',
  description: 'Cintia Souza Advogada especialista em adoção',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
