import React from 'react'

const FailedTask = () => {
    return (
        <div className='h-full flex-shrink-0 bg-purple-400 w-[300px] rounded-xl p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'> {data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
            {data.taskDescription}
            </p>
            <div className='mt-2'>
                <button className='w-full bg-red-500 text-sm font-semibold px-2 py-1 rounded'>Failed</button>
            </div>
        </div>
    )
}

export default FailedTask