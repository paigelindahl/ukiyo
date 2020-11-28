import React from 'react'
import { TopNav } from "./TopNav"
import { ToolbarTasks } from "./ToolbarTasks"
import { AddTaskSlider } from "./AddTaskSlider"
import { LogoProfile } from './LogoProfile';

//this page needs a thingy where the button doesn't go down when we scroll

export function Tasks(props) {


  return (
    <>
      <LogoProfile/>
      <TopNav/>
      <ToolbarTasks />
      <AddTaskSlider />
    </>
  )
}
