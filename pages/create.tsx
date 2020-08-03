import Link from 'next/link'
import Layout from '../components/Layout'

const CreateEventPage = () => (
  <Layout title="이벤트 만들기 | Festa">
    <h1>이벤트 만들기</h1>
    <p>
      <Link href="/">
        <a>첫 페이지로 돌아가기</a>
      </Link>
    </p>
  </Layout>
)

export default CreateEventPage
