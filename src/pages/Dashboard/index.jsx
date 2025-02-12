import React from "react";
import { Typography } from "antd";
import InterviewTable from "../../components/InterviewTable";

export default function Dashboard() {
  return (
    <div>
      <Typography.Title level={4}>Interview Dashboard</Typography.Title>
      <InterviewTable />
    </div>
  );
}
