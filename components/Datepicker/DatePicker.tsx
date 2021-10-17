import React, { FC, useState } from 'react'
import styled from 'styled-components'


export interface DatePickerProps {
  showing:boolean;
  disabled:boolean;
  displayDate: Date;
  onStartDatePicked:(sdate: Date) => void;
  onEndDatePicked:(sdate: Date) => void;
  startDate:Date;
  endDate:Date;
}


const makeCalender = (year:string, month:string)=>{
  
  const first_date = new Date(Number(year), Number(month)-1,1).getDate()
  const first_day = new Date(Number(year), Number(month)-1,1).getDay()
  const last_date = new Date(Number(year), Number(month),0).getDate()
  const last_day = new Date(Number(year), Number(month),0).getDay()
  const dates = []
  for (let index = 0; index < first_day; index++) {
    dates.push(0)
  }
  for (let index = 1; index <= last_date; index++) {
    
    dates.push(index)
  }
  for (let index = last_day+1; index<6; index++){
    dates.push(0)
  }
  return dates
}
const DateComponent = (props:any)=>{
  const [dateState, setDateState] = useState(true)
  const dateHandler =()=>{
    if(props.startDate){
      props.endHandler(props.date)
    }else if (props.endDate) {
      props.startHandler(props.date)
      props.endHandler(undefined)
    } else {
      props.startHandler(props.date)
    }
    console.log(props.startDate, props.endDate,"????????????????????");
    
  }

  return (
    <DateDiv onClick={dateHandler} selected={dateState}>{props.children}</DateDiv>
  )
}
const CalenderContent = (props:any)=>{
  const year = props.year
  const month = props.month
  console.log(props.props);
  const dayList = ['일','월','화','수','목','금','토']
  const dayComponents = dayList.map((d,idx)=><DayDiv children={d} key={idx}/>)
  const dates = makeCalender(year,month)
  const dateComponents = dates.map((d,idx)=>{
    const date = new Date(year,month+1, d)
    return (<DateContainer key={idx}>
      {d==0?"":<DateComponent 
        date={date}
        startDate={props.props.startDate}
        endDate={props.props.endDate}
        startHandler={props.props.onStartDatePicked}
        endHandler={props.props.onEndDatePicked}
        >
        {d}
        </DateComponent>}
    </DateContainer>)
  }
  )
  return (
    <div style={{width:"311px", height:"337px"}}>
      <DaysRow>
        {dayComponents}
      </DaysRow>
      <DatesRow>
        {dateComponents}
      </DatesRow>
    </div>
  )
}

const Calender =(props:any) =>{
  const [month, setMonth] = useState(Number(props.date.month))
  const [year, setYear] = useState(Number(props.date.year))
  const handlRightMonth= () =>{
    if((month+1)>12){
      setMonth(1)
      setYear(year+1)
    }else{
      setMonth(month+1)
    }
  }
  const handlLeftMonth= () =>{
    if((month-1)<1){
      setMonth(12)
      setYear(year-1)
    }else{
      setMonth(month-11)
    }
  }
  console.log(props.props);
  
  return(
    <CalenderContentWrap>      
      <SelectInfoSpan>
        시작날짜
      </SelectInfoSpan>
      <DateControlBox>
        <DateControlButton onClick={handlLeftMonth}> &#60; </DateControlButton>
        <DateBox>{`${year}년${month}월`}</DateBox>
        <DateControlButton onClick={handlRightMonth}> &#62; </DateControlButton>
      </DateControlBox>
      <CalenderContent year={year} month={month} props={props.props}/>
    </CalenderContentWrap>
  )
}
const format =(date:Date)=>{
  const sDay = date.getDay().toString();
  const sDate = date.getDate().toString();
  const sMonth = (date.getMonth()+1).toString();
  const sYear = date.getFullYear().toString();
  return {
    day:sDay,
    date:sDate,
    month:sMonth,
    year:sYear
  }
}


