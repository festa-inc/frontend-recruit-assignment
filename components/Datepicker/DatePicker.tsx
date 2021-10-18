import React, { FC, useState } from 'react';
import { Button } from '../../stories/Button';
import Calendar from './Calendar'

export interface DatePickerProps {
  value: Date,
  onStartDatePicked: (sdate: Date) => void,
  onEndDatePicked: (edate: Date) => void
}

const DatePicker: FC<DatePickerProps> = (props) => {
  const [show, setShow] = useState(false);
  const [startDate, setStartDate ] = useState(props.value.toLocaleDateString());
  const [endDate, setEndDate ] = useState(props.value.toLocaleDateString());
  const [selectSdate,setSelectSdate] = useState(false);
  const handleEndDatePicked = (edate: Date) => {
    setEndDate(edate.toLocaleDateString())
    setSelectSdate(false);
  }

  const handleStartDatePicked = (sdate: Date) => {
    setStartDate(sdate.toLocaleDateString())
    setSelectSdate(true);
    
  }
  return <>
    <Button 
      borderRadius={5}
      label={startDate? startDate : props.value.toLocaleDateString()}
      onClick={() => setShow(true)}
    />

    <Button
      borderRadius={5}
      label={endDate? endDate : props.value.toLocaleDateString()} 
    />
    <Calendar 
      show={show}
      hide={() => setShow(false)}
      startDate={startDate}
      onStartDatePicked={handleStartDatePicked}
      onEndDatePicked={handleEndDatePicked}
      selectSdate={selectSdate}
    />
  </>
}

export default DatePicker

