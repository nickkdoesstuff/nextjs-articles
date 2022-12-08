import Link from 'next/link'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head></head>

      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/articles">View Articles</Link>
        </nav>
        <div className='container'>
          {children}
        </div>
      </body>
    </html>
  )
}
