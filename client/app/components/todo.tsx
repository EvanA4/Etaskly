'use client'

import Image from 'next/image'
import React, { useState } from 'react'


interface Task {
    title: string,
    desc: string,
    id: number
}


const Todo = () => {
    const [makeNew, setNew] = useState(false)
    const [tasks, setTasks] = useState<Task[]>([])
    const [taskInput, setInput] = useState<any>({
        title: '', desc: ''
    });

    function handleChange(e: any) {
        if (e.target.id === "title") {
            setInput({title: e.target.value, desc: taskInput.desc})
        } else {
            setInput({title: taskInput.title, desc: e.target.value})
        }
    }

    return (
        <>
            <div className='flex justify-between w-[50vw] min-w-[300px] px-4 py-2'>
                <p className='text-3xl'>Todo</p>
                {makeNew ?
                    <button className='bg-red-600 rounded-lg px-5 py-2 hover:bg-red-700 transition-colors' onClick={() => {
                        setNew(false)
                    }}>Cancel</button> :

                    <button className='bg-blue-600 rounded-lg px-5 py-2 hover:bg-blue-700 transition-colors' onClick={() => {
                        setNew(true)
                    }}>New</button>
                }
            </div>
            <div className={'relative transition-all bg-neutral-900 w-[50%] min-w-[300px] rounded-2xl ' + (makeNew ? 'opaciity-100 mb-10 p-7' : 'opacity-0 h-0 p-0 mb-0 overflow-hidden')}>
                <button className='absolute top-4 right-4 bg-green-600 px-5 rounded-full hover:bg-green-700' onClick={() => {
                    console.log(tasks.length)
                    setTasks([...tasks, {title: taskInput.title, desc: taskInput.desc, id: tasks[tasks.length - 1].id + 1}])
                }}>+</button>
                <p className='text-2xl text-center mb-10'>New Task</p>
                <input id="title" value={taskInput.title} onChange={handleChange} type="text" placeholder='Title' className='py-2 px-7 mb-5 rounded-lg text-white bg-blue-700 placeholder-white w-[50%]'/>
                <input id="desc" value={taskInput.desc} onChange={handleChange} type="text" placeholder='Description' className='py-2 px-7 rounded-lg text-white bg-zinc-700 placeholder-neutral-300 w-full'/>
            </div> 
            <div className='border border-neutral-600 w-[50%] min-w-[300px] min-h-[50vh] rounded-2xl px-5 mb-10'>
                {tasks.map(task => { return (
                    <div className='w-full bg-neutral-900 hover:bg-neutral-800 p-5 rounded-2xl my-5 relative' key={JSON.stringify(task)}>
                        <p className='text-2xl w-fit'>{task.title}</p>
                        <p className='text-neutral-300 w-fit'>{task.desc}</p>
                        <button className='absolute top-[50%] right-4 -translate-y-[50%] hover:bg-red-600 rounded-lg p-2 transition-colors' onClick={(e: any) => {
                            var search = JSON.parse(e.target.id)
                            setTasks(tasks.filter(item => item.title != search.title || item.desc != search.desc || item.id != search.id))
                        }}>
                            <Image id={JSON.stringify(task)} src="/trash.svg" alt="trash icon" width={30} height={30}/>
                        </button>
                    </div>
                )})}
            </div>
        </>
    )
}

export default Todo
