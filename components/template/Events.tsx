import Link from 'next/link'
import React,{FC} from 'react'
import { EventsContainer } from '../atoms/EventsContainer'
import EventCard,{EventCardProps} from '../organisms/EventCard'
import Header from '../organisms/Header'
interface EventDatas{
    data:EventCardProps[]
}
const Events:FC<EventDatas> =(props)=>{
    const evetnCards = props.data.map((data)=><EventCard {...data} key={data.id}/> )
    return (
        <EventsContainer>
            <Header/>
            {evetnCards}
        </EventsContainer>
    )
}

export default Events