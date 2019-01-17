import Document, { Head, Main, NextScript} from 'next/document';


export default class MyDocument extends Document {

  render() {

    return (
      <html>
        <Head>
          <meta name="description" content="A site for my programming portfolio" />
          <meta charSet="utf-8"/>
          <meta name="robtos" content="noindex, nofollow"/>
          <meta name="viewport" content="width:device-width" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
          <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
          <link rel="stylesheet"  href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script data-cfasync="false" type="text/javascript" src="/static/scripts/sendMail.js"></script>
        </body>
        <style global jsx>{`

            body {
              font-family: 'Lato', sans-serif;
            }
        `}</style>
      </html>
    )
  }
}