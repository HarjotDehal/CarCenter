import { Footer, Navbar } from '@/components'
import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Car Center",
  description: 'Best cars in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (




    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />

        {/* this will create a nav at our top and a footer at bottom and just put everything else in middle.  */}
        </body>
    </html>
  )
}
