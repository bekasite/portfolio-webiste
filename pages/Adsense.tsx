// components/Layout.tsx
import { ReactNode } from 'react'
import Head from 'next/head'
import Script from 'next/script'

interface LayoutProps {
  children: ReactNode
}

export default function Adsense({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <meta name="google-adsense-account" content="ca-pub-XXXXXXXXXXXXXXXX" />
      </Head>
      
      <Script
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
        crossOrigin="anonymous"
      />
      
      <main>{children}</main>
    </>
  )
}