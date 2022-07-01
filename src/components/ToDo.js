import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ToDo = () => {
    const [show, setShow] = useState(null);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => {
                setTasks(data)
            })
    }, [])

    const handleCompletedTask = (_id) => {
        console.log('completed..', _id)
        fetch(`http://localhost:5000/tasks/${_id}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    const handleUpdateData = (e, id) => {
        e.preventDefault()
        const updatedTask = e.target.updatedTask.value
        console.log(updatedTask, id)
        fetch(`http://localhost:5000/updatedTask/${id}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ updatedTask: updatedTask })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <>
            <div>
                <div className="sm:px-6 w-full">
                    <div className="px-4 md:px-10 py-4 md:py-7">
                        <div className="flex items-center justify-between">
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Tasks</p>
                            <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
                                <p>Sort By:</p>
                                <select className="focus:outline-none bg-transparent ml-1">
                                    <option className="text-sm text-indigo-800">Latest</option>
                                    <option className="text-sm text-indigo-800">Oldest</option>
                                    <option className="text-sm text-indigo-800">Latest</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
                        <div className="sm:flex items-center justify-between">
                            <div className="flex items-center">
                                <a href="#!">
                                    <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ml-4 sm:ml-8">
                                        <p>Pending</p>
                                    </div>
                                </a>
                            </div>
                            <button className="mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                                <Link to={'/'} as='p' className="text-sm font-medium leading-none text-white">Add Task</Link>
                            </button>
                        </div>
                        <div className="mt-7 overflow-x-auto">
                            <table className="w-full whitespace-nowrap">
                                <tbody>
                                    {
                                        tasks?.map((task, index) => task.completed !== true && <tr key={index} className="h-16 border border-gray-100 rounded">
                                            <td>
                                                <div className="ml-5">
                                                    <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                        <input onChange={() => handleCompletedTask(task._id)} type="checkbox" className=" w-full h-full" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className>
                                                <div className="flex items-center pl-5">
                                                    <p className="text-base font-medium leading-none text-gray-700 mr-2">{task.inputValue}</p>

                                                </div>
                                            </td>
                                            <td>
                                                <div className="relative px-5 pt-2">
                                                    {show === index ? (
                                                        <div className="focus:outline-none" onClick={() => setShow(null)}>
                                                            <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">Edit</button>
                                                        </div>
                                                    ) : (
                                                        <div className="focus:outline-none" onClick={() => setShow(index)}>
                                                            <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">Edit</button>
                                                        </div>
                                                    )}
                                                    {show === index && (
                                                        <form onSubmit={(e) => handleUpdateData(e, task._id)} className="dropdown-content bg-white shadow w-full absolute z-30 right-0 mr-6 ">
                                                            <div className="text-xs w-full py-4 px-4 cursor-pointer hover:text-white">
                                                                <input aria-label="task" defaultValue={task.inputValue} name='updatedTask' type="text" placeholder='Update Task' className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                                                            </div>
                                                            <div className="text-sm cursor-pointer hover:text-white">
                                                                <input type={'submit'} value='Update' className='hover:bg-indigo-700 bg-gray-300 w-full py-3 mx-4 rounded ' />
                                                            </div>
                                                        </form>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <style>
                    {` .checkbox:checked + .check-icon {
            display: flex;
        }`}
                </style>
            </div>
        </>
    );
};

export default ToDo;