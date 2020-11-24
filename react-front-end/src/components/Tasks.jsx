import React, {useState} from 'react'
import { TopNav } from "./TopNav"
import { ToolbarTasks } from "./ToolbarTasks"
import { AddTaskBtn } from "./AddTaskBtn"


export function Tasks(props) {


  return (
    <>
      <TopNav/>
      <ToolbarTasks />
      <AddTaskBtn />
    </>
  )
}
