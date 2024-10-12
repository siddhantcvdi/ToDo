import tick from '../assets/tick.png'
import nottick from '../assets/not_tick.png'
import del from '../assets/delete.png'
import React from 'react';

function Task({task,delTask,doneTask}) {
    console.log('Child re rendered');
    
    return (
        <div className="flex items-center gap-4 mt-4 border-b-black w-full cursor-pointer"
        onClick={()=>{doneTask(task.id)}}>
            <div className='w-5'><img src={task.done?tick:nottick} alt="" /></div>
            <div className='w-full flex justify-between'>
            <p className={`${task?.done?'line-through font-thin text-gray-500':''}`}>{task?.task}</p>
            <p className={`${task?.done?'line-through font-thin text-gray-500':''}`}>{task?.dueDate}</p>
            </div>
            <div className='w-4 cursor-pointer' onClick={()=>delTask(task?.id)}><img src={del} alt="" /></div>
        </div>
    )
}

export default React.memo(Task)
