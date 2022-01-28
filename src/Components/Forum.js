import React, { useState, useEffect } from "react";
import TableList from "./TableList";
import { Button, Container, Form, Table, Row, Col } from "react-bootstrap";

function Forum({ resorts }) {

  const [forumPosts, setForumPosts] = useState([])
  const [comment, setComment] = useState('')
  const [topic, setTopic] = useState('')
  const [image, setImage] = useState('')

  useEffect(()=> {
    fetch("http://localhost:3000/forum-posts") 
    .then(r=>r.json())
    .then(tableData => setForumPosts(tableData))
    }, [setForumPosts])
      const allForumPosts= forumPosts.map(post => (
          <tr>
          <td>{post.comment}</td>
          <td>{post.topic}</td>
          <td>
          <img className="img-thumbnail upload-image" src={post.image} />
          </td>
          </tr>
       ))
    
   const handleForumPost = (e) => {
      e.preventDefault()
      const newForumPost={comment, topic, image}
      
       fetch("http://localhost:3000/forum-posts", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newForumPost)
    })
    setForumPosts([...forumPosts, newForumPost])
    e.target.reset()
  }
      
  return (
    <div>
      <Container>
        <div className="pt-5 mt-5 pb-5 mb-5 w-50 mx-auto">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" >
              Submit
            </Button>
          </Form>
        </div>
          <Form className='forum' onSubmit={handleForumPost}>
            <Form.Control type="input" name="comment" onChange={e => setComment(e.target.value)} placeholder="comment" />
             <Form.Control type="input" name="topic" onChange={e => setTopic(e.target.value)} placeholder="topic" />
              <Form.Control type="input"name="image" onChange={e => setImage(e.target.value)} placeholder="image" />
               <Button variant="primary" type="submit" >
              Submit
            </Button>
          </Form>

        <div className="backcountry-forum">
          <br />
          {/* {<TableList func={addRows} />} */}
          <Table responsive striped bordered variant="dark">
            <thead>
              <tr>
                <th>Comment</th>
                <th>Topic</th>
                <th>Images</th>
                {/* <th>Date/Time Posted</th> */}
              </tr>
            </thead>
            <tbody>{allForumPosts}</tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
}

export default Forum
