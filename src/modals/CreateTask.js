import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function createTask({ modal, toggle }) {
    const handleChange = () => {

    }
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    return (
        <Modal isOpen={modal}
            toggle={toggle}
        >
            <ModalHeader toggle={toggle}>
                Create a Task
            </ModalHeader>
            <ModalBody>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="">Task Name</label>
                        <input className='form-control' value={taskName} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Description</label>
                        <textarea className='form-control' rows="5" value={description} onChange={handleChange}></textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button
                    color="primary"
                    onClick={toggle}
                >
                    Create
                </Button>
                {' '}
                <Button onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default createTask