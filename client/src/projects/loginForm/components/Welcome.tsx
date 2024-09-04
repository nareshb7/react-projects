import React from 'react'
import { clearLocalStoragData, getLocalStoragData } from '../helper'
import { SignupFormDataType } from '../Modals'
import { Button } from 'common/Components'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
  const navigate = useNavigate()
  const data: SignupFormDataType = JSON.parse(getLocalStoragData("formLoggedInUser") || "")

  const handleLogout =()=> {
    clearLocalStoragData("formLoggedInUser")
    navigate("/login-form/login")
  }

  if (!data) {
    return <div> Hii User, Welcome Please Login </div>
  }
  return (
    <div>
      <div>Name: {data.name}</div>
      <div>Email: {data.email}</div>
      <div>Mobile: {data.mobile}</div>
      <div>Location: {data.location}</div>
      <div>Role: {data.role}</div>
      <div>Password: {data.password}</div>
      <div>
        <Button onClick={handleLogout} title='Logout'/>
      </div>
    </div>
  )
}

export default Welcome