import React, { useState, useEffect } from "react";
import {
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  TimePicker,
  Button,
} from "antd";
import { useDispatch } from "react-redux";
import { editInterview } from "../features/interviewSlice";
import dayjs from "dayjs";

const { Option } = Select;

const EditInterviewModal = ({ visible, onClose, interview }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    if (interview) {
      form.setFieldsValue({
        candidate: interview.candidate,
        interviewer: interview.interviewer,
        date: dayjs(interview.date),
        time: dayjs(interview.time, "HH:mm"),
        type: interview.type,
      });
    }
  }, [interview, form]);

  const handleSave = () => {
    form.validateFields().then((values) => {
      dispatch(
        editInterview({
          id: interview.id,
          updatedInterview: {
            ...values,
            date: values.date.format("YYYY-MM-DD"),
            time: values.time.format("HH:mm"),
          },
        })
      );
      onClose();
    });
  };

  return (
    <Modal
      title="Edit Interview"
      open={visible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="save" type="primary" onClick={handleSave}>
          Save Changes
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="candidate"
          label="Candidate Name"
          rules={[{ required: true, message: "Enter candidate name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="interviewer"
          label="Interviewer Name"
          rules={[{ required: true, message: "Enter interviewer name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="date"
          label="Date"
          rules={[{ required: true, message: "Select a date" }]}
        >
          <DatePicker format="YYYY-MM-DD" />
        </Form.Item>

        <Form.Item
          name="time"
          label="Time"
          rules={[{ required: true, message: "Select a time" }]}
        >
          <TimePicker format="HH:mm" />
        </Form.Item>

        <Form.Item
          name="type"
          label="Interview Type"
          rules={[{ required: true, message: "Select interview type" }]}
        >
          <Select>
            <Option value="Technical">Technical</Option>
            <Option value="HR">HR</Option>
            <Option value="Behavioral">Behavioral</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditInterviewModal;
