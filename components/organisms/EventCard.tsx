import React,{FC} from 'react'
import {TitleSpan,NormalSpan} from '../atoms/EventSpan'
import CoverImage from '../molecules/CoverImage'
import {EventBox} from '../atoms/EventBox'
import EventInfo from '../molecules/EventInfo'

export interface EventCardProps {
    id: number;
    imageUrl: string;
    name: string;
    startDate: string;
    email: string;
    price: number;
}


const EventCard:FC<EventCardProps> = (props) =>{
    return(
        <EventBox>
            <CoverImage imageUrl={props.imageUrl}/>
            <EventInfo {...props}/>
        </EventBox>
    )
}

export default EventCard