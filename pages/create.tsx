import React , { } from 'react'
import styled from 'styled-components'
import CreateForm from '../components/events/CreateForm'


const CreatePage = () => {
    return (
        <Wrapper>
            <h2>이벤트 생성하기</h2>
            <CreateForm />
        </Wrapper>
    )
}

export default CreatePage

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`