import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home">
    <h1> Festa 인터뷰 과제 입니다. 👻</h1>
    <p>
      <Link href="/events">
        <a>이벤트 목록</a>
      </Link>
      <br />
      <Link href="/create">
        <a>이벤트 만들기</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
