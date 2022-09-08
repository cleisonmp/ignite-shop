import type { AppProps } from 'next/app'
import { NextPageWithLayout } from './page'

import { globalStyles } from '../styles/global'

globalStyles()

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}
