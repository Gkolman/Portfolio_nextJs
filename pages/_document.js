import Document, { Head, Main, NextScript} from "next/document";
import Index from './index.js'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
      <title>Gage Guzman</title>
      <meta name="viewport" content="width=device-width" />
      {/* <link rel="stylesheet" pathname = "../scss/styles.scss"/> */}
      {/* <link rel="stylesheet" pathname = "/_next/static/style.css"/> */}
      {/* <link rel="stylesheet" pathname = "../scss/styles.css"/> */}
        </Head>
        <body>
          <Main/>
          <NextScript/>
          <Index/>
        </body>
      </html>
    )
  }
}