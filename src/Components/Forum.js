import React, { useState, useEffect } from "react";
import TableList from "./TableList";
import { Button, Container, Form, Table, Row, Col } from "react-bootstrap";

function Forum({ resorts }) {
  const [tableData, setTableData] = useState(resorts);

  const newForumInput = tableData.map((resort) => (
    <tr>
      <td>{resort.comment}</td>
      <td>{resort.topic}</td>
      <td>
        <img className="img-thumbnail upload-image" src={resort.forumImage} />
      </td>
      {/* <td>{resort.dateTimePosted}</td> */}
    </tr>
  ));

  const addRows = (data) => {
    const totalComments = resorts.length;
    data.id = resorts + 1;
    const updatedTotalComments = [...tableData];
    updatedTotalComments.push(data);
    setTableData(updatedTotalComments);
  };

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
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>

        <div className="backcountry-forum">
          <br />
          {/* <TableList func={addRows} /> */}
          <Table responsive striped bordered variant="dark">
            <thead>
              <tr>
                <th>New Comment</th>
                <th>Topic</th>
                <th>Post An Image!</th>
                {/* <th>Date/Time Posted</th> */}
              </tr>
            </thead>
            <tbody>{newForumInput}</tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
}

export default Forum;
