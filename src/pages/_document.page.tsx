import { Html, Head, Main, NextScript } from 'next/document'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-gray-100 font-grotesk">
        <Header />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}
