import React, { useState } from 'react'
import styled from 'styled-components'

import { EventCreateInputFrom, EventCreateDateForm, EventCreateImageForm } from '../atoms/EventCreateInputFrom'
import { FormTitleSpan } from '../atoms/Span'
import { CreateButton } from '../atoms/Button'

const FormContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    flex-flow: wrap-reverse;
`

const EventCreateForm =()=>{

    const [data, setData] = useState({
        name:undefined,
        email:undefined,
        price:undefined,
        stringDate:"2020-08-03T11:36:11.552Z",
        imageUrl:"https://s3.ap-northeast-2.amazonaws.com/festa-temp/devfest-cover.jpg"
    })
    // const fileUpload = async (e:any)=>{
    //     const file = e.target.files[0]
    //     const t = await file.arrayBuffer()
    //     const url = await fetch(`/api/upload?name=${file.name}`,{
    //         method:"POST",
    //         body:t,
    //     }
    //     )
    //     // console.log(url);
        
    // }
    const handleEventData = (e:any)=>{
        const key = e.target.name
        const value = e.target.value
        setData(data =>({
            ...data,
            [key]:value
        }))
        console.log(data);
        
    }
    const submit = ()=>{
        if (!data.name || !data.price || !data.email) {
            alert("입력값을 확인해주세요")
        }else{
            if(data.price>=0){
                const d = JSON.stringify(data);
                fetch(`/api/upload`,{method:"POST",body:d,})
                console.log("전송?");
                
            }else{
                alert("금액은 0원 이상이어야 합니다!")
            }
        }
    }
    return (
        <FormContainer>
            <div style={{display:'flex', flexDirection:'column'}}>
                <TitleSpan>제목</TitleSpan>
                <NameInput onChange={handleEventData} name="name" placeholder="멋진 이벤트 제목을 입력하세요"/>

                <TitleSpan>호스트 이메일</TitleSpan>
                <EmailInput onChange={handleEventData} name="email" placeholder="example@example.com" type="email"/>

                <TitleSpan>가격</TitleSpan>
                <PriceInput onChange={handleEventData} name="price" placeholder="티켓 가격을 입력해 주세요"/>

                <TitleSpan>시작 날짜</TitleSpan>
                <DateInput onChange={handleEventData} name="stringDate"/>
                <EventCreateImageForm/>
            </div>
            <CreateButton onClick={submit}>이벤트 생성하기</CreateButton>
        </FormContainer>
    )
}

export default EventCreateForm



const TitleSpan = styled(FormTitleSpan)`
    margin-bottom: 6px;
`
const NameInput = styled(EventCreateInputFrom)`
    margin-bottom: 22px;
`
const EmailInput = styled(EventCreateInputFrom)`
    margin-bottom: 29px;

`
const PriceInput = styled(EventCreateInputFrom)`
    margin-bottom: 43px;
`
const DateInput = styled(EventCreateDateForm)`
    margin-bottom: 36px;
`