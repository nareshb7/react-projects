import { Button, ErrorMessage, Input } from 'common/Components'
import React, { useState } from 'react'
import { ChatLoginProps } from '../types';
import { generateRandomString, generateRoomId } from '../utils/helper';
import { initialUserObj, roomIdPattern } from '../utils/Constants';


export const validator =(name: string, value:string) => {
    console.log("VALID::", name, value)
    switch(name) {
        case "name": {
            if (!value) {
                return "Name Required"
            }
            if (value.length < 3) {
                return "Min 3 chars required"
            }
            break;
        }
        case "roomNo": {
            if(!value) {
                return "Room Id required"
            }
            if (!value.match(roomIdPattern)) {
                return "Enter valid Room Id"
            }
            break;
        }
        default: return ""
    }
}

const Login = ({onStart}: ChatLoginProps) => {
  const [formData, setFormData] = useState(initialUserObj);
  const [error, setError] = useState(initialUserObj)
  const handleStartChat = () => {
    const {name, roomNo} = formData
    const errors = Object.entries(formData).filter(field => {
        const res = validator(field[0], field[1])
        setError(prev => ({...prev, [field[0]]: res}))
        return res
      })
    if (errors.length === 0) {
      const random = generateRandomString().slice(2, 6);
      formData.name = name + random;
        onStart(formData)
      setFormData(initialUserObj);
    }
  };
  const handleJoinChat =()=> {
    const errors = Object.entries(formData).filter(field => {
      const res = validator(field[0], field[1])
      setError(prev => ({...prev, [field[0]]: res}))
      return res
    })
    if (errors.length === 0) {
        onStart(formData)
      setFormData(initialUserObj);
    }
  }
  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };
  const getRoomId =()=> {
    const roomNo = generateRoomId()
    setFormData({...formData, roomNo})
  }
  return (<div>
    <div>
      <label>User Name:</label>
      <Input
        value={formData.name}
        onChange={(e) => handleChange("name", e.target.value)}
      />
    </div>
    <ErrorMessage error={error.name} />
    <div>
      <label>Room No:</label>
      <Input
        value={formData.roomNo}
        onChange={(e) => handleChange("roomNo", e.target.value)}
      />
      <Button onClick={getRoomId} title='Generate'/>
    </div>
    <ErrorMessage error={error.roomNo} />
    <Button onClick={handleStartChat} title="Start Chat" />
    <Button onClick={handleJoinChat} title="Join Chat" />
  </div>
  )
}

export default Login