import React, { useState } from "react";
import { Table, Tag, Button, Space, Popconfirm, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { deleteInterview } from "../features/interviewSlice";
import EditInterviewModal from "./EditInterviewModal";

const InterviewTable = () => {
  const dispatch = useDispatch();
  const [editingInterview, setEditingInterview] = useState(null);
  const interviews = useSelector((state) => state.interview.interviews);

  // Custom filter function for text fields
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => confirm()} // Apply filter on Enter
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button type="primary" onClick={() => confirm()} size="small">
            Search
          </Button>
          <Button onClick={() => clearFilters()} size="small">
            Reset
          </Button>
        </Space>
      </div>
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
  });

  const columns = [
    {
      title: "Candidate",
      dataIndex: "candidate",
      key: "candidate",
      ...getColumnSearchProps("candidate"), // Enable search filter
    },
    {
      title: "Interviewer",
      dataIndex: "interviewer",
      key: "interviewer",
      ...getColumnSearchProps("interviewer"), // Enable search filter
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      sorter: (a, b) => new Date(a.date) - new Date(b.date), // Sort by date
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      filters: [
        { text: "Technical", value: "Technical" },
        { text: "HR", value: "HR" },
        { text: "Behavioral", value: "Behavioral" },
      ],
      onFilter: (value, record) => record.type.includes(value),
      render: (type) => (
        <Tag
          color={
            type === "Technical" ? "blue" : type === "HR" ? "green" : "orange"
          }
        >
          {type}
        </Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" onClick={() => setEditingInterview(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this interview?"
            onConfirm={() => dispatch(deleteInterview(record.id))}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={interviews.map((i) => ({ ...i, key: i.id }))} // AntD requires a unique key
        pagination={{ pageSize: 10 }}
      />
      {editingInterview && (
        <EditInterviewModal
          visible={!!editingInterview}
          onClose={() => setEditingInterview(null)}
          interview={editingInterview}
        />
      )}
    </>
  );
};

export default InterviewTable;
