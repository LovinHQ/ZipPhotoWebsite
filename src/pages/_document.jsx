import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'
export default function Document() {
  return (
    <Html className="h-full bg-gray-50 antialiased" lang="en">
      <Head>
        <script async src="https://cdn.splitbee.io/sb.js"></script>
        <Script       
          id="googletag"  
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-FB3H3PD7Z7">
        </Script>
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){
                window.dataLayer.push(arguments)
              }
              gtag('js', new Date());

              gtag('config', 'G-FB3H3PD7Z7');
            `,
        }}
        />
      </Head>
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
