import React,{FC} from 'react'
import {TitleSpan,NormalSpan} from '../atoms/EventSpan'
import {EventInfoContainer} from '../atoms/EventInfoContainer'


interface EventInfoProps{
    name: string;
    startDate: string;
    email: string;
    price: number;
}
const EventInfo:FC<EventInfoProps> = (props) =>{
    
    const date = new Date(props.startDate)
    const dayList = ['일','월','화','수','목','금','토']
    const noon = date.getHours()/12>1? "오후":"오전"
    const hour = parseInt(String((date.getHours()%12)))
    const price = props.price>0? props.price.toLocaleString()+"원":"무료"
    
    
    return(
        <EventInfoContainer>
            <TitleSpan>{props.name}</TitleSpan>
            <NormalSpan>{`${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일 ${noon} ${hour}시`}</NormalSpan>
            <NormalSpan>호스트 연락처: {props.email}</NormalSpan>
            <NormalSpan>{price}</NormalSpan>
        </EventInfoContainer>
    )
}

export default EventInfo