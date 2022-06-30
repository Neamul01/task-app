import React, { useState } from 'react';

const ToDo = () => {

    const [show, setShow] = useState(null);
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
                            <button onclick="popuphandler(true)" className="mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-white">Add Task</p>
                            </button>
                        </div>
                        <div className="mt-7 overflow-x-auto">
                            <table className="w-full whitespace-nowrap">
                                <tbody>
                                    <tr className="h-16 border border-gray-100 rounded">
                                        <td>
                                            <div className="ml-5">
                                                <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                    <input type="checkbox" className=" w-full h-full" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className>
                                            <div className="flex items-center pl-5">
                                                <p className="text-base font-medium leading-none text-gray-700 mr-2">Marketing Keynote Presentation</p>

                                            </div>
                                        </td>
                                        <td>
                                            <div className="relative px-5 pt-2">
                                                {show == 9 ? (
                                                    <button className="focus:outline-none" onClick={() => setShow(null)}>
                                                        <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">Edit</button>
                                                    </button>
                                                ) : (
                                                    <button className="focus:outline-none" onClick={() => setShow(9)}>
                                                        <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">Edit</button>
                                                    </button>
                                                )}
                                                {show == 9 && (
                                                    <div className="dropdown-content bg-white shadow w-full absolute z-30 right-0 mr-6 ">
                                                        <div className="text-xs w-full py-4 px-4 cursor-pointer hover:text-white">
                                                            <input aria-label="task" name='task' type="text" placeholder='Update Task' className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                                                        </div>
                                                        <div className="text-sm w-full cursor-pointer hover:text-white">
                                                            <p className='hover:bg-indigo-700 py-4 mx-4 rounded '>Update</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="h-3" />

                                    <tr className="h-16 border border-gray-100 rounded">
                                        <td>
                                            <div className="ml-5">
                                                <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                    <input type="checkbox" className=" w-full h-full" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className>
                                            <div className="flex items-center pl-5">
                                                <p className="text-base font-medium leading-none text-gray-700 mr-2">Marketing Keynote Presentation</p>

                                            </div>
                                        </td>
                                        <td>
                                            <div className="relative px-5 pt-2">
                                                {show == 8 ? (
                                                    <button className="focus:outline-none" onClick={() => setShow(null)}>
                                                        <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">Edit</button>
                                                    </button>
                                                ) : (
                                                    <button className="focus:outline-none" onClick={() => setShow(9)}>
                                                        <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">Edit</button>
                                                    </button>
                                                )}
                                                {show == 8 && (
                                                    <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
                                                        <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                            <p>Edit</p>
                                                        </div>
                                                        <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                            <p>Delete</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="h-3" />



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