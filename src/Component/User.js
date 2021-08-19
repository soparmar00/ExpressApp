import { useState, useEffect } from 'react'
import { Modal, Form, Button, Table } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom';
import { addApiUser, delUser, getUser } from '../Thunk/thunk';




const SignUp = () => {

    const dispatch = useDispatch()
    const [add, setAdd] = useState({name: '', email: '', age: '', technology: '', company: ''})
    const [show, setShow] = useState(false);
    const [modelTitle, setModelTitle] = useState("Submit")
    const history = useHistory();

  const result = useSelector((state) => state.User.fetchUser);
  console.log(result)
  const user = useSelector((state) => state.User.setUser);

   
    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => {
        setShow(true)
    };

    useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

    const handleAdd = () => {
        setModelTitle("Add User")
        handleShow()
        history.push("/user")
    }
    
    const handleDelete = (record) => {
        dispatch(delUser(record.id))
    }

    const handleEdit = () => {
       setModelTitle("Edit User")
        handleShow()
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdd({ ...add, [name]: value });
    }

    const recordFields = result.length> 0 ? Object.keys(result[0]) : [];

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(add.name, add.age, add.email, add.technology, add.company)
        dispatch(addApiUser(add))
        handleClose()
    }

    


    return (
        <div>
             <td><Button variant="success"onClick={() => handleAdd()} >Add User</Button> </td> 
             
      <Table striped bordered hover>
      <thead>
      <tr>
            
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Age</td>
                    <td>Technology</td>
                    <td>Company</td>
                    <td>__v</td>
                    <td>Edit</td>
                    <td>Delete</td>
                    <td>Post</td>

       </tr>

        </thead>
        <tbody>
            {result.map((record) => (
            <tr key={record.id}>
                {recordFields.map((field) => (
                 <td key={`${record.id}-${field}`}>
                    {typeof record[field] === "object" ? JSON.stringify(record[field]) : record[field]}
                </td>
                ))}
             <td><Button variant="success" onClick={() => handleEdit(record)}  >Edit</Button> </td>
             <td><Button variant="warning" onClick={() => handleDelete(record)} >Delete</Button> </td>
              
             </tr>
            ))}
        </tbody>
      </Table>

               <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modelTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    <Form  onSubmit={handleSubmit} >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name"  placeholder="Enter name"  value={user.name} onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email"  placeholder="Enter email"  value={user.email} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="text" name="age"  placeholder="Enter age"  value={user.age} onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Technology</Form.Label>
                            <Form.Control type="text" name="technology"  placeholder="Enter technology"  value={user.technology} onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Company</Form.Label>
                            <Form.Control type="text" name="company"  placeholder="Enter company"  value={user.company} onChange={handleChange}/>
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

export default SignUp;
