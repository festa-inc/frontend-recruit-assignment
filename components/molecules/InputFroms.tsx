import React from 'react'
import styled from 'styled-components'
import { EventCreateInputFrom, EventCreateDateForm } from '../atoms/EventCreateInputFrom'
import { FormTitleSpan } from '../atoms/Span'
const InputForm = ()=>{
    return (
        <div>
        <FormTitleSpan>날짜</FormTitleSpan>
        <EventCreateDateForm onChange={(e)=>console.log(e.target.value)}/>
        </div>
    )
}
export default InputForm