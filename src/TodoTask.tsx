import { ITask } from "./AddTask";

interface props{
    task:ITask;
    completeTask(taskNameDelete:string):void;
}
export const TodoTask =({task, completeTask}:props)=>{
    return(
        <div>
        <div>
            {task.taskName}
            {task.deadline}
        </div>
        <div>
            <button onClick={()=>{
                completeTask(task.taskName)
            }}>X</button>
        </div>
        </div>
    )
}