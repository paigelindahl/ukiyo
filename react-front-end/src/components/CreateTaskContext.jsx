import React, { useState, createContext } from 'react';
import { TaskInput } from './TaskInput';
import { CreateTask } from './CreateTask';


export const CreateTaskContext = createContext();

  
  
  
  return (
    <>
      <CreateTaskContext.Provider value={[task, setTask]}>
        {props.children}
      </CreateTaskContext.Provider>
    </>
  )}