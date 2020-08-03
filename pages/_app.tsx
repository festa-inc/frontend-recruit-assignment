import { AppProps } from 'next/app'
import '../styles/index.css'

// CSS 파일을 글로벌 하게 추가해야되는게 아닌 이상 이 파일은 따로 안 건드려도 무방 합니다.

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
