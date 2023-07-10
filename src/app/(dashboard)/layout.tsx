import Sidebar from '@/components/general/Sidebar'
import '@/styles/globals.css'
import { Inconsolata } from 'next/font/google'

const inconsolata = Inconsolata({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inconsolata.className} bg-gray-100 flex`}>
        <Sidebar />
        {children}
        </body>
    </html>
  )
}