import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import { createViewWeek } from "@schedule-x/calendar";
import "@schedule-x/theme-default/dist/index.css";
import User from "../Components/User";
import SideNaveStudent from "../Components/SideNav";
function Classes() {
  const calendar = useCalendarApp({
    views: [createViewWeek()],
    events: [
      {
        id: 1,
        title: "Service Management class",
        start: "2024-12-02 19:30",
        end: "2024-12-02 20:30",
      },
      {
        id: 2,
        title: "Ethics and Sustainability class",
        start: "2024-12-03 19:30",
        end: "2024-12-03 20:30",
      },
      {
        id: 3,
        title: "Ethics and Sustainability task deadline",
        start: "2024-12-04",
        end: "2024-12-04",
      },
      {
        id: 4,
        title: "Service Management exam",
        start: "2024-12-05 09:00",
        end: "2024-12-05 10:00",
      },
    ],
    selectedDate: "2024-12-02 19:30",
    dayBoundaries: {
      start: "09:00",
      end: "21:00",
    },
    callbacks: {
      onEventClick(calendarEvent) {
        console.log("onEventClick", calendarEvent);
      },
    },
    weekOptions: {
      gridHeight: 600,
      nDays: 5,
      eventWidth: 95,
      timeAxisFormatOptions: { hour: "2-digit", minute: "2-digit" },
    },
  });

  return (
    <>
      <SideNaveStudent index={1}></SideNaveStudent>
      <User></User>
      <ScheduleXCalendar calendarApp={calendar} />
    </>
  );
}
export default Classes;
