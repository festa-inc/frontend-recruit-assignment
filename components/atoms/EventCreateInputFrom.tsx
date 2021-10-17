import styled from 'styled-components'


const EventCreateInputFrom = styled.input`
    &::placeholder {
        font-family: Apple SD Gothic Neo;
        font-style: normal;
        font-weight: normal;
        /* identical to box height, or 145% */ 
        letter-spacing: -0.03em;

        color: #999999;
    }
    width: 625px;
    height: 48px;
    padding-left: 14px;
    border: 1px solid #5B5B5B;
    box-sizing: border-box;
    border-radius: 5px;
`
const EventCreateDateForm = styled.input.attrs({
    type:"datetime-local"
    })`
    width: 263px;
    height: 48px;
    border: 1px solid #5B5B5B;
    box-sizing: border-box;
    border-radius: 5px;
`
const EventCreateImageForm = styled.input.attrs({type:"file"})`
    width: 625px;
    height: 213px;
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
    margin-bottom: 50px;
`

export {EventCreateInputFrom, EventCreateDateForm, EventCreateImageForm}