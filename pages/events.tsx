import React, { FC, useEffect, useState } from 'react';
import { useInView } from "react-intersection-observer";
import styled from 'styled-components';

import Card from '../components/events/Card';

interface Event {
  id: number,
  name: string,
  imageUrl: string,
  startDate: Date,
  email: string,
  price: number
}
interface EventList {
  list: Event[]
}
export const getStaticProps = async () => {
  const res = await fetch("http://13.124.24.197/390QA/events?first=20&skip=0")
  const data = await res.json()
  return {
    props: {
      list: data
    }
  }
}
const EventPage: FC<EventList> = (props) => {
    const [eventList, setEventList] = useState(props.list);
    const { ref, inView } = useInView({
        threshold: 0,
      });
    const [skipEvents, setskipEvents] = useState(0);
    useEffect(() => {
        if (inView) {
            setskipEvents(skipEvents + 20);
        }
      }, [inView]);
    
      useEffect(() => {
        if (skipEvents > 0) {
          _getNextEventList();
        }
      }, [skipEvents]);

      const _getNextEventList = async () => {
          try {
            const response = await fetch(`/api/events/next?first=20&skip=${skipEvents}`)
            const nextEventList = await response.json();
            if(nextEventList.length === 0) {
              alert("마지막 이벤트 입니다.")
            }
            let result = eventList.concat(nextEventList);
            setEventList(result);
          } catch (error) {
              // console.log(error)
          }
      };
    return (
      <Wrapper>
        <h2>이벤트 목록</h2>
        <EventWrapper>
        {
          eventList.map((event, index) => (
            eventList.length -1 === index ? (
                <div style={{width:"100%"}} 
                    key={event.id} 
                    ref={ref}
                >
                  <Card 
                    {...event}
                  />
                </div> 
            ): (
              <Card 
                key={event.id} 
                {...event}
              />
            )
          ))
        }
        </EventWrapper>
      </Wrapper>
    )
}

export default EventPage

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`
const EventWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`