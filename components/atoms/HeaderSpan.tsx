import styled from 'styled-components';

const HeaderSpan = styled.span<{bold?:boolean}>`
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: ${(props)=>props.bold?'bold':'normal'};
    font-size: 20px;
    line-height: 24px;
    margin: 14px;
`
export {HeaderSpan}