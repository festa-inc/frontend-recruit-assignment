import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import menus from './Data'

const TopNav = () => {
    const [menu, setMenu] = useState()
    const router = useRouter()
    const handlerRouter = (item) => {
        setMenu(item)
        router.push(item.path)
    }
    return (
        <Wrapper>
            {
                menus.map((item, index) => (
                    <Menu  
                        key={index} 
                        onClick={() => handlerRouter(item)} 
                        selected={menu === item? true : false}
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

