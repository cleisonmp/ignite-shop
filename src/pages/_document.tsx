import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../styles'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&family=Roboto:wght@100;300;400;500;700;900&display=swap'
          rel='stylesheet'
        />

        <link rel='shortcut icon' href='/favicon.ico' type='image/ico' />

        <style
          id='stitches'
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
