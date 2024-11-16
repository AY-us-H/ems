import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'
import DeleteTask from '../other/DeleteTask'

const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-7'>
            <Header changeUser={props.changeUser} />
            <CreateTask />
            <DeleteTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard