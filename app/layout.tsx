import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Construction Cost Estimating & Takeoff Services | The Leading Takeoff',
  description: 'Leading Takeoff provides accurate construction cost estimating, quantity takeoffs and pre-construction services for contractors, developers and architects across the USA.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    shortcut: '/favicon-32x32.png',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Construction Cost Estimating & Takeoff Services | The Leading Takeoff',
    description: 'Leading Takeoff provides accurate construction cost estimating, quantity takeoffs and pre-construction services.',
    url: '/',
    siteName: 'The Leading Takeoff',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The Leading Takeoff Logo & Services',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Construction Cost Estimating & Takeoff Services | The Leading Takeoff',
    description: 'Leading Takeoff provides accurate construction cost estimating, quantity takeoffs and pre-construction services for contractors, developers and architects across the USA.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
