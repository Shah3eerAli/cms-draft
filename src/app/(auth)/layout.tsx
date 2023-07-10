import '@/styles/globals.css'
import { Inconsolata } from 'next/font/google'

const inconsolata = Inconsolata({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inconsolata.className} bg-gray-100`}>{children}</body>
    </html>
  )
}
