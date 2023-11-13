import '../styles/index.scss'


export const metadata = {
  title: 'The Self-Regulated Eater',
  description: 'The Self-Regulated Eater offers a sustainable, psychology-driven strategy that frees you from emotional eating, food restrictions, and feelings of deprivation.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;1,300;1,400;1,600&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
