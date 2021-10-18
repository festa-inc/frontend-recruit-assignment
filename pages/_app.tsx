import '../styles/globals.css'
import type { AppProps } from 'next/app'
import TopNav from '../components/layout/TopNav'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <TopNav />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
