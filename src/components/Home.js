import React, { useEffect, useState } from 'react';

const Home = () => {
    const [sidebar, setsidebar] = useState();
    const [tasks, setTasks] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault()
        const inputValue = e.target.task.value

        fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ 'inputValue': inputValue })
        })
            .then(res => res.json())
            .then(data => console.log('successfully added'))

    }

    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTasks(data)
            })
    }, [])

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
                <div >
                    <div className="flex flex-col gap-3 justify-center items-center ">
                        {
                            tasks?.map((task, index) => <div key={index} className='flex justify-center items-center h-16 border border-gray-100 rounded'>
                                <div className="ml-5">
                                    <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                        <p>{index + 1}</p>
                                    </div>
                                </div>
                                <div className="flex items-center pl-5">
                                    <p className="text-base font-medium leading-none text-gray-700 mr-2">{task.inputValue}</p>

                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;