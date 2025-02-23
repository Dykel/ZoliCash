import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

interface CalendarProps {
  tasks: any[];
}

const Calendar: React.FC<CalendarProps> = ({ tasks }) => {
  const events = tasks.map(task => ({
    title: task.title,
    date: task.due_date,
  }));

  return (
    <div className="mt-6">
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={events} />
    </div>
  );
};

export default Calendar;