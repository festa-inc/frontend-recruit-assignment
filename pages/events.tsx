import Link from 'next/link'
import Layout from '../components/Layout'

const EventListPage = () => (
  <Layout title="이벤트 목록 | Festa">
    <h1>이벤트 목록</h1>
    <p>
      <Link href="/">
        <a>첫 페이지로 돌아가기</a>
      </Link>
    </p>
  </Layout>
)

export default EventListPage
