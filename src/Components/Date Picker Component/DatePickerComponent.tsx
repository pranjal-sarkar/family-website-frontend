import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePickerComponent({dateOfBirth, setDateOfBirth}) {

  const datePickerComponent = (event) => {
    console.log(event);

    var date=event['$D'];
    var month = event['$M'] + 1;

    setDateOfBirth({date, month});
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Date of Birth" onChange={datePickerComponent} />
      </DemoContainer>
    </LocalizationProvider>
  );
}
