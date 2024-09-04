import { Button, ErrorMessage, Input } from "common/Components";
import React, { useState } from "react";
import { ChatLoginProps } from "../types";
import {
  generateRandomString,
  generateRoomId,
  validator,
} from "../utils/helper";
import { initialUserObj } from "../utils/Constants";

const Login = ({ onStart }: ChatLoginProps) => {
  const [formData, setFormData] = useState(initialUserObj);
  const [error, setError] = useState(initialUserObj);
  const handleStartChat = () => {
    const { name } = formData;
    const errors = Object.entries(formData).filter((field) => {
      const res = validator(field[0], field[1]);
      setError((prev) => ({ ...prev, [field[0]]: res }));
      return res;
    });
    if (errors.length === 0) {
      const random = generateRandomString().slice(2, 6);
      formData.name = name + random;
      onStart(formData);
      setFormData(initialUserObj);
    }
  };
  const handleJoinChat = () => {
    const errors = Object.entries(formData).filter((field) => {
      const res = validator(field[0], field[1]);
      setError((prev) => ({ ...prev, [field[0]]: res }));
      return res;
    });
    if (errors.length === 0) {
      onStart(formData);
      setFormData(initialUserObj);
    }
  };
  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };
  const getRoomId = () => {
    const roomNo = generateRoomId();
    setFormData({ ...formData, roomNo });
  };
  return (
    <div className="login flex justify-start flex-col w-full md:w-1/2 text-left mx-auto bg-gray-888 p-5 rounded-lg">
      <div className="my-2.5 ">
        <label className="w-90 inline-block font-bold">User Name:</label>
        <Input
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>
      <ErrorMessage error={error.name} />
      <div className="my-2.5">
        <label className="w-90 inline-block font-bold">Room No:</label>
        <Input
          value={formData.roomNo}
          onChange={(e) => handleChange("roomNo", e.target.value)}
        />
        <Button onClick={getRoomId} title="Generate Room Id" />
      </div>
      <ErrorMessage error={error.roomNo} />
      <div className="my-2.5">
        <Button onClick={handleStartChat} title="Start Chat" />
        <Button onClick={handleJoinChat} title="Join Chat" />
      </div>
    </div>
  );
};

export default Login;
