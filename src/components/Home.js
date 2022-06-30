import React, { useState } from 'react';

const Home = () => {
    const [sidebar, setsidebar] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit', e.task)
    }

    return (
        <div className="h-full px-4">
            <div className="flex flex-col items-center justify-center">
                <form onSubmit={(e) => handleSubmit(e)} className="bg-white lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
                    <div>
                        <lable className="text-sm font-medium leading-none text-gray-800">Task</lable>
                        <input aria-label="task" name='task' type="text" placeholder='Task' className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                    </div>
                    <div className="mt-8">
                        <input type='submit' className=" cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Home;