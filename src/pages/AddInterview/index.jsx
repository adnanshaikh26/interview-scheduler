import React from "react";
import { Form, Input, DatePicker, TimePicker, Select, Button } from "antd";
import { useDispatch } from "react-redux";
import { addInterview } from "../../features/interviewSlice";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const AddInterview = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    const formattedValues = {
      id: Date.now(),
      candidate: values.candidate,
      interviewer: values.interviewer,
      date: values.date.format("YYYY-MM-DD"),
      time: values.time.format("HH:mm"),
      type: values.type,
    };
    dispatch(addInterview(formattedValues));
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Schedule Interview</h2>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          name="candidate"
          label="Candidate Name"
          rules={[{ required: true, message: "Please enter candidate name" }]}
        >
          <Input placeholder="Candidate Name" />
        </Form.Item>

        <Form.Item
          name="interviewer"
          label="Interviewer"
          rules={[{ required: true, message: "Please enter interviewer name" }]}
        >
          <Input placeholder="Interviewer" />
        </Form.Item>

        <Form.Item
          name="date"
          label="Date"
          rules={[{ required: true, message: "Please select a date" }]}
        >
          <DatePicker format="YYYY-MM-DD" />
        </Form.Item>

        <Form.Item
          name="time"
          label="Time"
          rules={[{ required: true, message: "Please select a time" }]}
        >
          <TimePicker format="HH:mm" />
        </Form.Item>

        <Form.Item
          name="type"
          label="Interview Type"
          rules={[{ required: true, message: "Please select interview type" }]}
        >
          <Select placeholder="Select Type">
            <Option value="Technical">Technical</Option>
            <Option value="HR">HR</Option>
            <Option value="Behavioral">Behavioral</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Schedule Interview
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddInterview;
