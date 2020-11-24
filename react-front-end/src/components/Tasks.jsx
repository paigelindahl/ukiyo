import React, {useState} from 'react'
import { TopNav } from "./TopNav"
import { ToolbarTasks } from "./ToolbarTasks"
import { Checkboxes } from "./Checkboxes";


export function Tasks(props) {


  return (
    <>
      <TopNav/>
      <ToolbarTasks />
      <Checkboxes />
    </>
  )
}
