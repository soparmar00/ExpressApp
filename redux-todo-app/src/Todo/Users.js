import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUser} from '../UsersThunk';
import { Table, Button, Modal, Form} from 'react-bootstrap'


const Users = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const result = useSelector((state) => state.users.fatchData);

   const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modelTitle, setModelTitle] = useState("Submit")

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

const editUserModel = (userData) => {
        setModelTitle("Edit User")
        handleShow()
        history.push("/users")
    }

  const recordFields = result[0] ? Object.keys(result[0]) : [];



  const hnadledelete = (record) =>
{
    
        history.push("/users")
}

const hnadleAdd = (id) =>   
{
   
        console.log("model data")
        setModelTitle("Add User")
        handleShow()
        history.push("/users")
}

  return (
    <div>
      <Button variant="success" onClick={() => hnadleAdd()}>Add New User</Button>
      <Table striped bordered hover>
      <thead>
      <tr>
            {recordFields.map((main) => (
              <th key={main}>
                {main}
         </th>
            ))}
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
             <td><Button variant="success"onClick={() => editUserModel(record.id)} >Edit</Button> </td>
             <td><Button variant="warning" onClick={() => hnadledelete(record)} >Delete</Button> </td>
             </tr>
            ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modelTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name"  placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email"  placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="text" name="age"  placeholder="Enter address" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Technology</Form.Label>
                            <Form.Control type="text" name="technilogy"  placeholder="Enter phone" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="text" name="date"  placeholder="Enter company" />
                        </Form.Group>

                        <center>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </center>
                    </Form>

                </Modal.Body>
            </Modal>
    </div>
  );
}

export default Users;
