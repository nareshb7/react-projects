import { Button } from 'common/Components'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <NavLink to="signup">
        <Button title="Sign up" />
      </NavLink>
      <NavLink to="login">
        <Button title="Login" />
      </NavLink>
    </>
  )
}

export default Nav