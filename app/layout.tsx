import type { Metadata } from 'next'
import { Poppins, Geist_Mono, Lora } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import { cn } from '@/lib/utils'

const loraHeading = Lora({ subsets: ['latin'], variable: '--font-heading', display: 'swap' })

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  display: 'swap',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Bakery',
  description: 'Bakery',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      suppressHydrationWarning
      lang='en'
      className={cn(
        'h-full',
        'antialiased',
        geistMono.variable,
        'font-sans',
        poppins.variable,
        loraHeading.variable,
        'scroll-smooth',
      )}>
      <body className='flex min-h-375 flex-col'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
