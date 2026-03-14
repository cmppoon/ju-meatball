import type { Metadata } from 'next'
import { Sarabun, Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FloatingContact } from '@/components/floating-contact'

const sarabun = Sarabun({ 
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sarabun"
})

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist"
})

export const metadata: Metadata = {
  title: 'ลูกชิ้นรสโอชา - Premium Thai Meatballs Since 1978',
  description: 'Authentic Thai meatballs made with premium ingredients and traditional recipes since 1978. Order now for the best meatballs in Thailand.',
  keywords: 'meatballs, Thai food, ลูกชิ้น, ลูกชิ้นรสโอชา, authentic Thai meatballs',
  icons: {
    icon: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th">
      <body className={`${sarabun.variable} ${geist.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
        <Analytics />
      </body>
    </html>
  )
}
