import type { NextPage } from 'next'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Home: NextPage = () => {
  return (
    <Wrapper>
      안녕하세용? 페스타 입니다!
    </Wrapper>
  )
}



export default Home