const DatePickerButton: FC<any>= (props) =>{
  const [showing, setShowing] = useState<boolean>(props.showing)
  const dateObj = format(props.displayDate)
  const handleShowState = ()=>{
    setShowing(()=> props.disabled ? false:!showing)
  }
  
  return (
    <div>
      <Button onClick={handleShowState} disabled={props.disabled}>
        {`${dateObj.month.padStart(2,'0')}월${dateObj.date.padStart(2,'0')}일`}
      </Button>
      <CalenderWrap showing={showing}>
        <Calender date={dateObj} props={props} />
      </CalenderWrap>
    </div>
  )
}
const DatePicker: FC<DatePickerProps> = () => {
  const [startDate, setStartDate] = useState<Date| undefined>()
  const [endDate, setEndDate] = useState<Date| undefined>()

  const handleStartDatePicked = (sdate:Date)=>{
    console.log(sdate);
    
    setStartDate(sdate)
    if(endDate&&sdate>endDate){
      setEndDate(undefined)
    }
  }
  const handleEndDatePicked = (edate: Date)=>{
    
    if(startDate&&edate<startDate){
      setStartDate(edate)
    }else{
      setEndDate(edate)
    }
  }
  return (
    <Wrapper>
      <DatePickerButton
        disabled={false}
        displayDate={startDate ? startDate: new Date()}
        showing={false}
        onEndDatePicked={handleEndDatePicked}
        onStartDatePicked={handleStartDatePicked}
        startDate={startDate}
        endDate={endDate}
      />
      <DatePickerButton
        disabled={true}
        displayDate={endDate ? endDate : new Date()}
        showing={false}
        onEndDatePicked={handleEndDatePicked}
        onStartDatePicked={handleStartDatePicked}
        startDate={startDate}
        endDate={endDate}
        />
    </Wrapper>
  )
}

export default DatePicker



const Wrapper = styled.div`
  display: flex;
  width: 500px;
  -webkit-box-pack: justify;
  justify-content: space-between;
`
const Button = styled.button`
  font-size: 16px;
  border: 1px solid rgb(196, 200, 204);
  border-radius: 4px;
  padding: 9px 14px;
  background-color: white;
  cursor: pointer;
  :hover
  {
    border-color:blue;
  }
`
const CalenderWrap = styled.div<{showing:boolean}>`
  position: relative;
  display: ${(props)=>props.showing? 'block':'none'};
  background-color: rgb(255, 255, 255);
  z-index: 10;
`
const CalenderContentWrap = styled.div`position: absolute;
width: 397px;
height: 476px;
display: flex;
flex-direction: column;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
background-color: rgb(255, 255, 255);
border-radius: 10px;
border-width: 1px;
border-color: rgb(0, 0, 0);
border-style: solid;
box-shadow: rgb(0 0 0 / 15%) 0px 0px 10px 3px;

`

const SelectInfoSpan = styled.div`
    width: 100%;
    margin-bottom: 30px;
    padding-left: 40px;
    margin-top: 20px;
    font-weight: 600;
    box-sizing: border-box;
`
const DayDiv = styled.div`
  color: rgb(8, 63, 24);
  width: 44.43px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
`
const DateContainer = styled.div`
  width: 44.43px;
  height: 44.33px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 1px;
`
const DateDiv = styled.div<{selected:boolean}>`
  width: 44.43px;
  height: 44.33px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  
  :hover{
    border-radius: 50%;
    border: solid 1px rgb(196,200,240);
    background-color: rgb(235,237,240);
  }
`
const DaysRow = styled.div`
  display: flex;
  height: 20px;
`
const DatesRow = styled.div`
  flex-wrap: wrap;
  width: 100%;
  display: flex;
  height: 16.2%;
`
const DateBox = styled.div`
    font-weight: 700;
    font-size: 16px;
    line-height: normal;
    letter-spacing: -0.5px;
    margin:auto;
`
const DateControlButton = styled.div`
  cursor: pointer;
  font-size: 30px;
  font-weight: 700;
  margin: 0px 10px;
`
const DateControlBox = styled.div`

  margin-bottom: 26px;
  display: flex;
`