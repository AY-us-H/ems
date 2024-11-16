import React from 'react'

const CompleteTask = ({data}) => {
    return (
        <div className='h-full flex-shrink-0 bg-green-400 w-[300px] rounded-xl p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'> {data.category}</h3>
                <h4 className='text-sm'></h4>{data.taskDate}
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskDescription}</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eius, ut facere eligendi quasi est.
            </p>
            <div className='mt-2'>
                <button className='w-full bg-blue-500 text-sm font-semibold px-2 py-1 rounded'>Completed</button>
            </div>
        </div>
    )
}

export default CompleteTask