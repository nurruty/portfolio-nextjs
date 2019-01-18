import Document, { Head, Main, NextScript} from 'next/document';
import { Header, Container, Icon } from 'semantic-ui-react'


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
        <footer>
          <Icon 
          style={{
            position: 'absolute',
            top: '-25px',
            background: '#E31B6D',
            fontSize: '30pt',
            width: '47px',
            height: '50px',
            lineHeight: '40pt',
            left: '0',
            right: '0',
            margin: '0 auto',
            cursor: 'pointer',
            transition: 'background .5s'
          }}
          name="angle double up"
          inverted 
          />
          
          <Container style={{ padding: '.5em 0em' }} text>
            <div className="footnote">
                Nicolás Urruty &copy;2019
            </div>
          </Container>
        </footer>
        
        <style jsx>{`
          footer {
            background: #192029;
            padding: 50px 0 20px 0;
            position: relative;
          }

          footer .footnote {
            font-size: 15pt;
            color: #8F9AA7;
            margin-top: 35px;
            opacity: 0.6;
            text-align: center;
          }

        `}</style>
        <style global jsx>{`

            body {
              font-family: 'Lato', sans-serif;
            }
        `}</style>
      </html>
    )
  }
}