import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends NextDocument {
    static async getInitialProps(ctx) {
      const initialProps = await NextDocument.getInitialProps(ctx)
      return { ...initialProps }
    }
  
    render() {
        const host = process.env.BASE_PATH || '';
      return (
        <Html>
            <Head>
				<meta name="robots" content="noindex" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#FFFFFF" />
				<link rel="apple-touch-icon" href={host + "logo.webp"} />
				<meta name="apple-mobile-web-app-status-bar" content="#FFFFFF" />
				<link rel="alternate" href={host} hrefLang="fr" />
				<script defer async type="text/javascript" dangerouslySetInnerHTML={{
					__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
				new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
				j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
				'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
				})(window,document,'script','dataLayer','GTM-PF653M8');`}} />
		    </Head>
            <body>
                <noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PF653M8 "height="0" width="0" style="display:none;visibility:hidden"></iframe>`}} />
                <Main />
                <NextScript />
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument