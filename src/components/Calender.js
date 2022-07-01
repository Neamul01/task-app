import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calender = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className='flex items-center justify-center my-20 w-full'>
            <div className=' max-w-4xl'>
                <Calendar onChange={onChange} value={value} />
            </div>
        </div>
    );
};

export default Calender;