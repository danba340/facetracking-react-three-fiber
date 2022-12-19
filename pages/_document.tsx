/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script src="https://unpkg.com/@tensorflow/tfjs-core@2.4.0/dist/tf-core.js"></script>
        <script src="https://unpkg.com/@tensorflow/tfjs-converter@2.4.0/dist/tf-converter.js"></script>
        <script src="https://unpkg.com/@tensorflow/tfjs-backend-webgl@2.4.0/dist/tf-backend-webgl.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/blazeface"></script>
      </body>
    </Html>
  )
}
