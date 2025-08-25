import React from 'react';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import PropTypes from 'prop-types';

type TimePickerProps = {
  selectedTime: moment.Moment;
  onChange: (time: moment.Moment) => void;
};

const CustomTimePicker: React.FC<TimePickerProps> = ({ selectedTime, onChange }) => {
  return (
    <TimePicker
      value={selectedTime}
      onChange={onChange}
      showSecond={false}
      className="border p-2 rounded"
      aria-label="Time picker"
    />
  );
};

CustomTimePicker.propTypes = {
  selectedTime: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomTimePicker;