import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';

type DatePickerProps = {
  selectedDate: Date;
  onChange: (date: Date) => void;
};

const CustomDatePicker: React.FC<DatePickerProps> = ({ selectedDate, onChange }) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={onChange}
      className="border p-2 rounded"
      aria-label="Date picker"
    />
  );
};

CustomDatePicker.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomDatePicker;