import React from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import PropTypes from 'prop-types';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

type CalendarProps = {
  events: Array<any>;
};

const Calendar: React.FC<CalendarProps> = ({ events }) => {
  return (
    <div className="h-80">
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        aria-label="Event calendar"
      />
    </div>
  );
};

Calendar.propTypes = {
  events: PropTypes.array.isRequired,
};

export default Calendar;