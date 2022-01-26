import React from "react";
import Resort from "./Resort";
import { Container } from "react-bootstrap";

function ResortList({ resorts, search, likesPlus, likesMinus }) {
  // filters through each object and includes resort NAME as the searchable keyword
  const filteredResorts = resorts.filter((resort) =>
    resort.name.toLowerCase().includes(search.toLowerCase())
  );

  // maps through filtered list of resort names
  const resortsObj = filteredResorts.map((resort) => (
    <Resort
      key={resort.id}
      name={resort.name}
      website={resort.website}
      image={resort.image}
      likesPlus={likesPlus}
      likesMinus={likesMinus}
    />
  ));
  return (
    <Container>
      <div>{resortsObj}</div>;
    </Container>
  );
}

export default ResortList;
