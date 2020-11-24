import React, {useState} from 'react'
import { TopNav } from "./TopNav"
import { ToolbarTasks } from "./ToolbarTasks"
import { AddTaskBtn } from "./AddTaskBtn"
import { AddTaskSlider } from "./AddTaskSlider"


export function Tasks(props) {


  return (
    <>
      <TopNav/>
      <ToolbarTasks />
      {/* <AddTaskBtn /> */}
      <AddTaskSlider />
    </>
  )
}
