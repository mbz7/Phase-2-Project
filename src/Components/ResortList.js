import React, { useState, useEffect } from "react";
import Resort from "./Resort";

function ResortList({ resorts, search }) {
  // filters through each object and includes resort NAME as the searchable keyword
  const filteredResorts = resorts.filter((resort) =>
    resort.name.toLowerCase().includes(search.toLowerCase())
  );

  // maps through filtered list of resort names
  const resortsObj = filteredResorts.map((resort) => (
    <Resort
      key={resort.id}
      // resort={resort}
      city={resort.city}
      name={resort.name}
      website={resort.website}
      image={resort.resortImage}
      groomed={resort.machineGroomed}
      runs={resort.runsOpen}
      lifts={resort.liftsOpen}
      latitude={resort.latitude}
      longitude={resort.longitude}
    />
  ));
  return <div>{resortsObj}</div>;
}

export default ResortList;
