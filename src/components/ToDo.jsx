import React, { useId, useRef, useState, useCallback, useEffect } from "react";
import icon from "../assets/todo_icon.png";
import Task from "./Task";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ToDo() {
    const [dueDate, setDueDate] = useState(null);
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem("tasks");
        return storedTasks ? JSON.parse(storedTasks) : [];
    });

    const [task, setTask] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        console.log(tasks);
        
    }, [tasks]);

    function addTask() {
        if (task == "") return;
        setTasks([{ id: Date.now(), task, done: false, dueDate: dueDate?dueDate.toLocaleDateString(): null }, ...tasks]);
        inputRef.current.value = "";
        setTask('')
    }

    const doneTask = useCallback((id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id !== id ? task : { ...task, done: !task.done }
            )
        );
    }, []);

    const delTask = useCallback((id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    }, []);
    return (
        <div className=" w-full md:w-[400px] h-full bg-white rounded-lg flex flex-col p-6">
            <div className="flex gap-2 mt-2">
                <img src={icon} alt="" className="w-8" />
                <p className="w-full text-3xl text-gray-800 font-medium">To-Do List</p>
            </div>
            <div className="w-full flex relative mt-6">
                <input
                    ref={inputRef}
                    type="text"
                    className="h-12 w-full rounded-3xl bg-gray-200 p-5 outline-none"
                    placeholder="Add Your Task"
                    onChange={(e) => {
                        setTask(e.target.value.trim());
                    }}
                />
                <div
                    onClick={addTask}
                    className="w-[100px] h-12 bg-orange-600 rounded-full cursor-pointer absolute right-0 text-white flex justify-center items-center"
                >
                    ADD +
                </div>
            </div>
            <DatePicker
                selected={dueDate}
                onChange={(date) => setDueDate(date)}
                dateFormat="MM/dd/yyyy"
                placeholderText="Select Due Date"
                className="h-5 w-full rounded-3xl bg-gray-200 p-5 outline-none mt-3 text-center text-gray-700"
                />
            <div className="h-full overflow-y-scroll scrollbar-none">
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        delTask={delTask}
                        doneTask={doneTask}
                    />
                ))}
            </div>
        </div>
    );
}

export default ToDo;
