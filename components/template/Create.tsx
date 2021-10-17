import React from 'react'
import { EventsContainer } from '../atoms/EventsContainer'
import CreateEventForm from '../organisms/CreateEventForm'
import Header from '../organisms/Header'
const Create =()=>{
    return (
        <EventsContainer>
            <Header/>
            <CreateEventForm/>
        </EventsContainer>
    )
}

export default Create