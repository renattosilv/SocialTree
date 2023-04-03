import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import IconProvider from '../providers/IconProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <IconProvider>
      <Component {...pageProps} />
    </IconProvider>
  )
}
