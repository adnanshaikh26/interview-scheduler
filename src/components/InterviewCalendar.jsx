import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // Enables drag & drop
import { useSelector, useDispatch } from "react-redux";
import { editInterview } from "../features/interviewSlice";

const InterviewCalendar = () => {
  const dispatch = useDispatch();
  const interviews = useSelector((state) => state.interview.interviews);

  // Convert Redux state to FullCalendar event format
  const events = interviews.map((i) => ({
    id: i.id.toString(),
    title: `${i.candidate} - ${i.interviewer}`,
    start: `${i.date}T${i.time}`,
    extendedProps: { ...i }, // Store extra interview data
  }));

  // Handle interview rescheduling via drag & drop
  const handleEventDrop = (eventDropInfo) => {
    const { event } = eventDropInfo;
    const updatedInterview = {
      ...event.extendedProps,
      date: event.start.toISOString().split("T")[0], // Extract date
      time: event.start.toISOString().split("T")[1].substring(0, 5), // Extract time
    };
    dispatch(editInterview(updatedInterview));
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="timeGridWeek"
      events={events}
      editable={true} // Enables drag & drop
      eventDrop={handleEventDrop} // Handle event movement
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      height="80vh"
    />
  );
};

export default InterviewCalendar;
