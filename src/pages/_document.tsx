import Document, {Html, Head, Main, NextScript} from "next/document";



export default class MyDocument extends Document {
  rende(){
    return (
      <Html>
        <Head>

        </Head>

        <body>
          <Main />
          <NextScript />
        </body>

      </Html>
    )
  }
}