import React, {useState} from 'react'
import { Modal, Form, Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addLoginUser, loginUser } from '../Action/actions';

const Login = () => {

    const dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const [log, setLog] = useState(false)
   
    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => {
        setShow(true)
    };

    const handlelogClose = () => {
        setLog(false)
    };

   const handlelogShow = () => {
        setLog(true)
    }

    const [modelTitle, setModelTitle] = useState("Submit")

    const handleSignUp = () => {
        setModelTitle("Sign UP")
        handleShow()
        
    }

    const hnadleLogin = () => {
        setModelTitle("Login")
        handlelogShow()
        
    }

    const handleSubmit =(e) => {
        e.preventDefault();
        dispatch(addLoginUser({ name: e.target.name.value, email: e.target.email.value, city: e.target.city.value, password: e.target.password.value }))
    }

    const handleLoginSubmit =(e) => {
        e.preventDefault();
        dispatch(loginUser())
    }

    return (
        <div>
        
             <td><Button variant="success"onClick={() => handleSignUp()} >Sign Up</Button> </td> 
             

               <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modelTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={()=> handleSubmit} >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name"  placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email"  placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" name="city"  placeholder="Enter City" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Technology</Form.Label>
                            <Form.Control type="text" name="technology"  placeholder="Enter Technology" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password"  placeholder="Enter Password" />
                        </Form.Group>

                        <center>
                            <Button variant="primary" type="submit">
                                Register
                            </Button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </center>
                    </Form>

                </Modal.Body>
            </Modal>
            
               
                    <td><Button variant="warning" onClick={() => hnadleLogin()} >Login</Button> </td>
            <Modal log={log} onHide={handlelogClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modelTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onClick={() =>handleLoginSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email"  placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password"  placeholder="Enter Password" />
                        </Form.Group>

                        <center>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button variant="secondary" onClick={handlelogClose}>
                                Close
                            </Button>
                        </center>
                    </Form>

                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Login;
