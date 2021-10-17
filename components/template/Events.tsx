import Link from 'next/link'
import React,{FC, useState, useEffect} from 'react'
import { EventsContainer } from '../atoms/EventsContainer'
import EventCard,{EventCardProps} from '../organisms/EventCard'
import Header from '../organisms/Header'
interface EventDatas{
    data:EventCardProps[]
}
const Events:FC<EventDatas> =(props)=>{
    const [eventData, setEventData] = useState(props.data)
    const [page, setPage] = useState(0)

    const getEventsData = async (pageNum:number)=>{
        const res = await fetch(`/api/getevent?page=${pageNum}`)
        const data = await res.json()
        setEventData(data)
    }

    useEffect(() => {
        getEventsData(page)
    }, [page])

    const handlePage= (pageNum:number)=>{
        setPage(pageNum)
    }
    return (
        <EventsContainer>
            <Header/>
            {eventData.map((data)=><EventCard {...data} key={data.id}/> )}
            <button disabled={page<1} onClick={()=>handlePage(page-1)} >이전</button>
            <button onClick={()=>handlePage(page+1)}>다음</button>
        </EventsContainer>
    )
}

export default Events