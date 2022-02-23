import React, { useState } from 'react'
import '../App.css'
import CreateTask from '../modals/CreateTask'

function TodoList() {
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    }
    return (

        <>
            <div className="header text-center">
                <h3>Todo List</h3>
                <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>Create Task</button>
            </div>
            <div className="taskCards">

            </div>
            <CreateTask toggle={toggle} modal={modal} />
        </>
    )
}

export default TodoList