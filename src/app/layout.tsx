import Header from './header'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Next.js App',
    template: '%s | Next.js App',
    absolute: 'this overrides the default title and template for this layout and all nested layouts and pages',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        <Header />
        {children}</body>
    </html>
  )
}
 