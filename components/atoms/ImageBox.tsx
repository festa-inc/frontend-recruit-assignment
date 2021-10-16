import styled from 'styled-components'

const ImageBox = styled.img<{imageUrl:string}>`
    width: 100%;
    height: 100%;
    background: url(${(props)=>props.imageUrl});
    background-size: cover;
    border-radius: 10px;
`
export {ImageBox}