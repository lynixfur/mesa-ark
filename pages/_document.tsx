import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        {/* Alert Box */}
        <div className="bg-gray-800 border-l-4 border-orange-500 text-gray-300 p-4 fixed bottom-0 md:bottom-10 right-0 md:right-10 z-50" role="alert">
            <p className="font-bold">Alert! MesaARK Downtime</p>
            <p>We are currently doing maintenance on the MesaARK Web Infrastructure!</p>
        </div>

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}