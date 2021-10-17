import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

import {PageTitle} from '../atoms/PageTitle'
import { HeaderSpan } from '../atoms/HeaderSpan'


const HeaderPageTitle = styled(PageTitle)`
    margin-bottom: 25px;
`
const TabBar = styled.div`
    display:flex;
    justify-content: flex-end;

`
const Header = ()=>{
    return (
        <div>
            <TabBar>
                <HeaderSpan bold>
                    <Link href="/events">이벤트 목록</Link>
                </HeaderSpan>
                <HeaderSpan>
                    <Link href="/create">이벤트 생성하기</Link>
                </HeaderSpan>
            </TabBar>
            <HeaderPageTitle>이벤트 목록</HeaderPageTitle>
        </div>
    )
}

export default Header