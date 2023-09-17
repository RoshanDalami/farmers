import './globals.css'
import { Inter } from 'next/font/google'
import MiniDrawer from '@/Components/Drawer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Agro Commerce',
  description: 'Buy and Sell your agriculture products  with us.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MiniDrawer/>
        {children}
        </body>
    </html>
  )
}
