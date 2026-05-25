import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata = {
  title: 'Loft',
  description: 'Where your team thinks.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} font-sans bg-base text-ink-primary`}>
        {children}
      </body>
    </html>
  )
}