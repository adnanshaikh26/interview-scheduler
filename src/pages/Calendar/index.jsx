import { Typography } from "antd";
import React from "react";
import InterviewCalendar from "../../components/InterviewCalendar";

export default function Calendar() {
  return (
    <div>
      <Typography.Title level={4}>Interview Calender</Typography.Title>
      <InterviewCalendar />
    </div>
  );
}
