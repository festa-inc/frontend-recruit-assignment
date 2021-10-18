import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import menus from './TopNavData'

const TopNav = () => {
    const router = useRouter()
    const [menu, setMenu] = useState(router.pathname)

    const handlerRouter = (item) => {
        setMenu(item.path)
        router.push(item.path)
    }
    return (
        <Wrapper>
            {
                menus.map((item, index) => (
                    <Menu  
                        key={index} 
                        onClick={() => handlerRouter(item)} 
                        selected={menu === item.path? true : false}
                    >
                        {item.title}
                    </Menu>
                ))
            }
        </Wrapper>
    )
}

export default TopNav

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

const Menu = styled.span`
    cursor: pointer;
    margin: 1rem;
    ${props => props.selected ? 
        `font-weight: bold` : `font-weight: normal`
    };
`

