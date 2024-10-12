import tick from '../assets/tick.png';
import nottick from '../assets/not_tick.png';
import del from '../assets/delete.png';
import React from 'react';

function Task({ task, delTask, doneTask }) {
    return (
        <div
            className=" flex mt-4 border-b-[1px] pb-4 gap-3 border-b-gray-300 w-full cursor-pointer"
            onClick={() => { doneTask(task.id) }}
        >
            <div className='w-5 flex items-center'>
                <img src={task.done ? tick : nottick} alt="" />
            </div>
            <div className={`overflow-scroll scrollbar-none ${task.dueDate?'w-[80%]':'w-[100%]'} ${task?.done ? 'font-thin text-gray-500' : ''}`}>{task?.task}</div>
            <div className={`px-3 flex items-center justify-center rounded-md bg-orange-100 ${task.dueDate?'block':'hidden'} w-[20%] overflow-scroll scrollbar-none ${task?.done ? 'line-through font-thin text-gray-500' : ''} text-[10px]`}>
                {task?.dueDate}
            </div>
            <div className='w-8 cursor-pointer flex items-center' onClick={() => delTask(task?.id)}>
                <img className='w-4' src={del} alt="" />
            </div>
        </div>
    );
}



    // <div className='w-5'>
    //             <img src={task.done ? tick : nottick} alt="" />
    //         </div>
    //         <div className='flex-1 flex justify-between items-center'>
    //             <p className={`text-sm overflow-hidden overflow-ellipsis whitespace-nowrap ${task?.done ? 'line-through font-thin text-gray-500' : ''}`}>
    //                 {task?.task}
    //             </p>
    //             {task?.dueDate && (
    //                 <p className={`${task?.done ? 'line-through font-thin text-gray-500' : ''} text-xs flex items-center p-1 bg-orange-100 rounded-sm`}>
    //                     {task?.dueDate}
    //                 </p>
    //             )}
    //         </div>

export default React.memo(Task);
