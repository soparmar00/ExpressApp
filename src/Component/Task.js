import { useEffect, useState } from 'react'
import { useDispatch, useSelector  } from 'react-redux';
import { Modal, Form, Button, Table  } from 'react-bootstrap';
import { addtasks, deleteTasks, getTask } from '../Thunk/thunk';

const Task = () => {

    const [show, setShow] = useState(false);
    const [add, setAdd] = useState({user: '', title: '' , startDate: '', endDate:''})
    const dispatch = useDispatch()
    const task = useSelector((state) => state.Task.fetchTask)
    console.log(task)

    useEffect(() => {
        dispatch(getTask());
    }, [dispatch])

     const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => {
        setShow(true)
    };

    const handleTask = () => {
        handleShow()
    }

    const handleTaskDelete = (record) => {
    dispatch(deleteTasks(record.id))
    }

    const handleTaskEdit = () => {

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdd({ ...add, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addtasks(add))
        handleClose()
    }

     const taskField = task.length> 0 ? Object.keys(task[0]) : [];


    return (
        <div>
            <td><Button variant="success"onClick={() => handleTask()} >Report Task</Button> </td>
            <Table striped bordered hover>
      <thead>
      <tr>
                    <td>Task Id</td>
                    <td>User</td>
                    <td>Title</td>
                    <td>Start Date</td>
                    <td>End Date</td>
                    <td>__v</td>
                    
       </tr>


        </thead>
        <tbody>
            {task.map((record) => (
            <tr key={record.id}>
                {taskField.map((field) => (
                 <td key={`${record.id}-${field}`}>
                    {typeof record[field] === "object" ? JSON.stringify(record[field]) : record[field]}
                </td>
                ))}
                <Button variant="warning" onClick={() => handleTaskDelete(record)} >Delete</Button>
                <Button variant="info"onClick={() => handleTaskEdit()} >Edit</Button>
             </tr>
            ))}
        </tbody>
      </Table>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Report Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form  onSubmit={handleSubmit} >

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User</Form.Label>
                            <Form.Control type="text" name="user"  placeholder="user"  onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" name="title"  placeholder="Enter title"  onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control type="date" name="startDate"  placeholder="start date" onChange={handleChange} />
                        </Form.Group>

                         <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>End Date</Form.Label>
                            <Form.Control type="date" name="endDate"  placeholder="end date" onChange={handleChange} />
                        </Form.Group>
                        

                        <center>
                            <Button variant="primary" type="submit">
                                Add 
                            </Button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>

                        </center>
                    </Form>

                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Task
