import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <body>
        <div className="hidden bg-mesa-orange border-l-4 border-mesa-gray text-white p-4 fixed bottom-0 md:bottom-10 right-0 md:right-10 z-50" role="alert">
          <p className="font-bold uppercase">Website Issues under Investigation</p>
          <p className="uppercase">We are currently investigating an issue with Leaderboards!</p>
        </div>
        <Main />
        <NextScript />
      </body>
      
    </Html>
  )
}