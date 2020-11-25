import React from 'react'
import { TopNav } from "./TopNav"
import { ToolbarTasks } from "./ToolbarTasks"
import { AddTaskSlider } from "./AddTaskSlider"

//this page needs a thingy where the button doesn't go down when we scroll

export function Tasks(props) {


  return (
    <>
      <TopNav/>
      <ToolbarTasks />
      <AddTaskSlider />
    </>
  )
}
