import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CompletedTasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('https://task-manager-68466.herokuapp.com/tasks')
            .then(res => res.json())
            .then(data => {
                setTasks(data)
            })
    }, [])
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
                                        <p>Done</p>
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
                                        tasks.map((task, index) => task.completed === true && <tr key={index} className="h-16 border border-gray-100 rounded">
                                            <td>
                                                <div className="ml-5">
                                                    <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                        <input checked={task.completed} disabled type="checkbox" className=" w-full h-full" />
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
                                                    <div className="focus:outline-none">
                                                        <button className="text-sm leading-none text-gray-700 font-semibold py-3 px-5 bg-red-500 rounded hover:bg-red-600 focus:outline-none">Delete</button>
                                                    </div>
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

export default CompletedTasks;