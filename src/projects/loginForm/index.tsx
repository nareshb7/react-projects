import React from "react"
import './styles.scss'
import { Button, Input } from "common/Components"
import { NavLink, Outlet } from "react-router-dom"

const LoginForm =()=> {
    return <div className="login-form">
        <NavLink to="signup"> <Button title="Sign up"/></NavLink>
        <NavLink to="login"> <Button title="Login"/></NavLink>
        <div className="container mx-auto section">
            <div>
                <div>
                    <div className="font-bold">UserId</div>
                    <Input value="" onChange={() => {}} />
                </div>
                <div>
                    <div className="font-bold">Password</div>
                    <Input value="" onChange={() => {}} />
                </div>
                <div>
                    <Button title="Submit"/>
                </div>
            </div>

        </div>
        <Outlet />
    </div>
}

export default LoginForm