import React, { ChangeEvent, useState } from 'react';
import './App.css';
import { ITask } from './AddTask';
import { TodoTask } from './TodoTask';

function App() {
  const [task, setTask]= useState<string>("")
  const [deadline, setDeadline] = useState<number>(0);
  const [todaolist, setTodolist] = useState<ITask[]>([])

  const handleChange=(event: ChangeEvent<HTMLInputElement>):void=>{
          if(event.target.name==="task")
          {
              setTask(event.target.value)
          }  
          else{
            setDeadline(Number(event.target.value))
          }
  }
  const addTask =()=>{
    const newTask = {taskName:task, deadline:deadline}
    setTodolist([...todaolist,newTask])
    setTask("");
    setDeadline(0);
  }
   
  const completeTask=(taskNameDelete:string)=>{
    setTodolist(todaolist.filter((task)=>{
        return task.taskName != taskNameDelete;
    }))
  }
  return (
    <div className="App">
   <div>
    <input  type='text' placeholder='enter the work' name="task" onChange={handleChange} value={task}></input>
    <input type='number' placeholder='enter the deadline(in days)' name="deadline" onChange={handleChange} value={deadline}></input>
   </div>
   <div>
   <button onClick={addTask}>addTask</button>
   </div>
     <div>
      {todaolist.map((task:ITask, key:number)=>{
          return <TodoTask key={key} task={task} completeTask={completeTask}/>
      })}
     </div>
    </div>
  );
}

export default App;
