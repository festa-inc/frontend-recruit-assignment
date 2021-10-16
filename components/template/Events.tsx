import React,{FC} from 'react'

import EventCard,{EventCardProps} from '../organisms/EventCard'

const Events = ()=>{
    const dm = {
        "id": 868,
        "name": "GitHub 사용자 교육(Live Webinar)",
        "price": 0,
        "startDate": "2020-04-09T11:00:00.000Z",
        "imageUrl": "https://cf.festa.io/img/2020-4-3/c58293e3-1b8a-4c21-922c-58cd361a0e8e.png",
        "email": "test@test.gmail"
    }
    return (
        <div>
            <EventCard {...dm}/>
        </div>
            
       
    )
}

export default Events