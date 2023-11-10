import { Montserrat } from 'next/font/google'
import '../styles/index.scss'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'The Self-Regulated Eater',
  description: 'The Self-Regulated Eater offers a sustainable, psychology-driven strategy that frees you from emotional eating, food restrictions, and feelings of deprivation.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
