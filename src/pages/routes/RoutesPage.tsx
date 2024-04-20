import React from 'react'
import { createBrowserRouter, Link, NavLink } from 'react-router-dom'
import Root from './Root'
import Todo from 'projects/todolist'


const router = createBrowserRouter([{
  path: "/",
  element: <Root />,
  children: [
    {
      path: '/todo',
      element: <Todo />
    }
  ]

}])

export default router