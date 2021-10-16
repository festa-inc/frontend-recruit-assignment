import Link from 'next/link'
import React,{FC} from 'react'

import EventCard,{EventCardProps} from '../organisms/EventCard'
interface EventDatas{
    data:EventCardProps[]
}
const Events:FC<EventDatas> =(props)=>{
    const evetnCards = props.data.map((data)=><EventCard {...data} key={data.id}/> )
    return (
        <div style={{height:"100%", display:'flex', flexDirection:"column"}}>
            <Link href="/events">이벤트 목록</Link>
            <Link href="/create">이벤트 생성하기</Link>
            {evetnCards}
        </div>
    )
}

export default Events