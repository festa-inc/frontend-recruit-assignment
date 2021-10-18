import { Story, Meta } from '@storybook/react'
import React, { FC } from 'react'
import DatePicker, { DatePickerProps } from './DatePicker'

export default {
  title: 'Molecules/DatePicker',
  component: DatePicker,
} as Meta

const Template: Story<DatePickerProps> = (args) => {
  return <DatePicker {...args}/>
}

export const DatePickerDefault = Template.bind({})
DatePickerDefault.args = {
  value: new Date(),
}
