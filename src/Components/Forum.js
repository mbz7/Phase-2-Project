import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import TableList from "./TableList";

function Forum({ resorts }) {
  const [tableData, setTableData] = useState(resorts);



  
  const newForumInput = tableData.map((resort) => (
    <tr>
      <td>{resort.comment}</td>
      <td>{resort.topic}</td>
      <td src={resort.forumImage}>{resort.forumImage}</td>
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
    <div className="backcountry-forum">
      <Container fluid className="align-items-center">
        <br />
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
        <TableList func={addRows} />
      </Container>
    </div>
  );
}

export default Forum;
