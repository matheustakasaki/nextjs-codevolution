import Header from './header'
import { Metadata } from 'next'
import { ErrorWrapper } from '@/app/error-wrapprer';

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
        <ErrorWrapper>
          {children}
        </ErrorWrapper>

      </body>
    </html>
  )
}
