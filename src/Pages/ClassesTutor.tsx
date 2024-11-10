import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import { createViewWeek } from "@schedule-x/calendar";
import "@schedule-x/theme-default/dist/index.css";

import SideNaveTutor from "../Components/SideNavTutor";
import UserTutor from "../Components/UserTutor";
function ClassesTutor() {
  const calendar = useCalendarApp({
    views: [createViewWeek()],
    events: [
      {
        id: 1,
        title: "Service management",
        start: "2024-12-01 18:30",
        end: "2024-12-01 19:30",
      },
      {
        id: 2,
        title: "Ethics and Sustainability",
        start: "2024-12-02 18:30",
        end: "2024-12-02 19:30",
      },
    ],
    selectedDate: "2024-12-01 19:30",
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
      <SideNaveTutor index={2} />
      <UserTutor />
      <ScheduleXCalendar calendarApp={calendar} />
    </>
  );
}
export default ClassesTutor;
