import type { NextPage } from 'next'
import Link from'next/link'

import Event from '../components/template/Events'
import styles from '../styles/Home.module.css'


const Events: NextPage = ({data}:any) => {
  return (
    <div className={styles.container}>
      <Event data={data}/>
    </div>
  )
}


export async function getStaticProps() {
  const res = await fetch(`http://13.124.24.197/AE391/events?first=20&skip=0`)
  const data = await res.json()
  
  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default Events
