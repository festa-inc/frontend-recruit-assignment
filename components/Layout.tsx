import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({
  children,
  title = '이벤트를 등록하는 플랫폼 Festa 입니다',
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/events">
          <a>이벤트 목록</a>
        </Link>{' '}
        |{' '}
        <Link href="/create">
          <a>이벤트 생성하기</a>
        </Link>{' '}
      </nav>
    </header>
    {children}
  </div>
)

export default Layout
