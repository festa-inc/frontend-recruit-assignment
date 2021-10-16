import styled from 'styled-components'
import type { NextPage } from 'next'
import Link from'next/link'

import Event from '../components/template/Events'
import styles from '../styles/Home.module.css'

const Test = styled.div`
`

const Events: NextPage = () => {
  return (
    <div className={styles.container}>
      <Link href="/events">이벤트 목록</Link>
      <Link href="/create">이벤트 생성하기</Link>
      <Event/>
    </div>
  )
}

export default Events
