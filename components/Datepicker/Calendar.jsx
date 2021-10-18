import {useState} from 'react';
import moment from 'moment';
import styled from 'styled-components'

const Calendar = ({show,hide,startDate,onStartDatePicked,onEndDatePicked,selectSdate}) =>{
  const [getMoment, setMoment]=useState(moment());
  const today = getMoment;
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

  const days = () => {
        const dayList = ['일','월','화','수','목','금','토'];
        return dayList.map((day,index) => (
              <td key={index}>{day}</td>
        )) 
    }
  const handleDatePicker = (day) => {
    if(!selectSdate){
      onStartDatePicked(day)
    }else {
      onEndDatePicked(day)
      hide();
    }
  }
    const calendarArr = () => {
      let result = [];
      let week = firstWeek;
      for ( week; week <= lastWeek; week++) {
        result = result.concat(
          <tr style={{marginTop:"1rem"}} key={week}>
            {
              Array(7).fill(0).map((data, index) => {
                let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day'); //d로해도되지만 직관성

                if(days.format('MM') !== today.format('MM')){
                  return(
                      <Day 
                        key={index} 
                        style={{visibility:"hidden"}} 
                      >
                        <span>{days.format('D')}</span>
                      </Day>
                  );
                }else{
                  return(
                      <Day 
                        key={index}  
                        onClick={() => handleDatePicker(new Date(days))}
                        selected={startDate === new Date(days).toLocaleDateString()? true : false}
                      >
                        <span>{days.format('D')}</span>
                      </Day>
                  );
                }
              })
            }
          </tr>
        );
      }
      return result;
    }
  
  return (
    <Wrapper show={show}>
      <div style={{cursor:"pointer", textAlign:"right"}}  onClick={hide}>❌</div>
        <ButtonWrapper>
          <div 
            onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) }} 
          > 
            ◀ 
          </div>
          <span>{today.format('YYYY년 MM월')}</span>
          <div 
            onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }} 
          > 
            ▶ 
          </div>
      
        </ButtonWrapper>
        <Table>
          <tbody>
            <tr>
            {days()}
            </tr>
            {calendarArr()}
          </tbody>
        </Table>
    </Wrapper>
  );
}
export default Calendar;

const Wrapper = styled.div`
  width: 25rem;
  height: 23rem;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 2rem;
  visibility: ${props => props.show? "visible" : "hidden"};
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
`
const Table = styled.table`
  width: 100%;
  text-align: center;
`

const Day = styled.td`
  cursor: pointer;
  width: 4rem;
  height: 3rem;
  border-radius: 50%;
  &:hover {
    color: #000;
    background-color: #f1f1f1;
  }
  ${props => props.selected?  `
      background-color: #276ef3;
      color: #FFF;
    ` 
    : 
    `background-color: #FFF`
  };

`