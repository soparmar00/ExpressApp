import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Modal, Form, Button, Table } from 'react-bootstrap';
import { addPosts, getPost } from '../Thunk/thunk';

const Post = () => {

     const [show, setShow] = useState(false);
     
     const dispatch = useDispatch()
     
     const result = useSelector((state) => state.Post.fetchPost)
     const id = useSelector((state) => state.Post._id)
     const [add, setAdd] = useState({title: '', body: '' , userId: id})
     const history = useHistory()
        console.log(result)
        console.log(id)
     const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => {
        setShow(true)
    };

    const handlePost = () => {
        handleShow()
    }

    useEffect(() => {
        dispatch(getPost());
    }, [dispatch])


    const postFields = result.length> 0 ? Object.keys(result[0]) : [];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdd({ ...add, [name]: value });
    }

    const handleComment = () => {
        history.push('/comment')
    }
        const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addPosts(add))
        handleClose()
    }

    return (
        <div>
            <td><Button variant="success"onClick={() => handlePost()} >Add Post</Button> </td>
            
            <Table striped bordered hover>
      <thead>
      <tr>
            
                    <td>Id</td>
                    <td>Title</td>
                    <td>Body</td>
                    <td>User ID</td>
                     <td>__v</td>
                    
       </tr>


        </thead>
        <tbody>
            {result.map((record) => (
            <tr key={record.id}>
                {postFields.map((field) => (
                 <td key={`${record.id}-${field}`}>
                    {typeof record[field] === "object" ? JSON.stringify(record[field]) : record[field]}
                </td>
                ))}
                <td><Button variant="success" onClick={() => handleComment()}  >Comment</Button> </td>
             </tr>
            ))}
        </tbody>
      </Table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form  onSubmit={handleSubmit} >

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User Id</Form.Label>
                            <Form.Control type="text" name="userId"  placeholder="body" defaultValue={id} onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" name="title"  placeholder="Enter title"  onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Body</Form.Label>
                            <Form.Control type="text" name="body"  placeholder="body" onChange={handleChange} />
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

export default Post
