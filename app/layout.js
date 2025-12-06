import Script from 'next/script'
import './globals.css'

export const metadata = {
  title: 'Junior Saldanha | Software Engineer & Tech Entrepreneur',
  description: 'Junior Saldanha - Software Engineer & Tech Entrepreneur. Founder of Inova Labs. Specializing in cloud-native applications, IoT platforms, and innovative technology solutions.',
  keywords: 'Software Engineer, Tech Entrepreneur, Inova Labs, Cloud Architecture, IoT, Robotics, DevOps, Python, JavaScript, React',
  authors: [{ name: 'Junior Saldanha' }],
  metadataBase: new URL('https://umsaldanha.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/images/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/images/favicon/apple-touch-icon.png', sizes: '180x180' },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css" />
        <link rel="stylesheet" href="/css/bulma-timeline.min.css" />

        <Script src="https://use.fontawesome.com/releases/v6.1.2/js/all.js" strategy="lazyOnload" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-134602535-1" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-134602535-1');
          `}
        </Script>
        <Script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
